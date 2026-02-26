import type { Story } from '@ladle/react';

import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { DefaultLinkLike } from 'src/core/link';
import type { MenuTreeElement, MenuTreeElementUI, RootOverridesUI } from '../MenuTypes';
import { DropDown } from './DropDown';

import Box from '@mui/material/Box';
import { hierarchyToDrawerInput } from '../drawer/hierarchyToDrawerInput';
import { IsSelectedMenuElement } from '../drawer/pathSelectors';

/**
 * Realistic tech-company nav:
 *
 * Home
 * Products  (mega menu)
 *   └─ Platform      (column header)
 *        ├─ Analytics
 *        ├─ Dashboard
 *        └─ Integrations   ← has depth-3 children to test indent
 *             ├─ REST API
 *             └─ Webhooks
 *   └─ Solutions     (column header)
 *        ├─ Enterprise
 *        └─ Startups
 * Company  (mega menu)
 *   └─ About Us      (column header, has link)
 *        ├─ Our Story
 *        └─ Our Team
 *   └─ Careers       (column header, has link)
 *        ├─ Engineering
 *        └─ Design
 * Blog
 */
const menuPayloads = {
  home: { label: 'Home', link: '/' },
  products: { label: 'Products' },
  company: { label: 'Company' },
  blog: { label: 'Blog', link: '/blog' },

  // Products — column headers
  platform: { label: 'Platform' },
  solutions: { label: 'Solutions', link: '/solutions' },

  // Platform items (depth 2)
  analytics: { label: 'Analytics', link: '/products/analytics' },
  dashboard: { label: 'Dashboard', link: '/products/dashboard' },
  integrations: { label: 'Integrations', link: '/products/integrations' },

  // Integrations sub-items (depth 3 — tests indentation)
  restapi: { label: 'REST API', link: '/products/integrations/api' },
  webhooks: { label: 'Webhooks', link: '/products/integrations/webhooks' },

  // Solutions items (depth 2)
  enterprise: { label: 'Enterprise', link: '/solutions/enterprise' },
  startups: { label: 'Startups', link: '/solutions/startups' },

  // Company — column headers
  about: { label: 'About Us', link: '/about' },
  careers: { label: 'Careers', link: '/careers' },

  // About items (depth 2)
  ourstory: { label: 'Our Story', link: '/about/story' },
  ourteam: { label: 'Our Team', link: '/about/team' },

  // Careers items (depth 2)
  engineering: { label: 'Engineering', link: '/careers/engineering' },
  design: { label: 'Design', link: '/careers/design' },
} as const satisfies PayloadMap<MenuTreeElement>;

type P = typeof menuPayloads;

const hierarchy = {
  root: { label: 'Acme Corp' },
  nodes: {
    // Root nav
    home: { payload: menuPayloads.home, parent: 'root' },
    products: { payload: menuPayloads.products, parent: 'root' },
    company: { payload: menuPayloads.company, parent: 'root' },
    blog: { payload: menuPayloads.blog, parent: 'root' },

    // Products mega menu
    platform: { payload: menuPayloads.platform, parent: 'products' },
    solutions: { payload: menuPayloads.solutions, parent: 'products' },

    analytics: { payload: menuPayloads.analytics, parent: 'platform' },
    dashboard: { payload: menuPayloads.dashboard, parent: 'platform' },
    integrations: { payload: menuPayloads.integrations, parent: 'platform' },

    restapi: { payload: menuPayloads.restapi, parent: 'integrations' },
    webhooks: { payload: menuPayloads.webhooks, parent: 'integrations' },

    enterprise: { payload: menuPayloads.enterprise, parent: 'solutions' },
    startups: { payload: menuPayloads.startups, parent: 'solutions' },

    // Company mega menu
    about: { payload: menuPayloads.about, parent: 'company' },
    careers: { payload: menuPayloads.careers, parent: 'company' },

    ourstory: { payload: menuPayloads.ourstory, parent: 'about' },
    ourteam: { payload: menuPayloads.ourteam, parent: 'about' },

    engineering: { payload: menuPayloads.engineering, parent: 'careers' },
    design: { payload: menuPayloads.design, parent: 'careers' },
  },
} as const satisfies HierarchyTree<P, { label: string }>;

const overrides: HierarchyTreeOverrides<P, typeof hierarchy, RootOverridesUI, MenuTreeElementUI> = {
  root: {
    payload: {
      linkComponent: DefaultLinkLike,
    },
  },
  nodes: {},
};

export default {
  title: 'Menu/DropDown',
};

const result = hierarchyToDrawerInput({ hierarchy, overrides });

let Component = <></>;
if (!result.ok) {
  console.error('Failed to prepare menu tree for story:', result.issues);
  Component = (
    <div style={{ color: 'red' }}>
      Menu preparation error: {result.issues[0]?.message ?? 'Unknown error'}
    </div>
  );
} else {
  const { root, treeFromRoot, rootOverrides } = result;

  // Select 'restapi' (depth 3) to exercise selected state + indentation together
  const selector: IsSelectedMenuElement = (id) => id === 'restapi';

  Component = (
    <DropDown
      root={root}
      treeFromRoot={treeFromRoot}
      rootOverrides={rootOverrides}
      selector={selector}
    />
  );
}

export const DropDownDefault: Story = () => (
  <Box display="flex" justifyContent="center" width="100%">
    {Component}
  </Box>
);

DropDownDefault.storyName = 'Drop Down Menu / Default';
