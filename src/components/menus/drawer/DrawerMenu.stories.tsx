import * as React from 'react';
import type { Story } from '@ladle/react';

import { DrawerMenu } from './DrawerMenu';
import type { MenuTreeElement, MenuTreeElementUI, RootOverridesUI } from '../MenuTypes';
import {
  PayloadMap,
  HierarchyTree,
  HierarchyTreeOverrides,
} from 'src/core/hierarchy/hierarchyTypes';
import { DefaultLinkLike } from 'src/core/link';

/**
 * A simple demo menu hierarchy to exercise:
 * - leaf nodes
 * - parent nodes
 * - open / close behavior
 * - overrides
 */
const menuPayloads = {
  home: { label: 'home', link: '/', order: 1 },
  docs: { label: 'docs' },
  api: { label: 'api', link: '/api' },
  guides: { label: 'guides' },
  intro: { label: 'introduction', link: '/docs/intro' },
  advanced: { label: 'advanced', link: '/docs/advanced' },
  about: { label: 'about', link: '/about' },
  whoarewe: { label: 'who we are', link: '/about/whoarewe' },
  thisiswho: { label: 'this is who', link: '/about/thisiswho' },
  thisiswhat: { label: 'this is what', link: '/about/thisiswhat' },
  readmore: { label: 'read more', link: '/readmore' },
  readmoremore: { label: 'read more more', link: '/readmore' },
} as const satisfies PayloadMap<MenuTreeElement>;

type P = typeof menuPayloads;

const hierarchy = {
  root: { label: 'Menu' },
  nodes: {
    home: { payload: menuPayloads.home, parent: 'root' },
    docs: { payload: menuPayloads.docs, parent: 'root' },
    about: { payload: menuPayloads.about, parent: 'root' },
    intro: { payload: menuPayloads.intro, parent: 'docs' },
    advanced: { payload: menuPayloads.advanced, parent: 'docs' },
    guides: { payload: menuPayloads.guides, parent: 'root' },
    api: { payload: menuPayloads.api, parent: 'guides' },
    whoarewe: { payload: menuPayloads.whoarewe, parent: 'about' },
    thisiswho: { payload: menuPayloads.thisiswho, parent: 'about' },
    thisiswhat: { payload: menuPayloads.thisiswhat, parent: 'whoarewe' },
    readmore: { payload: menuPayloads.readmore, parent: 'about' },
    readmoremore: { payload: menuPayloads.readmoremore, parent: 'readmore' },
  },
} as const satisfies HierarchyTree<P, { label: string }>;

const overrides: HierarchyTreeOverrides<P, typeof hierarchy, RootOverridesUI, MenuTreeElementUI> = {
  root: {
    payload: {
      linkComponent: DefaultLinkLike,
    },
  },
  nodes: {
    docs: { payload: { divider: false } },
    about: { payload: { divider: true } },
  },
};
export default {
  title: 'Menu/Drawer',
};

export const DrawerDefault: Story = () => {
  return (
    <div style={{ padding: 16 }}>
      <DrawerMenu hierarchy={hierarchy} overrides={overrides} indent={2} />
    </div>
  );
};

DrawerDefault.storyName = 'Drawer Menu / Default';
