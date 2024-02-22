const tavo_desktop_DOM = document.getElementById("tavo-desktop");
const tavo_desktop_title_DOM = document.getElementById("tavo-desktop-title");

const  btn_light_DOM = document.getElementById("btn-light");
const  btn_dark_DOM = document.getElementById("btn-dark");

function fn_theme_light() {
  btn_dark_DOM.classList.remove("active");
  btn_light_DOM.classList.add("active");

  document.body.classList.remove("dark");

  localStorage.setItem("theme", "light");
}

function fn_theme_dark() {
  btn_light_DOM.classList.remove("active");
  btn_dark_DOM.classList.add("active");

  document.body.classList.add("dark");

  localStorage.setItem("theme", "dark");
}

function fn_theme_init() {
  const theme = localStorage.getItem("theme");

  btn_dark_DOM.classList.remove("active");
  btn_light_DOM.classList.remove("active");

  if(theme == "dark") {
    btn_dark_DOM.classList.add("active");
    document.body.classList.add("dark");
  } else {
    btn_light_DOM.classList.add("active");
  }
}
fn_theme_init();

function fn_scroll(c_Y) {
  total_height = document.body.clientHeight;
  window_height = document.documentElement.clientHeight;
  tavo_height = tavo_desktop_DOM.clientHeight;

  result_height_total_scroll = total_height - window_height;

  value_pre_add = result_height_total_scroll / tavo_height;

  result_pre_add_tavo_height = c_Y / value_pre_add;

  result_relative = result_pre_add_tavo_height / tavo_height;

  result_relative_calc = result_relative * 100;
  
  tavo_desktop_DOM.style = `top: ${result_relative_calc}%;`;
  tavo_desktop_DOM.classList.remove("is-start");
  tavo_desktop_DOM.classList.remove("is-end");
  if(result_relative_calc >= 99) {
    tavo_desktop_DOM.classList.add("is-end");
  } else {
    tavo_desktop_DOM.classList.add("is-start");
  }
}

window.onscroll = (event) => {
  fn_scroll(window.scrollY);
};
