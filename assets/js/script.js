console.log(
  "%cエンジニアさん、こんにちは！\nここには何もありませんよ。",
  "font-weight: bold; font-size: 32px",
  ""
);

const GoToFirstContent = () => {
  // not working in safari
  // window.scroll({
  //   top: targetTop,
  //   behavior: "smooth",
  // });
  let scroll = new SmoothScroll();
  let anchor = document.querySelector("#first-content");
  scroll.animateScroll(anchor);
};

let scrollFired = false;
window.addEventListener("scroll", (ev) => {
  let scrollTop = window.scrollY;
  let scrollBtm = scrollTop + window.innerHeight;

  if (scrollTop == 0) {
    scrollFired = false;
  }
  if (scrollFired) {
    return;
  }

  let firstContentElm = document.getElementById("first-content");
  let targetTop = firstContentElm.offsetTop;
  let targetBtm = firstContentElm.offsetTop + firstContentElm.clientHeight;

  if (scrollBtm > targetTop && scrollTop < targetBtm) {
    GoToFirstContent();
    scrollFired = true;
  } else {
    // not in
  }
});

document.getElementById("scroll-btn").addEventListener("click", () => {
  scrollFired = true;
  GoToFirstContent();
});
