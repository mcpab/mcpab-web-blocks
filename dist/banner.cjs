'use strict';

var React = require('react');
var Box = require('@mui/material/Box');
var jsxRuntime = require('react/jsx-runtime');
var Container = require('@mui/material/Container');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Box__default = /*#__PURE__*/_interopDefault(Box);
var Container__default = /*#__PURE__*/_interopDefault(Container);

// src/components/banner/BannerStatic.tsx
function getBoxPosition(objectPosition) {
  const [x = "50%", y = "50%"] = objectPosition.split(" ");
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}
var BackgroundBox = ({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}) => {
  var _a, _b, _c, _d, _e;
  const isStaticImport = typeof (imageConf == null ? void 0 : imageConf.src) === "object" && (imageConf == null ? void 0 : imageConf.src) && "width" in imageConf.src && "height" in imageConf.src;
  const computedAR = (_a = imageConf == null ? void 0 : imageConf.aspectRatio) != null ? _a : isStaticImport ? imageConf.src.width / imageConf.src.height : "16 / 9";
  const placeholder = (_b = imageConf == null ? void 0 : imageConf.placeholder) != null ? _b : isStaticImport ? "blur" : "empty";
  const quality = (_c = imageConf == null ? void 0 : imageConf.quality) != null ? _c : 70;
  let imageLayer = null;
  if (imageConf == null ? void 0 : imageConf.src) {
    const objPos = imageConf.objectPosition || "50% 50%";
    if (imageConf.width) {
      imageLayer = /* @__PURE__ */ jsxRuntime.jsx(
        Box__default.default,
        {
          sx: {
            position: "absolute",
            ...getBoxPosition(objPos),
            width: imageConf.width
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(Box__default.default, { sx: { position: "relative", width: "100%", aspectRatio: computedAR }, children: /* @__PURE__ */ jsxRuntime.jsx(
            ImageComponent,
            {
              alt: "",
              src: imageConf.src,
              fill: true,
              sizes: imageConf.sizes,
              placeholder,
              priority: imageConf.priority,
              quality,
              unoptimized: imageConf.unoptimized,
              style: {
                objectFit: "contain",
                objectPosition: objPos,
                transform: imageConf.transform || "none",
                display: "block"
              }
            }
          ) })
        }
      );
    } else {
      imageLayer = /* @__PURE__ */ jsxRuntime.jsx(Box__default.default, { sx: { position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntime.jsx(Box__default.default, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(
        ImageComponent,
        {
          alt: "",
          src: imageConf.src,
          fill: true,
          sizes: (_d = imageConf.sizes) != null ? _d : "100vw",
          placeholder,
          priority: imageConf.priority,
          quality,
          unoptimized: imageConf.unoptimized,
          style: {
            objectFit: imageConf.mode || "cover",
            objectPosition: objPos,
            opacity: (_e = imageConf.opacity) != null ? _e : 1,
            transform: imageConf.transform || "none",
            zIndex: 0
          }
        }
      ) }) });
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box__default.default,
    {
      sx: { position: "relative", overflow: "hidden", width: "100%", ...sx || {} },
      className,
      ...rest,
      children: [
        imageLayer,
        (imageConf == null ? void 0 : imageConf.overlayColor) && /* @__PURE__ */ jsxRuntime.jsx(
          Box__default.default,
          {
            role: "presentation",
            "aria-hidden": true,
            sx: { position: "absolute", inset: 0, backgroundColor: imageConf.overlayColor }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Box__default.default, { sx: { position: "relative", zIndex: 1, height: "100%" }, children })
      ]
    }
  );
};
var BackgroundBox_default = BackgroundBox;

// src/design/sectionTokens.ts
var SECTION_MIN_H = {
  micro: { xs: "160px", md: "200px", lg: "240px" },
  compact: { xs: "300px", md: "360px", lg: "400px" },
  sm: { xs: "420px", md: "520px", lg: "560px" },
  md: { xs: "520px", md: "640px", lg: "720px" },
  lg: { xs: "600px", md: "760px", lg: "880px" },
  xl: { xs: "720px", md: "880px", lg: "1040px" }
};
function Section({
  size = "md",
  center = false,
  lockHeight = false,
  sx,
  children,
  id,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box__default.default,
    {
      id,
      component: "section",
      sx: [
        {
          // Put the token into a CSS var so descendants can reference it if needed.
          "--section-h": SECTION_MIN_H[size],
          minHeight: "var(--section-h)",
          ...lockHeight ? { height: "var(--section-h)" } : null,
          // makes height definite
          position: "relative",
          // establish containing block for abs children
          display: "flex",
          ...center ? { alignItems: "center", justifyContent: "center" } : null,
          "& > *": { flex: 1, minHeight: "inherit" }
        },
        ...sx ? Array.isArray(sx) ? sx : [sx] : []
      ],
      ...rest,
      children
    }
  );
}
var BannerStatic = ({
  image,
  boxProps,
  size = "micro",
  children,
  ImageComponent
}) => {
  const { id, sx: boxSx, ...restBox } = boxProps != null ? boxProps : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    Section,
    {
      id,
      size,
      ...restBox,
      sx: {
        position: "relative",
        width: "100%",
        ...boxSx
        // consumer overrides last
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(BackgroundBox_default, { imageConf: image, ImageComponent, children: /* @__PURE__ */ jsxRuntime.jsx(
        Container__default.default,
        {
          maxWidth: "lg",
          disableGutters: true,
          sx: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          },
          children
        }
      ) })
    }
  );
};
var BannerStatic_default = React__namespace.memo(BannerStatic);

exports.BannerStatic = BannerStatic_default;
//# sourceMappingURL=banner.cjs.map
//# sourceMappingURL=banner.cjs.map