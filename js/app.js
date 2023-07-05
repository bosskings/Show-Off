// ===================== Dark Theme ====================
let theme = localStorage.getItem("theme");
const themeBtn = document.getElementById("light");

if (theme === "dark-theme") {
  document.body.classList.add("dark-theme");
}

themeBtn.onclick = function () {
  if (theme === "dark-theme") {
    localStorage.setItem("theme", "light-theme");
    document.body.classList.remove("dark-theme");
    theme = "light-theme";
  } else {
    localStorage.setItem("theme", "dark-theme");
    document.body.classList.add("dark-theme");
    theme = "dark-theme";
  }
};

// Get all dropdowns from the document
const dropdown = document.querySelector(".dropdown");

const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const select = document.querySelector(".select");

select.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
