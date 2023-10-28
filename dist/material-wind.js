import { Hct as c, argbFromHex as s, SchemeContent as f, SchemeExpressive as m, SchemeFidelity as l, SchemeMonochrome as h, SchemeNeutral as F, SchemeTonalSpot as _, SchemeVibrant as C, hexFromArgb as x } from "@material/material-color-utilities";
function z(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var d = {}, y = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function p(a, o) {
    return {
      handler: a,
      config: o
    };
  }
  p.withOptions = function(a, o = () => ({})) {
    const i = function(t) {
      return {
        __options: t,
        handler: a(t),
        config: o(t)
      };
    };
    return i.__isOptionsFunction = !0, i.__pluginFunction = a, i.__configFunction = o, i;
  };
  const n = p;
})(y);
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const p = /* @__PURE__ */ n(y);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const a = p.default;
})(d);
let g = d;
var S = (g.__esModule ? g : { default: g }).default;
const v = /* @__PURE__ */ z(S), k = ({ addBase: r, theme: p }) => {
  r({
    body: {
      fontFamily: p("fontFamily.body"),
      backgroundColor: p("colors.light.background"),
      color: p("colors.light.onBackground"),
      fontSmoothing: "antialiased",
      "&.dark": {
        backgroundColor: p("colors.dark.background"),
        color: p("colors.dark.onBackground")
      },
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: p("colors.dark.background"),
        color: p("colors.dark.onBackground")
      }
    }
  });
}, P = (r) => ({
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
    "&.dark": {
      "--bg": r("colors.dark.error"),
      "--color": r("colors.dark.onError")
    },
    "@media (prefers-color-scheme: dark)": {
      "--bg": r("colors.dark.error"),
      "--color": r("colors.dark.onError")
    }
  }
}), w = (r) => ({
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
}), V = ({ addComponents: r, theme: p }) => {
  r({
    ...P(p),
    ...w(p)
  });
};
function T() {
  return (r) => {
    k(r), V(r);
  };
}
const b = {
  colorScheme: "content",
  mainColor: "#0CA678",
  fontFamily: {
    body: "",
    heading: ""
  }
}, u = Array.from({ length: 17 }, (r, p) => p * 50).reduce((r, p) => ({
  ...r,
  [p]: `${p}ms`
}), {}), D = {
  transitionDelay: u,
  transitionDuration: u,
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
}, O = [
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
].reduce((r, p, n) => ({
  ...r,
  ...p.reduce((a, o, i) => ({
    ...a,
    [`elevate-${n === 0 ? "light" : "dark"}-${i + 1}`]: o
  }), {})
}), {}), $ = (r) => ({
  background: x(r.n1.tone(6)),
  onBackground: x(r.n1.tone(90)),
  surface: x(r.n1.tone(6)),
  surfaceDim: x(r.n1.tone(6)),
  surfaceBright: x(r.n1.tone(24)),
  surfaceContainerLowest: x(r.n1.tone(4)),
  surfaceContainerLow: x(r.n1.tone(10)),
  surfaceContainer: x(r.n1.tone(12)),
  surfaceContainerHigh: x(r.n1.tone(17)),
  surfaceContainerHighest: x(r.n1.tone(22)),
  onSurface: x(r.n1.tone(90)),
  surfaceVariant: x(r.n2.tone(30)),
  onSurfaceVariant: x(r.n2.tone(80)),
  inverseSurface: x(r.n1.tone(90)),
  inverseOnSurface: x(r.n1.tone(20)),
  outline: x(r.n2.tone(60)),
  outlineVariant: x(r.n2.tone(30)),
  shadow: x(r.n1.tone(100)),
  scrim: x(r.n1.tone(0)),
  surfaceTint: x(r.a1.tone(80)),
  primary: x(r.a1.tone(80)),
  onPrimary: x(r.a1.tone(20)),
  primaryContainer: x(r.a1.tone(30)),
  onPrimaryContainer: x(r.a1.tone(90)),
  inversePrimary: x(r.a1.tone(40)),
  secondary: x(r.a2.tone(80)),
  onSecondary: x(r.a2.tone(20)),
  secondaryContainer: x(r.a2.tone(30)),
  onSecondaryContainer: x(r.a2.tone(90)),
  tertiary: x(r.a3.tone(80)),
  onTertiary: x(r.a3.tone(20)),
  tertiaryContainer: x(r.a3.tone(30)),
  onTertiaryContainer: x(r.a3.tone(90)),
  error: x(r.error.tone(80)),
  onError: x(r.error.tone(20)),
  errorContainer: x(r.error.tone(30)),
  onErrorContainer: x(r.error.tone(90)),
  primaryFixed: x(r.a1.tone(90)),
  primaryFixedDim: x(r.a1.tone(80)),
  onPrimaryFixed: x(r.a1.tone(10)),
  onPrimaryFixedVariant: x(r.a1.tone(30)),
  secondaryFixed: x(r.a2.tone(90)),
  secondaryFixedDim: x(r.a2.tone(80)),
  onSecondaryFixed: x(r.a2.tone(10)),
  onSecondaryFixedVariant: x(r.a2.tone(30)),
  tertiaryFixed: x(r.a3.tone(90)),
  tertiaryFixedDim: x(r.a3.tone(80)),
  onTertiaryFixed: x(r.a3.tone(10)),
  onTertiaryFixedVariant: x(r.a3.tone(30))
}), B = (r) => ({
  background: x(r.n1.tone(98)),
  onBackground: x(r.n1.tone(10)),
  surface: x(r.n1.tone(98)),
  surfaceDim: x(r.n1.tone(87)),
  surfaceBright: x(r.n1.tone(98)),
  surfaceContainerLowest: x(r.n1.tone(100)),
  surfaceContainerLow: x(r.n1.tone(96)),
  surfaceContainer: x(r.n1.tone(94)),
  surfaceContainerHigh: x(r.n1.tone(92)),
  surfaceContainerHighest: x(r.n1.tone(90)),
  onSurface: x(r.n1.tone(10)),
  surfaceVariant: x(r.n2.tone(90)),
  onSurfaceVariant: x(r.n2.tone(30)),
  inverseSurface: x(r.n1.tone(20)),
  inverseOnSurface: x(r.n1.tone(95)),
  outline: x(r.n2.tone(50)),
  outlineVariant: x(r.n2.tone(80)),
  shadow: x(r.n1.tone(0)),
  scrim: x(r.n1.tone(0)),
  surfaceTint: x(r.a1.tone(40)),
  primary: x(r.a1.tone(40)),
  onPrimary: x(r.a1.tone(100)),
  primaryContainer: x(r.a1.tone(90)),
  onPrimaryContainer: x(r.a1.tone(10)),
  inversePrimary: x(r.a1.tone(80)),
  secondary: x(r.a2.tone(40)),
  onSecondary: x(r.a2.tone(100)),
  secondaryContainer: x(r.a2.tone(90)),
  onSecondaryContainer: x(r.a2.tone(10)),
  tertiary: x(r.a3.tone(40)),
  onTertiary: x(r.a3.tone(100)),
  tertiaryContainer: x(r.a3.tone(90)),
  onTertiaryContainer: x(r.a3.tone(10)),
  error: x(r.error.tone(40)),
  onError: x(r.error.tone(100)),
  errorContainer: x(r.error.tone(90)),
  onErrorContainer: x(r.error.tone(10)),
  primaryFixed: x(r.a1.tone(90)),
  primaryFixedDim: x(r.a1.tone(80)),
  onPrimaryFixed: x(r.a1.tone(10)),
  onPrimaryFixedVariant: x(r.a1.tone(30)),
  secondaryFixed: x(r.a2.tone(90)),
  secondaryFixedDim: x(r.a2.tone(80)),
  onSecondaryFixed: x(r.a2.tone(10)),
  onSecondaryFixedVariant: x(r.a2.tone(30)),
  tertiaryFixed: x(r.a3.tone(90)),
  tertiaryFixedDim: x(r.a3.tone(80)),
  onTertiaryFixed: x(r.a3.tone(10)),
  onTertiaryFixedVariant: x(r.a3.tone(30))
}), E = (r) => Array.from({ length: 101 }, (p, n) => n).reduce((p, n) => ({
  primary: { ...p.primary, [n]: x(r.a1.tone(n)) },
  secondary: { ...p.secondary, [n]: x(r.a2.tone(n)) },
  tertiary: { ...p.tertiary, [n]: x(r.a3.tone(n)) },
  neutral: { ...p.neutral, [n]: x(r.n1.tone(n)) },
  neutralVariant: { ...p.neutralVariant, [n]: x(r.n2.tone(n)) },
  error: { ...p.error, [n]: x(r.error.tone(n)) }
}), { primary: {}, secondary: {}, tertiary: {}, neutral: {}, neutralVariant: {}, error: {} }), e = (r, p) => {
  const n = new r(c.fromInt(s(p)), !1), a = new r(c.fromInt(s(p)), !0), o = {
    light: {
      a1: n.primaryPalette,
      a2: n.secondaryPalette,
      a3: n.tertiaryPalette,
      n1: n.neutralPalette,
      n2: n.neutralVariantPalette,
      error: n.errorPalette
    },
    dark: {
      a1: a.primaryPalette,
      a2: a.secondaryPalette,
      a3: a.tertiaryPalette,
      n1: a.neutralPalette,
      n2: a.neutralVariantPalette,
      error: a.errorPalette
    }
  };
  return {
    ...E(o.light),
    light: B(o.light),
    dark: $(o.dark)
  };
}, H = {
  content: (r) => e(f, r),
  expressive: (r) => e(m, r),
  fidelity: (r) => e(l, r),
  monochrome: (r) => e(h, r),
  neutral: (r) => e(F, r),
  tonalSpot: (r) => e(_, r),
  vibrant: (r) => e(C, r)
};
function W(r = {}) {
  return H[(r == null ? void 0 : r.colorScheme) ?? b.colorScheme](r.mainColor ?? b.mainColor);
}
const L = (r = {}) => Object.entries(r ?? b.fontFamily).reduce((p, [n, a]) => ({
  ...p,
  [n]: [a, "system-ui", "sans-serif"].filter(Boolean)
}), {});
function M(r) {
  return {
    theme: {
      extend: {
        boxShadow: O,
        colors: W(r),
        fontFamily: L(r == null ? void 0 : r.fontFamily),
        ...D
      }
    }
  };
}
const A = v.withOptions(T, M);
export {
  A as default
};
