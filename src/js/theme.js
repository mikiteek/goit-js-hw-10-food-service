const refs = {
  body: document.querySelector("body"),
  changeTheme: document.querySelector("input.js-switch-input"),
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (getTheme() === Theme.DARK) {
  refs.changeTheme.setAttribute("checked", "true");
  setTheme(getTheme());
}

refs.changeTheme.addEventListener("change", () => {
  getTheme() === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
});

function getTheme () {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  refs.body.classList.remove(getTheme());
  refs.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}
