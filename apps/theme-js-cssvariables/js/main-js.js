const btnThemes = document.querySelectorAll(".btn-theme");
btnThemes.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch_Theme(btn.dataset.theme);
    btnThemes_ActiveClear();
    btn.classList.add("theme-active");
  });
});

function switch_Theme(theme) {
  document.documentElement.classList = "";
  document.documentElement.classList.add(`theme-${theme}`);
}

function btnThemes_ActiveClear() {
  btnThemes.forEach((btn) => {
    btn.classList.remove("theme-active");
  });
}
