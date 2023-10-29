import { Hct as c, argbFromHex as s, SchemeContent as f, SchemeExpressive as v, SchemeFidelity as _, SchemeMonochrome as $, SchemeNeutral as k, SchemeTonalSpot as h, SchemeVibrant as F, hexFromArgb as o } from "@material/material-color-utilities";
function C(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var u = {}, y = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return x;
    }
  });
  function n(p, i) {
    return {
      handler: p,
      config: i
    };
  }
  n.withOptions = function(p, i = () => ({})) {
    const e = function(d) {
      return {
        __options: d,
        handler: p(d),
        config: i(d)
      };
    };
    return e.__isOptionsFunction = !0, e.__pluginFunction = p, e.__configFunction = i, e;
  };
  const x = n;
})(y);
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return p;
    }
  });
  const n = /* @__PURE__ */ x(y);
  function x(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  const p = n.default;
})(u);
let g = u;
var S = (g.__esModule ? g : { default: g }).default;
const m = /* @__PURE__ */ C(S), w = ({ addBase: r, theme: n }) => {
  r({
    body: {
      "--_bg": `var(--bg, ${n("colors.light.background")})`,
      "--_color": `var(--color, ${n("colors.light.onBackground")})`,
      fontFamily: n("fontFamily.body"),
      backgroundColor: "var(--_bg)",
      color: "var(--_color)",
      fontSmoothing: "antialiased",
      "&.dark": {
        "--bg": n("colors.dark.background"),
        "--color": n("colors.dark.onBackground")
      },
      "@media (prefers-color-scheme: dark)": {
        "--bg": n("colors.dark.background"),
        "--color": n("colors.dark.onBackground")
      }
    }
  });
}, z = (r) => ({
  ".badge": {
    "--_size": "var(--size, 6px)",
    "--_bg": `var(--bg, ${r("colors.light.error")})`,
    "--_color": `var(--color, ${r("colors.light.onError")})`,
    backgroundColor: "var(--_bg)",
    borderRadius: r("borderRadius.full"),
    display: "inline-block",
    color: "var(--_color)",
    height: "var(--_size)",
    width: "var(--_size)",
    "&:not(:empty)": {
      "--size": "auto",
      fontSize: "11px",
      fontWeight: r("fontWeight.medium"),
      letterSpacing: "0.5pt",
      lineHeight: "16pt",
      padding: "0 6px"
    },
    "body.dark &": {
      "--bg": r("colors.dark.error"),
      "--color": r("colors.dark.onError")
    },
    "@media (prefers-color-scheme: dark)": {
      "--bg": r("colors.dark.error"),
      "--color": r("colors.dark.onError")
    }
  }
}), V = (r) => {
  const n = {
    "--_bg": `var(--bg, ${r("colors.neutral.40")})`,
    "--_bg-hover": `var(--bg-hover, ${r("colors.neutral.48")})`,
    "--_bg-active": `var(--bg-active, ${r("colors.neutral.52")})`,
    "--_bg-disabled": `var(--bg-disabled, ${r("colors.neutral.10")}1F)`,
    "--_border": "var(--border, none)",
    "--_border-hover": "var(--border-hover, none)",
    "--_border-active": "var(--border-active, none)",
    "--_border-disabled": "var(--border-disabled, none)",
    "--_color": `var(--color, ${r("colors.neutral.100")})`,
    "--_color-disabled": `var(--color-disabled, ${r("colors.neutral.10")}61)`,
    "--_shadow": "var(--shadow, none)",
    "--_shadow-hover": "var(--shadow-hover, none)"
  }, x = {
    light: (a = "neutral") => ({
      "--bg": r(`colors.${a}.40`),
      "--bg-hover": r(`colors.${a}.48`),
      "--bg-active": r(`colors.${a}.52`),
      "--bg-disabled": `${r(`colors.${a}.10`)}1F`,
      "--color": r(`colors.${a}.100`),
      "--color-disabled": `${r(`colors.${a}.10`)}61`
    }),
    dark: (a = "neutral") => ({
      "--bg": r(`colors.${a}.80`),
      "--bg-hover": r(`colors.${a}.72`),
      "--bg-active": r(`colors.${a}.68`),
      "--bg-disabled": `${r(`colors.${a}.90`)}1F`,
      "--color": r(`colors.${a}.20`),
      "--color-disabled": `${r(`colors.${a}.90`)}61`
    })
  }, p = {
    light: (a = "neutral") => ({
      "--bg": r(`colors.${a}.90`),
      "--bg-hover": r(`colors.${a}.92`),
      "--bg-active": r(`colors.${a}.94`),
      "--bg-disabled": `${r(`colors.${a}.90`)}1F`,
      "--color": r(`colors.${a}.10`),
      "--color-disabled": `${r(`colors.${a}.10`)}61`
    }),
    dark: (a = "neutral") => ({
      "--bg": r(`colors.${a}.30`),
      "--bg-hover": r(`colors.${a}.22`),
      "--bg-active": r(`colors.${a}.18`),
      "--bg-disabled": `${r(`colors.${a}.30`)}1F`,
      "--color": r(`colors.${a}.90`),
      "--color-disabled": `${r(`colors.${a}.90`)}61`
    })
  }, i = {
    light: (a = "neutral") => ({
      "--_bg": r("colors.light.background"),
      "--_bg-hover": `${r(`colors.${a}.40`)}14`,
      "--_bg-active": `${r(`colors.${a}.40`)}1F`,
      "--_bg-disabled": r("colors.light.surface"),
      "--_border": `1px solid ${r("colors.light.outline")}`,
      "--_border-hover": `1px solid ${r("colors.light.outline")}`,
      "--_border-active": `1px solid ${r(`colors.${a}.40`)}`,
      "--_border-disabled": `1px solid ${r("colors.light.onSurface")}1F`,
      "--_color": r(`colors.${a}.40`),
      "--_color-disabled": r(`colors.${a}.40`)
    }),
    dark: (a = "neutral") => ({
      "--_bg": r("colors.dark.background"),
      "--_bg-hover": `${r(`colors.${a}.80`)}14`,
      "--_bg-active": `${r(`colors.${a}.80`)}1F`,
      "--_bg-disabled": r("colors.dark.surface"),
      "--_border": `1px solid ${r("colors.dark.outline")}`,
      "--_border-hover": `1px solid ${r("colors.dark.outline")}`,
      "--_border-active": `1px solid ${r(`colors.${a}.80`)}`,
      "--_border-disabled": `1px solid ${r("colors.dark.onSurface")}1F`,
      "--_color": r(`colors.${a}.80`),
      "--_color-disabled": r(`colors.${a}.80`)
    })
  }, e = {
    light: (a = "neutral") => ({
      "--_bg": r("colors.light.background"),
      "--_bg-hover": `${r(`colors.${a}.40`)}14`,
      "--_bg-active": `${r(`colors.${a}.40`)}1F`,
      "--_bg-disabled": r("colors.light.surface"),
      "--_color": r(`colors.${a}.40`),
      "--_color-disabled": r(`colors.${a}.40`)
    }),
    dark: (a = "neutral") => ({
      "--_bg": r("colors.dark.background"),
      "--_bg-hover": `${r(`colors.${a}.80`)}14`,
      "--_bg-active": `${r(`colors.${a}.80`)}1F`,
      "--_bg-disabled": r("colors.dark.surface"),
      "--_color": r(`colors.${a}.80`),
      "--_color-disabled": r(`colors.${a}.80`)
    })
  }, d = {
    ...x.dark(),
    "&.tonal": { ...p.dark() },
    "&.outlined": { ...i.dark() },
    "&.text": { ...e.dark() },
    "&.elevated": {
      "--shadow": r("boxShadow.elevate-dark-1"),
      "--shadow-hover": r("boxShadow.elevate-dark-0")
    },
    "&.neutralVariant": {
      ...x.dark("neutralVariant"),
      "&.tonal": { ...p.dark("neutralVariant") },
      "&.outlined": { ...i.dark("neutralVariant") },
      "&.text": { ...e.dark("neutralVariant") }
    },
    "&.primary": {
      ...x.dark("primary"),
      "&.tonal": { ...p.dark("primary") },
      "&.outlined": { ...i.dark("primary") },
      "&.text": { ...e.dark("primary") }
    },
    "&.secondary": {
      ...x.dark("secondary"),
      "&.tonal": { ...p.dark("secondary") },
      "&.outlined": { ...i.dark("secondary") },
      "&.text": { ...e.dark("secondary") }
    },
    "&.tertiary": {
      ...x.dark("tertiary"),
      "&.tonal": { ...p.dark("tertiary") },
      "&.outlined": { ...i.dark("tertiary") },
      "&.text": { ...e.dark("tertiary") }
    },
    "&.error": {
      ...x.dark("error"),
      "&.tonal": { ...p.dark("error") },
      "&.outlined": { ...i.dark("error") },
      "&.text": { ...e.dark("error") }
    }
  };
  return {
    ".btn": {
      ...n,
      alignItems: "center",
      backgroundColor: "var(--_bg)",
      border: "var(--_border)",
      borderRadius: r("borderRadius.full"),
      boxShadow: "var(--_shadow)",
      color: "var(--_color)",
      display: "inline-flex",
      fontFamily: r("fontFamily.body"),
      gap: "8px",
      height: "40px",
      justifyContent: "center",
      padding: "0 24px",
      transitionProperty: "all",
      transitionDuration: r("transitionDuration.200"),
      transitionTimingFunction: r("transitionTimingFunction.standard"),
      "&:hover": {
        backgroundColor: "var(--_bg-hover)",
        border: "var(--_border-hover)",
        boxShadow: "var(--_shadow-hover)"
      },
      "&:active, &:focus": {
        backgroundColor: "var(--_bg-active)",
        border: "var(--_border-active)"
      },
      "&:disabled": {
        pointerEvents: "none",
        backgroundColor: "var(--_bg-disabled)",
        color: "var(--_color-disabled)",
        border: "var(--_border-disabled)"
      },
      "&.elevated": {
        "--shadow": r("boxShadow.elevate-light-1"),
        "--shadow-hover": r("boxShadow.elevate-light-0")
      },
      "&.tonal": { ...p.light() },
      "&.outlined": { ...i.light() },
      "&.text": { ...e.light() },
      "&.neutralVariant": {
        ...x.light("neutralVariant"),
        "&.tonal": { ...p.light("neutralVariant") },
        "&.outlined": { ...i.light("neutralVariant") },
        "&.text": { ...e.light("neutralVariant") }
      },
      "&.primary": {
        ...x.light("primary"),
        "&.tonal": { ...p.light("primary") },
        "&.outlined": { ...i.light("primary") },
        "&.text": { ...e.light("primary") }
      },
      "&.secondary": {
        ...x.light("secondary"),
        "&.tonal": { ...p.light("secondary") },
        "&.outlined": { ...i.light("secondary") },
        "&.text": { ...e.light("secondary") }
      },
      "&.tertiary": {
        ...x.light("tertiary"),
        "&.tonal": { ...p.light("tertiary") },
        "&.outlined": { ...i.light("tertiary") },
        "&.text": { ...e.light("tertiary") }
      },
      "&.error": {
        ...x.light("error"),
        "&.tonal": { ...p.light("error") },
        "&.outlined": { ...i.light("error") },
        "&.text": { ...e.light("error") }
      },
      "body.dark &": { ...d },
      "@media (prefers-color-scheme: dark)": { ...d }
    }
  };
}, P = (r) => ({
  ".typo": {
    ...{
      "--_family": `var(--family, ${r("fontFamily.body")})`,
      "--_weight": `var(--weight, ${r("fontWeight.normal")})`,
      "--_size": "var(--size, 14pt)",
      "--_spacing": "var(--spacing, 0.25pt)",
      "--_line": "var(--line, 20pt)"
    },
    fontFamily: "var(--_family)",
    fontWeight: "var(--_weight)",
    fontSize: "var(--_size)",
    letterSpacing: "var(--_spacing)",
    lineHeight: "var(--_line)",
    "&.lg": {
      "--size": "16pt",
      "--spacing": "0.5pt",
      "--line": "24pt"
    },
    "&.sm": {
      "--size": "12pt",
      "--spacing": "0.4pt",
      "--line": "16pt"
    },
    "&.display": {
      "--family": r("fontFamily.heading"),
      "--line": "52pt",
      "--size": "45pt",
      "--spacing": "0",
      "&.lg": {
        "--line": "64pt",
        "--size": "57pt",
        "--spacing": "-0.25pt"
      },
      "&.sm": {
        "--line": "44pt",
        "--size": "36pt"
      }
    },
    "&.headline": {
      "--family": r("fontFamily.heading"),
      "--line": "36pt",
      "--size": "28pt",
      "--spacing": "0",
      "&.lg": {
        "--line": "40pt",
        "--size": "32pt"
      },
      "&.sm": {
        "--line": "32pt",
        "--size": "24pt"
      }
    },
    "&.title": {
      "--family": r("fontFamily.heading"),
      "--line": "24pt",
      "--size": "16pt",
      "--spacing": "0.15pt",
      "--weight": r("fontWeight.medium"),
      "&.lg": {
        "--line": "28pt",
        "--size": "22pt",
        "--spacing": "0",
        "--weight": r("fontWeight.normal")
      },
      "&.sm": {
        "--line": "20pt",
        "--size": "14pt",
        "--spacing": "0.1pt"
      }
    },
    "&.label": {
      "--line": "16pt",
      "--size": "12pt",
      "--spacing": "0.5pt",
      "--weight": r("fontWeight.medium"),
      "&.lg": {
        "--line": "20pt",
        "--size": "14pt",
        "--spacing": "0.1pt"
      },
      "&.sm": {
        "--line": "16pt",
        "--size": "11pt"
      }
    }
  }
}), T = (r) => {
  const n = (p, i) => ({
    [`&.${i}`]: {
      "--color": r(`colors.${p}.${i}`)
    }
  }), x = {};
  return {
    ".divider": {
      "--_color": `var(--color, ${r("colors.light.outlineVariant")})`,
      borderWidth: "0",
      borderTopWidth: "1px",
      borderColor: "var(--_color)",
      borderStyle: "solid",
      height: "1px",
      width: "inherit",
      "&.vertical": {
        borderTopWidth: "0",
        borderLeftWidth: "1px",
        height: "inherit",
        width: "1px"
      },
      ...n("light", "primary"),
      ...n("light", "secondary"),
      ...n("light", "tertiary"),
      ...n("light", "error"),
      "body.dark &": { ...x },
      "@media (prefers-color-scheme: dark)": { ...x }
    }
  };
}, D = ({ addComponents: r, theme: n }) => {
  r({
    ...z(n),
    ...V(n),
    ...T(n),
    ...P(n)
  });
};
function O() {
  return (r) => {
    w(r), D(r);
  };
}
const b = {
  colorScheme: "content",
  mainColor: "#0CA678",
  fontFamily: {
    body: "",
    heading: ""
  }
}, l = Array.from({ length: 17 }, (r, n) => n * 50).reduce((r, n) => ({
  ...r,
  [n]: `${n}ms`
}), {}), W = {
  transitionDelay: l,
  transitionDuration: l,
  transitionTimingFunction: {
    emphasized: "cubic-bezier(0.2, 0, 0, 1)",
    "emphasized-in": "cubic-bezier(0.3, 0, 0.8, 0.15)",
    "emphasized-out": "cubic-bezier(0.05, 0.7, 0.1, 1)",
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    "standard-in": "cubic-bezier(0.3, 0, 1, 1)",
    "standard-out": "cubic-bezier(0, 0, 0, 1)",
    legacy: "cubic-bezier(0.4, 0, 0.2, 1)",
    "legacy-in": "cubic-bezier(0.4, 0, 1, 1)",
    "legacy-out": "cubic-bezier(0, 0, 0.2, 1)"
  }
}, E = [
  [
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  [
    "0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)",
    "0px 3px 1px -2px rgba(255,255,255,0.2),0px 2px 2px 0px rgba(255,255,255,0.14),0px 1px 5px 0px rgba(255,255,255,0.12)",
    "0px 3px 3px -2px rgba(255,255,255,0.2),0px 3px 4px 0px rgba(255,255,255,0.14),0px 1px 8px 0px rgba(255,255,255,0.12)",
    "0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14),0px 1px 10px 0px rgba(255,255,255,0.12)",
    "0px 3px 5px -1px rgba(255,255,255,0.2),0px 5px 8px 0px rgba(255,255,255,0.14),0px 1px 14px 0px rgba(255,255,255,0.12)",
    "0px 3px 5px -1px rgba(255,255,255,0.2),0px 6px 10px 0px rgba(255,255,255,0.14),0px 1px 18px 0px rgba(255,255,255,0.12)",
    "0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)",
    "0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)",
    "0px 5px 6px -3px rgba(255,255,255,0.2),0px 9px 12px 1px rgba(255,255,255,0.14),0px 3px 16px 2px rgba(255,255,255,0.12)",
    "0px 6px 6px -3px rgba(255,255,255,0.2),0px 10px 14px 1px rgba(255,255,255,0.14),0px 4px 18px 3px rgba(255,255,255,0.12)",
    "0px 6px 7px -4px rgba(255,255,255,0.2),0px 11px 15px 1px rgba(255,255,255,0.14),0px 4px 20px 3px rgba(255,255,255,0.12)",
    "0px 7px 8px -4px rgba(255,255,255,0.2),0px 12px 17px 2px rgba(255,255,255,0.14),0px 5px 22px 4px rgba(255,255,255,0.12)",
    "0px 7px 8px -4px rgba(255,255,255,0.2),0px 13px 19px 2px rgba(255,255,255,0.14),0px 5px 24px 4px rgba(255,255,255,0.12)",
    "0px 7px 9px -4px rgba(255,255,255,0.2),0px 14px 21px 2px rgba(255,255,255,0.14),0px 5px 26px 4px rgba(255,255,255,0.12)",
    "0px 8px 9px -5px rgba(255,255,255,0.2),0px 15px 22px 2px rgba(255,255,255,0.14),0px 6px 28px 5px rgba(255,255,255,0.12)",
    "0px 8px 10px -5px rgba(255,255,255,0.2),0px 16px 24px 2px rgba(255,255,255,0.14),0px 6px 30px 5px rgba(255,255,255,0.12)",
    "0px 8px 11px -5px rgba(255,255,255,0.2),0px 17px 26px 2px rgba(255,255,255,0.14),0px 6px 32px 5px rgba(255,255,255,0.12)",
    "0px 9px 11px -5px rgba(255,255,255,0.2),0px 18px 28px 2px rgba(255,255,255,0.14),0px 7px 34px 6px rgba(255,255,255,0.12)",
    "0px 9px 12px -6px rgba(255,255,255,0.2),0px 19px 29px 2px rgba(255,255,255,0.14),0px 7px 36px 6px rgba(255,255,255,0.12)",
    "0px 10px 13px -6px rgba(255,255,255,0.2),0px 20px 31px 3px rgba(255,255,255,0.14),0px 8px 38px 7px rgba(255,255,255,0.12)",
    "0px 10px 13px -6px rgba(255,255,255,0.2),0px 21px 33px 3px rgba(255,255,255,0.14),0px 8px 40px 7px rgba(255,255,255,0.12)",
    "0px 10px 14px -6px rgba(255,255,255,0.2),0px 22px 35px 3px rgba(255,255,255,0.14),0px 8px 42px 7px rgba(255,255,255,0.12)",
    "0px 11px 14px -7px rgba(255,255,255,0.2),0px 23px 36px 3px rgba(255,255,255,0.14),0px 9px 44px 8px rgba(255,255,255,0.12)",
    "0px 11px 15px -7px rgba(255,255,255,0.2),0px 24px 38px 3px rgba(255,255,255,0.14),0px 9px 46px 8px rgba(255,255,255,0.12)"
  ]
].reduce((r, n, x) => ({
  ...r,
  ...n.reduce((p, i, e) => ({
    ...p,
    [`elevate-${x === 0 ? "light" : "dark"}-${e + 1}`]: i
  }), {})
}), {}), B = (r) => ({
  background: o(r.n1.tone(6)),
  onBackground: o(r.n1.tone(90)),
  surface: o(r.n1.tone(6)),
  surfaceDim: o(r.n1.tone(6)),
  surfaceBright: o(r.n1.tone(24)),
  surfaceContainerLowest: o(r.n1.tone(4)),
  surfaceContainerLow: o(r.n1.tone(10)),
  surfaceContainer: o(r.n1.tone(12)),
  surfaceContainerHigh: o(r.n1.tone(17)),
  surfaceContainerHighest: o(r.n1.tone(22)),
  onSurface: o(r.n1.tone(90)),
  surfaceVariant: o(r.n2.tone(30)),
  onSurfaceVariant: o(r.n2.tone(80)),
  inverseSurface: o(r.n1.tone(90)),
  inverseOnSurface: o(r.n1.tone(20)),
  outline: o(r.n2.tone(60)),
  outlineVariant: o(r.n2.tone(30)),
  shadow: o(r.n1.tone(100)),
  scrim: o(r.n1.tone(0)),
  surfaceTint: o(r.a1.tone(80)),
  primary: o(r.a1.tone(80)),
  onPrimary: o(r.a1.tone(20)),
  primaryContainer: o(r.a1.tone(30)),
  onPrimaryContainer: o(r.a1.tone(90)),
  inversePrimary: o(r.a1.tone(40)),
  secondary: o(r.a2.tone(80)),
  onSecondary: o(r.a2.tone(20)),
  secondaryContainer: o(r.a2.tone(30)),
  onSecondaryContainer: o(r.a2.tone(90)),
  tertiary: o(r.a3.tone(80)),
  onTertiary: o(r.a3.tone(20)),
  tertiaryContainer: o(r.a3.tone(30)),
  onTertiaryContainer: o(r.a3.tone(90)),
  error: o(r.error.tone(80)),
  onError: o(r.error.tone(20)),
  errorContainer: o(r.error.tone(30)),
  onErrorContainer: o(r.error.tone(90)),
  primaryFixed: o(r.a1.tone(90)),
  primaryFixedDim: o(r.a1.tone(80)),
  onPrimaryFixed: o(r.a1.tone(10)),
  onPrimaryFixedVariant: o(r.a1.tone(30)),
  secondaryFixed: o(r.a2.tone(90)),
  secondaryFixedDim: o(r.a2.tone(80)),
  onSecondaryFixed: o(r.a2.tone(10)),
  onSecondaryFixedVariant: o(r.a2.tone(30)),
  tertiaryFixed: o(r.a3.tone(90)),
  tertiaryFixedDim: o(r.a3.tone(80)),
  onTertiaryFixed: o(r.a3.tone(10)),
  onTertiaryFixedVariant: o(r.a3.tone(30))
}), M = (r) => ({
  background: o(r.n1.tone(98)),
  onBackground: o(r.n1.tone(10)),
  surface: o(r.n1.tone(98)),
  surfaceDim: o(r.n1.tone(87)),
  surfaceBright: o(r.n1.tone(98)),
  surfaceContainerLowest: o(r.n1.tone(100)),
  surfaceContainerLow: o(r.n1.tone(96)),
  surfaceContainer: o(r.n1.tone(94)),
  surfaceContainerHigh: o(r.n1.tone(92)),
  surfaceContainerHighest: o(r.n1.tone(90)),
  onSurface: o(r.n1.tone(10)),
  surfaceVariant: o(r.n2.tone(90)),
  onSurfaceVariant: o(r.n2.tone(30)),
  inverseSurface: o(r.n1.tone(20)),
  inverseOnSurface: o(r.n1.tone(95)),
  outline: o(r.n2.tone(50)),
  outlineVariant: o(r.n2.tone(80)),
  shadow: o(r.n1.tone(0)),
  scrim: o(r.n1.tone(0)),
  surfaceTint: o(r.a1.tone(40)),
  primary: o(r.a1.tone(40)),
  onPrimary: o(r.a1.tone(100)),
  primaryContainer: o(r.a1.tone(90)),
  onPrimaryContainer: o(r.a1.tone(10)),
  inversePrimary: o(r.a1.tone(80)),
  secondary: o(r.a2.tone(40)),
  onSecondary: o(r.a2.tone(100)),
  secondaryContainer: o(r.a2.tone(90)),
  onSecondaryContainer: o(r.a2.tone(10)),
  tertiary: o(r.a3.tone(40)),
  onTertiary: o(r.a3.tone(100)),
  tertiaryContainer: o(r.a3.tone(90)),
  onTertiaryContainer: o(r.a3.tone(10)),
  error: o(r.error.tone(40)),
  onError: o(r.error.tone(100)),
  errorContainer: o(r.error.tone(90)),
  onErrorContainer: o(r.error.tone(10)),
  primaryFixed: o(r.a1.tone(90)),
  primaryFixedDim: o(r.a1.tone(80)),
  onPrimaryFixed: o(r.a1.tone(10)),
  onPrimaryFixedVariant: o(r.a1.tone(30)),
  secondaryFixed: o(r.a2.tone(90)),
  secondaryFixedDim: o(r.a2.tone(80)),
  onSecondaryFixed: o(r.a2.tone(10)),
  onSecondaryFixedVariant: o(r.a2.tone(30)),
  tertiaryFixed: o(r.a3.tone(90)),
  tertiaryFixedDim: o(r.a3.tone(80)),
  onTertiaryFixed: o(r.a3.tone(10)),
  onTertiaryFixedVariant: o(r.a3.tone(30))
}), H = (r) => Array.from({ length: 101 }, (n, x) => x).reduce((n, x) => ({
  primary: { ...n.primary, [x]: o(r.a1.tone(x)) },
  secondary: { ...n.secondary, [x]: o(r.a2.tone(x)) },
  tertiary: { ...n.tertiary, [x]: o(r.a3.tone(x)) },
  neutral: { ...n.neutral, [x]: o(r.n1.tone(x)) },
  neutralVariant: { ...n.neutralVariant, [x]: o(r.n2.tone(x)) },
  error: { ...n.error, [x]: o(r.error.tone(x)) }
}), { primary: {}, secondary: {}, tertiary: {}, neutral: {}, neutralVariant: {}, error: {} }), t = (r, n) => {
  const x = new r(c.fromInt(s(n)), !1), p = new r(c.fromInt(s(n)), !0), i = {
    light: {
      a1: x.primaryPalette,
      a2: x.secondaryPalette,
      a3: x.tertiaryPalette,
      n1: x.neutralPalette,
      n2: x.neutralVariantPalette,
      error: x.errorPalette
    },
    dark: {
      a1: p.primaryPalette,
      a2: p.secondaryPalette,
      a3: p.tertiaryPalette,
      n1: p.neutralPalette,
      n2: p.neutralVariantPalette,
      error: p.errorPalette
    }
  };
  return {
    ...H(i.light),
    light: M(i.light),
    dark: B(i.dark)
  };
}, L = {
  content: (r) => t(f, r),
  expressive: (r) => t(v, r),
  fidelity: (r) => t(_, r),
  monochrome: (r) => t($, r),
  neutral: (r) => t(k, r),
  tonalSpot: (r) => t(h, r),
  vibrant: (r) => t(F, r)
};
function j(r = {}) {
  return L[(r == null ? void 0 : r.colorScheme) ?? b.colorScheme](r.mainColor ?? b.mainColor);
}
const A = (r = {}) => Object.entries(r ?? b.fontFamily).reduce((n, [x, p]) => ({
  ...n,
  [x]: [p, "system-ui", "sans-serif"].filter(Boolean)
}), {});
function R(r) {
  return {
    theme: {
      extend: {
        boxShadow: E,
        colors: j(r),
        fontFamily: A(r == null ? void 0 : r.fontFamily),
        ...W
      }
    }
  };
}
const q = m.withOptions(O, R);
export {
  q as default
};
