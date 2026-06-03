import * as React from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// src/components/banner/BannerStatic.tsx
function isStaticImageDataLike(x) {
  if (!x || typeof x !== "object") return false;
  return "src" in x && typeof x.src === "string";
}
function resolveImageSource(p) {
  const { src, width, height } = p;
  const url = isStaticImageDataLike(src) ? src.src : src;
  const resolvedWidth = width != null ? width : isStaticImageDataLike(src) ? src.width : void 0;
  const resolvedHeight = height != null ? height : isStaticImageDataLike(src) ? src.height : void 0;
  return { src: url, width: resolvedWidth, height: resolvedHeight };
}
function toImgAttrs(p) {
  const {
    src: _src,
    width: _w,
    height: _h,
    // Next-ish props to strip:
    fill,
    sizes,
    placeholder,
    priority,
    quality,
    unoptimized,
    // keep style separate (we may override when fill=true)
    style,
    ...rest
  } = p;
  const { src, width, height } = resolveImageSource({ src: _src, width: _w, height: _h });
  return {
    ...rest,
    src,
    width,
    height,
    style
  };
}
React.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
  const mergedStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style != null ? style : {};
  const imgProps = toImgAttrs({ ...props, style: mergedStyle });
  return /* @__PURE__ */ jsx("img", { ref, ...imgProps });
});
function getBoxPosition(objectPosition) {
  const [x = "50%", y = "50%"] = objectPosition.split(" ");
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}
function computeAR({ imageConf }) {
  if (imageConf === void 0) {
    return {
      computedAR: "16 / 9",
      placeholder: "empty"
    };
  }
  let computedAR = "16 / 9";
  let placeholder = "empty";
  const src = imageConf.src;
  if (imageConf.aspectRatio !== void 0) {
    computedAR = imageConf.aspectRatio;
  } else {
    if (isStaticImageDataLike(src) && src.width !== void 0 && src.height !== void 0) {
      computedAR = src.width / src.height;
    }
  }
  if (imageConf.placeholder !== void 0) {
    placeholder = imageConf.placeholder;
  } else {
    if (isStaticImageDataLike(src)) {
      placeholder = "blur";
    }
  }
  return { computedAR, placeholder };
}
var BackgroundBox = ({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}) => {
  var _a, _b, _c;
  const { computedAR, placeholder } = computeAR({ imageConf });
  const quality = (_a = imageConf == null ? void 0 : imageConf.quality) != null ? _a : 70;
  let imageLayer = null;
  if (imageConf == null ? void 0 : imageConf.src) {
    const objPos = imageConf.objectPosition || "50% 50%";
    if (imageConf.width) {
      imageLayer = /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            position: "absolute",
            ...getBoxPosition(objPos),
            width: imageConf.width
          },
          children: /* @__PURE__ */ jsx(Box, { sx: { position: "relative", width: "100%", aspectRatio: computedAR }, children: /* @__PURE__ */ jsx(
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
      imageLayer = /* @__PURE__ */ jsx(Box, { sx: { position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx(Box, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ jsx(
        ImageComponent,
        {
          alt: "",
          src: imageConf.src,
          fill: true,
          sizes: (_b = imageConf.sizes) != null ? _b : "100vw",
          placeholder,
          priority: imageConf.priority,
          quality,
          unoptimized: imageConf.unoptimized,
          style: {
            objectFit: imageConf.mode || "cover",
            objectPosition: objPos,
            opacity: (_c = imageConf.opacity) != null ? _c : 1,
            transform: imageConf.transform || "none",
            zIndex: 0
          }
        }
      ) }) });
    }
  }
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: { position: "relative", overflow: "hidden", width: "100%", ...sx || {} },
      className,
      ...rest,
      children: [
        imageLayer,
        (imageConf == null ? void 0 : imageConf.overlayColor) && /* @__PURE__ */ jsx(
          Box,
          {
            role: "presentation",
            "aria-hidden": true,
            sx: { position: "absolute", inset: 0, backgroundColor: imageConf.overlayColor }
          }
        ),
        /* @__PURE__ */ jsx(Box, { sx: { position: "relative", zIndex: 1, height: "100%" }, children })
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
  return /* @__PURE__ */ jsx(
    Box,
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
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(BackgroundBox_default, { imageConf: image, ImageComponent, children: /* @__PURE__ */ jsx(
        Container,
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
var BannerStatic_default = React.memo(BannerStatic);

export { BannerStatic_default as BannerStatic };
//# sourceMappingURL=banner.js.map
//# sourceMappingURL=banner.js.map