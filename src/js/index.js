"use strict";
const links = document.querySelectorAll("header a");

// toggle Theme
const changeTheme = document.querySelector(".change_theme");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark_theme");
};

const loadTheme = () => {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
};

loadTheme();

changeTheme.addEventListener("click", () => {
  toggleDarkMode();

  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark_theme")) {
    localStorage.setItem("dark", 1);
  }
});

// make the link active
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    links.forEach((otherLink) => {
      otherLink.classList.remove("activeLink");
    });

    link.classList.add("activeLink");
  });
});

// navbar responsive