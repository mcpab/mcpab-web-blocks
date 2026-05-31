import type { Story } from '@ladle/react';

import { DrawerMenuRoot } from './DrawerMenuRoot';
import type { DrawerMenuTree } from './DrawerMenuTreeTypes';

const menuTree = {
  id: 'root',
  type: 'root',
  children: [
    {
      id: 'home',
      type: 'link',
      label: 'Home',
      href: '/',
      iconKey: 'home',
    },
    {
      id: 'products',
      type: 'group',
      label: 'Products',
      children: [
        {
          id: 'analytics',
          type: 'link',
          label: 'Analytics',
          href: '/products/analytics',
          iconKey: 'analytics',
        },
        {
          id: 'platform',
          type: 'group',
          label: 'Platform',
          children: [
            {
              id: 'dashboard',
              type: 'link',
              label: 'Dashboard',
              href: '/products/platform/dashboard',
              iconKey: 'dashboard',
            },
            {
              id: 'integrations',
              type: 'group',
              label: 'Integrations',
              children: [
                {
                  id: 'rest-api',
                  type: 'link',
                  label: 'REST API',
                  href: '/products/platform/integrations/rest-api',
                  iconKey: 'api',
                },
                {
                  id: 'webhooks',
                  type: 'link',
                  label: 'Webhooks',
                  href: '/products/platform/integrations/webhooks',
                  iconKey: 'webhooks',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'company',
      type: 'group',
      label: 'Company',
      children: [
        {
          id: 'about',
          type: 'link',
          label: 'About',
          href: '/company/about',
          iconKey: 'company',
        },
        {
          id: 'careers',
          type: 'link',
          label: 'Careers',
          href: '/company/careers',
          iconKey: 'careers',
        },
      ],
    },
    {
      id: 'blog',
      type: 'link',
      label: 'Blog',
      href: '/blog',
      iconKey: 'blog',
    },
  ],
} as const satisfies DrawerMenuTree;

const treeOverrides = {
  group: {
    products: {
      labelTypographyProps: { fontWeight: 1 },
    },
  },
  link: {
    careers: {
      disabled: true,
      labelTypographyProps: { color: 'text.secondary' },
    },
  },
};

export default {
  title: 'Menu/Drawer Tree',
};

export const DrawerTreeDefault: Story = () => (
  <div style={{ padding: 16, width: 360 }}>
    <DrawerMenuRoot
      currentPath="/products/platform/integrations/rest-api"
      menuTree={menuTree}
      treeOverrides={treeOverrides}
    />
  </div>
);

DrawerTreeDefault.storyName = 'Drawer Tree / Default';
