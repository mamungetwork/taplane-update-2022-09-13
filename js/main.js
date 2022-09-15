/* ******************* SPACESHIP ANIMATION CALL OUT ******************* */
var xmlns = "http://www.w3.org/2000/svg",
  select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  container = select(".spaceship_container"),
  ship = select(".ship"),
  shipRotation = select(".shipRotation"),
  beam = select(".beam"),
  glowAlpha = select("#glowAlpha");

var hoverTween = TweenMax.to(ship, 2.8, {
  y: "+=15",
  x: "-=100",
  yoyo: true,
  repeat: -1,
  ease: Sine.easeInOut,
});
var rotationTween = TweenMax.fromTo(
  shipRotation,
  2.3,
  {
    rotation: -8,
  },
  {
    rotation: 8,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  }
);

var lightTween = TweenMax.staggerTo(
  ".light",
  1.5,
  {
    fill: "#ffffff",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone,
  },
  0.16
);

/* ******************* POPUP CALLOUT ******************* */
let contactBTN = document.querySelectorAll("#contact_btn"),
  closeBTN = document.querySelector(".close_btn"),
  mainPopup = document.querySelector(".popup"),
  popupOverlay = document.querySelector(".popup_overlay"),
  overflow = document.querySelector("body");
const popupClose = function () {
    mainPopup.classList.remove("popup_active"),
      overflow.classList.remove("popup_open");
  },
  popupOpen = function () {
    mainPopup.classList.add("popup_active"),
      overflow.classList.add("popup_open");
  };
for (j = 0; j < contactBTN.length; j++)
  contactBTN[j].addEventListener("click", function () {
    popupOpen();
  });
closeBTN.addEventListener("click", function () {
  popupClose();
}),
  popupOverlay.addEventListener("click", function () {});

//-Contact form Submission **************************************
const form = document.querySelector("form"),
  popupHead = document.querySelector(".popup_header"),
  popupFoot = document.querySelector(".popup_footer"),
  formInput = document.querySelector(".form_input"),
  formSuccess = document.querySelector(".form_success"),
  submitBtn = document.querySelector(".button");
form.addEventListener("submit", function (e) {
  e.preventDefault(),
    submitBtn.classList.add("spin"),
    (submitBtn.disabled = !0),
    (submitBtn.form.firstElementChild.disabled = !0),
    setTimeout(function () {
      popupHead.classList.add("hide"),
        popupFoot.classList.add("hide"),
        formInput.classList.add("hide"),
        formSuccess.classList.add("show");
    }, 500);
});
/* ******************* HOW CAN WE HELP ANIMATION ******************* */
const hexFirst = document.querySelectorAll(".hex-1 b"),
  hex1LastItem = document.querySelector(".hex-1 .dynamic-9");
let i = 1;
function hexOne() {
  if (i <= hexFirst.length) {
    $(`.hex-1 .dynamic-${i - 1}`).removeClass("active"),
      $(`.hex-1 .dynamic-${i}`).addClass("active"),
      1 === i &&
        hex1LastItem.classList.contains("active") &&
        $(".hex-1 .dynamic-9").removeClass("active"),
      1 === i || $(".hex-1").toggleClass("active"),
      i++;
    return;
  }
  i = 0;
}
var intervalID = window.setInterval(hexOne, 5900);
const hexSecond = document.querySelectorAll(".hex-2 b"),
  hex2LastItem = document.querySelector(".hex-2 .dynamic-9");
let k = 1;
function hexTwo() {
  if (k <= hexSecond.length) {
    $(`.hex-2 .dynamic-${k - 1}`).removeClass("active"),
      $(`.hex-2 .dynamic-${k}`).addClass("active"),
      1 === k &&
        hex2LastItem.classList.contains("active") &&
        $(".hex-2 .dynamic-9").removeClass("active"),
      1 === k || $(".hex-2").toggleClass("active"),
      k++;
    return;
  }
  k = 0;
}
var intervalID = window.setInterval(hexTwo, 6600);
const hexThird = document.querySelectorAll(".hex-3 b"),
  hex3LastItem = document.querySelector(".hex-3 .dynamic-5");
let l = 1;
function hexThree() {
  if (l <= hexThird.length) {
    $(`.hex-3 .dynamic-${l - 1}`).removeClass("active"),
      $(`.hex-3 .dynamic-${l}`).addClass("active"),
      1 === l &&
        hex3LastItem.classList.contains("active") &&
        $(".hex-3 .dynamic-5").removeClass("active"),
      1 === l || $(".hex-3").toggleClass("active"),
      l++;
    return;
  }
  l = 0;
}
var intervalID = window.setInterval(hexThree, 7200);
const hexForth = document.querySelectorAll(".hex-4 b"),
  hex4LastItem = document.querySelector(".hex-4 .dynamic-11");
let m = 1;
function hexFour() {
  if (m <= hexForth.length) {
    $(`.hex-4 .dynamic-${m - 1}`).removeClass("active"),
      $(`.hex-4 .dynamic-${m}`).addClass("active"),
      1 === m &&
        hex4LastItem.classList.contains("active") &&
        $(".hex-4 .dynamic-11").removeClass("active"),
      1 === m || $(".hex-4").toggleClass("active"),
      m++;
    return;
  }
  m = 0;
}
var intervalID = window.setInterval(hexFour, 7800);
const hexFifth = document.querySelectorAll(".hex-5 b"),
  hex5LastItem = document.querySelector(".hex-5 .dynamic-8");
let n = 1;
function hexFive() {
  if (n <= hexFifth.length) {
    $(`.hex-5 .dynamic-${n - 1}`).removeClass("active"),
      $(`.hex-5 .dynamic-${n}`).addClass("active"),
      1 === n &&
        hex5LastItem.classList.contains("active") &&
        $(".hex-5 .dynamic-8").removeClass("active"),
      1 === n || $(".hex-5").toggleClass("active"),
      n++;
    return;
  }
  n = 0;
}
var intervalID = window.setInterval(hexFive, 8400);
const hexSixth = document.querySelectorAll(".hex-6 b"),
  hex6LastItem = document.querySelector(".hex-6 .dynamic-3");
let o = 1;
function hexSix() {
  if (o <= hexSixth.length) {
    $(`.hex-6 .dynamic-${o - 1}`).removeClass("active"),
      $(`.hex-6 .dynamic-${o}`).addClass("active"),
      1 === o &&
        hex6LastItem.classList.contains("active") &&
        $(".hex-6 .dynamic-3").removeClass("active"),
      1 === o || $(".hex-6").toggleClass("active"),
      o++;
    return;
  }
  o = 0;
}
var intervalID = window.setInterval(hexSix, 9e3);
const hexSeventh = document.querySelectorAll(".hex-7 b"),
  hex7LastItem = document.querySelector(".hex-7 .dynamic-5");
let p = 1;
function hexSeven() {
  if (p <= hexSeventh.length) {
    $(`.hex-7 .dynamic-${p - 1}`).removeClass("active"),
      $(`.hex-7 .dynamic-${p}`).addClass("active"),
      1 === p &&
        hex7LastItem.classList.contains("active") &&
        $(".hex-7 .dynamic-5").removeClass("active"),
      1 === p || $(".hex-7").toggleClass("active"),
      p++;
    return;
  }
  p = 0;
}
var intervalID = window.setInterval(hexSeven, 9600);
/* ******************* ABOUT US - STATS SECTION COUNTER ******************* */
const animNum = (e) => {
    e._isAnimated ||
      ((e._isAnimated = !0),
      $(e)
        .prop("Counter", 0)
        .animate(
          { Counter: e.dataset.num },
          {
            duration: 2e3,
            delay: 4e3,
            step: function (e) {
              let t = Math.ceil(e).toLocaleString("en-US"),
                a = t
                  .split(",")
                  .map((e) => `<span class="count">${e}+</span>`)
                  .join(",");
              $(this).html(a);
            },
          }
        ));
  },
  inViewport = (e, t) => {
    e.forEach((e) => {
      e.isIntersecting && animNum(e.target);
    });
  };
$("[data-num]").each((e, t) => {
  let a = new IntersectionObserver(inViewport);
  a.observe(t);
});
/* ******************* Navbar Show Hide on Scroll  ******************* */
var c,
  currentScrollTop = 0,
  navbar = $("header"),
  navImg = $(".nav_logo"),
  notActive = 0,
  pos = $(window).scrollTop();
pos > 5 &&
  ((notActive = 1),
  navbar.addClass("nav_active"),
  navImg.attr("src", `images/taplane_${notActive}.svg`)),
  $(window).scroll(function () {
    var e = $(window).scrollTop(),
      t = navbar.height();
    c < (currentScrollTop = e) && e > t
      ? (navbar.addClass("nav_active"),
        (notActive = 1),
        navImg.attr("src", `images/taplane_${notActive}.svg`))
      : c > currentScrollTop && !(e <= t)
      ? (navbar.addClass("nav_active"),
        (notActive = 1),
        navImg.attr("src", `images/taplane_${notActive}.svg`))
      : 0 == e &&
        (navbar.removeClass("nav_active"),
        (notActive = 0),
        navImg.attr("src", `images/taplane_${notActive}.svg`)),
      (c = currentScrollTop);
  });
