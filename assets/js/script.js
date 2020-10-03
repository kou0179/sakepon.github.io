console.log(
  "%cエンジニアさん、こんにちは！\nここには何もありませんよ。",
  "font-weight: bold; font-size: 32px",
  ""
);

let scrollFired = false;
window.addEventListener("scroll", (ev) => {
  var scrollTop = window.scrollY;
  var scrollBtm = scrollTop + window.innerHeight;

  if (scrollTop == 0) {
    scrollFired = false;
  }
  if (scrollFired) {
    return;
  }

  var firstContentElm = document.getElementById("first-content");
  var targetTop = firstContentElm.offsetTop;
  var targetBtm = firstContentElm.offsetTop + firstContentElm.clientHeight;

  if (scrollBtm > targetTop && scrollTop < targetBtm) {
    // in
    window.scroll({
      top: targetTop,
      behavior: "smooth",
    });
    scrollFired = true;
  } else {
    // not in
  }
});

document.getElementById("scroll-btn").addEventListener("click", () => {
  scrollFired = true;
  var firstContentElm = document.getElementById("first-content");
  var targetTop = firstContentElm.offsetTop;
  window.scroll({
    top: targetTop,
    behavior: "smooth",
  });
});
