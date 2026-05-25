'use strict';

var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

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

// src/core/image/image-types.tsx
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
var HtmlImage = React__namespace.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
  const mergedStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style != null ? style : {};
  const imgProps = toImgAttrs({ ...props, style: mergedStyle });
  return /* @__PURE__ */ jsxRuntime.jsx("img", { ref, ...imgProps });
});

exports.HtmlImage = HtmlImage;
exports.isStaticImageDataLike = isStaticImageDataLike;
exports.toImgAttrs = toImgAttrs;
//# sourceMappingURL=image.cjs.map
//# sourceMappingURL=image.cjs.map