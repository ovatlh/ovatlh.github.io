let web_list = [];
let web_list_filter = [];

const recursos_buscar_DOM = document.getElementById("recursos-buscar");

function fn_theme_light() {
  document.body.classList.remove("dark");

  localStorage.setItem("theme", "light");
}

function fn_theme_dark() {
  document.body.classList.add("dark");

  localStorage.setItem("theme", "dark");
}

function fn_theme_init() {
  const theme = localStorage.getItem("theme");

  if (theme == "dark") {
    document.body.classList.add("dark");
  }
}
fn_theme_init();

async function fn_load_webs_json() {
  let web_list = [];

  await fetch("/files/webs.json")
    .then((response) => response.json())
    .then((json) => {
      web_list = json;
    });

  return web_list;
}

const table_def_columns = [
  {
    th: "Web",
    tdRender: function(item,  index_row, index_col) {
      const url_google_favicon = "http://www.google.com/s2/favicons?domain=";
      const res_img_src = `${url_google_favicon}${item.url}`;

      const html = `
        <a class="web-data" title="${item.name}" href="${item.url}" target="_blank">
          <img src="${res_img_src}" alt="${item.name}" />

          <p>${item.name}</p>
        </a>
      `;

      return html;
    },
  },
  {
    th: "Tags",
    minWidth: "1%",
    tdRender: function(item,  index_row, index_col) {
      const html_tag_list = item.tags.reduce((result, current) => {
        const temp_html = `
          <p>${current}</p>
        `;

        result += temp_html;

        return result;
      }, "");

      const html = `
        <div class="tags">
          ${html_tag_list}
        </div>
      `;

      return html;
    },
  },
  {
    th: "Descripción",
    width: "50%",
    tdRender: function(item,  index_row, index_col) {
      const html = `<p class="desc">${item.desc}</p>`;
      return html;
    },
  },
];

function fn_refresh_table(id, value) {
  const buscar_value = recursos_buscar_DOM.value;
  let temp_web_list = web_list;
  if(buscar_value.length > 0) {
    temp_web_list = temp_web_list.filter((item => item.name.toLowerCase().includes(buscar_value)));
  }

  const res_web_list_filtered = temp_web_list.filter((item) => {
    if(value.length > 0) {
      if(value.some(v => item.tags.includes(v))) {
        return item;
      }
    } else {
      return item;
    }
  });

  ttable.fnRefreshDataList({
    dataList: res_web_list_filtered,
    id: "webs-table",
  });
}

function fn_refresh_table_buscar() {
  fn_refresh_table("", []);
}

function fn_tselect_init(optionList = []) {
  tselect.fnInit({
    id: "recursos-tags",
    btnPlaceHolder: "tags",
    selectAllPlaceHolder: "Todos",
    deselectAllPlaceHolder: "Nada",
    isSearchEnable: true,
    isToggleAllEnable: true,
    optionList: optionList,
    searchPlaceHolder: "Buscar tags",
    btnSelectPlaceHolder: "tags",
    fnOnValueChange: fn_refresh_table,
  });
}

async function fn_init() {
  web_list = await fn_load_webs_json();

  const pre_tags_list = web_list.map((item) => item.tags);
  const tags_list = pre_tags_list.flat(Infinity);
  const tags_unique_list = Array.from(new Set(tags_list));
  const tags_option_list = tags_unique_list.map((item) => {
    const temp_obj = {
      text: item,
      value: item,
    };

    return temp_obj;
  });

  ttable.fnInit({
    id: "webs-table",
    dataList: web_list_filter,
    textNoData: "Sin información",
    statusRowsInBody: 10,
    columnDefList: table_def_columns,
    icons: {
      expandCol: ">",
      closeCol: "x",
      expandRow: ">",
      closeRow: "x",
    }
  });

  fn_refresh_table("", []);

  fn_tselect_init(tags_option_list);
}

fn_init();
