function i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var c = {}, d = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return u;
    }
  });
  function n(r, o) {
    return {
      handler: r,
      config: o
    };
  }
  n.withOptions = function(r, o = () => ({})) {
    const t = function(l) {
      return {
        __options: l,
        handler: r(l),
        config: o(l)
      };
    };
    return t.__isOptionsFunction = !0, t.__pluginFunction = r, t.__configFunction = o, t;
  };
  const u = n;
})(d);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const n = /* @__PURE__ */ u(d);
  function u(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const r = n.default;
})(c);
let a = c;
var s = (a.__esModule ? a : { default: a }).default;
const f = /* @__PURE__ */ i(s), g = (e) => ({
  body: {
    fontFamily: e("fontFamily.body"),
    backgroundColor: e("colors.light.background"),
    color: e("colors.light.onBackground"),
    fontSmoothing: "antialiased",
    "&.dark": {
      backgroundColor: e("colors.dark.background"),
      color: e("colors.dark.onBackground")
    },
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: e("colors.dark.background"),
      color: e("colors.dark.onBackground")
    }
  }
}), _ = ({ addBase: e, theme: n }) => {
  e({
    ...g(n)
  });
}, k = (e) => (n) => {
  console.log("extendTailwind", e), _(n);
}, p = (e) => (console.log("extendTheme", e), {}), b = f.withOptions(k, p);
export {
  b as default
};
