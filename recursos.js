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

async function fn_init() {
  const web_list = await fn_load_webs_json();

  ttable.fnInit({
    id: "webs-table",
    dataList: web_list,
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
}

fn_init();
