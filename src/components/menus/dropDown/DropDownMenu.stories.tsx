import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import { DefaultLinkLike } from '../../../core/link/linkExtensions';
import { DropDown } from './DropDown';
import { defaultRenderDropDownMenuNode } from './defaultDropDownMenuRegistry';
import { getDropDownMenuSelectors } from './DropDownMenuSelectors';
import type { NavigationTree } from './DropDownMenuTreeTypes';

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

const selectors = getDropDownMenuSelectors({
  navigationTree,
  currentPath: '/products/integrations/api',
});

const renderDropDownMenuNode = defaultRenderDropDownMenuNode({});

export default {
  title: 'Menu/DropDown',
};

export const DropDownDefault: Story = () => (
  <Box display="flex" justifyContent="center" width="100%">
    <DropDown
      navigationTree={navigationTree}
      selectors={selectors}
      rendererContext={{
        LinkComponent: DefaultLinkLike,
        basePadding: 2,
        nodesRenderer: renderDropDownMenuNode,
      }}
    />
  </Box>
);

DropDownDefault.storyName = 'Drop Down Menu / Default';
