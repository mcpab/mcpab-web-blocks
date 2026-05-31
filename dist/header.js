import Box4 from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import * as React2 from 'react';
import { createContext, useMemo, useState, Fragment as Fragment$1, useContext, useSyncExternalStore } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// src/components/header/Header.tsx
var DefaultLinkLike = React2.forwardRef(function DefaultLinkLike2(props, ref) {
  return /* @__PURE__ */ jsx("a", { ref, ...props });
});

// src/components/menus/drawer/DrawerMenuSelectors.ts
function walkTree({
  drawerMenuNode,
  currentPath,
  ancestorIds,
  payload
}) {
  if (payload.selectedId !== null) {
    return;
  }
  if (drawerMenuNode.type === "link") {
    if (drawerMenuNode.href === currentPath) {
      payload.selectedId = drawerMenuNode.id;
      payload.ancestorIds = ancestorIds;
    }
    return;
  }
  const childAncestorIds = [...ancestorIds, drawerMenuNode.id];
  for (const child of drawerMenuNode.children) {
    walkTree({
      drawerMenuNode: child,
      currentPath,
      ancestorIds: childAncestorIds,
      payload
    });
  }
}
function getDrawerMenuSelectors({
  drawerMenuTree,
  currentPath
}) {
  const payload = {
    ancestorIds: [],
    selectedId: null
  };
  for (const child of drawerMenuTree.children) {
    walkTree({
      drawerMenuNode: child,
      currentPath,
      ancestorIds: [],
      payload
    });
  }
  const selectedPathIds = payload.ancestorIds;
  const selectedId = payload.selectedId;
  return {
    selectedId,
    selectedPathIds,
    isSelected(nodeId) {
      return selectedId === nodeId;
    },
    isAncestorSelected(nodeId) {
      return selectedPathIds.includes(nodeId);
    }
  };
}
function normalizeKey(input) {
  return input.trim().toLowerCase().replace(/^\/+|\/+$/g, "").replace(/\s+/g, " ").replace(/[ _]+/g, "-");
}
var ICONS_BY_KEY = {
  home: HomeIcon,
  settings: SettingsIcon,
  profile: AccountCircleIcon,
  account: AccountCircleIcon,
  contact: ContactMailIcon,
  help: HelpIcon,
  support: HelpIcon,
  dashboard: DashboardIcon,
  notifications: NotificationsIcon,
  alerts: NotificationsIcon,
  logout: ExitToAppIcon,
  "log-out": ExitToAppIcon,
  signout: ExitToAppIcon,
  "sign-out": ExitToAppIcon,
  login: LoginIcon,
  "log-in": LoginIcon,
  signin: LoginIcon,
  "sign-in": LoginIcon,
  info: InfoIcon,
  information: InfoIcon,
  about: PeopleIcon,
  "about-us": PeopleIcon,
  team: PeopleIcon,
  privacy: PrivacyTipIcon,
  "privacy-policy": PrivacyTipIcon
};
function isIconName(value) {
  return value in ICONS_BY_KEY;
}
var IconPicker = ({ name, fontSize = "medium" }) => {
  const key = normalizeKey(name);
  if (!isIconName(key)) return null;
  const Icon = ICONS_BY_KEY[key];
  return /* @__PURE__ */ jsx(Icon, { fontSize });
};
var IconPicker_default = IconPicker;
var DrawerMenuRenderContext = createContext(null);
function useDrawerMenuRenderContext() {
  const ctx = useContext(DrawerMenuRenderContext);
  if (!ctx)
    throw new Error("DrawerMenuRenderContext missing. Wrap with <DrawerMenuRenderContext>.");
  return ctx;
}
var MenuSelectionContext = createContext(null);
function useMenuSelectionContext() {
  const ctx = useContext(MenuSelectionContext);
  if (!ctx)
    throw new Error(
      "MenuSelectionContext missing. Wrap with <MenuSelectionContext.Provider>."
    );
  return ctx;
}
function DrawerMenuLink({
  href,
  label,
  id,
  disabled,
  icon,
  buttonProps,
  iconProps,
  labelTypographyProps
}) {
  const { LinkComponent } = useDrawerMenuRenderContext();
  const { isSelected } = useMenuSelectionContext();
  const selected = isSelected(id);
  return /* @__PURE__ */ jsxs(
    ListItemButton,
    {
      component: LinkComponent,
      href,
      selected,
      disabled,
      ...buttonProps,
      children: [
        icon && /* @__PURE__ */ jsx(ListItemIcon, { ...iconProps, children: icon }),
        /* @__PURE__ */ jsx(
          ListItemText,
          {
            primary: /* @__PURE__ */ jsx(Typography, { variant: "narrative", ...labelTypographyProps, children: label })
          }
        )
      ]
    }
  );
}
var MenuDepthContext = createContext(null);
function useMenuDepthContext() {
  const ctx = useContext(MenuDepthContext);
  if (!ctx)
    throw new Error("MenuDepthContext missing. Wrap with <MenuDepthContext>.");
  return ctx;
}
var DrawerMenuControllerContext = createContext(null);
function useDrawerMenuControllerContext() {
  const ctx = useContext(DrawerMenuControllerContext);
  if (!ctx) {
    throw new Error(
      "DrawerMenuControllerContext missing. Wrap with <DrawerMenuControllerContext.Provider>."
    );
  }
  return ctx;
}
function createDrawerMenuStore(initialState) {
  let drawerMenuState = { ...initialState };
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState: () => drawerMenuState,
    setState: (next) => {
      if (next === drawerMenuState) return;
      drawerMenuState = typeof next === "function" ? next(drawerMenuState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
function getInitialDrawerMenuStoreState({
  selectors
}) {
  const drawerMenuState = {};
  for (const ancestorId of selectors.selectedPathIds) {
    drawerMenuState[ancestorId] = true;
  }
  return drawerMenuState;
}
function useDrawerMenuNodeOpen(store, nodeId) {
  return useSyncExternalStore(
    store.subscribe,
    () => {
      var _a;
      return (_a = store.getState()[nodeId]) != null ? _a : false;
    },
    () => false
  );
}
function setDrawerMenuNodeOpen(store, nodeId) {
  return (open) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
function DrawerMenuGroup({
  id,
  label,
  items,
  headerProps,
  labelTypographyProps,
  listProps
}) {
  const { closeIndicator, openIndicator, nodesRenderer, basePadding } = useDrawerMenuRenderContext();
  const { depth } = useMenuDepthContext();
  const { drawerMenuStore } = useDrawerMenuControllerContext();
  const openGroup = useDrawerMenuNodeOpen(drawerMenuStore, id);
  const toggleOpen = () => {
    setDrawerMenuNodeOpen(drawerMenuStore, id)(!openGroup);
  };
  const indicator = openGroup ? openIndicator : closeIndicator;
  return /* @__PURE__ */ jsxs(Box4, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ jsxs(
      Box4,
      {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        onClick: toggleOpen,
        paddingLeft: basePadding * depth,
        sx: { cursor: "pointer" },
        ...headerProps,
        children: [
          indicator,
          /* @__PURE__ */ jsx(Typography, { variant: "narrative", fontWeight: "bold", ...labelTypographyProps, children: label })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Collapse, { in: openGroup, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: /* @__PURE__ */ jsx(
      List,
      {
        dense: true,
        disablePadding: true,
        sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
        ...listProps,
        children: items.map((item) => {
          return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node: item }).rendered }, item.id);
        })
      }
    ) }) })
  ] });
}
var defaultDrawerMenuRegistry = {
  group: {
    type: "group",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(
        DrawerMenuGroup,
        {
          id: node.id,
          items: node.children,
          label: node.label,
          ...overrides
        }
      );
    }
  },
  link: {
    type: "link",
    rendering({ node, overrides }) {
      var _a;
      const Icon = /* @__PURE__ */ jsx(IconPicker_default, { name: (_a = node.iconKey) != null ? _a : node.label });
      return /* @__PURE__ */ jsx(
        DrawerMenuLink,
        {
          href: node.href,
          label: node.label,
          disabled: false,
          id: node.id,
          icon: Icon,
          ...overrides
        }
      );
    }
  }
};
function defaultRenderDrawerMenuNode({
  renderedRegistry = defaultDrawerMenuRegistry,
  runtimeOverrides
}) {
  const rt = ({ node }) => {
    var _a, _b;
    const nodeType = node.type;
    const nodeId = node.id;
    if (nodeType === "group") {
      const groupNode = node;
      const overrides = (_a = runtimeOverrides == null ? void 0 : runtimeOverrides[nodeType]) == null ? void 0 : _a[nodeId];
      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: groupNode,
          overrides
        })
      };
    } else if (nodeType === "link") {
      const linkNode = node;
      const overrides = (_b = runtimeOverrides == null ? void 0 : runtimeOverrides[nodeType]) == null ? void 0 : _b[nodeId];
      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: linkNode,
          overrides
        })
      };
    } else {
      return {
        rendered: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Renderer registry is missing support for node type: ",
          nodeType
        ] })
      };
    }
  };
  return rt;
}
function DrawerMenuRoot({
  currentPath,
  menuTree,
  treeOverrides,
  closeIndicator = /* @__PURE__ */ jsx(ChevronRightIcon, { fontSize: "small" }),
  openIndicator = /* @__PURE__ */ jsx(ExpandMoreIcon, { fontSize: "small" }),
  basePadding = 2,
  LinkComponent = DefaultLinkLike,
  anchor
}) {
  const selectors = useMemo(
    () => getDrawerMenuSelectors({ drawerMenuTree: menuTree, currentPath }),
    [menuTree, currentPath]
  );
  const initialDrawerMenuState = useMemo(
    () => getInitialDrawerMenuStoreState({ selectors }),
    [selectors]
  );
  const drawerMenuStore = useMemo(
    () => createDrawerMenuStore(initialDrawerMenuState),
    [initialDrawerMenuState]
  );
  const nodesRenderer = useMemo(
    () => defaultRenderDrawerMenuNode({
      runtimeOverrides: treeOverrides
    }),
    [treeOverrides]
  );
  const renderedContext = useMemo(
    () => ({
      basePadding,
      closeIndicator,
      LinkComponent,
      openIndicator,
      nodesRenderer
    }),
    [basePadding, closeIndicator, LinkComponent, nodesRenderer, openIndicator]
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  return /* @__PURE__ */ jsx(Box4, { children: /* @__PURE__ */ jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsx(DrawerMenuRenderContext.Provider, { value: renderedContext, children: /* @__PURE__ */ jsx(DrawerMenuControllerContext.Provider, { value: { drawerMenuStore }, children: /* @__PURE__ */ jsxs(MenuDepthContext.Provider, { value: { depth: 0 }, children: [
    /* @__PURE__ */ jsx(
      Drawer,
      {
        open: openDrawer,
        onClose: toggleDrawer(false),
        anchor,
        slotProps: {
          paper: {
            sx: { minWidth: 240, pl: 1, pt: 2, overflowY: "auto" },
            elevation: 2
          }
        },
        children: /* @__PURE__ */ jsx(List, { dense: true, disablePadding: true, children: menuTree.children.map((child) => {
          return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node: child }).rendered }, child.id);
        }) })
      }
    ),
    /* @__PURE__ */ jsx(IconButton, { onClick: toggleDrawer(true), "aria-label": "Open menu", children: /* @__PURE__ */ jsx(MenuIcon, {}) })
  ] }) }) }) }) });
}

// src/lib/text/transform.ts
function toTitleCase(str) {
  if (str.includes("@")) return str;
  return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
function normalizePathname(pathname) {
  var _a, _b;
  const fallback = typeof window !== "undefined" ? window.location.pathname : "/";
  const raw = (pathname != null ? pathname : fallback).trim() || "/";
  const noHash = (_a = raw.split("#")[0]) != null ? _a : raw;
  const noQuery = (_b = noHash.split("?")[0]) != null ? _b : noHash;
  return noQuery.startsWith("/") ? noQuery : `/${noQuery}`;
}
var BreadMenu = function({
  pathname,
  linkComponent = DefaultLinkLike,
  hideRoot = false,
  segmentLabels,
  exclude,
  maxItems = 8,
  fontSize = "0.875rem",
  sx,
  titleCase = true
}) {
  const normalizedPath = React2.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React2.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React2.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React2.useMemo(() => {
    const crumbs = [];
    const acc = [];
    segments.forEach((seg, idx) => {
      acc.push(seg);
      const href = "/" + acc.join("/");
      const isLast = idx === segments.length - 1;
      const label = segmentLabels && segmentLabels[seg] || (titleCase ? toTitleCase(seg) : seg);
      if (isLast) {
        crumbs.push(
          /* @__PURE__ */ jsx(
            MuiLink,
            {
              component: "span",
              "aria-current": "page",
              underline: "none",
              color: "text.primary",
              sx: { cursor: "default" },
              children: label
            },
            href
          )
        );
      } else {
        crumbs.push(
          /* @__PURE__ */ jsx(
            MuiLink,
            {
              component: linkComponent,
              href,
              underline: "hover",
              color: "inherit",
              children: label
            },
            href
          )
        );
      }
    });
    return crumbs;
  }, [segments, segmentLabels, titleCase, linkComponent]);
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs(
    MuiBreadcrumbs,
    {
      maxItems,
      itemsAfterCollapse: 2,
      itemsBeforeCollapse: 1,
      sx: [
        { fontSize, color: "inherit", mx: 2, p: 0.5 },
        ...sx ? Array.isArray(sx) ? sx : [sx] : []
      ],
      children: [
        !hideRoot && /* @__PURE__ */ jsx(MuiLink, { component: linkComponent, href: "/", underline: "hover", color: "inherit", children: "Home" }),
        items
      ]
    }
  ) });
};
BreadMenu.displayName = "BreadMenu";
var BreadMenu_default = BreadMenu;
function HeaderLogo({
  ImageComponent,
  src,
  subtitle,
  alt = "Site logo",
  sx,
  height,
  width
}) {
  return /* @__PURE__ */ jsxs(
    Box4,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        ...sx
      },
      children: [
        /* @__PURE__ */ jsx(ImageComponent, { src, width, height, alt }),
        subtitle ? /* @__PURE__ */ jsx(Typography, { variant: "eyebrow", sx: { mt: 1 }, children: subtitle }) : null
      ]
    }
  );
}
function HeaderMinimal({ centerDown, centerUp, left, right }) {
  return (
    //
    /* @__PURE__ */ jsx(AppBar, { position: "sticky", children: /* @__PURE__ */ jsx(Toolbar, { sx: { display: "flex" }, children: /* @__PURE__ */ jsxs(
      Box4,
      {
        display: "flex",
        width: "100%",
        gap: 2,
        sx: {
          flexDirection: {
            xs: "column",
            sm: "row"
          }
        },
        children: [
          /* @__PURE__ */ jsx(Box4, { children: left }),
          /* @__PURE__ */ jsx(Box4, { flex: "1 1 auto", minWidth: 0, children: /* @__PURE__ */ jsxs(Box4, { display: "flex", width: "100%", flexDirection: "column", alignItems: "center", children: [
            centerUp,
            centerDown
          ] }) }),
          /* @__PURE__ */ jsx(Box4, { children: right })
        ]
      }
    ) }) })
  );
}
function HeaderDrawer({ drawerProps, logoProps, breadMenuProps }) {
  return /* @__PURE__ */ jsx(
    HeaderMinimal,
    {
      left: /* @__PURE__ */ jsx(HeaderLogo, { ...logoProps }),
      centerUp: /* @__PURE__ */ jsx(BreadMenu_default, { ...breadMenuProps }),
      right: /* @__PURE__ */ jsx(DrawerMenuRoot, { ...drawerProps })
    }
  );
}
var DropDownMenuRenderContext = createContext(null);
function DropDown({ navigationTree, selectors, rendererContext }) {
  const { nodesRenderer } = rendererContext;
  return /* @__PURE__ */ jsx(
    AppBar,
    {
      position: "sticky",
      color: "default",
      elevation: 0,
      sx: { borderBottom: 1, borderColor: "divider" },
      children: /* @__PURE__ */ jsx(
        Toolbar,
        {
          component: "nav",
          "aria-label": "Primary",
          sx: {
            justifyContent: "center",
            gap: 1
          },
          children: /* @__PURE__ */ jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsx(DropDownMenuRenderContext.Provider, { value: rendererContext, children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: navigationTree.children.map((item) => {
            return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node: item }).rendered }, item.id);
          }) }) }) })
        }
      )
    }
  );
}
function HeaderMenu({ menuProps, logoProps, breadMenuProps }) {
  return /* @__PURE__ */ jsx(
    HeaderMinimal,
    {
      left: /* @__PURE__ */ jsx(HeaderLogo, { ...logoProps }),
      centerUp: /* @__PURE__ */ jsx(BreadMenu_default, { ...breadMenuProps }),
      centerDown: /* @__PURE__ */ jsx(DropDown, { ...menuProps })
    }
  );
}
function Header({ breadMenuProps, drawerProps, logoProps, menuProps }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Box4, { sx: { display: {
      xs: "block",
      sm: "none"
    } }, children: /* @__PURE__ */ jsx(HeaderDrawer, { breadMenuProps, drawerProps, logoProps }) }),
    /* @__PURE__ */ jsx(Box4, { sx: { display: {
      xs: "none",
      sm: "block"
    } }, children: /* @__PURE__ */ jsx(HeaderMenu, { breadMenuProps, logoProps, menuProps }) })
  ] });
}

export { Header, HeaderDrawer, HeaderLogo, HeaderMenu, HeaderMinimal };
//# sourceMappingURL=header.js.map
//# sourceMappingURL=header.js.map