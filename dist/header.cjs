'use strict';

var Box4 = require('@mui/material/Box');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var List = require('@mui/material/List');
var React2 = require('react');
var jsxRuntime = require('react/jsx-runtime');
var HomeIcon = require('@mui/icons-material/Home');
var SettingsIcon = require('@mui/icons-material/Settings');
var AccountCircleIcon = require('@mui/icons-material/AccountCircle');
var ContactMailIcon = require('@mui/icons-material/ContactMail');
var HelpIcon = require('@mui/icons-material/Help');
var DashboardIcon = require('@mui/icons-material/Dashboard');
var NotificationsIcon = require('@mui/icons-material/Notifications');
var ExitToAppIcon = require('@mui/icons-material/ExitToApp');
var LoginIcon = require('@mui/icons-material/Login');
var InfoIcon = require('@mui/icons-material/Info');
var PeopleIcon = require('@mui/icons-material/People');
var PrivacyTipIcon = require('@mui/icons-material/PrivacyTip');
var ListItemButton = require('@mui/material/ListItemButton');
var ListItemText = require('@mui/material/ListItemText');
var Typography = require('@mui/material/Typography');
var ListItemIcon = require('@mui/material/ListItemIcon');
var Collapse = require('@mui/material/Collapse');
var Drawer = require('@mui/material/Drawer');
var IconButton = require('@mui/material/IconButton');
var MenuIcon = require('@mui/icons-material/Menu');
var MuiBreadcrumbs = require('@mui/material/Breadcrumbs');
var MuiLink = require('@mui/material/Link');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var Box4__default = /*#__PURE__*/_interopDefault(Box4);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefault(ChevronRightIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
var List__default = /*#__PURE__*/_interopDefault(List);
var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var HomeIcon__default = /*#__PURE__*/_interopDefault(HomeIcon);
var SettingsIcon__default = /*#__PURE__*/_interopDefault(SettingsIcon);
var AccountCircleIcon__default = /*#__PURE__*/_interopDefault(AccountCircleIcon);
var ContactMailIcon__default = /*#__PURE__*/_interopDefault(ContactMailIcon);
var HelpIcon__default = /*#__PURE__*/_interopDefault(HelpIcon);
var DashboardIcon__default = /*#__PURE__*/_interopDefault(DashboardIcon);
var NotificationsIcon__default = /*#__PURE__*/_interopDefault(NotificationsIcon);
var ExitToAppIcon__default = /*#__PURE__*/_interopDefault(ExitToAppIcon);
var LoginIcon__default = /*#__PURE__*/_interopDefault(LoginIcon);
var InfoIcon__default = /*#__PURE__*/_interopDefault(InfoIcon);
var PeopleIcon__default = /*#__PURE__*/_interopDefault(PeopleIcon);
var PrivacyTipIcon__default = /*#__PURE__*/_interopDefault(PrivacyTipIcon);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Typography__default = /*#__PURE__*/_interopDefault(Typography);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var IconButton__default = /*#__PURE__*/_interopDefault(IconButton);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var MuiBreadcrumbs__default = /*#__PURE__*/_interopDefault(MuiBreadcrumbs);
var MuiLink__default = /*#__PURE__*/_interopDefault(MuiLink);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);

// src/components/header/Header.tsx
var DefaultLinkLike = React2__namespace.forwardRef(function DefaultLinkLike2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx("a", { ref, ...props });
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
  home: HomeIcon__default.default,
  settings: SettingsIcon__default.default,
  profile: AccountCircleIcon__default.default,
  account: AccountCircleIcon__default.default,
  contact: ContactMailIcon__default.default,
  help: HelpIcon__default.default,
  support: HelpIcon__default.default,
  dashboard: DashboardIcon__default.default,
  notifications: NotificationsIcon__default.default,
  alerts: NotificationsIcon__default.default,
  logout: ExitToAppIcon__default.default,
  "log-out": ExitToAppIcon__default.default,
  signout: ExitToAppIcon__default.default,
  "sign-out": ExitToAppIcon__default.default,
  login: LoginIcon__default.default,
  "log-in": LoginIcon__default.default,
  signin: LoginIcon__default.default,
  "sign-in": LoginIcon__default.default,
  info: InfoIcon__default.default,
  information: InfoIcon__default.default,
  about: PeopleIcon__default.default,
  "about-us": PeopleIcon__default.default,
  team: PeopleIcon__default.default,
  privacy: PrivacyTipIcon__default.default,
  "privacy-policy": PrivacyTipIcon__default.default
};
function isIconName(value) {
  return value in ICONS_BY_KEY;
}
var IconPicker = ({ name, fontSize = "medium" }) => {
  const key = normalizeKey(name);
  if (!isIconName(key)) return null;
  const Icon = ICONS_BY_KEY[key];
  return /* @__PURE__ */ jsxRuntime.jsx(Icon, { fontSize });
};
var IconPicker_default = IconPicker;
var DrawerMenuRenderContext = React2.createContext(null);
function useDrawerMenuRenderContext() {
  const ctx = React2.useContext(DrawerMenuRenderContext);
  if (!ctx)
    throw new Error("DrawerMenuRenderContext missing. Wrap with <DrawerMenuRenderContext>.");
  return ctx;
}
var MenuSelectionContext = React2.createContext(null);
function useMenuSelectionContext() {
  const ctx = React2.useContext(MenuSelectionContext);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ListItemButton__default.default,
    {
      component: LinkComponent,
      href,
      selected,
      disabled,
      ...buttonProps,
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { ...iconProps, children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ListItemText__default.default,
          {
            primary: /* @__PURE__ */ jsxRuntime.jsx(Typography__default.default, { variant: "narrative", ...labelTypographyProps, children: label })
          }
        )
      ]
    }
  );
}
var MenuDepthContext = React2.createContext(null);
function useMenuDepthContext() {
  const ctx = React2.useContext(MenuDepthContext);
  if (!ctx)
    throw new Error("MenuDepthContext missing. Wrap with <MenuDepthContext>.");
  return ctx;
}
var DrawerMenuControllerContext = React2.createContext(null);
function useDrawerMenuControllerContext() {
  const ctx = React2.useContext(DrawerMenuControllerContext);
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
  return React2.useSyncExternalStore(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Box4__default.default, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Box4__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Typography__default.default, { variant: "narrative", fontWeight: "bold", ...labelTypographyProps, children: label })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: openGroup, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(
      List__default.default,
      {
        dense: true,
        disablePadding: true,
        sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
        ...listProps,
        children: items.map((item) => {
          return /* @__PURE__ */ jsxRuntime.jsx(React2.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
        })
      }
    ) }) })
  ] });
}
var defaultDrawerMenuRegistry = {
  group: {
    type: "group",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(
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
      const Icon = /* @__PURE__ */ jsxRuntime.jsx(IconPicker_default, { name: (_a = node.iconKey) != null ? _a : node.label });
      return /* @__PURE__ */ jsxRuntime.jsx(
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
        rendered: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
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
  closeIndicator = /* @__PURE__ */ jsxRuntime.jsx(ChevronRightIcon__default.default, { fontSize: "small" }),
  openIndicator = /* @__PURE__ */ jsxRuntime.jsx(ExpandMoreIcon__default.default, { fontSize: "small" }),
  basePadding = 2,
  LinkComponent = DefaultLinkLike,
  anchor
}) {
  const selectors = React2.useMemo(
    () => getDrawerMenuSelectors({ drawerMenuTree: menuTree, currentPath }),
    [menuTree, currentPath]
  );
  const initialDrawerMenuState = React2.useMemo(
    () => getInitialDrawerMenuStoreState({ selectors }),
    [selectors]
  );
  const drawerMenuStore = React2.useMemo(
    () => createDrawerMenuStore(initialDrawerMenuState),
    [initialDrawerMenuState]
  );
  const nodesRenderer = React2.useMemo(
    () => defaultRenderDrawerMenuNode({
      runtimeOverrides: treeOverrides
    }),
    [treeOverrides]
  );
  const renderedContext = React2.useMemo(
    () => ({
      basePadding,
      closeIndicator,
      LinkComponent,
      openIndicator,
      nodesRenderer
    }),
    [basePadding, closeIndicator, LinkComponent, nodesRenderer, openIndicator]
  );
  const [openDrawer, setOpenDrawer] = React2.useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  return /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuRenderContext.Provider, { value: renderedContext, children: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuControllerContext.Provider, { value: { drawerMenuStore }, children: /* @__PURE__ */ jsxRuntime.jsxs(MenuDepthContext.Provider, { value: { depth: 0 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Drawer__default.default,
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
        children: /* @__PURE__ */ jsxRuntime.jsx(List__default.default, { dense: true, disablePadding: true, children: menuTree.children.map((child) => {
          return /* @__PURE__ */ jsxRuntime.jsx(React2.Fragment, { children: nodesRenderer({ node: child }).rendered }, child.id);
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(IconButton__default.default, { onClick: toggleDrawer(true), "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {}) })
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
  const normalizedPath = React2__namespace.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React2__namespace.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React2__namespace.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React2__namespace.useMemo(() => {
    const crumbs = [];
    const acc = [];
    segments.forEach((seg, idx) => {
      acc.push(seg);
      const href = "/" + acc.join("/");
      const isLast = idx === segments.length - 1;
      const label = segmentLabels && segmentLabels[seg] || (titleCase ? toTitleCase(seg) : seg);
      if (isLast) {
        crumbs.push(
          /* @__PURE__ */ jsxRuntime.jsx(
            MuiLink__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(
            MuiLink__default.default,
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
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntime.jsxs(
    MuiBreadcrumbs__default.default,
    {
      maxItems,
      itemsAfterCollapse: 2,
      itemsBeforeCollapse: 1,
      sx: [
        { fontSize, color: "inherit", mx: 2, p: 0.5 },
        ...sx ? Array.isArray(sx) ? sx : [sx] : []
      ],
      children: [
        !hideRoot && /* @__PURE__ */ jsxRuntime.jsx(MuiLink__default.default, { component: linkComponent, href: "/", underline: "hover", color: "inherit", children: "Home" }),
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box4__default.default,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        ...sx
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ImageComponent, { src, width, height, alt }),
        subtitle ? /* @__PURE__ */ jsxRuntime.jsx(Typography__default.default, { variant: "eyebrow", sx: { mt: 1 }, children: subtitle }) : null
      ]
    }
  );
}
function HeaderMinimal({ centerDown, centerUp, left, right }) {
  return (
    //
    /* @__PURE__ */ jsxRuntime.jsx(AppBar__default.default, { position: "sticky", children: /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: { display: "flex" }, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Box4__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { children: left }),
          /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { flex: "1 1 auto", minWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsxs(Box4__default.default, { display: "flex", width: "100%", flexDirection: "column", alignItems: "center", children: [
            centerUp,
            centerDown
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { children: right })
        ]
      }
    ) }) })
  );
}
function HeaderDrawer({ drawerProps, logoProps, breadMenuProps }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    HeaderMinimal,
    {
      left: /* @__PURE__ */ jsxRuntime.jsx(HeaderLogo, { ...logoProps }),
      centerUp: /* @__PURE__ */ jsxRuntime.jsx(BreadMenu_default, { ...breadMenuProps }),
      right: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuRoot, { ...drawerProps })
    }
  );
}
var DropDownMenuRenderContext = React2.createContext(null);
function DropDown({ navigationTree, selectors, rendererContext }) {
  const { nodesRenderer } = rendererContext;
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppBar__default.default,
    {
      position: "sticky",
      color: "default",
      elevation: 0,
      sx: { borderBottom: 1, borderColor: "divider" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Toolbar__default.default,
        {
          component: "nav",
          "aria-label": "Primary",
          sx: {
            justifyContent: "center",
            gap: 1
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsxRuntime.jsx(DropDownMenuRenderContext.Provider, { value: rendererContext, children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: navigationTree.children.map((item) => {
            return /* @__PURE__ */ jsxRuntime.jsx(React2.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
          }) }) }) })
        }
      )
    }
  );
}
function HeaderMenu({ menuProps, logoProps, breadMenuProps }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    HeaderMinimal,
    {
      left: /* @__PURE__ */ jsxRuntime.jsx(HeaderLogo, { ...logoProps }),
      centerUp: /* @__PURE__ */ jsxRuntime.jsx(BreadMenu_default, { ...breadMenuProps }),
      centerDown: /* @__PURE__ */ jsxRuntime.jsx(DropDown, { ...menuProps })
    }
  );
}
function Header({ breadMenuProps, drawerProps, logoProps, menuProps }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { display: {
      xs: "block",
      sm: "none"
    } }, children: /* @__PURE__ */ jsxRuntime.jsx(HeaderDrawer, { breadMenuProps, drawerProps, logoProps }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { display: {
      xs: "none",
      sm: "block"
    } }, children: /* @__PURE__ */ jsxRuntime.jsx(HeaderMenu, { breadMenuProps, logoProps, menuProps }) })
  ] });
}

exports.Header = Header;
exports.HeaderDrawer = HeaderDrawer;
exports.HeaderLogo = HeaderLogo;
exports.HeaderMenu = HeaderMenu;
exports.HeaderMinimal = HeaderMinimal;
//# sourceMappingURL=header.cjs.map
//# sourceMappingURL=header.cjs.map