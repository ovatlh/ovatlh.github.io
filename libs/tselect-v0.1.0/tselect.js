var tselect=tselect||(function () {
  const _SELECT_DATA = {};
  let _show_Error_Message = true;
  let _show_Debug_Message = true;

  const temp_tselect_data = {
    id: "",
    name: "",
    optionList: [],
    optionSelectedList: [],
    optionListFilter: [],
    containerDom: null,
    containerClassList: [],
    selectDom: null,
    selectValueDom: null,
    optionListDom: null,
    btnPlaceHolder: "",
    btnSelectDom: null,
    btnSelectPlaceHolder: "",
    isSearchEnable: false,
    searchPlaceHolder: "",
    searchText: "",
    isToggleAllEnable: false,
    selectAllPlaceHolder: "",
    deselectAllPlaceHolder: "",
    btnToggleAllDom: null,
    isOpen: false,
    isMultiple: false,
    isRequired: false,
    fnBtnOptionSelectedRender: (id, value) => "",
    fnOnValueChange: (id, value) => {},
  };

  function _compare_2_arrays(array1 = null, array2 = null) {
    if(!array1 || !array2) {
      return false;
    }

    if(array1.length !== array2.length) {
      return false;
    }

    const array1_sort = array1.sort();
    const array2_sort = array2.sort();

    for (let index = 0; index < array1_sort.length; index++) {
      if(array1_sort[index] !== array2_sort[index]) {
        return false;
      }
    }

    return true;
  }

  function _compare_if_array_is_on_array(array1 = null, array2 = null) {
    if(!array1 || !array2) {
      return false;
    }

    const isAllItems = array1.every(item => array2.includes(item));

    return isAllItems;
  }

  function _default_BtnOptionSelectedRender(id) {
    let result_txt = _SELECT_DATA[id].btnPlaceHolder;
    const selected_count = _SELECT_DATA[id].optionSelectedList.length;
    if(selected_count > 0) {
      if(_SELECT_DATA[id].fnBtnOptionSelectedRender) {
        let result_value = null;
        if(_SELECT_DATA[id].isMultiple) {
          result_value = _SELECT_DATA[id].optionSelectedList;
        } else {
          result_value = _SELECT_DATA[id].optionSelectedList[0];
        }
        result_txt = _SELECT_DATA[id].fnBtnOptionSelectedRender(id, _SELECT_DATA[id].isMultiple, _SELECT_DATA[id].btnSelectPlaceHolder, result_value, _SELECT_DATA[id].optionList);
      } else {
        if(_SELECT_DATA[id].isMultiple) {
          result_txt = `${_SELECT_DATA[id].btnSelectPlaceHolder} - ${selected_count}`;
        } else {
          result_txt = _SELECT_DATA[id].btnPlaceHolder;
        }
      }
    }
    _SELECT_DATA[id].btnSelectDom.innerHTML = result_txt;
  }

  function _refresh_option_list_dom(id) {
    try {
      let id_isMultiple = "single";
      let label_type_isMultiple = "radio";
      if(_SELECT_DATA[id].isMultiple) {
        id_isMultiple = "multiple";
        label_type_isMultiple = "checkbox";
      }

      const optionList_HTML = _option_list_HTML({
        id: id,
        optionList: _SELECT_DATA[id].optionListFilter,
        optionSelectedList: _SELECT_DATA[id].optionSelectedList,
        id_isMultiple: id_isMultiple,
        label_type_isMultiple: label_type_isMultiple,
      });

      _SELECT_DATA[id].optionListDom.innerHTML = optionList_HTML;
      let result_btn_toggle_all_HTML = _SELECT_DATA[id].selectAllPlaceHolder;
      let _option_list_value = _SELECT_DATA[id].optionListFilter.map((item)=> item.value);
      let result_is_same_values = _compare_2_arrays(_SELECT_DATA[id].optionSelectedList, _option_list_value);

      if(_SELECT_DATA[id].searchText.length > 0) {
        const _optionValueListFilter = _SELECT_DATA[id].optionListFilter.map((item) => item.value);
        result_is_same_values = _compare_if_array_is_on_array(_optionValueListFilter, _SELECT_DATA[id].optionSelectedList);
      }

      if(result_is_same_values) {
        result_btn_toggle_all_HTML = _SELECT_DATA[id].deselectAllPlaceHolder;
      }
      if(_SELECT_DATA[id].btnToggleAllDom) {
        _SELECT_DATA[id].btnToggleAllDom.innerHTML = result_btn_toggle_all_HTML;
      }

      _default_BtnOptionSelectedRender(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _on_value_change(id) {
    try {
      if(_SELECT_DATA[id].fnOnValueChange) {
        if(_SELECT_DATA[id].isMultiple) {
          _SELECT_DATA[id].fnOnValueChange(id, _SELECT_DATA[id].optionSelectedList);
        } else {
          if(_SELECT_DATA[id].optionSelectedList.length > 0) {
            _SELECT_DATA[id].fnOnValueChange(id, _SELECT_DATA[id].optionSelectedList[0]);
          }
        }
      }
      _refresh_option_list_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnRefreshData({
    id = "",
    optionList = null,
    optionSelectedList = null,
  } = {}) {
    try {
      if(_SELECT_DATA[id]) {
        if(optionList) {
          _SELECT_DATA[id].optionList = optionList;
          _SELECT_DATA[id].optionListFilter = _SELECT_DATA[id].optionList;
        }
        if(optionSelectedList) {
          _SELECT_DATA[id].optionSelectedList = optionSelectedList;
        }

        _refresh_container_dom(id);
        _refresh_option_list_dom(id);
        _default_BtnOptionSelectedRender(id);
        _on_value_change(id);
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnToggleAll(id) {
    try {
      let result_selected_list = [];
      
      if(_SELECT_DATA[id].searchText.length > 0) {
        _SELECT_DATA[id].optionListFilter.forEach((item) => {
          const item_index = _SELECT_DATA[id].optionSelectedList.indexOf(item.value);
          if(item_index >= 0) {
            _SELECT_DATA[id].optionSelectedList.splice(item_index, 1);
          } else {
            _SELECT_DATA[id].optionSelectedList.push(item.value);
          }
        });
        result_selected_list = _SELECT_DATA[id].optionSelectedList;
      } else {
        if(_SELECT_DATA[id].optionSelectedList.length != _SELECT_DATA[id].optionListFilter.length) {
          result_selected_list = _SELECT_DATA[id].optionListFilter.map((item) => item.value);
        }
      }

      _SELECT_DATA[id].optionSelectedList = result_selected_list;
      _on_value_change(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnOnFocus(_src_this, id) {
    try {
      _src_this.blur();
      const btn_DOM = _SELECT_DATA[id].containerDom.querySelector("button.btn-t-select");
      btn_DOM.focus();
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _option_list_HTML({
    id = "",
    optionList = [], 
    optionSelectedList = [], 
    id_isMultiple = "single", 
    label_type_isMultiple = "radio",
  } = {}) {
    let result_HTML = "";
    try {
      result_HTML = optionList.reduce((result, current, index) => {
        let result_isChecked = "";
        if(optionSelectedList.includes(current.value)) {
          result_isChecked = "checked";
        }

        const temp_label_HTML = `
          <label for="${id}_${id_isMultiple}-option-${index}">
            <input type="${label_type_isMultiple}" id="${id}_${id_isMultiple}-option-${index}" name="${id}_${id_isMultiple}" data-index="${index}" oninput="tselect.fnToggleValue('${id}', '${index}');" ${result_isChecked}>
            <div class="t-select-option-content">${current.text}</div>
          </label>
        `;

        result += temp_label_HTML;

        return result;
      }, "");
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
    return result_HTML;
  }

  function _refresh_container_dom(id) {
    if(_SELECT_DATA[id].isOpen) {
      _SELECT_DATA[id].containerDom.classList.add("open");
    } else {
      _SELECT_DATA[id].containerDom.classList.remove("open");
    }

    let result_value = "";
    if(_SELECT_DATA[id].isMultiple) {
      if(_SELECT_DATA[id].optionSelectedList.length > 0) {
        result_value = _SELECT_DATA[id].optionSelectedList.join(",");
        result_value = `[${result_value}]`
      }
    } else {
      result_value = _SELECT_DATA[id].optionSelectedList.join("");
    }
    _SELECT_DATA[id].selectValueDom.value = result_value;
  }

  function fnSearch(_src_this, id) {
    try {
      const result_value = _src_this.value;
      _SELECT_DATA[id].searchText = result_value;

      if(_SELECT_DATA[id].searchText.length > 0) {
        const result_search_optionList = _SELECT_DATA[id].optionList.filter((item) => item.text.includes(_SELECT_DATA[id].searchText));
        _SELECT_DATA[id].optionListFilter = result_search_optionList;
      } else {
        _SELECT_DATA[id].optionListFilter = _SELECT_DATA[id].optionList;
      }

      _refresh_option_list_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnGetValue(id) {
    let result = null;

    try {
      if(_SELECT_DATA[id].isMultiple) {
        result = _SELECT_DATA[id].optionSelectedList;
      } else {
        result = _SELECT_DATA[id].optionSelectedList[0];
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }

    return result;
  }

  function fnToggleValue(id, index) {
    try {
      const value_to_toggle = _SELECT_DATA[id].optionListFilter[index].value;

      if(_SELECT_DATA[id].isMultiple) {
        const result_isIncludes = _SELECT_DATA[id].optionSelectedList.includes(value_to_toggle);
        if(result_isIncludes) {
          const value_index_to_remove = _SELECT_DATA[id].optionSelectedList.indexOf(value_to_toggle);
          _SELECT_DATA[id].optionSelectedList.splice(value_index_to_remove, 1);
        } else {
          _SELECT_DATA[id].optionSelectedList.push(value_to_toggle);
        }
      } else {
        _SELECT_DATA[id].optionSelectedList = [value_to_toggle];
      }

      _on_value_change(id);
      _refresh_container_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnClose(id) {
    try {
      _SELECT_DATA[id].isOpen = false;

      _refresh_container_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnToggle(id) {
    try {
      const result_isOpen = !_SELECT_DATA[id].isOpen;
      _SELECT_DATA[id].isOpen = result_isOpen;

      _refresh_container_dom(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _setup_events(id) {
    try {
      const btn_select_DOM = _SELECT_DATA[id].containerDom.querySelector(".btn-t-select");
      btn_select_DOM.addEventListener("click", (ev) => {
        fnToggle(id);
      });

      const target_to_not_close = document.querySelector(`#${_SELECT_DATA[id].name}_t-select`);
      // https://stackoverflow.com/a/64665817
      document.addEventListener("click", (event) => {
        const withinBoundaries = event.composedPath().includes(target_to_not_close)

        if (!withinBoundaries) {
          fnClose(id);
        }
      });
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _render_dom_on_page(id) {
    try {
      const container_id = `${id}_t-select`;
      let id_isMultiple = "single";
      let label_type_isMultiple = "radio";
      if(_SELECT_DATA[id].isMultiple) {
        id_isMultiple = "multiple";
        label_type_isMultiple = "checkbox";
      }

      const optionList_HTML = _option_list_HTML({
        id: id,
        optionList: _SELECT_DATA[id].optionListFilter,
        optionSelectedList: _SELECT_DATA[id].optionSelectedList,
        id_isMultiple: id_isMultiple,
        label_type_isMultiple: label_type_isMultiple,
      });

      let result_isRequired = "";
      if(_SELECT_DATA[id].isRequired) {
        result_isRequired = "required";
      }

      const select_original_classList = Array.from(_SELECT_DATA[id].selectDom.classList);
      select_original_classList.push("btn-t-select");
      const result_btn_t_select_classList = select_original_classList.join(" ");

      const _action_list = [];
      if(_SELECT_DATA[id].isSearchEnable) {
        _action_list.push(`
          <input type="search" id="${id}_${id_isMultiple}-search" placeholder="${_SELECT_DATA[id].searchPlaceHolder}" oninput="tselect.fnSearch(this, '${id}');"/>
        `);
      }
      if(_SELECT_DATA[id].isToggleAllEnable && _SELECT_DATA[id].isMultiple) {
        _action_list.push(`
          <button class="btn-t-select-toggle-all" id="${id}_${id_isMultiple}-toggle-all" type="button" onclick="tselect.fnToggleAll('${id}')">${_SELECT_DATA[id].selectAllPlaceHolder}</button>
        `);
      }
      const _action_list_HTML = _action_list.join("");

      let result_action_list_HTML = "";
      if(_action_list.length > 0) {
        result_action_list_HTML = `
          <div class="action-list">
            ${_action_list_HTML}
          </div>
        `;
      }

      let class_t_is_multiple = "t-single";
      if(_SELECT_DATA[id].isMultiple) {
        class_t_is_multiple = "t-multiple";
      }
      const container_classList = ["t-select-container", class_t_is_multiple, ..._SELECT_DATA[id].containerClassList];
      const result_container_classList = container_classList.join(" ");

      const container_HTML = `
        <div class="${result_container_classList}" id="${container_id}">
          <input class="original-select" type="text" id="${id}" name="${_SELECT_DATA[id].name}" value="" ${result_isRequired} tabindex="-1" onfocus="tselect.fnOnFocus(this, '${id}');"/>

          <button class="${result_btn_t_select_classList}" type="button">
            ${_SELECT_DATA[id].btnPlaceHolder}
          </button>

          <div class="t-select-option-list">
            ${result_action_list_HTML}

            <div class="option-list">
              ${optionList_HTML}
            </div>
          </div>
        </div>
      `;

      _SELECT_DATA[id].containerDom.outerHTML = container_HTML;
      const container_DOM = document.getElementById(`${container_id}`);
      _SELECT_DATA[id].containerDom = container_DOM;
      const optionList_DOM = container_DOM.querySelector(".option-list");
      _SELECT_DATA[id].optionListDom = optionList_DOM;
      const selectValue_DOM = document.getElementById(id);
      _SELECT_DATA[id].selectValueDom = selectValue_DOM;
      const btnToggleAll_DOM = document.getElementById(`${id}_${id_isMultiple}-toggle-all`);
      _SELECT_DATA[id].btnToggleAllDom = btnToggleAll_DOM;
      const btnSelect_DOM = _SELECT_DATA[id].containerDom.querySelector(".btn-t-select");
      _SELECT_DATA[id].btnSelectDom = btnSelect_DOM;

      _default_BtnOptionSelectedRender(id);
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function _save_on_SELECT_DATA({
    id = null,
    containerClassList = [],
    optionList = null,
    optionSelectedList = null,
    btnPlaceHolder = null,
    btnSelectDom = null,
    btnSelectPlaceHolder = null,
    isSearchEnable = false,
    searchPlaceHolder = null,
    isToggleAllEnable = false,
    selectAllPlaceHolder = "",
    deselectAllPlaceHolder = "",
    isOpen = null,
    fnBtnOptionSelectedRender = null,
    fnOnValueChange = null,
  } = {}) {
    try {
      if(id == null) {
        if(_show_Error_Message) {
          console.error(`Se requiere [id]`);
        }
      }

      if(_SELECT_DATA[id]) {
        if(_show_Error_Message) {
          console.error(`Ya existe un <select/> con este [id]: ${id}`);
        }

        return;
      }

      const select_DOM = document.getElementById(`${id}`);
      if(select_DOM) {
        _SELECT_DATA[id] = {
          id: id,
          name: select_DOM.name,
          optionList: optionList,
          optionSelectedList: optionSelectedList,
          optionListFilter: optionList,
          containerClassList: containerClassList,
          containerDom: select_DOM,
          selectDom: select_DOM.cloneNode(true),
          optionListDom: null,
          btnPlaceHolder: btnPlaceHolder,
          btnSelectDom: btnSelectDom,
          btnSelectPlaceHolder: btnSelectPlaceHolder,
          isSearchEnable: isSearchEnable,
          searchPlaceHolder: searchPlaceHolder,
          searchText: "",
          isToggleAllEnable: isToggleAllEnable,
          selectAllPlaceHolder: selectAllPlaceHolder,
          deselectAllPlaceHolder: deselectAllPlaceHolder,
          isOpen: isOpen,
          isMultiple: select_DOM.multiple,
          isRequired: select_DOM.required,
          fnBtnOptionSelectedRender: fnBtnOptionSelectedRender,
          fnOnValueChange: fnOnValueChange,
        };
      } else {
        if(_show_Error_Message) {
          console.error(`No se encontró un <select/> con este [id]: ${id}`);
        }
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error(error);
      }
    }
  }

  function fnInit({
    id = "",
    containerClassList = [],
    optionList = [],
    optionSelectedList = [],
    btnPlaceHolder = "",
    btnSelectPlaceHolder = "",
    isSearchEnable = false,
    searchPlaceHolder = "",
    isToggleAllEnable = false,
    selectAllPlaceHolder = "",
    deselectAllPlaceHolder = "",
    isOpen = false,
    fnBtnOptionSelectedRender = null,// (id, value) => "",
    fnOnValueChange = null,// (id, value) => {},
  } = {}) {
    try {
      _save_on_SELECT_DATA({
        id: id,
        containerClassList: containerClassList,
        optionList: optionList,
        optionSelectedList: optionSelectedList,
        btnPlaceHolder: btnPlaceHolder,
        btnSelectPlaceHolder: btnSelectPlaceHolder,
        isSearchEnable: isSearchEnable,
        searchPlaceHolder: searchPlaceHolder,
        isToggleAllEnable: isToggleAllEnable,
        selectAllPlaceHolder: selectAllPlaceHolder,
        deselectAllPlaceHolder: deselectAllPlaceHolder,
        isOpen: isOpen,
        fnBtnOptionSelectedRender: fnBtnOptionSelectedRender,
        fnOnValueChange: fnOnValueChange,
      });

      _render_dom_on_page(id);

      _setup_events(id);
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
        console.log("tselect: [start] fnConfig");
      }

      _show_Error_Message = showErrorMessage;
      _show_Debug_Message = showDebugMessage;

      if(_show_Debug_Message) {
        console.log("tselect: [ end ] fnConfig");
      }
    } catch (error) {
      if(_show_Error_Message) {
        console.error("tselect: fnConfig");
        console.error(error);
      }
    }
  }

  return {
    SELECT: _SELECT_DATA,

    fnConfig,
    fnInit,
    fnToggleValue,
    fnGetValue,
    fnSearch,
    fnOnFocus,
    fnToggleAll,
    fnRefreshData,
  }
})();
