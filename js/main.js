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
let contactBTN = document.querySelectorAll("#contact_btn");
let closeBTN = document.querySelector(".close_btn");
let mainPopup = document.querySelector(".popup");
let popupOverlay = document.querySelector(".popup_overlay");
let overflow = document.querySelector("body");

const popupClose = function () {
  mainPopup.classList.remove("popup_active");
  overflow.classList.remove("popup_open");
};
const popupOpen = function () {
  mainPopup.classList.add("popup_active");
  overflow.classList.add("popup_open");
};

for (i = 0; i < contactBTN.length; i++) {
  contactBTN[i].addEventListener("click", function () {
    popupOpen();
  });
}
closeBTN.addEventListener("click", function () {
  popupClose();
});
popupOverlay.addEventListener("click", function () {
  popupClose();
});

/* ******************* HOW CAN WE HELP ANIMATION ******************* */
$(function () {
  loopIt();
  setTimeout(loopIt2, 1000);
  setTimeout(loopIt3, 2000);
  setTimeout(loopIt4, 3000);
  setTimeout(loopIt5, 4000);
  setTimeout(loopIt6, 5000);
  setTimeout(loopIt7, 6000);
});

function loopIt() {
  $(".hex-1 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-1");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-1 h2 b").length - 1) loopIt();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt2() {
  $(".hex-2 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-2");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-2 h2 b").length - 1) loopIt2();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt3() {
  $(".hex-3 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-3");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-3 h2 b").length - 1) loopIt3();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt4() {
  $(".hex-4 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-4");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-4 h2 b").length - 1) loopIt4();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt5() {
  $(".hex-5 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-5");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-5 h2 b").length - 1) loopIt5();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt6() {
  $(".hex-6 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-6");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-6 h2 b").length - 1) loopIt6();
      }, 7000);
    }, 7050 * i);
  });
}
function loopIt7() {
  $(".hex-7 h2 b").each(function (i) {
    var t = $(this);
    var bg = $(".hex-7");
    setTimeout(function () {
      t.addClass("active");
      setTimeout(function () {
        t.removeClass("active");
        bg.toggleClass("active");
        if (i == $(".hex-7 h2 b").length - 1) loopIt7();
      }, 7000);
    }, 7050 * i);
  });
}

/* ******************* ABOUT US - STATS SECTION COUNTER ******************* */
const animNum = (EL) => {
  if (EL._isAnimated) return; // Animate only once!
  EL._isAnimated = true;

  $(EL)
    .prop("Counter", 0)
    .animate(
      {
        Counter: EL.dataset.num,
      },
      {
        duration: 2000,
        delay: 4000,
        step: function (now) {
          const text = Math.ceil(now).toLocaleString("en-US");
          const html = text
            .split(",")
            .map((n) => `<span class="count">${n}+</span>`)
            .join(",");
          $(this).html(html);
        },
      }
    );
};

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) animNum(entry.target);
  });
};

$("[data-num]").each((i, EL) => {
  const observer = new IntersectionObserver(inViewport);
  observer.observe(EL);
});

/* ******************* Navbar Show Hide on Scroll  ******************* */
var c,
  currentScrollTop = 0,
  navbar = $("header");

var navImg = $(".nav_logo");
var notActive = 0;

var pos = $(window).scrollTop();

if (pos > 5) {
  notActive = 1;
  navbar.addClass("nav_active");
  navImg.attr("src", `images/taplane_${notActive}.svg`);
}

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if (c < currentScrollTop && a > b) {
    navbar.addClass("nav_active");
    notActive = 1;
    navImg.attr("src", `images/taplane_${notActive}.svg`);
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.addClass("nav_active");
    notActive = 1;
    navImg.attr("src", `images/taplane_${notActive}.svg`);
  } else if (a == 0) {
    navbar.removeClass("nav_active");
    notActive = 0;
    navImg.attr("src", `images/taplane_${notActive}.svg`);
  }

  c = currentScrollTop;

  // console.log(a);
});
