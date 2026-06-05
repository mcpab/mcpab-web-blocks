import Typography from '@mui/material/Typography';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import Stack from '@mui/material/Stack';

// src/components/typography/Title.tsx
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsx(
    Typography,
    {
      variant: variantLevels[role],
      sx,
      color: "text.primary",
      ...rest
    }
  );
};
Title.displayName = "Title";
var PageTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "page", ...props });
var SectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "section", ...props });
var SubsectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "subsection", ...props });
var SubsubsectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "subsubsection", ...props });
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Typography,
    {
      variant: variantLevels[sectionType],
      component,
      sx,
      ...rest
    }
  );
};
TitleLabel.displayName = "TitleLabel";
var PageTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "page", ...p });
var SectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "section", ...p });
var SubsectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "subsection", ...p });
var SubsubsectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "subsubsection", ...p });

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
  return /* @__PURE__ */ jsx(Stack, { spacing: 4, ...slotProps == null ? void 0 : slotProps.stack, children: blocks.map((block, index) => {
    var _a;
    const content = typeof block.title === "string" && autoCapitalize ? toTitleCase(block.title) : block.title;
    const isPrimary = ((_a = block.type) != null ? _a : "primary") === "primary";
    const Component = isPrimary ? PageTitle : SectionTitle;
    const defaults = isPrimary ? slotProps == null ? void 0 : slotProps.title : slotProps == null ? void 0 : slotProps.subtitle;
    const componentProps = { ...defaults, ...block == null ? void 0 : block.titleProps };
    return /* @__PURE__ */ jsx(Component, { ...componentProps, children: content }, `main-title-${index}`);
  }) });
};
var MainTitle_default = React.memo(MainTitle);

export { MainTitle_default as MainTitle, PageTitle, PageTitleLabel, SectionTitle, SectionTitleLabel, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, Title, TitleLabel };
//# sourceMappingURL=typography.js.map
//# sourceMappingURL=typography.js.map