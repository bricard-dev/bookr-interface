const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const burgerBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

const mobileWidth = 425;

// Function //

openMenu = () => {
  burgerBtn.style.display = "none";
  closeBtn.style.display = "";
  overlay.style.display = "";
  mobileMenu.classList.add("visible");
};

closeMenu = () => {
  burgerBtn.style.display = "";
  closeBtn.style.display = "none";
  overlay.style.display = "none";
  mobileMenu.classList.remove("visible");
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

// //

closeMenu();
