(function(){"use strict";try{if(typeof document!="undefined"){var d=document.createElement("style");d.appendChild(document.createTextNode(".v-tree-dropdown[data-v-ddc53010]{--primary-color: #1f73b7;--background-color: #1f73b714;--border: 1px solid #d8dcde;--max-width: 10000000px;--box-shadow: rgb(31 115 183 / 35%) 0px 0px 0px 3px;--bezier-curve: .1s cubic-bezier(0, 0, .95, 1.03);--animation-delay: .2s;position:relative;width:300px;max-width:var(--max-width);outline:none}.v-dd[data-v-ddc53010]{display:flex;flex-direction:column;row-gap:.5rem}.v-tree-dropdown #v-dd-label[data-v-ddc53010],.v-dd-option>.label[data-v-ddc53010]{font-weight:600;text-align:left}.v-dd:hover .v-dd-search[data-v-ddc53010]{border-color:var(--primary-color)}.margin-0-auto[data-v-ddc53010]{margin:0 auto}.c-btn__icon[data-v-ddc53010]{width:16px;height:16px;margin-top:-2px;vertical-align:middle}.u-truncate[data-v-ddc53010]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-dd-search[data-v-ddc53010]{position:relative;display:flex;align-items:center;justify-content:space-between;border:var(--border);padding:.8rem .75rem;border-radius:4px;cursor:pointer;outline:none;z-index:1}.v-dd-search[data-v-ddc53010]:active,.v-dd-search[data-v-ddc53010]:focus,.v-dd-search[data-v-ddc53010]:focus-within{border-color:var(--primary-color);box-shadow:var(--box-shadow);transition:border-color .2s ease-in-out,box-shadow .2s ease-in-out}.v-dd-search>svg[data-v-ddc53010]{position:absolute}.v-dd-search>svg[aria-labelledby=zd-search][data-v-ddc53010]{left:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer][data-v-ddc53010]{right:1rem}.v-dd-search>svg[aria-labelledby=zd-down-pointer].open[data-v-ddc53010]{transform:rotate(180deg);transition:transform .2s ease-in-out}.v-dd-search>svg[aria-labelledby=zd-down-pointer].close[data-v-ddc53010]{transform:rotate(0);transition:transform .2s ease-in-out}.v-dd-search>input[data-v-ddc53010],.v-dd-search>div[data-v-ddc53010]{height:1.25rem;line-height:1.25rem;flex-grow:1;padding:0 2rem}.v-dd-input[data-v-ddc53010]{border:none;outline:none}.v-dd-input.hide[data-v-ddc53010]{position:absolute;width:0px;height:1px;padding:0}ul#v-dd-options-menu[data-v-ddc53010]{position:absolute;display:flex;flex-direction:column;top:calc(100% + 5px);left:0;width:100%;max-height:500px;border:var(--border);border-radius:4px;background-color:#fff;z-index:1;padding:.25rem 0;margin:0;max-height:350px;overflow-y:auto;box-shadow:#17494d26 0 20px 30px;animation:v-dd-menu-open-data-v-ddc53010 var(--bezier-curve) 0s 1 normal;transition:display var(--bezier-curve)}#v-dd-options-menu>li[data-v-ddc53010]{position:relative;display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:.5rem 1.25rem}li.v-dd-option>svg[aria-labelledby=zd-check][data-v-ddc53010],li.v-dd-option>svg[aria-labelledby=zd-contains][data-v-ddc53010]{position:absolute}.v-dd-option>span[data-v-ddc53010]{padding:0 2rem;flex-grow:1;text-align:left}.v-dd-option.no-data[data-v-ddc53010]{user-select:none;-webkit-user-select:none;pointer-events:none}.v-dd-option>svg[aria-labelledby=zd-down-pointer][data-v-ddc53010]{position:absolute;right:1rem;transform:rotate(-90deg)}.v-dd-option[data-v-ddc53010]:hover,.v-dd-option[data-v-ddc53010]:focus,.v-dd-option.active[data-v-ddc53010]{background-color:var(--background-color)}.v-dd-option.parent-option[data-v-ddc53010]{border-bottom:var(--border);padding:.5rem .75rem}.v-dd-option.parent-option>svg[data-v-ddc53010]{left:.75rem;transform:rotate(90deg)}@keyframes v-dd-menu-open-data-v-ddc53010{0%{transform:translateY(2px)}to{transform:translateY(0)}}")),document.head.appendChild(d)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var O = function() {
  var t = this, e = t.$createElement, i = t._self._c || e;
  return i("svg", {
    staticClass: "c-btn__icon",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      color: t.color,
      role: t.role,
      "aria-labelledby": t.icon,
      focusable: "false",
      "aria-hidden": !t.focusable
    }
  }, [i("title", {
    attrs: {
      id: t.name || t.icon
    }
  }, [t._v(t._s(t.name || t.icon) + " Icon")]), i("desc", [t._v(t._s(t.iconDescription || t.name))]), i("svg", {
    attrs: {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    },
    domProps: {
      innerHTML: t._s(t.paths[t.icon])
    }
  })]);
}, I = [];
function _(t, e, i, s, n, r, d, a) {
  var o = typeof t == "function" ? t.options : t;
  e && (o.render = e, o.staticRenderFns = i, o._compiled = !0), s && (o.functional = !0), r && (o._scopeId = "data-v-" + r);
  var l;
  if (d ? (l = function(c) {
    c = c || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), n && n.call(this, c), c && c._registeredComponents && c._registeredComponents.add(d);
  }, o._ssrRegister = l) : n && (l = a ? function() {
    n.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), l)
    if (o.functional) {
      o._injectStyles = l;
      var v = o.render;
      o.render = function(m, u) {
        return l.call(u), v(m, u);
      };
    } else {
      var p = o.beforeCreate;
      o.beforeCreate = p ? [].concat(p, l) : [l];
    }
  return {
    exports: t,
    options: o
  };
}
const g = {
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String
    },
    role: {
      type: String,
      default: "presentation"
    },
    iconDescription: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      paths: {
        "zd-search": '<circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5"></path>',
        "zd-down-pointer": '<path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"></path>',
        "zd-check": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9l4 4L15 3"></path>',
        "zd-contains": '<path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.5h15"></path>'
      }
    };
  }
}, w = g, h = {};
var b = /* @__PURE__ */ _(
  w,
  O,
  I,
  !1,
  x,
  null,
  null,
  null
);
function x(t) {
  for (let e in h)
    this[e] = h[e];
}
const P = /* @__PURE__ */ function() {
  return b.exports;
}();
var y = function() {
  var t, e = this, i = e.$createElement, s = e._self._c || i;
  return s("div", {
    ref: "dropdown",
    staticClass: "v-tree-dropdown"
  }, [s("div", {
    staticClass: "v-dd"
  }, [s("label", {
    attrs: {
      for: "v-dd-search__input",
      id: "v-dd-label"
    }
  }, [e._v(e._s(e.label))]), s("div", {
    class: "v-dd-search" + (e.menuIsOpen ? " active" : ""),
    attrs: {
      "aria-haspopup": "listbox",
      "aria-expanded": "" + e.menuIsOpen,
      "aria-owns": "v-dd-options-menu",
      "aria-labelledby": "v-dd-label"
    },
    on: {
      click: e.toggleDropdownMenu
    }
  }, [s("svg-icon", {
    attrs: {
      icon: "zd-search",
      name: "Search"
    }
  }), s("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.searchInput,
      expression: "searchInput"
    }],
    ref: "searchInput",
    class: "c-txt v-dd-input" + (e.menuIsOpen ? "" : " hide"),
    attrs: {
      type: "text",
      autocomplete: "off",
      id: "v-dd-search__input",
      role: "combobox",
      "aria-labelledby": "v-dd-label",
      "aria-autocomplete": "list",
      "aria-controls": e.menuIsOpen ? "v-dd-options-menu" : !1,
      "aria-activedescendant": e.menuIsOpen ? "v-dd-option-" + e.selectedIndex : !1
    },
    domProps: {
      value: e.searchInput
    },
    on: {
      click: e.keepMenuOpen,
      keyup: e.handleKeyUp,
      input: function(n) {
        n.target.composing || (e.searchInput = n.target.value);
      }
    }
  }), s("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !e.menuIsOpen,
      expression: "!menuIsOpen"
    }],
    staticClass: "c-txt u-truncate",
    domProps: {
      innerHTML: e._s(e.selectedOptions.map(function(n) {
        return n.label;
      }).join(", "))
    }
  }), s("svg-icon", {
    class: e.menuIsOpen ? "open" : "close",
    attrs: {
      icon: "zd-down-pointer",
      name: e.menuIsOpen ? "Up arrow" : "Down arrow"
    }
  })], 1)]), s("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.menuIsOpen,
      expression: "menuIsOpen"
    }],
    ref: "menu",
    attrs: {
      id: "v-dd-options-menu",
      role: "listbox",
      "aria-labelledby": "v-dd-label",
      "aria-multiselectable": !!e.multiple
    }
  }, [(t = e.currentOptions) !== null && t !== void 0 && t.length ? e._e() : s("li", {
    staticClass: "v-dd-option no-data",
    attrs: {
      role: "option"
    }
  }, [s("span", [e._v("No options found.")])]), e.selectedParent ? s("li", {
    class: "v-dd-option parent-option" + (e.selectedIndex === 0 ? " active" : ""),
    attrs: {
      id: "v-dd-option-0",
      role: "option"
    },
    on: {
      click: function(n) {
        return e.goToPreviousOptions();
      }
    }
  }, [s("svg-icon", {
    attrs: {
      icon: "zd-down-pointer",
      name: "Left arrow",
      iconDescription: "Click to go back to previous menu",
      focusable: !0,
      color: "#1f73b7"
    }
  }), s("span", {
    staticClass: "u-truncate label"
  }, [e._v(e._s(e.selectedParent.label))])], 1) : e._e(), e._l(e.currentOptions, function(n, r) {
    var d, a, o;
    return s("li", {
      key: n.label,
      class: "v-dd-option" + (e.selectedIndex === (e.selectedParent ? r + 1 : r) ? " active" : ""),
      attrs: {
        id: "v-dd-option-" + (e.selectedParent ? r + 1 : r),
        role: "option",
        "aria-selected": e.selectedIndex === (e.selectedParent ? r + 1 : r)
      },
      on: {
        click: function(l) {
          return e.selectOption(r);
        }
      }
    }, [(d = n.children) !== null && d !== void 0 && d.length && e.hasSelectedOptions(n.children, n) ? s("svg-icon", {
      attrs: {
        icon: "zd-contains",
        name: "Contains",
        color: "#1f73b7"
      }
    }) : e._e(), !((a = n.children) !== null && a !== void 0 && a.length) && e.isOptionSelected(n) ? s("svg-icon", {
      attrs: {
        icon: "zd-check",
        name: "Selected",
        color: "#1f73b7"
      }
    }) : e._e(), s("span", {
      staticClass: "u-truncate"
    }, [e._v(e._s(n.label))]), (o = n.children) !== null && o !== void 0 && o.length ? s("svg-icon", {
      attrs: {
        icon: "zd-down-pointer",
        name: "Right arrow",
        iconDescription: "Click to open sub-menu options"
      }
    }) : e._e()], 1);
  })], 2)]);
}, k = [];
const C = {
  components: {
    SvgIcon: P
  },
  props: {
    label: {
      type: String,
      required: !1
    },
    options: {
      type: Array,
      default: [],
      required: !0
    },
    value: {
      type: Array,
      default: [],
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1,
      required: !1
    },
    delimiter: {
      type: String,
      default: ", ",
      required: !1
    }
  },
  data() {
    return {
      searchInput: "",
      menuIsOpen: !1,
      selectedParent: null,
      selectedOptions: [],
      currentOptions: this.options,
      filteredOptions: this.options,
      selectedIndex: -1,
      selectedIndices: [],
      currentIndex: -1
    };
  },
  watch: {
    menuIsOpen() {
      this.menuIsOpen ? document.addEventListener("click", this.closeDropdownMenuOnBlur) : document.removeEventListener("click", this.closeDropdownMenuOnBlur);
    },
    searchInput() {
      this.searchInput ? this.currentOptions = this.filterMatchingOptions(this.searchInput, this.options) : this.currentOptions = this.options, this.filteredOptions = this.currentOptions, this.selectedParent = null;
    },
    selectedOptions() {
      this.$emit("input", this.selectedOptions);
    }
  },
  methods: {
    focusSearchInput() {
      this.$refs.searchInput.focus();
    },
    toggleDropdownMenu(t) {
      t.stopPropagation(), this.menuIsOpen = !this.menuIsOpen, this.focusSearchInput();
    },
    closeDropdownMenu() {
      var t;
      this.menuIsOpen = !1, (t = this.searchInput) != null && t.trim().length || (this.searchInput = "", this.selectedParent = null, this.filteredOptions = this.options, this.currentOptions = this.options, this.selectedIndex = -1);
    },
    keepMenuOpen(t) {
      t.stopPropagation(), this.menuIsOpen || (this.menuIsOpen = !0), this.focusSearchInput();
    },
    closeDropdownMenuOnBlur(t) {
      t.path.includes(this.$refs.dropdown) || this.closeDropdownMenu();
    },
    optionIdentifer(t, e = this.selectedParent) {
      return [e == null ? void 0 : e.value, t.label, t.value].join("__");
    },
    isOptionSelected(t, e) {
      const i = this.optionIdentifer(t, e);
      return this.selectedOptions.findIndex((s) => s.__identifier === i) > -1;
    },
    hasSelectedOptions(t, e) {
      return t.some(
        (i) => {
          var s;
          return (s = i.children) != null && s.length ? this.hasSelectedOptions(i.children, i) : this.isOptionSelected(i, e);
        }
      );
    },
    goToPreviousOptions(t = null, e = this.filteredOptions) {
      var i;
      for (const s of e)
        if ((i = s.children) != null && i.length) {
          if (s.label === this.selectedParent.label && s.children.length === this.currentOptions.length) {
            this.currentOptions = e, this.selectedParent = t;
            return;
          }
          this.goToPreviousOptions(s, s.children);
        }
    },
    filterMatchingOptions(t, e) {
      var s;
      let i = [];
      for (const n of e)
        if (n.label.toLowerCase().includes(t.toLowerCase()))
          i.push(n);
        else if ((s = n.children) != null && s.length) {
          const r = this.filterMatchingOptions(t, n.children);
          r.length && i.push({ ...n, children: r });
        }
      return i;
    },
    selectOption(t) {
      var i;
      const e = this.currentOptions[t];
      if ((i = e.children) != null && i.length)
        this.selectedParent = e, this.currentOptions = e.children;
      else {
        const s = this.optionIdentifer(e);
        if (e.selected) {
          if (this.multiple) {
            const n = this.selectedOptions.findIndex(
              (r) => r.__identifier === s
            );
            this.selectedOptions.splice(n, 1);
          } else
            this.selectedOptions = [];
          this.currentOptions[t].selected = !1;
        } else {
          const n = { ...e, __identifier: s };
          this.multiple ? this.selectedOptions.push(n) : (this.selectedOptions = [n], this.closeDropdownMenu()), this.currentOptions[t].selected = !0;
        }
      }
    },
    handleKeyUp(t) {
      var i, s;
      const { key: e } = t;
      if (console.log("key ", e), e === "Escape")
        this.closeDropdownMenu();
      else if (e === "Enter" || e.length === 1) {
        if (this.menuIsOpen || this.keepMenuOpen(t), e === "Enter") {
          if (this.selectedParent && this.selectedIndex === 0)
            this.goToPreviousOptions(), this.selectedIndex = 0;
          else if (this.selectedIndex !== -1) {
            const n = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
            this.selectOption(n), this.selectedParent ? this.selectedIndex = 1 : this.selectedIndex = 0;
          }
        }
      } else if (e === "ArrowUp")
        if (this.selectedIndex === 0) {
          const n = this.currentOptions.length;
          this.selectedIndex = this.selectedParent ? n : n - 1;
        } else
          this.selectedIndex--;
      else if (e === "ArrowRight") {
        const n = this.selectedParent ? this.selectedIndex - 1 : this.selectedIndex;
        (s = (i = this.currentOptions[n]) == null ? void 0 : i.children) != null && s.length && (this.selectOption(n), this.selectedParent && (this.selectedIndex = 1));
      } else if (e === "ArrowDown") {
        const n = this.currentOptions.length;
        this.selectedIndex === (this.selectedParent ? n : n - 1) ? this.selectedIndex = 0 : this.selectedIndex++;
      } else
        e === "ArrowLeft" && this.selectedParent && (this.goToPreviousOptions(), this.selectedIndex = 0);
    }
  }
}, f = {};
var S = /* @__PURE__ */ _(
  C,
  y,
  k,
  !1,
  M,
  "ddc53010",
  null,
  null
);
function M(t) {
  for (let e in f)
    this[e] = f[e];
}
const $ = /* @__PURE__ */ function() {
  return S.exports;
}(), D = {
  install(t, e) {
    t.component("VsDropdown", $);
  }
};
typeof window < "u" && window.Vue && window.Vue.use(D);
export {
  D as default
};
