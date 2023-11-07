function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#modalOpen");
  const navBtnClose = document.querySelector("#modalClose");
  const navOverlay = document.querySelector("#mobileNavOverlay");
  const nav = document.querySelector("#mobileNav");
  const navLink = document.querySelectorAll(".mobile-nav__list a");

  navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navOverlay.onclick = toggleMobileNav;

  navLink.forEach((link) => {
    link.onclick = removeMobileNav;
  });

  function toggleMobileNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }

  function removeMobileNav() {
    navOverlay.classList.remove("mobile-nav-overlay--open");
    nav.classList.remove("mobile-nav--open");
    document.body.classList.remove("no-scroll");
  }
}

export default mobileNav;
