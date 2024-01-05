import { defineComponent as f, ref as s, onMounted as d, openBlock as p, createElementBlock as _, createElementVNode as v, normalizeStyle as g, createStaticVNode as h } from "vue";
const I = /* @__PURE__ */ h("<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>", 16), y = [
  I
], R = /* @__PURE__ */ f({
  name: "YiScrollData",
  __name: "ScrollData",
  setup(B, { expose: a }) {
    const r = s(null), o = s(-100);
    d(() => {
      const i = document.getElementById("scoll1");
      u(i);
    });
    const u = (l) => {
      var l = l, e = 0, m = parseInt(l.children[0].getBoundingClientRect().height), t = parseInt(l.getBoundingClientRect().height);
      const n = function() {
        t - e < m + t / 2 ? (e = e - 1, o.value = e) : (e = 0, o.value = e);
      };
      let c = setInterval(function() {
        n();
      }, 40);
      l.onmouseover = function() {
        console.log(1), clearInterval(c);
      }, l.onmouseout = function() {
        console.log(2), c = setInterval(function() {
          n();
        }, 40);
      };
    };
    return a({
      focus
    }), (i, l) => (p(), _("div", {
      class: "e-scoll-a",
      id: "scoll1",
      ref_key: "scrollRef",
      ref: r
    }, [
      v("ul", {
        style: g({ marginTop: o.value + "px" })
      }, y, 4)
    ], 512));
  }
});
export {
  R as default
};
