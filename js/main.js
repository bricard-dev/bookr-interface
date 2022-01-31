const body = document.querySelector("body");
const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const parallax = document.querySelector(".parallax");

const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const burgerBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

const mobileWidth = 425;
const tabletWidth = 768;

const totalScroll = 950;

let menuIsOpen = false;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let heroHeight;

let scrollStart;
let scrollEnd;
let scroll;

// Function //

openMenu = () => {
  burgerBtn.style.display = "none";
  closeBtn.style.display = "";
  overlay.style.display = "";
  mobileMenu.classList.add("visible");

  scrollTop();
  body.classList.add("no-scroll");

  menuIsOpen = true;
};

closeMenu = () => {
  burgerBtn.style.display = "";
  closeBtn.style.display = "none";
  overlay.style.display = "none";
  mobileMenu.classList.remove("visible");

  if (windowWidth <= mobileWidth) {
    body.classList.remove("no-scroll");
  }

  menuIsOpen = false;
};

displayFormat = () => {
  // Format tablette et mobile
  if (windowWidth <= tabletWidth) {
    closeMenu();
  }

  // Format tablette et desktop
  if (windowWidth > mobileWidth) {
    body.classList.add("no-scroll");
    parallaxTopCalc();
  } else {
    body.classList.remove("no-scroll");
  }
};

parallaxTopCalc = () => {
  heroHeight = hero.offsetHeight;
  scrollStart = heroHeight;
  scrollEnd = scrollStart - totalScroll;
  scroll = scrollStart;
  parallax.style.top = scrollStart + "px";
};

scrollTop = () => {
  window.scrollTo(0, 0);
};

// Event Listener //

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  openMenu();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  closeMenu();
});

mobileMenu.addEventListener("click", (e) => {
  closeMenu();
});

container.addEventListener("wheel", (e) => {
  if (windowWidth > mobileWidth && !menuIsOpen) {
    if (scroll > scrollEnd || (window.scrollY === 0 && e.deltaY < 0)) {
      body.classList.add("no-scroll");
      scroll -= e.deltaY;
      if (scroll >= scrollStart) {
        scroll = scrollStart;
      }
    } else {
      body.classList.remove("no-scroll");
      scroll = scrollEnd;
    }
    parallax.style.top = scroll + "px";
  }
});

window.addEventListener("resize", (e) => {
  windowWidth = window.innerWidth;
  scrollTop();
  displayFormat();
});

// //

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

displayFormat();
