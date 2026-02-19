import type { Story } from '@ladle/react';

import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { DefaultLinkLike } from 'src/core/link';
import type { MenuTreeElement, MenuTreeElementUI, RootOverridesUI } from '../MenuTypes';
import { DrawerMenu } from './DrawerMenu';
import { hierarchyToDrawerProps } from './hierarchyToDrawerProps';
import { IsSelectedMenuElement } from './pathSelectors';

/**
 * Same Acme Corp nav as the dropdown story — but rendered as a collapsible sidebar.
 *
 * Home
 * Products  (collapsible)
 *   └─ Platform      (collapsible)
 *        ├─ Analytics
 *        ├─ Dashboard
 *        └─ Integrations   (collapsible — depth 3 children test indentation)
 *             ├─ REST API   ← selected
 *             └─ Webhooks
 *   └─ Solutions     (collapsible)
 *        ├─ Enterprise
 *        └─ Startups
 * Company  (collapsible)
 *   └─ About Us      (collapsible)
 *        ├─ Our Story
 *        └─ Our Team
 *   └─ Careers       (collapsible)
 *        ├─ Engineering
 *        └─ Design
 * Blog
 */
const menuPayloads = {
  home: { label: 'Home', link: '/' },
  products: { label: 'Products' },
  company: { label: 'Company' },
  blog: { label: 'Blog', link: '/blog' },

  platform: { label: 'Platform' },
  solutions: { label: 'Solutions' },

  analytics: { label: 'Analytics', link: '/products/analytics' },
  dashboard: { label: 'Dashboard', link: '/products/dashboard' },
  integrations: { label: 'Integrations', link: '/products/integrations' },

  restapi: { label: 'REST API', link: '/products/integrations/api' },
  webhooks: { label: 'Webhooks', link: '/products/integrations/webhooks' },

  enterprise: { label: 'Enterprise', link: '/solutions/enterprise' },
  startups: { label: 'Startups', link: '/solutions/startups' },

  about: { label: 'About Us', link: '/about' },
  careers: { label: 'Careers', link: '/careers' },

  ourstory: { label: 'Our Story', link: '/about/story' },
  ourteam: { label: 'Our Team', link: '/about/team' },

  engineering: { label: 'Engineering', link: '/careers/engineering' },
  design: { label: 'Design', link: '/careers/design' },
} as const satisfies PayloadMap<MenuTreeElement>;

type P = typeof menuPayloads;

const hierarchy = {
  root: { label: 'Acme Corp' },
  nodes: {
    home: { payload: menuPayloads.home, parent: 'root' },
    products: { payload: menuPayloads.products, parent: 'root' },
    company: { payload: menuPayloads.company, parent: 'root' },
    blog: { payload: menuPayloads.blog, parent: 'root' },

    platform: { payload: menuPayloads.platform, parent: 'products' },
    solutions: { payload: menuPayloads.solutions, parent: 'products' },

    analytics: { payload: menuPayloads.analytics, parent: 'platform' },
    dashboard: { payload: menuPayloads.dashboard, parent: 'platform' },
    integrations: { payload: menuPayloads.integrations, parent: 'platform' },

    restapi: { payload: menuPayloads.restapi, parent: 'integrations' },
    webhooks: { payload: menuPayloads.webhooks, parent: 'integrations' },

    enterprise: { payload: menuPayloads.enterprise, parent: 'solutions' },
    startups: { payload: menuPayloads.startups, parent: 'solutions' },

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
  title: 'Menu/Drawer',
};

const result = hierarchyToDrawerProps({ hierarchy, overrides });

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
    <DrawerMenu
      root={root}
      treeFromRoot={treeFromRoot}
      rootOverrides={rootOverrides}
      anchor="left"
      indent={2}
      selector={selector}
    />
  );
}

export const DrawerDefault: Story = () => <div style={{ padding: 16 }}>{Component}</div>;

DrawerDefault.storyName = 'Drawer Menu / Default';
