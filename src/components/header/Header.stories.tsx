import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { HtmlImage } from '../../core/image/image-types';
import { DefaultLinkLike } from '../../core/link';
import type { DrawerMenuRootProps } from '../menus/drawer/DrawerMenuRoot';
import type { DrawerMenuTree } from '../menus/drawer/DrawerMenuTreeTypes';
import { defaultRenderDropDownMenuNode } from '../menus/dropDown/defaultDropDownMenuRegistry';
import { getDropDownMenuSelectors } from '../menus/dropDown/DropDownMenuSelectors';
import type { NavigationTree } from '../menus/dropDown/DropDownMenuTreeTypes';
import type { DropDownMenuProps } from '../menus/dropDown/DropDown';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';
import Header from './Header';
import type { HeaderLogoProps } from './HeaderLogo';

const currentPath = '/products/integrations/api';

const drawerMenuTree = {
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
          id: 'platform',
          type: 'group',
          label: 'Platform',
          children: [
            {
              id: 'analytics',
              type: 'link',
              label: 'Analytics',
              href: '/products/analytics',
              iconKey: 'analytics',
            },
            {
              id: 'dashboard',
              type: 'link',
              label: 'Dashboard',
              href: '/products/dashboard',
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
                  href: '/products/integrations/api',
                  iconKey: 'api',
                },
                {
                  id: 'webhooks',
                  type: 'link',
                  label: 'Webhooks',
                  href: '/products/integrations/webhooks',
                  iconKey: 'webhook',
                },
              ],
            },
          ],
        },
        {
          id: 'solutions',
          type: 'group',
          label: 'Solutions',
          children: [
            {
              id: 'enterprise',
              type: 'link',
              label: 'Enterprise',
              href: '/solutions/enterprise',
              iconKey: 'enterprise',
            },
            {
              id: 'startups',
              type: 'link',
              label: 'Startups',
              href: '/solutions/startups',
              iconKey: 'rocket',
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
          href: '/about',
          iconKey: 'book',
        },
        {
          id: 'careers',
          type: 'link',
          label: 'Careers',
          href: '/careers',
          iconKey: 'team',
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

const navigationTree = {
  id: 'root',
  type: 'root',
  children: [
    {
      id: 'products',
      type: 'navGroup',
      label: 'Products',
      children: [
        {
          id: 'platform',
          type: 'group',
          label: 'Platform',
          children: [
            {
              id: 'analytics',
              type: 'link',
              label: 'Analytics',
              href: '/products/analytics',
              iconKey: 'analytics',
            },
            {
              id: 'dashboard',
              type: 'link',
              label: 'Dashboard',
              href: '/products/dashboard',
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
                  href: '/products/integrations/api',
                  iconKey: 'api',
                },
                {
                  id: 'webhooks',
                  type: 'link',
                  label: 'Webhooks',
                  href: '/products/integrations/webhooks',
                  iconKey: 'webhook',
                },
              ],
            },
          ],
        },
        {
          id: 'solutions',
          type: 'group',
          label: 'Solutions',
          children: [
            {
              id: 'enterprise',
              type: 'link',
              label: 'Enterprise',
              href: '/solutions/enterprise',
              iconKey: 'enterprise',
            },
            {
              id: 'startups',
              type: 'link',
              label: 'Startups',
              href: '/solutions/startups',
              iconKey: 'rocket',
            },
          ],
        },
      ],
    },
    {
      id: 'company',
      type: 'navGroup',
      label: 'Company',
      children: [
        {
          id: 'about',
          type: 'group',
          label: 'About',
          children: [
            {
              id: 'story',
              type: 'link',
              label: 'Our Story',
              href: '/about/story',
              iconKey: 'book',
            },
            {
              id: 'team',
              type: 'link',
              label: 'Our Team',
              href: '/about/team',
              iconKey: 'team',
            },
          ],
        },
        {
          id: 'careers',
          type: 'group',
          label: 'Careers',
          children: [
            {
              id: 'engineering',
              type: 'link',
              label: 'Engineering',
              href: '/careers/engineering',
              iconKey: 'code',
            },
            {
              id: 'design',
              type: 'link',
              label: 'Design',
              href: '/careers/design',
              iconKey: 'palette',
            },
          ],
        },
      ],
    },
  ],
} as const satisfies NavigationTree;

const logoProps: HeaderLogoProps = {
  ImageComponent: HtmlImage,
  src: 'https://dummyimage.com/240x72/111827/ffffff&text=Acme+Corp',
  alt: 'Acme Corp logo',
  subtitle: 'Platform Engineering',
  width: 180,
  height: 54,
};

const breadMenuProps: BreadMenuProps = {
  pathname: currentPath,
  linkComponent: DefaultLinkLike,
  segmentLabels: {
    api: 'REST API',
  },
};

const drawerProps: DrawerMenuRootProps = {
  currentPath,
  menuTree: drawerMenuTree,
  LinkComponent: DefaultLinkLike,
};

const menuProps: DropDownMenuProps = {
  navigationTree,
  selectors: getDropDownMenuSelectors({
    navigationTree,
    currentPath,
  }),
  rendererContext: {
    LinkComponent: DefaultLinkLike,
    basePadding: 2,
    nodesRenderer: defaultRenderDropDownMenuNode({}),
  },
};

export default {
  title: 'Header/Responsive',
};

export const ResponsiveHeader: Story = () => (
  <Box>
    <Header
      breadMenuProps={breadMenuProps}
      drawerProps={drawerProps}
      logoProps={logoProps}
      menuProps={menuProps}
    />

    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Header Story
      </Typography>
      <Typography variant="body1">
        Resize the preview to switch between the drawer header and desktop dropdown header.
      </Typography>
    </Box>
  </Box>
);

ResponsiveHeader.storyName = 'Header / Responsive Menu';
