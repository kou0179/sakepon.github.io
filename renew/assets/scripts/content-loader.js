/* Markdownファイルをロードしてレンダーする */

(function () {
  const renderTargetId = "content-render-area";
  const loaderId = "loader";

  const routerMap = {
    "": "./pages/home.md",
    about: "./pages/about.md",
    works: "./pages/works.md",
    skills: "./pages/skills.md",
    contact: "./pages/contact.md",
  };

  const renderArea = document.getElementById(renderTargetId);

  function showLoading() {
    document.getElementById(loaderId).style.display = "block";
  }

  function hideLoading() {
    document.getElementById(loaderId).style.display = "none";
  }

  async function contentRenderFromMarkdownPath(path) {
    renderArea.innerHTML = "";
    showLoading();
    const markdown = await getMarkdownByXHR(path);
    window.setTimeout(() => {
      hideLoading();
      renderArea.innerHTML = marked(markdown);
    }, 300);
  }

  async function getMarkdownByXHR(path) {
    try {
      const res = await fetch(path);
      return res.text();
    } catch (e) {
      console.error("Can't load content : " + path);
      return undefined;
    }
  }

  function renderTopPage() {
    contentRenderFromMarkdownPath(routerMap[""]);
  }

  async function reloadByAnchor() {
    if (window.location.hash === "") {
      renderTopPage();
    } else {
      const pageName = window.location.hash.slice(1);
      if (routerMap.hasOwnProperty(pageName)) {
        contentRenderFromMarkdownPath(routerMap[pageName]);
      } else {
        renderTopPage();
      }
    }
  }

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      if (window.location.hash === "") {
        renderTopPage();
      } else {
        reloadByAnchor();
      }
    },
    false
  );

  window.addEventListener("hashchange", reloadByAnchor, false);
})();
