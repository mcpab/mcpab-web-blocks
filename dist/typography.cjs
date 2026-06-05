'use strict';

var Typography = require('@mui/material/Typography');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Stack = require('@mui/material/Stack');

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

var Typography__default = /*#__PURE__*/_interopDefault(Typography);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Stack__default = /*#__PURE__*/_interopDefault(Stack);

// src/components/typography/Title.tsx
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography__default.default,
    {
      variant: variantLevels[role],
      sx,
      color: "text.primary",
      ...rest
    }
  );
};
Title.displayName = "Title";
var PageTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "page", ...props });
var SectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "section", ...props });
var SubsectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "subsection", ...props });
var SubsubsectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "subsubsection", ...props });
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography__default.default,
    {
      variant: variantLevels[sectionType],
      component,
      sx,
      ...rest
    }
  );
};
TitleLabel.displayName = "TitleLabel";
var PageTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "page", ...p });
var SectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "section", ...p });
var SubsectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "subsection", ...p });
var SubsubsectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "subsubsection", ...p });

// src/lib/text/transform.ts
function toTitleCase(str) {
  if (str.includes("@")) return str;
  return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
var MainTitle = ({
  blocks,
  autoCapitalize = true,
  slotProps
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Stack__default.default, { spacing: 4, ...slotProps == null ? void 0 : slotProps.stack, children: blocks.map((block, index) => {
    var _a;
    const content = typeof block.title === "string" && autoCapitalize ? toTitleCase(block.title) : block.title;
    const isPrimary = ((_a = block.type) != null ? _a : "primary") === "primary";
    const Component = isPrimary ? PageTitle : SectionTitle;
    const defaults = isPrimary ? slotProps == null ? void 0 : slotProps.title : slotProps == null ? void 0 : slotProps.subtitle;
    const componentProps = { ...defaults, ...block == null ? void 0 : block.titleProps };
    return /* @__PURE__ */ jsxRuntime.jsx(Component, { ...componentProps, children: content }, `main-title-${index}`);
  }) });
};
var MainTitle_default = React__namespace.memo(MainTitle);

exports.MainTitle = MainTitle_default;
exports.PageTitle = PageTitle;
exports.PageTitleLabel = PageTitleLabel;
exports.SectionTitle = SectionTitle;
exports.SectionTitleLabel = SectionTitleLabel;
exports.SubsectionTitle = SubsectionTitle;
exports.SubsectionTitleLabel = SubsectionTitleLabel;
exports.SubsubsectionTitle = SubsubsectionTitle;
exports.SubsubsectionTitleLabel = SubsubsectionTitleLabel;
exports.Title = Title;
exports.TitleLabel = TitleLabel;
//# sourceMappingURL=typography.cjs.map
//# sourceMappingURL=typography.cjs.map