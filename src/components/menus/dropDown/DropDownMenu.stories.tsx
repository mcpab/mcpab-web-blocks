import type { Story } from "@ladle/react";

import { HierarchyTree, HierarchyTreeOverrides, PayloadMap } from "src/core/hierarchy/hierarchyTypes";
import { DefaultLinkLike } from "src/core/link";
import { DropDown } from "./DropDown";
import type {
  MenuTreeElement,
  MenuTreeElementUI,
  RootOverridesUI,
} from "../MenuTypes";

 import Box from '@mui/material/Box';

/**
 * A simple demo menu hierarchy to exercise:
 * - leaf nodes
 * - parent nodes
 * - open / close behavior
 * - overrides
 */
const menuPayloads = {
  home: { label: "Home", link: "/" , order: 1},
  docs: { label: "Docs" },
  api: { label: "API", link: "/api" },
  guides: { label: "Guides" },
  intro: { label: "Introduction", link: "/docs/intro" },
  advanced: { label: "Advanced", link: "/docs/advanced" },
  about: { label: "About", link: "/about" },
  whoarewe: { label: "Who We Are", link: "/about/whoarewe"  },
  thisiswho: { label: "This is Who", link: "/about/thisiswho"  },
  thisiswhat: { label: "This is What", link: "/about/thisiswhat"  },
  readmore: { label: "Read More", link: "/readmore"  },
    readmoremore: { label: "Read More", link: "/readmore"  },
} as const satisfies PayloadMap<MenuTreeElement>;

type P = typeof menuPayloads;

const hierarchy = {
  root: { label: "Menu" },
  nodes: {
    home: { payload: menuPayloads.home, parent: "root" },
    docs: { payload: menuPayloads.docs, parent: "root" },
    about: { payload: menuPayloads.about, parent: "root" },
    intro: { payload: menuPayloads.intro, parent: "docs" },
    advanced: { payload: menuPayloads.advanced, parent: "docs" },
    guides: { payload: menuPayloads.guides, parent: "root" },
    api: { payload: menuPayloads.api, parent: "guides" },
    whoarewe: { payload: menuPayloads.whoarewe, parent: "about" },
    thisiswho: { payload: menuPayloads.thisiswho, parent: "about" },
    thisiswhat: { payload: menuPayloads.thisiswhat, parent: "whoarewe" },
    readmore: { payload: menuPayloads.readmore, parent: "about"},
    readmoremore: { payload: menuPayloads.readmoremore, parent: "readmore"  },
  },
} as const satisfies HierarchyTree<P, { label: string }>;

const overrides: HierarchyTreeOverrides<
  P,
  typeof hierarchy,
  RootOverridesUI,
  MenuTreeElementUI
> = {
  root: {
    payload: {
      linkComponent: DefaultLinkLike,
    },
  },
  nodes: {
    docs: { payload: {  divider: true } },
    guides: { payload: {   } },
    api: { payload: { pickIcon: false } },
    about: { payload: { divider: true } },
  },
};

export default {
  title: "Menu/Dropdown",
};


export const DropDownDefault: Story = () => {
 return (
  <Box display="flex" justifyContent="center" alignItems="top" width='100%'  >
 
      <DropDown hierarchy={hierarchy} overrides={overrides} indent={2} />
 
  </Box>
  );
};

DropDownDefault.storyName = "Drop Down Menu / Default";
