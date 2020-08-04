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
  setTheme(Theme.DARK);
}

refs.changeTheme.addEventListener("change", event => {
  if (event.target.checked) {
    setTheme(Theme.DARK);
  }
  else {
    setTheme(Theme.LIGHT);
  }
});

function getTheme () {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  refs.body.classList.remove(getTheme());
  refs.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}
