'use strict';

var Box2 = require('@mui/material/Box');
var React4 = require('react');
var ExpandLess = require('@mui/icons-material/ExpandLess');
var ExpandMore = require('@mui/icons-material/ExpandMore');
var MenuIcon = require('@mui/icons-material/Menu');
var Drawer = require('@mui/material/Drawer');
var IconButton = require('@mui/material/IconButton');
var List = require('@mui/material/List');
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
var Divider = require('@mui/material/Divider');
var Collapse = require('@mui/material/Collapse');
var ListItem = require('@mui/material/ListItem');
var ListItemButton = require('@mui/material/ListItemButton');
var ListItemIcon = require('@mui/material/ListItemIcon');
var ListItemText = require('@mui/material/ListItemText');
var Typography = require('@mui/material/Typography');
var MuiBreadcrumbs = require('@mui/material/Breadcrumbs');
var MuiLink = require('@mui/material/Link');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var Popover = require('@mui/material/Popover');

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

var Box2__default = /*#__PURE__*/_interopDefault(Box2);
var React4__namespace = /*#__PURE__*/_interopNamespace(React4);
var ExpandLess__default = /*#__PURE__*/_interopDefault(ExpandLess);
var ExpandMore__default = /*#__PURE__*/_interopDefault(ExpandMore);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var IconButton__default = /*#__PURE__*/_interopDefault(IconButton);
var List__default = /*#__PURE__*/_interopDefault(List);
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
var Divider__default = /*#__PURE__*/_interopDefault(Divider);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var ListItem__default = /*#__PURE__*/_interopDefault(ListItem);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Typography__default = /*#__PURE__*/_interopDefault(Typography);
var MuiBreadcrumbs__default = /*#__PURE__*/_interopDefault(MuiBreadcrumbs);
var MuiLink__default = /*#__PURE__*/_interopDefault(MuiLink);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefault(ChevronRightIcon);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);

// src/components/header/Header.tsx
var MenuControllerContext = React4.createContext(null);
function useMenuControllerContext() {
  const ctx = React4.useContext(MenuControllerContext);
  if (!ctx) throw new Error("MenuControllerContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuSelectorContext = React4.createContext(null);
function useMenuSelectorContext() {
  const ctx = React4.useContext(MenuSelectorContext);
  if (!ctx) throw new Error("MenuSelectorContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
function createMenuStore(initialState) {
  let menusState = { ...initialState };
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState: () => menusState,
    setState: (next) => {
      if (next === menusState) return;
      menusState = typeof next === "function" ? next(menusState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
function useNodeOpen(store, nodeId) {
  return React4.useSyncExternalStore(
    store.subscribe,
    () => {
      var _a;
      return (_a = store.getState()[nodeId]) != null ? _a : false;
    },
    () => false
  );
}
function setOpen(store, nodeId) {
  return (open) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
var DefaultLinkLike = React4__namespace.forwardRef(function DefaultLinkLike2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx("a", { ref, ...props });
});
var MenuDepthContext = React4.createContext(null);
function useMenuDepthContext() {
  const ctx = React4.useContext(MenuDepthContext);
  if (!ctx) throw new Error("MenuDepthContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuRenderContext = React4.createContext(null);
function useMenuRenderContext() {
  const ctx = React4.useContext(MenuRenderContext);
  if (!ctx) throw new Error("MenuRenderContext missing. Wrap with <MenuProvider>.");
  return ctx;
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

// src/lib/utils.ts
function safeTitleCase(label) {
  const trimmed = label.trim();
  if (!trimmed) return label;
  if (shouldSkipCasing(trimmed)) {
    return label;
  }
  return trimmed.replace(/\b[a-z][a-z']*\b/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}
function shouldSkipCasing(str) {
  if (/\d/.test(str)) return true;
  if (/[\/._+:#@\\\-]/.test(str)) return true;
  if (/[A-Z]{2,}/.test(str)) return true;
  if (/[a-z][A-Z]/.test(str)) return true;
  if (/[^\x00-\x7F]/.test(str)) return true;
  return false;
}
var defaultDrawerRowPolicy = ({
  baseIndent,
  openIndicator,
  closeIndicator
}) => {
  return ({
    depth,
    menuTreeElement,
    menuTreeElementUI,
    isOpen,
    isSelected,
    isAncestorSelected,
    hasChildren
  }) => {
    const label = menuTreeElement.label;
    const displayLabel = depth === 0 ? safeTitleCase(label) : label;
    const icon = depth === 0 ? /* @__PURE__ */ jsxRuntime.jsx(IconPicker_default, { name: label != null ? label : "", fontSize: "medium" }) : void 0;
    const indicator = hasChildren ? isOpen ? openIndicator : closeIndicator : void 0;
    const paddingInlineStart = depth === 0 ? 0 : baseIndent * (depth + 2);
    const typographyProps = {
      variant: "narrative",
      noWrap: true
    };
    if (depth === 0) {
      typographyProps.fontWeight = 600;
      typographyProps.color = "text.primary";
    } else {
      typographyProps.color = "text.secondary";
      typographyProps.fontSize = "0.875rem";
    }
    let rowSx;
    if (isSelected) {
      typographyProps.color = "primary.main";
      typographyProps.fontWeight = 600;
      rowSx = {
        borderInlineStart: "3px solid",
        borderColor: "primary.main",
        bgcolor: "action.hover"
      };
    }
    if (isAncestorSelected) {
      typographyProps.fontWeight = 600;
      typographyProps.color = "text.primary";
    }
    return {
      text: displayLabel,
      icon,
      indicator,
      indicatorPlacement: "end",
      paddingInlineStart,
      typographyProps,
      rowSx
    };
  };
};
function ElementLabel({ typographyProps, icon, text }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    icon && /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { sx: { minWidth: 36 }, children: icon }),
    /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: /* @__PURE__ */ jsxRuntime.jsx(Typography__default.default, { ...typographyProps, children: text }) })
  ] });
}
function ElementButton({
  link,
  overrides,
  rowPlan,
  indicator,
  linkComponent
}) {
  if ((overrides == null ? void 0 : overrides.display) === false) return null;
  const onClick = overrides == null ? void 0 : overrides.onClick;
  const { typographyProps, icon, text, paddingInlineStart, rowSx } = rowPlan;
  const elementLabel = /* @__PURE__ */ jsxRuntime.jsx(ElementLabel, { typographyProps, icon, text });
  const sx = [
    { paddingInlineStart },
    ...Array.isArray(rowSx) ? rowSx : rowSx ? [rowSx] : []
  ];
  const elementWithIndicator = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    elementLabel,
    indicator
  ] });
  if (link && linkComponent) {
    return /* @__PURE__ */ jsxRuntime.jsx(ListItemButton__default.default, { component: linkComponent, href: link, onClick, sx, children: elementWithIndicator });
  } else if (onClick) {
    return /* @__PURE__ */ jsxRuntime.jsx(ListItemButton__default.default, { onClick, sx, children: elementWithIndicator });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ListItem__default.default, { sx, children: elementWithIndicator });
}
function DrawerOpenClose({
  children,
  rowPlan,
  isOpen,
  onToggle,
  depth
}) {
  const handleClick = () => {
    onToggle(!isOpen);
  };
  const { indicator } = rowPlan;
  const localOverrides = {
    onClick: handleClick
  };
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React4__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DrawerElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(ElementButton, { overrides: localOverrides, rowPlan, indicator }),
    children && /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      List__default.default,
      {
        dense: true,
        disablePadding: true,
        sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
        children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
      }
    ) })
  ] });
}
function DrawerElement({ id, menuTreeElement, overrides, children }) {
  const { menuStore } = useMenuControllerContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const isOpen = useNodeOpen(menuStore, id);
  const onToggle = (open) => setOpen(menuStore, id)(open);
  const { rowPolicy, linkLikeComp } = useMenuRenderContext();
  const { depth } = useMenuDepthContext();
  if (!menuTreeElement) return null;
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const rowPlan = rowPolicy({
    depth,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren
  });
  const ui = overrides;
  if ((ui == null ? void 0 : ui.display) === false) return null;
  if (hasChildren) {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        DrawerOpenClose,
        {
          children,
          rowPlan,
          isOpen,
          onToggle,
          depth
        }
      ),
      (ui == null ? void 0 : ui.divider) && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ElementButton,
      {
        link: menuTreeElement.link,
        overrides,
        rowPlan,
        linkComponent: linkLikeComp
      }
    ),
    (ui == null ? void 0 : ui.divider) && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, {})
  ] });
}
function DrawerMenu_Client({
  root,
  treeFromRoot,
  rootOverrides,
  anchor = "left",
  indent = 0,
  drawerPaperSx,
  listSx,
  triggerButtonSx
}) {
  var _a;
  const selectors = useMenuSelectorContext();
  const menuController = useMenuControllerContext();
  const [openDrawer, setOpenDrawer] = React4.useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  const rootLabel = root.label || "Menu";
  const renderedTreeFromRoot = React4__namespace.default.useMemo(
    () => ({
      ...treeFromRoot,
      node: {
        ...treeFromRoot.node,
        label: rootLabel
      }
    }),
    [treeFromRoot, rootLabel]
  );
  const linkLikeComp = (_a = rootOverrides == null ? void 0 : rootOverrides.linkComponent) != null ? _a : DefaultLinkLike;
  const renderContext = {
    linkLikeComp,
    rowPolicy: defaultDrawerRowPolicy({
      baseIndent: indent,
      openIndicator: /* @__PURE__ */ jsxRuntime.jsx(ExpandLess__default.default, {}),
      closeIndicator: /* @__PURE__ */ jsxRuntime.jsx(ExpandMore__default.default, {})
    })
  };
  const selectedPathIds = selectors.selectedPathIds;
  const selectId = selectors.selectedId;
  const menuStore = menuController.menuStore;
  React4.useEffect(() => {
    for (const selectedId of selectedPathIds) {
      if (selectedId !== selectId) setOpen(menuStore, selectedId)(true);
    }
  }, [selectId, menuStore, selectedPathIds]);
  const childrenComponents = renderedTreeFromRoot.children ? Object.entries(renderedTreeFromRoot.children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React4__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DrawerElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxRuntime.jsxs(MenuRenderContext.Provider, { value: renderContext, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Drawer__default.default,
      {
        open: openDrawer,
        onClose: toggleDrawer(false),
        anchor,
        slotProps: {
          paper: {
            sx: { minWidth: 240, pl: 1, pt: 2, overflowY: "auto", ...drawerPaperSx },
            elevation: 2
          }
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          List__default.default,
          {
            dense: true,
            disablePadding: true,
            component: "nav",
            sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper", ...listSx },
            children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(IconButton__default.default, { onClick: toggleDrawer(true), "aria-label": "Open menu", sx: triggerButtonSx, children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {}) })
  ] });
}

// src/components/menus/drawer/pathSelectors.ts
var EarlyReturnValue = {
  isSelected: () => false,
  isAncestorSelected: () => false,
  selectedId: null,
  selectedPathIds: /* @__PURE__ */ new Set()
};
var DefaultNullSelector = () => false;
function getSelectors({
  treeFromRoot,
  selector
}) {
  const select = selector != null ? selector : DefaultNullSelector;
  const path = [];
  const rootChildren = treeFromRoot.children;
  if (!rootChildren) {
    console.warn("The menu tree is empty. No nodes to select.");
    return EarlyReturnValue;
  }
  let selectedInfo = null;
  for (const key in rootChildren) {
    const childBranch = rootChildren[key];
    selectedInfo = getSelectedAndPath({
      nodeId: key,
      menuNode: childBranch,
      selector: select,
      path
    });
    if (selectedInfo !== null) {
      break;
    }
  }
  if (!selectedInfo) {
    console.warn("No selected node found in the menu tree based on the provided selector.");
    return EarlyReturnValue;
  }
  const selectedId = selectedInfo.selectedId;
  const isSelected = (nodeId) => selectedId === nodeId;
  const selectedPathIds = new Set(path);
  const isAncestorSelected = (nodeId) => selectedPathIds.has(nodeId) && selectedId !== nodeId;
  return {
    isSelected,
    isAncestorSelected,
    selectedId,
    selectedPathIds
  };
}
function getSelectedAndPath({ nodeId, menuNode, selector, path }) {
  const node = menuNode.node;
  const children = menuNode.children;
  path.push(nodeId);
  const isThisSelected = selector(nodeId, node);
  if (isThisSelected) {
    return { selectedId: nodeId };
  }
  if (children === void 0) {
    path.pop();
    return null;
  }
  for (const key in children) {
    const childBranch = children[key];
    const selectedChild = getSelectedAndPath({
      nodeId: key,
      menuNode: childBranch,
      selector,
      path
    });
    if (selectedChild) {
      return selectedChild;
    }
  }
  path.pop();
  return null;
}
function DrawerMenu({
  root,
  treeFromRoot,
  rootOverrides,
  anchor = "left",
  indent = 0,
  drawerPaperSx,
  listSx,
  triggerButtonSx,
  selector
}) {
  const selectors = React4.useMemo(
    () => getSelectors({
      treeFromRoot,
      selector
    }),
    [treeFromRoot, selector]
  );
  const menuStore = React4.useMemo(() => {
    const initialStoreState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState, selectors.selectedPathIds);
    initialStoreState["root"] = false;
    return createMenuStore(initialStoreState);
  }, [treeFromRoot, selectors.selectedPathIds]);
  return /* @__PURE__ */ jsxRuntime.jsx(MenuSelectorContext.Provider, { value: selectors, children: /* @__PURE__ */ jsxRuntime.jsx(MenuControllerContext.Provider, { value: { menuStore }, children: /* @__PURE__ */ jsxRuntime.jsx(
    DrawerMenu_Client,
    {
      root,
      treeFromRoot,
      rootOverrides,
      anchor,
      indent,
      drawerPaperSx,
      listSx,
      triggerButtonSx
    }
  ) }) });
}
function populateInitialStoreState(node, store, selectedIs) {
  if (node.children) {
    for (const key in node.children) {
      store[key] = false;
      if (selectedIs.has(key)) {
        store[key] = true;
      }
      populateInitialStoreState(node.children[key], store, selectedIs);
    }
  }
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
  const normalizedPath = React4__namespace.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React4__namespace.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React4__namespace.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React4__namespace.useMemo(() => {
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
    Box2__default.default,
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
      Box2__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { children: left }),
          /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { flex: "1 1 auto", minWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsxs(Box2__default.default, { display: "flex", width: "100%", flexDirection: "column", alignItems: "center", children: [
            centerUp,
            centerDown
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { children: right })
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
      right: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenu, { ...drawerProps })
    }
  );
}
var defaultDropDownPolicy = ({
  baseIndent,
  downIndicator,
  rightIndicator
}) => {
  return ({
    depth,
    menuTreeElement,
    menuTreeElementUI,
    isOpen,
    isSelected,
    isAncestorSelected,
    hasChildren
  }) => {
    let label = menuTreeElement.label;
    const icon = depth === 0 ? /* @__PURE__ */ jsxRuntime.jsx(IconPicker_default, { name: label != null ? label : "", fontSize: "medium" }) : void 0;
    const indicatorIcon = depth === 0 ? downIndicator : rightIndicator;
    const indicator = hasChildren ? indicatorIcon : void 0;
    const paddingInlineStart = depth > 1 ? (depth - 1) * 8 : 0;
    const rowPolicy = {
      text: label,
      icon,
      indicator,
      indicatorPlacement: "end",
      paddingInlineStart
    };
    const typographyProps = {
      variant: "narrative",
      noWrap: true
      // color: color,
      // fontWeight: fontWeight,
    };
    if (depth === 0) {
      label = safeTitleCase(label);
      typographyProps.color = "text.primary";
    }
    if (depth === 1) {
      typographyProps.color = "text.secondary";
      typographyProps.fontWeight = 700;
      typographyProps.fontSize = "0.7rem";
      typographyProps.letterSpacing = "0.08em";
      typographyProps.textTransform = "uppercase";
    }
    if (isSelected) {
      typographyProps.color = "primary.main";
      typographyProps.fontWeight = 700;
    }
    if (isAncestorSelected && depth === 0) {
      typographyProps.fontWeight = 500;
      typographyProps.color = "text.primary";
    }
    rowPolicy.typographyProps = typographyProps;
    return rowPolicy;
  };
};

// src/components/menus/dropDown/defaultMegaMenuPolicy.ts
var standardMegaMenuPolicy = {
  showColumnDividers: true,
  showItemDivider: true,
  columnMinWidth: 160,
  outerPadding: 3
};

// src/components/menus/useRowPlan.ts
function useRowPlan({ id, node, children, overrides }) {
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  const { depth } = useMenuDepthContext();
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const { rowPolicy } = useMenuRenderContext();
  if (node === null) return null;
  const rowPlan = rowPolicy({
    depth,
    menuTreeElement: node,
    menuTreeElementUI: overrides,
    isOpen: true,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren
  });
  return { rowPlan, depth, hasChildren };
}
function DropDownMegaMenu({ children }) {
  const { depth } = useMenuDepthContext();
  const { linkLikeComp, megaMenuPolicy = standardMegaMenuPolicy } = useMenuRenderContext();
  const { showColumnDividers, outerPadding } = megaMenuPolicy;
  if (depth !== 1) {
    console.warn("DropDownMegaMenu should only be used at depth 1. Current depth:", depth);
    return null;
  }
  const entries = Object.entries(children);
  const childrenComponents = entries.map(([childId, childBranch], index) => /* @__PURE__ */ jsxRuntime.jsxs(React4__namespace.default.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ColumnElement,
      {
        id: childId,
        node: childBranch.node,
        children: childBranch.children,
        overrides: childBranch.overrides,
        linkLikeComp
      }
    ),
    showColumnDividers && index < entries.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, { orientation: "vertical", flexItem: true })
  ] }, childId));
  return /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { padding: outerPadding, children: /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { sx: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, children: childrenComponents }) });
}
function ColumnElement({ id, node, children, overrides, linkLikeComp }) {
  const rowPlanReturn = useRowPlan({ id, node, children, overrides });
  const { megaMenuPolicy = standardMegaMenuPolicy } = useMenuRenderContext();
  const { showItemDivider, columnMinWidth } = megaMenuPolicy;
  if (!node) return null;
  if (!rowPlanReturn) return null;
  const { rowPlan, depth } = rowPlanReturn;
  const elementLabel = /* @__PURE__ */ jsxRuntime.jsx(
    ElementButton,
    {
      link: node.link,
      overrides,
      rowPlan,
      linkComponent: linkLikeComp
    }
  );
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React4__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    ColumnElement,
    {
      id: childId,
      node: childBranch.node,
      children: childBranch.children,
      overrides: childBranch.overrides,
      linkLikeComp
    }
  ) }, childId)) : [];
  if (depth === 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { padding: 2, sx: { minWidth: columnMinWidth }, children: /* @__PURE__ */ jsxRuntime.jsxs(List__default.default, { children: [
      elementLabel,
      showItemDivider && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, {}),
      /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
    ] }) });
  } else {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      elementLabel,
      /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
    ] });
  }
}
function DropDownOpenClose({
  id,
  menuTreeElement,
  overrides,
  children
}) {
  const { depth } = useMenuDepthContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const [anchorEl, setAnchorEl] = React4__namespace.default.useState(null);
  const { rowPolicy } = useMenuRenderContext();
  if (!menuTreeElement) return null;
  if (depth !== 0) {
    console.warn("DropDownOpenClose should only be used at depth 0. Current depth:", depth);
    return null;
  }
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const rowPlan = rowPolicy({
    depth,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren
  });
  const { indicator } = rowPlan;
  const localOverrides = {
    ...overrides,
    onClick: handleClick
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(ElementButton, { overrides: localOverrides, rowPlan, indicator }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Popover__default.default,
      {
        open: isOpen,
        anchorEl,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        onClose: handleClose,
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(DropDownMegaMenu, { children }) })
      }
    )
  ] });
}
function DropDownElement({
  id,
  menuTreeElement,
  overrides,
  children
}) {
  const { depth } = useMenuDepthContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const { rowPolicy, linkLikeComp } = useMenuRenderContext();
  if (depth !== 0) {
    console.warn(
      "DropDownElement should only be used at the top level (depth 0). Current depth:",
      depth
    );
    return null;
  }
  const ui = overrides;
  if ((ui == null ? void 0 : ui.display) === false) return null;
  if (!menuTreeElement) return null;
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const rowPlan = rowPolicy({
    depth: 0,
    menuTreeElement,
    menuTreeElementUI: overrides,
    isOpen: true,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren
  });
  if (!hasChildren) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
      ElementButton,
      {
        link: menuTreeElement.link,
        overrides,
        rowPlan,
        linkComponent: linkLikeComp
      }
    ) });
  } else {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
      DropDownOpenClose,
      {
        id,
        menuTreeElement,
        overrides,
        children
      }
    ) });
  }
}
function DropDown_Client({
  treeFromRoot,
  rootOverrides,
  megaMenuPolicy,
  appBarSx,
  toolbarSx
}) {
  var _a;
  const linkLikeComp = (_a = rootOverrides == null ? void 0 : rootOverrides.linkComponent) != null ? _a : DefaultLinkLike;
  const children = treeFromRoot.children;
  const renderContext = {
    linkLikeComp,
    rowPolicy: defaultDropDownPolicy({
      baseIndent: 0,
      downIndicator: /* @__PURE__ */ jsxRuntime.jsx(ExpandMore__default.default, { fontSize: "small" }),
      rightIndicator: /* @__PURE__ */ jsxRuntime.jsx(ChevronRightIcon__default.default, { fontSize: "small" })
    }),
    megaMenuPolicy: megaMenuPolicy !== void 0 ? megaMenuPolicy : standardMegaMenuPolicy
  };
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { display: "flex", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
    DropDownElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxRuntime.jsx(MenuRenderContext.Provider, { value: renderContext, children: /* @__PURE__ */ jsxRuntime.jsx(
    AppBar__default.default,
    {
      position: "sticky",
      color: "default",
      elevation: 0,
      sx: { borderBottom: 1, borderColor: "divider", ...appBarSx },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Toolbar__default.default,
        {
          component: "nav",
          "aria-label": "Primary",
          sx: {
            justifyContent: "space-between",
            gap: 1,
            ...toolbarSx
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents })
        }
      )
    }
  ) });
}
function DropDown({
  root,
  treeFromRoot,
  rootOverrides,
  selector,
  megaMenuPolicy,
  appBarSx,
  toolbarSx
}) {
  const selectors = React4.useMemo(
    () => getSelectors({
      treeFromRoot,
      selector
    }),
    [treeFromRoot, selector]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(MenuSelectorContext.Provider, { value: selectors, children: /* @__PURE__ */ jsxRuntime.jsx(
    DropDown_Client,
    {
      root,
      treeFromRoot,
      rootOverrides,
      megaMenuPolicy,
      appBarSx,
      toolbarSx
    }
  ) });
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
    /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { sx: { display: {
      xs: "block",
      sm: "none"
    } }, children: /* @__PURE__ */ jsxRuntime.jsx(HeaderDrawer, { breadMenuProps, drawerProps, logoProps }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { sx: { display: {
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