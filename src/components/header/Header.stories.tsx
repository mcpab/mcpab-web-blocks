import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from './Header';
import { HtmlImage } from '../../core/image/image-types';
import { DefaultLinkLike } from '../../core/link';
import type {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from '../../core/hierarchy/hierarchyTypes';
import type {
  MenuTreeElement,
  MenuTreeElementUI,
  RootOverridesUI,
  RootTreeElement,
} from '../menus/MenuTypes';
import type { IsSelectedMenuElement } from '../menus/drawer/pathSelectors';
import type { HeaderLogoProps } from './HeaderLogo';
import type { DrawerMenuProps } from '../menus/drawer/DrawerMenu';
import { hierarchyToDrawerInput } from '../menus/drawer/hierarchyToDrawerInput';
import type { DropDownMenuProps } from '../menus/dropDown/DropDown';
import type { BreadMenuProps } from '../navigation/Breadcrumbs/BreadMenu';

const menuPayloads = {
  home: { label: 'Home', link: '/' },
  products: { label: 'Products' },
  company: { label: 'Company' },
  blog: { label: 'Blog', link: '/blog' },

  platform: { label: 'Platform' },
  solutions: { label: 'Solutions', link: '/solutions' },

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
} as const satisfies HierarchyTree<P, RootTreeElement>;

const overrides: HierarchyTreeOverrides<P, typeof hierarchy, RootOverridesUI, MenuTreeElementUI> = {
  root: {
    payload: {
      linkComponent: DefaultLinkLike,
    },
  },
  nodes: {},
};

export default {
  title: 'Header/Responsive',
};

const pathname = '/products/integrations/api';
const selector: IsSelectedMenuElement = (id) => id === 'restapi';

const logoProps: HeaderLogoProps = {
  src: 'https://dummyimage.com/340x100/111827/ffffff&text=Acme+Corp',
  alt: 'Acme Corp logo',
  subtitle: 'Platform Engineering',
  ImageComponent: HtmlImage,
};

const breadProps: BreadMenuProps = {
  pathname,
};

type PreparedHeaderStoryProps =
  | { ok: false; message: string }
  | {
      ok: true;
      drawerProps: DrawerMenuProps;
      dropDownProps: DropDownMenuProps;
    };

function prepareHeaderStoryProps(): PreparedHeaderStoryProps {
  const result = hierarchyToDrawerInput({ hierarchy, overrides });

  if (!result.ok) {
    console.error('Failed to prepare menu tree for story:', result.issues);
    return { ok: false, message: result.issues[0]?.message ?? 'Unknown error' };
  }

  const drawerProps: DrawerMenuProps = {
    root: result.root,
    treeFromRoot: result.treeFromRoot,
    selector,
  };

  const dropDownProps: DropDownMenuProps = {
    root: result.root,
    treeFromRoot: result.treeFromRoot,
    selector,
  };

  return { ok: true, drawerProps, dropDownProps };
}

const preparedHeaderStoryProps = prepareHeaderStoryProps();

export const ResponsiveHeader: Story = () => {
  if (!preparedHeaderStoryProps.ok) {
    return (
      <div style={{ color: 'red' }}>
        Menu preparation error: {preparedHeaderStoryProps.message}
      </div>
    );
  }

  return (
    <Box>
      <Header
        breadMenuProps={breadProps}
        drawerProps={preparedHeaderStoryProps.drawerProps}
        logoProps={logoProps}
        menuProps={preparedHeaderStoryProps.dropDownProps}
      />

      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Header Story
        </Typography>
        <Typography variant="body1">
          Resize the preview: at and below the md breakpoint, the header switches to drawer menu
          mode.
        </Typography>
      </Box>
    </Box>
  );
};

ResponsiveHeader.storyName = 'Header / Responsive Menu';
