import { defineComponent as x, ref as v, onMounted as w, nextTick as I, openBlock as n, createElementBlock as o, createElementVNode as a, Fragment as c, renderList as p, normalizeStyle as r, toDisplayString as m, normalizeClass as B } from "vue";
const C = { class: "yi-scroll" }, H = { class: "scroll-li header" }, S = ["title"], k = /* @__PURE__ */ x({
  name: "YiScrollData",
  __name: "ScrollData",
  props: {
    data: {},
    header: {},
    rowHeight: { default: 30 },
    tableHeight: { default: 300 }
  },
  setup(g, { expose: f }) {
    const s = g, i = v(0);
    w(() => {
      const d = document.getElementById("scoll1");
      I(() => {
        _(d);
      });
    });
    const _ = (t) => {
      var t = t, e = 0;
      const l = parseInt(t.children[0].getBoundingClientRect().height), y = parseInt(t.getBoundingClientRect().height), u = function() {
        -e < l - y ? (e = e - 1, i.value = e) : (e = 0, i.value = e);
      };
      let h = setInterval(function() {
        u();
      }, 40);
      t.onmouseover = function() {
        clearInterval(h);
      }, t.onmouseout = function() {
        h = setInterval(function() {
          u();
        }, 40);
      };
    };
    return f({
      focus
    }), (d, t) => (n(), o("div", C, [
      a("ul", null, [
        a("li", H, [
          (n(!0), o(c, null, p(s.header, (e) => (n(), o("span", {
            class: "li-span",
            style: r({ minWidth: e.width ? e.width + "px" : "" })
          }, m(e.name), 5))), 256))
        ])
      ]),
      a("div", {
        class: "yi-scoll-a",
        id: "scoll1",
        style: r({ height: s.tableHeight + "px" })
      }, [
        a("ul", {
          style: r({ marginTop: i.value + "px" })
        }, [
          (n(!0), o(c, null, p(s.data, (e) => (n(), o("li", {
            style: r({ height: s.rowHeight + "px" }),
            class: "scroll-li"
          }, [
            (n(!0), o(c, null, p(s.header, (l) => (n(), o("span", {
              title: e[l.prop],
              class: B(["li-span", `span-${l.prop}`]),
              style: r({ minWidth: l.width ? l.width + "px" : "" })
            }, m(e[l.prop]), 15, S))), 256))
          ], 4))), 256))
        ], 4)
      ], 4)
    ]));
  }
});
export {
  k as default
};
