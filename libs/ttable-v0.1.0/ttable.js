var ttable=ttable||(function () {
  const _TABLE_DATA = {};
  const _SEC_TO_RESIZE_EVENT = 0.3;
  let _show_Error_Message = true;
  let _show_Debug_Message = true;

  const temp_ttable_data = {
    id: "",
    isOverflow: false,
    timeOutFunction: null,
    oldWindowWidth: 0,
    tableOriginalDom: null,
    containerDom: null,
    containerClassList: [],
    table: {
      originalDom: null,
      dom: null,
      thead: {
        btnColExpanderDom: null,
        isExpanded: false,
        dom: null,
        trList: [
          {
            index: 0,
            dom: null,
            thList: [
              {
                index: 0,
                dom: null,
                isOverflow: false,
              },
            ],
          }
        ],
      },
      tbody: {
        dom: null,
        trList: [
          {
            index: 0,
            dom: null,
            btnRowExpanderDom: null,
            isExpanded: false,
            tdList: [
              {
                index: 0,
                dom: null,
                isOverflow: false,
              },
            ],
          },
        ],
      },
    },
    icons: {
      expandRow: "⭕",
      closeRow: "⛔",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList: [],
    columnDefList: [],
    textNoData: "No data",
    textStatus: "Status",
    statusRowsInBody: 4,
  };

  function _refresh_all_btn_row_expander_dom_on_resize(id) {
    try {
      _TABLE_DATA[id].table.tbody.trList.forEach((item_tr, index_tr) => {
        _remove_row_expanded(id, index_tr);
        if(item_tr.isExpanded) {
          _render_row_expanded(id, index_tr);
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _refresh_all_btn_row_expander_dom(id) {
    try {
      _TABLE_DATA[id].table.tbody.trList.forEach((item_tr, index_tr) => {
        let btn_row_expander_HTML = _TABLE_DATA[id].icons.expandRow;
        if(item_tr.isExpanded) {
          btn_row_expander_HTML = _TABLE_DATA[id].icons.closeRow;
          _render_row_expanded(id, index_tr);
        } else {
          _remove_row_expanded(id, index_tr);
        }
        if(_TABLE_DATA[id].table.tbody.trList[index_tr].btnRowExpanderDom) {
          _TABLE_DATA[id].table.tbody.trList[index_tr].btnRowExpanderDom.innerHTML = btn_row_expander_HTML;
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _refresh_btn_col_expander_dom(id) {
    try {
      let btn_col_expander_HTML = _TABLE_DATA[id].icons.expandCol;
      if(_TABLE_DATA[id].table.thead.isExpanded) {
        btn_col_expander_HTML = _TABLE_DATA[id].icons.closeCol;
      }
      _TABLE_DATA[id].table.thead.btnColExpanderDom.innerHTML = btn_col_expander_HTML;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _toggle_all_row_is_expanded(id) {
    try {
      let result_table_is_expanded = _TABLE_DATA[id].table.thead.isExpanded;
      _TABLE_DATA[id].table.tbody.trList.forEach((item_tr, index_tr) => {
        let result_is_expanded = true;
        if(result_table_is_expanded) {
          result_is_expanded = false;
        }
        _TABLE_DATA[id].table.tbody.trList[index_tr].isExpanded = result_is_expanded;
      });
      _TABLE_DATA[id].table.thead.isExpanded = !result_table_is_expanded;
      _refresh_all_btn_row_expander_dom(id);
      _refresh_btn_col_expander_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _event_click_btn_col_expander(id) {
    try {
      _TABLE_DATA[id].table.thead.btnColExpanderDom.addEventListener("click", (event) => {
        const table_id = event.srcElement.dataset.tableId;
        _toggle_all_row_is_expanded(table_id);
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _refresh_btn_row_expander_dom(id, row_index, is_expanded) {
    try {
      let btn_row_expander_HTML = _TABLE_DATA[id].icons.expandRow;

      if(is_expanded) {
        btn_row_expander_HTML = _TABLE_DATA[id].icons.closeRow;
      }
      _TABLE_DATA[id].table.tbody.trList[row_index].btnRowExpanderDom.innerHTML = btn_row_expander_HTML;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _remove_row_expanded(id, row_index) {
    try {
      const tr_Expanded_DOM = _TABLE_DATA[id].table.tbody.dom.querySelector(`tr.tr-row-expanded[data-row-index="${row_index}"]`);
      if(tr_Expanded_DOM) {
        tr_Expanded_DOM.remove();
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _render_row_expanded(id, row_index) {
    try {
      let total_col_count = 0;
      let count_col_overflow = 0;
      let col_overflow_list = [];
      _TABLE_DATA[id].table.thead.trList.forEach((item_tr, index_tr) => {
        col_overflow_list = item_tr.thList.filter((item) => item.isOverflow);
        total_col_count += item_tr.thList.length;
        count_col_overflow += col_overflow_list.length;
      });
      const total_col_to_span = ((total_col_count) - (count_col_overflow)) + 1;

      const tr_Expanded_DOM = document.createElement("tr");
      const result_row_index_even_odd = row_index % 2 == 0;
      let result_class_even_odd = "odd";
      if(result_row_index_even_odd) {
        result_class_even_odd = "even";
      }
      const tr_classList = ["tr-row-expanded", result_class_even_odd];
      tr_Expanded_DOM.classList.add(...tr_classList);
      tr_Expanded_DOM.dataset.rowIndex = row_index;
      const col_overflow_list_HTML = col_overflow_list.reduce((result, current_th, index_th) => {
        const temp_tr_HTML = `
          <tr>
            <td class="th-expanded">${current_th.dom.innerHTML}</td>
            <td class="td-expanded">${_TABLE_DATA[id].table.tbody.trList[row_index].tdList[current_th.index].dom.innerHTML}</td>
          </tr>
        `;

        result += temp_tr_HTML;

        return result;
      }, "");

      const tr_expanded_HTML = `
      <td class="td-row-expanded" colspan="${total_col_to_span}">
        <table class="table-expanded">
          <tbody>
            ${col_overflow_list_HTML}
          </tbody>
        </table>
      </td>
      `;
      tr_Expanded_DOM.innerHTML = tr_expanded_HTML;
      if(count_col_overflow > 0) {
        _TABLE_DATA[id].table.tbody.trList[row_index].dom.insertAdjacentElement("afterend", tr_Expanded_DOM);
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _toggle_row_is_expanded(id, row_index) {
    try {
      const isExpanded = !_TABLE_DATA[id].table.tbody.trList[row_index].isExpanded;
      _TABLE_DATA[id].table.tbody.trList[row_index].isExpanded = isExpanded;

      const tr_is_expanded_List = _TABLE_DATA[id].table.tbody.trList.filter((item) => item.isExpanded);
      const is_any_tr_expanded = tr_is_expanded_List.length > 0;
      _TABLE_DATA[id].table.thead.isExpanded = is_any_tr_expanded;
      _refresh_btn_row_expander_dom(id, row_index, isExpanded);
      if(isExpanded) {
        _render_row_expanded(id, row_index);
      } else {
        _remove_row_expanded(id, row_index);
      }
      _refresh_btn_col_expander_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _event_click_btn_row_expander(id) {
    try {
      _TABLE_DATA[id].table.tbody.trList.forEach((item_tr, index_tr) => {
        if(item_tr.btnRowExpanderDom) {
          item_tr.btnRowExpanderDom.addEventListener("click", (event) => {
            const row_index = event.srcElement.dataset.rowIndex;
            _toggle_row_is_expanded(id, row_index);
          });
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _update_class_overflow(id, currentStep = 1) {
    try {
      if(currentStep === 1) {
        window.requestAnimationFrame(() => {
          _TABLE_DATA[id].containerDom.classList.remove("is-overflow");
        });
      }

      if(currentStep === 2 && _TABLE_DATA[id].isOverflow) {
        window.requestAnimationFrame(() => {
          _TABLE_DATA[id].containerDom.classList.add("is-overflow");
        });
      }

      _TABLE_DATA[id].table.thead.trList.forEach((item_tr, index_tr) => {
        item_tr.thList.forEach((item_th, index_th) => {
          if(currentStep === 2 || currentStep === 3) {
            window.requestAnimationFrame(() => {
              item_th.dom.classList.remove("is-overflow");
              item_th.dom.classList.remove("is-normal");
            });
          }

          if(currentStep === 4) {
            if(item_th.isOverflow) {
              window.requestAnimationFrame(() => {
                item_th.dom.classList.add("is-overflow");
              });
            } else {
              item_th.dom.classList.add("is-normal");
            }
          }
        });
      });

      _TABLE_DATA[id].table.tbody.trList.forEach((item_tr, index_tr) => {
        item_tr.tdList.forEach((item_td, index_td) => {
          if(currentStep === 2 || currentStep === 3) {
            window.requestAnimationFrame(() => {
              item_td.dom.classList.remove("is-overflow");
              item_td.dom.classList.remove("is-normal");
            });
          }

          if(currentStep === 4) {
            if(item_td.isOverflow) {
              window.requestAnimationFrame(() => {
                item_td.dom.classList.add("is-overflow");
              });
            } else {
              item_td.dom.classList.add("is-normal");
            }
          }
        });
      });

      if(currentStep <= 4) {
        currentStep += 1;
        window.requestAnimationFrame((e) => {
          _calc_overflow(id, currentStep);
        });
      } else {
        if(_TABLE_DATA[id].isOverflow) {
          window.requestAnimationFrame(() => {
            _TABLE_DATA[id].containerDom.classList.add("is-overflow");
          });
        } else {
          window.requestAnimationFrame(() => {
            _TABLE_DATA[id].containerDom.classList.remove("is-overflow");
          });
        }

        _refresh_all_btn_row_expander_dom_on_resize(id);
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _calc_overflow(id, currentStep = 1) {
    try {
      let result_any_isOverflow = false;
      if(currentStep === 1 || currentStep === 3) {
        const container_Rect = _TABLE_DATA[id].containerDom.getBoundingClientRect();
        _TABLE_DATA[id].table.thead.trList.forEach((item_tr, index_tr) => {
          item_tr.thList.forEach((item_th, index_th) => {
            const th_Rect = item_th.dom.getBoundingClientRect();
            const result_IsOverflow = th_Rect.right > container_Rect.right;
            if(result_IsOverflow) {
              result_any_isOverflow = result_IsOverflow;
            }
            _TABLE_DATA[id].table.thead.trList[index_tr].thList[index_th].isOverflow = result_IsOverflow;
            _TABLE_DATA[id].table.tbody.trList.forEach((item_tr_td, index_tr_td) => {
              _TABLE_DATA[id].table.tbody.trList[index_tr_td].tdList[index_th].isOverflow = result_IsOverflow;
            });
          });
        });

        if(currentStep === 1 || currentStep === 3) {
          _TABLE_DATA[id].isOverflow = result_any_isOverflow;
        }
      }

      window.requestAnimationFrame((e) => {
        _update_class_overflow(id, currentStep);
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _event_resize(id) {
    try {
      window.addEventListener("DOMContentLoaded", (e) => {
        _calc_overflow(id, 1);
      });
      window.addEventListener("resize", (event) => {
        clearTimeout(_TABLE_DATA[id].timeOutFunction);
        _TABLE_DATA[id].timeOutFunction = null;

        const _new_window_width = event.target.innerWidth;
        if(_TABLE_DATA[id].oldWindowWidth != _new_window_width) {
          _TABLE_DATA[id].oldWindowWidth = _new_window_width;

          _TABLE_DATA[id].timeOutFunction = setTimeout(() => {
            _calc_overflow(id, 1);
          }, _SEC_TO_RESIZE_EVENT * 1000);
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _refresh_thead_tbody_reference(id) {
    try {
      const thead_tr_list = _TABLE_DATA[id].table.thead.dom.querySelectorAll("tr");
      const btn_col_expander_DOM = _TABLE_DATA[id].table.thead.dom.querySelector(".btn-col-expander");
      _TABLE_DATA[id].table.thead.btnColExpanderDom = btn_col_expander_DOM;
      const result_thead_tr_list = Array.from(thead_tr_list).map((item_tr, index_tr) => {
        const th_list = item_tr.querySelectorAll("th.th-col");
        const result_th_list = Array.from(th_list).map((item_th, index_th) => {
          const temp_th_obj = {
            index: index_th,
            dom: item_th,
            isOverflow: false,
          };

          return temp_th_obj;
        });
        const temp_tr_obj = {
          index: index_tr,
          dom: item_tr,
          thList: result_th_list,
        };

        return temp_tr_obj;
      });
      let result_tbody_tr_list = [];

      if(_TABLE_DATA[id].dataList.length > 0) {
        const tbody_tr_list_DOM = _TABLE_DATA[id].table.tbody.dom.querySelectorAll("tr");
        result_tbody_tr_list = Array.from(tbody_tr_list_DOM).map((item_tr, index_tr) => {
          const btn_row_expander_DOM = item_tr.querySelector(".btn-row-expander");
          const td_list = item_tr.querySelectorAll("td.td-row");
          const result_td_list = Array.from(td_list).map((item_td, index_td) => {
            const temp_td_obj = {
              index: index_td,
              dom: item_td,
              isOverflow: false,
            };

            return temp_td_obj;
          });
          const temp_tr_obj = {
            index: index_tr,
            dom: item_tr,
            tdList: result_td_list,
            btnRowExpanderDom: btn_row_expander_DOM,
            isExpanded: false,
          };

          return temp_tr_obj;
        });
      }

      _TABLE_DATA[id].table.thead.trList = result_thead_tr_list;
      _TABLE_DATA[id].table.tbody.trList = result_tbody_tr_list;

      _event_click_btn_row_expander(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _status_HTML(id, text) {
    let html = "";
    try {
      const tbody_status_rows_HTML = Array.from({ length: _TABLE_DATA[id].statusRowsInBody }, (_, index) => index).reduce((result, current, index) => {
        const temp_row_HTML = `
          <tr class="tr-status-rowsinbody">
            <td class="td-status-rowsinbody">${index}</td>
          </tr>
        `;

        result += temp_row_HTML;

        return result;
      }, "");
      const tbody_status_HTML = `
        <tr class="tr-status-content">
          <td class="td-status-content">${text}</td>
        </tr>
      `;
      const tbody_HTML = `
        ${tbody_status_rows_HTML}
        ${tbody_status_HTML}
      `;
      html = tbody_HTML;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
    return html;
  }

  function _render_status_dom_table(id) {
    try {
      const status_HTML = _status_HTML(id, _TABLE_DATA[id].textStatus);
      _TABLE_DATA[id].table.tbody.dom.innerHTML = status_HTML;
      _refresh_thead_tbody_reference(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _tbody_HTML(id) {
    let html = "";
    try {
      const row_list_HTML = _TABLE_DATA[id].dataList.reduce((result_row, current_row, index_row) => {
        const td_row_expander_HTML = `
          <td class="td-row-expander">
            <button class="btn-row-expander" data-row-index="${index_row}">${_TABLE_DATA[id].icons.expandRow}</button>
          </td>
        `;

        const td_list_HTML = _TABLE_DATA[id].columnDefList.reduce((result_col, current_col, index_col) => {
          const render_HTML = current_col.tdRender(current_row, index_row, index_col);
          if(!current_col.tdClassList) {
            current_col.tdClassList = [];
          }
          const td_classList = ["td-row", ...current_col.tdClassList];
          const result_td_classList = td_classList.join(" ");
          const td_HTML = `
            <td class="${result_td_classList}" data-col-index="${index_col}">
              ${render_HTML}
            </td>
          `;

          result_col += td_HTML;

          return result_col;
        }, "");

        let tr_class_even_odd = "odd";
        const is_index_even = index_row % 2 == 0;
        if(is_index_even) {
          tr_class_even_odd = "even";
        }
        
        const row_HTML = `
          <tr class="${tr_class_even_odd}" data-row-index="${index_row}">
            ${td_row_expander_HTML}
            ${td_list_HTML}
          </tr>
        `;

        result_row += row_HTML;

        return result_row;
      }, "");

      html = row_list_HTML;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
    return html;
  }

  function _thead_HTML(id) {
    let html = "";
    try {
      const th_list_HTML = _TABLE_DATA[id].columnDefList.reduce((result, current, index) => {
        const th_classList = ["th-col"];
        if(current.thClassList) {
          th_classList.push(...current.thClassList);
        }
        const result_th_classList = th_classList.join(" ");
        const style_list = [];
        if(current.width) {
          const reslut_style_width = `width: ${current.width};`;
          style_list.push(reslut_style_width);
        }
        if(current.minWidth) {
          const reslut_style_min_width = `min-width: ${current.minWidth};`;
          style_list.push(reslut_style_min_width);
        }
        let result_style_list = "";
        if(style_list.length > 0) {
          const join_style_list = style_list.join(" ");
          result_style_list = `style="${join_style_list}"`;
        }
        const th_HTML = `
          <th class="${result_th_classList}" ${result_style_list}>
            ${current.th}
          </th>
        `;

        result += th_HTML;

        return result;
      }, "");

      html = `
        <tr>
          <th class="th-row-expander" style="width: 1%;">
            <button class="btn-col-expander" data-table-id="${id}">${_TABLE_DATA[id].icons.expandCol}</button>
          </th>
          ${th_list_HTML}
        </tr>
      `;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
    return html;
  }

  function _render_dom_on_page(id) {
    try {
      const container_id = `${id}_t-table`;
      const container_classList = ["t-table-container", ..._TABLE_DATA[id].containerClassList];
      const result_container_classList = container_classList.join(" ");

      const table_classList = ["t-table", ..._TABLE_DATA[id].table.originalDom.classList];
      const result_table_classList = table_classList.join(" ");

      const thead_HTML = _thead_HTML(id);
      let tbody_HTML = "";
      const isData = _TABLE_DATA[id].dataList.length > 0;
      if(!isData) {
        tbody_HTML = _status_HTML(id, _TABLE_DATA[id].textNoData);
      } else {
        tbody_HTML = _tbody_HTML(id);
      }

      const container_HTML = `
        <div class="${result_container_classList}" id="${container_id}">
          <table class="${result_table_classList}">
            <thead class="t-head">
              ${thead_HTML}
            </thead>

            <tbody class="t-body">
              ${tbody_HTML}
            </tbody>
          </table>
        </div>
      `;

      _TABLE_DATA[id].containerDom.outerHTML = container_HTML;
      const container_DOM = document.getElementById(`${container_id}`);
      _TABLE_DATA[id].containerDom = container_DOM;
      const table_DOM = _TABLE_DATA[id].containerDom.querySelector("table.t-table");
      _TABLE_DATA[id].table.dom = table_DOM;
      const table_thead_DOM = _TABLE_DATA[id].table.dom.querySelector(".t-head");
      _TABLE_DATA[id].table.thead.dom = table_thead_DOM;
      const table_body_DOM = _TABLE_DATA[id].table.dom.querySelector(".t-body");
      _TABLE_DATA[id].table.tbody.dom = table_body_DOM;
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _save_on_TABLE_DATA({
    id = null,
    containerClassList = [],
    icons = {
      expandRow: "⭕",
      closeRow: "⛔",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList = [],
    textNoData = "No data",
    columnDefList = [],
    statusRowsInBody = 4,
  } = {}) {
    try {
      if(id == null) {
        if(_show_Error_Message) {
          console.error(`Se requiere [id]`);

          return;
        }
      }

      if(_TABLE_DATA[id]) {
        if(_show_Error_Message) {
          console.error(`Ya existe una <table/> con este [id]: ${id}`);

          return;
        }
      }

      const table_DOM = document.getElementById(id);
      if(table_DOM) {
        _TABLE_DATA[id] = {
          id: id,
          isOverflow: false,
          timeOutFunction: null,
          oldWindowWidth: window.innerWidth,
          containerDom: table_DOM,
          containerClassList: containerClassList,
          table: {
            originalDom: table_DOM.cloneNode(true),
            dom: null,
            thead: {
              btnColExpanderDom: null,
              isExpanded: false,
              dom: null,
              trList: [],
            },
            tbody: {
              dom: null,
              trList: [],
            },
          },
          icons: icons,
          dataList: dataList,
          columnDefList: columnDefList,
          textNoData: textNoData,
          statusRowsInBody: statusRowsInBody,
        };
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnRefreshDataList({
    id = "",
    dataList = [],
  } = {}) {
    try {
      _TABLE_DATA[id].dataList = dataList;

      let tbody_HTML = "";
      if(_TABLE_DATA[id].dataList.length > 0) {
        tbody_HTML = _tbody_HTML(id);
      } else {
        tbody_HTML = _status_HTML(id, _TABLE_DATA[id].textNoData);
      }

      _TABLE_DATA[id].table.tbody.dom.innerHTML = tbody_HTML;

      _TABLE_DATA[id].table.thead.isExpanded = false;

      _refresh_btn_col_expander_dom(id);

      _refresh_thead_tbody_reference(id);

      _calc_overflow(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnSetStatus({
    id = "",
    text = "",
  } = {}) {
    try {
      _TABLE_DATA[id].textStatus = text;
      _render_status_dom_table(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnInit({
    id = null,
    containerClassList = [],
    icons = {
      expandRow: "⭕",
      closeRow: "⛔",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList = [],
    columnDefList = [],
    textNoData = "No data",
    statusRowsInBody = 4,
  } = {}) {
    try {
      _save_on_TABLE_DATA({
        id: id,
        containerClassList: containerClassList,
        icons: icons,
        dataList: dataList,
        columnDefList: columnDefList,
        textNoData: textNoData,
        statusRowsInBody: statusRowsInBody,
      });

      _render_dom_on_page(id);

      _refresh_thead_tbody_reference(id);
      
      _event_click_btn_col_expander(id);

      _event_resize(id);

      _calc_overflow(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnConfig({
    showErrorMessage = true,
    showDebugMessage = false,
  } = {}) {
    try {
      if(_show_Debug_Message) {
        console.log("ttable: [start] fnConfig");
      }

      _show_Error_Message = showErrorMessage;
      _show_Debug_Message = showDebugMessage;

      if(_show_Debug_Message) {
        console.log("ttable: [ end ] fnConfig");
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error("ttable: fnConfig");
        console.error(error);
      }
    }
  }

  return {
    TABLE: _TABLE_DATA,

    fnConfig,
    fnInit,
    fnSetStatus,
    fnRefreshDataList,
  }
})();
