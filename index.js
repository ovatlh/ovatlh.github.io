const tavo_desktop_DOM = document.getElementById("tavo-desktop");
const tavo_desktop_title_DOM = document.getElementById("tavo-desktop-title");

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
