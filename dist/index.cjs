'use strict';

var Box3 = require('@mui/material/Box');
var styles = require('@mui/material/styles');
var jsxRuntime = require('react/jsx-runtime');
var React22 = require('react');
var Container = require('@mui/material/Container');
var Fade = require('@mui/material/Fade');
var Stack = require('@mui/material/Stack');
var Typography9 = require('@mui/material/Typography');
var Button6 = require('@mui/material/Button');
var PhoneIcon = require('@mui/icons-material/Phone');
var CircularProgress2 = require('@mui/material/CircularProgress');
var CheckCircleIcon = require('@mui/icons-material/CheckCircle');
var colors = require('@mui/material/colors');
var Chip = require('@mui/material/Chip');
var LinearProgress = require('@mui/material/LinearProgress');
var DownloadIcon = require('@mui/icons-material/Download');
var PictureAsPdfIcon = require('@mui/icons-material/PictureAsPdf');
var DescriptionIcon = require('@mui/icons-material/Description');
var ImageIcon = require('@mui/icons-material/Image');
var VideoFileIcon = require('@mui/icons-material/VideoFile');
var AudioFileIcon = require('@mui/icons-material/AudioFile');
var FolderZipIcon = require('@mui/icons-material/FolderZip');
var AppsIcon = require('@mui/icons-material/Apps');
var LinkedInIcon = require('@mui/icons-material/LinkedIn');
var TwitterIcon = require('@mui/icons-material/Twitter');
var FacebookIcon = require('@mui/icons-material/Facebook');
var InstagramIcon = require('@mui/icons-material/Instagram');
var YouTubeIcon = require('@mui/icons-material/YouTube');
var GitHubIcon = require('@mui/icons-material/GitHub');
var WhatsAppIcon = require('@mui/icons-material/WhatsApp');
var EmailIcon = require('@mui/icons-material/Email');
var ShareIcon = require('@mui/icons-material/Share');
var ArrowBackIcon = require('@mui/icons-material/ArrowBack');
var Alert2 = require('@mui/material/Alert');
var ListItemIcon = require('@mui/material/ListItemIcon');
var ListItemText = require('@mui/material/ListItemText');
var Menu = require('@mui/material/Menu');
var MenuItem = require('@mui/material/MenuItem');
var Snackbar2 = require('@mui/material/Snackbar');
var ContentCopyIcon2 = require('@mui/icons-material/ContentCopy');
var CheckIcon2 = require('@mui/icons-material/Check');
var TextField = require('@mui/material/TextField');
var MailOutlineIcon = require('@mui/icons-material/MailOutline');
var CalendarTodayIcon = require('@mui/icons-material/CalendarToday');
var IconButton = require('@mui/material/IconButton');
var Tooltip = require('@mui/material/Tooltip');
var FavoriteIcon = require('@mui/icons-material/Favorite');
var FavoriteBorderIcon = require('@mui/icons-material/FavoriteBorder');
var BookmarkIcon = require('@mui/icons-material/Bookmark');
var BookmarkBorderIcon = require('@mui/icons-material/BookmarkBorder');
var ThumbUpIcon = require('@mui/icons-material/ThumbUp');
var ThumbUpOutlinedIcon = require('@mui/icons-material/ThumbUpOutlined');
var Paper = require('@mui/material/Paper');
var ExpandLess = require('@mui/icons-material/ExpandLess');
var ExpandMore = require('@mui/icons-material/ExpandMore');
var Collapse = require('@mui/material/Collapse');
var MuiLink2 = require('@mui/material/Link');
var d3Hierarchy = require('d3-hierarchy');
var gridcss = require('@mcpab/gridcss');
var system = require('@mui/system');
var MenuIcon = require('@mui/icons-material/Menu');
var Drawer = require('@mui/material/Drawer');
var List = require('@mui/material/List');
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
var ListItem = require('@mui/material/ListItem');
var ListItemButton = require('@mui/material/ListItemButton');
var MuiBreadcrumbs = require('@mui/material/Breadcrumbs');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var Popover = require('@mui/material/Popover');
var Grid = require('@mui/material/Grid');
var Modal = require('@mui/material/Modal');
var Avatar = require('@mui/material/Avatar');

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

var Box3__default = /*#__PURE__*/_interopDefault(Box3);
var React22__namespace = /*#__PURE__*/_interopNamespace(React22);
var Container__default = /*#__PURE__*/_interopDefault(Container);
var Fade__default = /*#__PURE__*/_interopDefault(Fade);
var Stack__default = /*#__PURE__*/_interopDefault(Stack);
var Typography9__default = /*#__PURE__*/_interopDefault(Typography9);
var Button6__default = /*#__PURE__*/_interopDefault(Button6);
var PhoneIcon__default = /*#__PURE__*/_interopDefault(PhoneIcon);
var CircularProgress2__default = /*#__PURE__*/_interopDefault(CircularProgress2);
var CheckCircleIcon__default = /*#__PURE__*/_interopDefault(CheckCircleIcon);
var Chip__default = /*#__PURE__*/_interopDefault(Chip);
var LinearProgress__default = /*#__PURE__*/_interopDefault(LinearProgress);
var DownloadIcon__default = /*#__PURE__*/_interopDefault(DownloadIcon);
var PictureAsPdfIcon__default = /*#__PURE__*/_interopDefault(PictureAsPdfIcon);
var DescriptionIcon__default = /*#__PURE__*/_interopDefault(DescriptionIcon);
var ImageIcon__default = /*#__PURE__*/_interopDefault(ImageIcon);
var VideoFileIcon__default = /*#__PURE__*/_interopDefault(VideoFileIcon);
var AudioFileIcon__default = /*#__PURE__*/_interopDefault(AudioFileIcon);
var FolderZipIcon__default = /*#__PURE__*/_interopDefault(FolderZipIcon);
var AppsIcon__default = /*#__PURE__*/_interopDefault(AppsIcon);
var LinkedInIcon__default = /*#__PURE__*/_interopDefault(LinkedInIcon);
var TwitterIcon__default = /*#__PURE__*/_interopDefault(TwitterIcon);
var FacebookIcon__default = /*#__PURE__*/_interopDefault(FacebookIcon);
var InstagramIcon__default = /*#__PURE__*/_interopDefault(InstagramIcon);
var YouTubeIcon__default = /*#__PURE__*/_interopDefault(YouTubeIcon);
var GitHubIcon__default = /*#__PURE__*/_interopDefault(GitHubIcon);
var WhatsAppIcon__default = /*#__PURE__*/_interopDefault(WhatsAppIcon);
var EmailIcon__default = /*#__PURE__*/_interopDefault(EmailIcon);
var ShareIcon__default = /*#__PURE__*/_interopDefault(ShareIcon);
var ArrowBackIcon__default = /*#__PURE__*/_interopDefault(ArrowBackIcon);
var Alert2__default = /*#__PURE__*/_interopDefault(Alert2);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Menu__default = /*#__PURE__*/_interopDefault(Menu);
var MenuItem__default = /*#__PURE__*/_interopDefault(MenuItem);
var Snackbar2__default = /*#__PURE__*/_interopDefault(Snackbar2);
var ContentCopyIcon2__default = /*#__PURE__*/_interopDefault(ContentCopyIcon2);
var CheckIcon2__default = /*#__PURE__*/_interopDefault(CheckIcon2);
var TextField__default = /*#__PURE__*/_interopDefault(TextField);
var MailOutlineIcon__default = /*#__PURE__*/_interopDefault(MailOutlineIcon);
var CalendarTodayIcon__default = /*#__PURE__*/_interopDefault(CalendarTodayIcon);
var IconButton__default = /*#__PURE__*/_interopDefault(IconButton);
var Tooltip__default = /*#__PURE__*/_interopDefault(Tooltip);
var FavoriteIcon__default = /*#__PURE__*/_interopDefault(FavoriteIcon);
var FavoriteBorderIcon__default = /*#__PURE__*/_interopDefault(FavoriteBorderIcon);
var BookmarkIcon__default = /*#__PURE__*/_interopDefault(BookmarkIcon);
var BookmarkBorderIcon__default = /*#__PURE__*/_interopDefault(BookmarkBorderIcon);
var ThumbUpIcon__default = /*#__PURE__*/_interopDefault(ThumbUpIcon);
var ThumbUpOutlinedIcon__default = /*#__PURE__*/_interopDefault(ThumbUpOutlinedIcon);
var Paper__default = /*#__PURE__*/_interopDefault(Paper);
var ExpandLess__default = /*#__PURE__*/_interopDefault(ExpandLess);
var ExpandMore__default = /*#__PURE__*/_interopDefault(ExpandMore);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var MuiLink2__default = /*#__PURE__*/_interopDefault(MuiLink2);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
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
var ListItem__default = /*#__PURE__*/_interopDefault(ListItem);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var MuiBreadcrumbs__default = /*#__PURE__*/_interopDefault(MuiBreadcrumbs);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefault(ChevronRightIcon);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var Grid__default = /*#__PURE__*/_interopDefault(Grid);
var Modal__default = /*#__PURE__*/_interopDefault(Modal);
var Avatar__default = /*#__PURE__*/_interopDefault(Avatar);

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var PadRoot = styles.styled(Box3__default.default, { shouldForwardProp: (p) => p !== "reverse" })(
  ({ reverse, theme }) => ({
    // small screens: symmetric padding
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingInline: theme.spacing(3)
    },
    [theme.breakpoints.up("md")]: {
      paddingBlock: theme.spacing(3),
      paddingLeft: reverse ? void 0 : theme.spacing(4),
      paddingRight: reverse ? theme.spacing(4) : void 0
    }
  })
);
function Pad({ reverse = false, children, sx }) {
  return /* @__PURE__ */ jsxRuntime.jsx(PadRoot, { reverse, sx, children });
}

// src/design/sectionTokens.ts
var SECTION_MIN_H = {
  micro: { xs: "160px", md: "200px", lg: "240px" },
  compact: { xs: "300px", md: "360px", lg: "400px" },
  sm: { xs: "420px", md: "520px", lg: "560px" },
  md: { xs: "520px", md: "640px", lg: "720px" },
  lg: { xs: "600px", md: "760px", lg: "880px" },
  xl: { xs: "720px", md: "880px", lg: "1040px" }
};
var sectionMinHeightSx = (size) => ({
  minHeight: SECTION_MIN_H[size]
});
function Section({
  size = "md",
  center = false,
  lockHeight = false,
  sx,
  children,
  id,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box3__default.default,
    {
      id,
      component: "section",
      sx: [
        {
          // Put the token into a CSS var so descendants can reference it if needed.
          "--section-h": SECTION_MIN_H[size],
          minHeight: "var(--section-h)",
          ...lockHeight ? { height: "var(--section-h)" } : null,
          // makes height definite
          position: "relative",
          // establish containing block for abs children
          display: "flex",
          ...center ? { alignItems: "center", justifyContent: "center" } : null,
          "& > *": { flex: 1, minHeight: "inherit" }
        },
        ...sx ? Array.isArray(sx) ? sx : [sx] : []
      ],
      ...rest,
      children
    }
  );
}
function getBoxPosition(objectPosition) {
  const [x = "50%", y = "50%"] = objectPosition.split(" ");
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}
var BackgroundBox = ({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}) => {
  var _a, _b, _c, _d, _e;
  const isStaticImport = typeof (imageConf == null ? void 0 : imageConf.src) === "object" && (imageConf == null ? void 0 : imageConf.src) && "width" in imageConf.src && "height" in imageConf.src;
  const computedAR = (_a = imageConf == null ? void 0 : imageConf.aspectRatio) != null ? _a : isStaticImport ? imageConf.src.width / imageConf.src.height : "16 / 9";
  const placeholder = (_b = imageConf == null ? void 0 : imageConf.placeholder) != null ? _b : isStaticImport ? "blur" : "empty";
  const quality = (_c = imageConf == null ? void 0 : imageConf.quality) != null ? _c : 70;
  let imageLayer = null;
  if (imageConf == null ? void 0 : imageConf.src) {
    const objPos = imageConf.objectPosition || "50% 50%";
    if (imageConf.width) {
      imageLayer = /* @__PURE__ */ jsxRuntime.jsx(
        Box3__default.default,
        {
          sx: {
            position: "absolute",
            ...getBoxPosition(objPos),
            width: imageConf.width
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { position: "relative", width: "100%", aspectRatio: computedAR }, children: /* @__PURE__ */ jsxRuntime.jsx(
            ImageComponent,
            {
              alt: "",
              src: imageConf.src,
              fill: true,
              sizes: imageConf.sizes,
              placeholder,
              priority: imageConf.priority,
              quality,
              unoptimized: imageConf.unoptimized,
              style: {
                objectFit: "contain",
                objectPosition: objPos,
                transform: imageConf.transform || "none",
                display: "block"
              }
            }
          ) })
        }
      );
    } else {
      imageLayer = /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(
        ImageComponent,
        {
          alt: "",
          src: imageConf.src,
          fill: true,
          sizes: (_d = imageConf.sizes) != null ? _d : "100vw",
          placeholder,
          priority: imageConf.priority,
          quality,
          unoptimized: imageConf.unoptimized,
          style: {
            objectFit: imageConf.mode || "cover",
            objectPosition: objPos,
            opacity: (_e = imageConf.opacity) != null ? _e : 1,
            transform: imageConf.transform || "none",
            zIndex: 0
          }
        }
      ) }) });
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box3__default.default,
    {
      sx: { position: "relative", overflow: "hidden", width: "100%", ...sx || {} },
      className,
      ...rest,
      children: [
        imageLayer,
        (imageConf == null ? void 0 : imageConf.overlayColor) && /* @__PURE__ */ jsxRuntime.jsx(
          Box3__default.default,
          {
            role: "presentation",
            "aria-hidden": true,
            sx: { position: "absolute", inset: 0, backgroundColor: imageConf.overlayColor }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { position: "relative", zIndex: 1, height: "100%" }, children })
      ]
    }
  );
};
var BackgroundBox_default = BackgroundBox;
var BannerStatic = ({
  image,
  boxProps,
  size = "micro",
  children,
  ImageComponent
}) => {
  const { id, sx: boxSx, ...restBox } = boxProps != null ? boxProps : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    Section,
    {
      id,
      size,
      ...restBox,
      sx: {
        position: "relative",
        width: "100%",
        ...boxSx
        // consumer overrides last
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(BackgroundBox_default, { imageConf: image, ImageComponent, children: /* @__PURE__ */ jsxRuntime.jsx(
        Container__default.default,
        {
          maxWidth: "lg",
          disableGutters: true,
          sx: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          },
          children
        }
      ) })
    }
  );
};
var BannerStatic_default = React22__namespace.memo(BannerStatic);
function clampFrameIndex(index, length) {
  return Math.max(0, Math.min(index, Math.max(length - 1, 0)));
}
var DynamicTransition = ({
  frames,
  interval = 2e3,
  transitionDuration = 1e3,
  startIndex = 0,
  boxProps
}) => {
  const frameItems = React22__namespace.useMemo(
    () => (frames != null ? frames : []).map((frame, index) => ({ frame, key: index })),
    [frames]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    DynamicTransitionInner,
    {
      frameItems,
      interval,
      transitionDuration,
      startIndex,
      boxProps
    },
    `${frameItems.length}:${startIndex}`
  );
};
function DynamicTransitionInner({
  frameItems,
  interval = 2e3,
  transitionDuration = 1e3,
  startIndex = 0,
  boxProps
}) {
  var _a;
  const initialIndex = clampFrameIndex(startIndex, frameItems.length);
  const [transitionState, setTransitionState] = React22__namespace.useState({
    activeIndex: initialIndex,
    previousIndex: initialIndex,
    hasTransitioned: false
  });
  React22__namespace.useEffect(() => {
    const hasCycle = frameItems.length >= 2;
    if (!hasCycle) return;
    const period = Math.max(0, interval) + Math.max(0, transitionDuration);
    const id = window.setInterval(() => {
      setTransitionState((current) => {
        const nextIndex = (current.activeIndex + 1) % frameItems.length;
        return {
          activeIndex: nextIndex,
          previousIndex: current.activeIndex,
          hasTransitioned: true
        };
      });
    }, period);
    return () => window.clearInterval(id);
  }, [frameItems.length, interval, transitionDuration]);
  const len = frameItems.length;
  if (len === 0) return null;
  if (len === 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Box3__default.default,
      {
        ...boxProps,
        sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { position: "absolute", inset: 0 }, children: (_a = frameItems[0]) == null ? void 0 : _a.frame })
      }
    );
  }
  const inFrame = frameItems[transitionState.activeIndex];
  const outFrame = frameItems[transitionState.previousIndex];
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box3__default.default,
    {
      ...boxProps,
      sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
      children: !transitionState.hasTransitioned ? /* @__PURE__ */ jsxRuntime.jsx("div", { style: { position: "absolute", inset: 0 }, children: inFrame == null ? void 0 : inFrame.frame }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Fade__default.default, { in: false, timeout: transitionDuration, children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: outFrame == null ? void 0 : outFrame.frame }) }, `out-${outFrame == null ? void 0 : outFrame.key}`),
        /* @__PURE__ */ jsxRuntime.jsx(Fade__default.default, { in: true, timeout: transitionDuration, children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: inFrame == null ? void 0 : inFrame.frame }) }, `in-${inFrame == null ? void 0 : inFrame.key}`)
      ] })
    }
  );
}
var DynamicTransition_default = React22__namespace.memo(DynamicTransition);
var BlockCarousel = ({
  config,
  children,
  containerProps,
  rootProps,
  ImageComponent
}) => {
  const {
    images = [],
    interval: intervalProp,
    transitionDuration = 900,
    overlayColor = "rgba(0,0,0,0.2)",
    preloadFirst = 2
  } = config || {};
  const interval = intervalProp != null ? intervalProp : 5e3;
  const { sx: rootSx, ...restRoot } = rootProps != null ? rootProps : {};
  const frames = React22__namespace.useMemo(() => {
    return images.map((img, i) => {
      const { transform, image, objectPosition } = img;
      return /* @__PURE__ */ jsxRuntime.jsx(
        BackgroundBox_default,
        {
          ImageComponent,
          imageConf: {
            src: image,
            overlayColor,
            transform,
            objectPosition,
            sizes: "100vw",
            placeholder: "blur",
            quality: 70,
            priority: i < preloadFirst
            // preload first N frames for snappy first transition
          },
          sx: { position: "absolute", inset: 0 }
        },
        i
      );
    });
  }, [images, overlayColor, preloadFirst, ImageComponent]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box3__default.default,
    {
      ...restRoot,
      sx: {
        position: "relative",
        display: "grid",
        // grid lets us stack layers via grid-area
        width: "100%",
        minHeight: "inherit",
        // ← inherit the band height from <Section>
        ...rootSx
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Box3__default.default,
          {
            sx: {
              position: "relative",
              gridArea: "1 / 1",
              // layer 1
              minHeight: "inherit"
              // ensure a definite box for absolute children
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              DynamicTransition_default,
              {
                frames,
                interval,
                transitionDuration
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { gridArea: "1 / 1", zIndex: 1 } }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Container__default.default,
          {
            ...containerProps,
            sx: {
              gridArea: "1 / 1",
              // layer 3, on top
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "inherit",
              // match the band height
              ...(containerProps == null ? void 0 : containerProps.sx) || {}
            },
            children
          }
        )
      ]
    }
  );
};
var BlockCarousel_default = React22__namespace.memo(BlockCarousel);
var BannerCarousel = ({
  images,
  id,
  size = "micro",
  children,
  ImageComponent
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Section,
    {
      id,
      size,
      position: "relative",
      width: "100%",
      lockHeight: true,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        BlockCarousel_default,
        {
          config: images,
          ImageComponent,
          children
        }
      )
    }
  );
};
var BannerCarousel_default = React22__namespace.memo(BannerCarousel);
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography9__default.default,
    {
      variant: variantLevels[role],
      sx,
      color: "primary",
      ...rest
    }
  );
};
Title.displayName = "Title";
var PageTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "page", ...props });
var SectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "section", ...props });
var SubsectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "subsection", ...props });
var SubsubsectionTitle = (props) => /* @__PURE__ */ jsxRuntime.jsx(Title, { sectionType: "subsubsection", ...props });

// src/lib/text/transform.ts
function toTitleCase(str) {
  if (str.includes("@")) return str;
  return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
var MainTitle = ({
  blocks,
  autoCapitalize = true,
  slotProps
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Stack__default.default, { spacing: 4, ...slotProps == null ? void 0 : slotProps.stack, children: blocks.map((block, index) => {
    var _a;
    const content = typeof block.title === "string" && autoCapitalize ? toTitleCase(block.title) : block.title;
    const isPrimary = ((_a = block.type) != null ? _a : "primary") === "primary";
    const Component = isPrimary ? PageTitle : SectionTitle;
    const defaults = isPrimary ? slotProps == null ? void 0 : slotProps.title : slotProps == null ? void 0 : slotProps.subtitle;
    const componentProps = { ...defaults, ...block == null ? void 0 : block.titleProps };
    return /* @__PURE__ */ jsxRuntime.jsx(Component, { ...componentProps, children: content }, `main-title-${index}`);
  }) });
};
var MainTitle_default = React22__namespace.memo(MainTitle);
var TouchButton = styles.styled(Button6__default.default)(({ theme }) => ({
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  paddingInline: theme.spacing(2),
  minWidth: 0,
  width: "fit-content",
  height: 40,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": { backgroundColor: theme.palette.primary.dark }
}));
var TouchButton_default = TouchButton;
var ActionButton = ({ icon, href, ...rest }) => {
  const isExternal = href == null ? void 0 : href.startsWith("http");
  return /* @__PURE__ */ jsxRuntime.jsx(
    TouchButton_default,
    {
      component: "a",
      href,
      startIcon: icon,
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener noreferrer" : void 0,
      ...rest
    }
  );
};
var ActionButton_default = ActionButton;
var GetInTouch = () => /* @__PURE__ */ jsxRuntime.jsx(ActionButton_default, { icon: /* @__PURE__ */ jsxRuntime.jsx(PhoneIcon__default.default, {}), href: "/contact", size: "small", children: "Get In Touch" });
var GetInTouch_default = GetInTouch;
function SuccessButtonContent({
  successDuration,
  successText,
  children,
  fallback
}) {
  const [visible, setVisible] = React22__namespace.useState(true);
  React22__namespace.useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, successDuration);
    return () => window.clearTimeout(timer);
  }, [successDuration]);
  if (!visible) {
    return fallback;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(CheckCircleIcon__default.default, { sx: { color: colors.green[500] } }),
    successText || children
  ] });
}
var CallToActionButton = ({
  loading = false,
  success = false,
  successDuration = 2e3,
  loadingText,
  successText,
  startIcon,
  endIcon,
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const handleClick = (event) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };
  const defaultContent = /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
    startIcon,
    children,
    endIcon
  ] });
  const getButtonContent = () => {
    if (success) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        SuccessButtonContent,
        {
          successDuration,
          successText,
          fallback: defaultContent,
          children
        }
      );
    }
    if (loading) {
      return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsxRuntime.jsx(CircularProgress2__default.default, { size: 20, color: "inherit" }),
        loadingText || children
      ] });
    }
    return defaultContent;
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      disabled: isDisabled,
      onClick: handleClick,
      "aria-busy": loading,
      "aria-live": success ? "polite" : void 0,
      ...rest,
      children: getButtonContent()
    }
  );
};
var CallToActionButton_default = CallToActionButton;
var getFileIcon = (fileType) => {
  switch (fileType) {
    case "pdf":
      return /* @__PURE__ */ jsxRuntime.jsx(PictureAsPdfIcon__default.default, {});
    case "doc":
      return /* @__PURE__ */ jsxRuntime.jsx(DescriptionIcon__default.default, {});
    case "image":
      return /* @__PURE__ */ jsxRuntime.jsx(ImageIcon__default.default, {});
    case "video":
      return /* @__PURE__ */ jsxRuntime.jsx(VideoFileIcon__default.default, {});
    case "audio":
      return /* @__PURE__ */ jsxRuntime.jsx(AudioFileIcon__default.default, {});
    case "zip":
      return /* @__PURE__ */ jsxRuntime.jsx(FolderZipIcon__default.default, {});
    case "app":
      return /* @__PURE__ */ jsxRuntime.jsx(AppsIcon__default.default, {});
    case "data":
      return /* @__PURE__ */ jsxRuntime.jsx(DescriptionIcon__default.default, {});
    default:
      return /* @__PURE__ */ jsxRuntime.jsx(DownloadIcon__default.default, {});
  }
};
var detectFileType = (href) => {
  var _a;
  const extension = (_a = href.split(".").pop()) == null ? void 0 : _a.toLowerCase();
  switch (extension) {
    case "pdf":
      return "pdf";
    case "doc":
    case "docx":
    case "txt":
    case "rtf":
      return "doc";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
    case "webp":
      return "image";
    case "mp4":
    case "avi":
    case "mov":
    case "wmv":
    case "webm":
      return "video";
    case "mp3":
    case "wav":
    case "ogg":
    case "m4a":
      return "audio";
    case "zip":
    case "rar":
    case "tar":
    case "gz":
      return "zip";
    case "exe":
    case "dmg":
    case "apk":
    case "msi":
      return "app";
    case "csv":
    case "json":
    case "xml":
    case "xlsx":
      return "data";
    default:
      return "unknown";
  }
};
var DownloadButton = ({
  href,
  fileName,
  fileSize,
  fileType,
  showProgress = false,
  showFileSize = true,
  onDownloadStart,
  onDownloadComplete,
  children,
  ...rest
}) => {
  const [isDownloading, setIsDownloading] = React22__namespace.useState(false);
  const [downloadProgress, setDownloadProgress] = React22__namespace.useState(0);
  const [isComplete, setIsComplete] = React22__namespace.useState(false);
  const detectedFileType = fileType || detectFileType(href);
  const fileIcon = getFileIcon(detectedFileType);
  const isExternal = href.startsWith("http");
  const handleDownload = async () => {
    onDownloadStart == null ? void 0 : onDownloadStart();
    setIsDownloading(true);
    setDownloadProgress(0);
    try {
      const link = document.createElement("a");
      link.href = href;
      link.download = fileName || href.split("/").pop() || "download";
      if (isExternal) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      if (showProgress) {
        const progressInterval = setInterval(() => {
          setDownloadProgress((prev) => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + Math.random() * 20;
          });
        }, 200);
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(
        () => {
          setDownloadProgress(100);
          setIsDownloading(false);
          setIsComplete(true);
          onDownloadComplete == null ? void 0 : onDownloadComplete();
          setTimeout(() => {
            setIsComplete(false);
            setDownloadProgress(0);
          }, 2e3);
        },
        showProgress ? 1e3 : 500
      );
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };
  const getButtonContent = () => {
    if (isComplete) {
      return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsxRuntime.jsx(CheckCircleIcon__default.default, { sx: { color: colors.green[500] } }),
        /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "inherit", children: "Downloaded!" })
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1, width: "100%" }, children: [
      fileIcon,
      /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "inherit", children }),
          showFileSize && fileSize && /* @__PURE__ */ jsxRuntime.jsx(
            Chip__default.default,
            {
              label: fileSize,
              size: "small",
              variant: "outlined",
              sx: {
                height: 20,
                fontSize: "0.75rem",
                borderColor: "currentColor",
                color: "inherit"
              }
            }
          )
        ] }),
        isDownloading && showProgress && /* @__PURE__ */ jsxRuntime.jsx(
          LinearProgress__default.default,
          {
            variant: "determinate",
            value: downloadProgress,
            sx: {
              mt: 0.5,
              height: 4,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.3)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "currentColor"
              }
            }
          }
        )
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      onClick: handleDownload,
      disabled: isDownloading,
      "aria-label": `Download ${fileName || "file"}${fileSize ? ` (${fileSize})` : ""}`,
      sx: {
        textAlign: "left",
        justifyContent: "flex-start",
        ...rest.sx
      },
      ...rest,
      children: getButtonContent()
    }
  );
};
var DownloadButton_default = DownloadButton;
var platformConfigs = {
  linkedin: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(LinkedInIcon__default.default, {}),
    color: "#0077B5",
    hoverColor: "#005885",
    name: "LinkedIn",
    ariaLabel: "Connect on LinkedIn"
  },
  twitter: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(TwitterIcon__default.default, {}),
    color: "#1DA1F2",
    hoverColor: "#0d8bd9",
    name: "Twitter",
    ariaLabel: "Follow on Twitter"
  },
  facebook: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(FacebookIcon__default.default, {}),
    color: "#1877F2",
    hoverColor: "#166fe5",
    name: "Facebook",
    ariaLabel: "Follow on Facebook"
  },
  instagram: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(InstagramIcon__default.default, {}),
    color: "#E4405F",
    hoverColor: "#d31447",
    name: "Instagram",
    ariaLabel: "Follow on Instagram"
  },
  youtube: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(YouTubeIcon__default.default, {}),
    color: "#FF0000",
    hoverColor: "#cc0000",
    name: "YouTube",
    ariaLabel: "Subscribe on YouTube"
  },
  github: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(GitHubIcon__default.default, {}),
    color: "#333333",
    hoverColor: "#24292e",
    name: "GitHub",
    ariaLabel: "View on GitHub"
  },
  whatsapp: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(WhatsAppIcon__default.default, {}),
    color: "#25D366",
    hoverColor: "#1ebe57",
    name: "WhatsApp",
    ariaLabel: "Chat on WhatsApp"
  },
  email: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(EmailIcon__default.default, {}),
    color: "#EA4335",
    hoverColor: "#d23f2d",
    name: "Email",
    ariaLabel: "Send email"
  },
  generic: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(ShareIcon__default.default, {}),
    color: "#666666",
    hoverColor: "#555555",
    name: "Social",
    ariaLabel: "Social link"
  }
};
var SocialButton = ({
  platform,
  useBrandColors = true,
  iconOnly = false,
  customAriaLabel,
  children,
  sx,
  ...rest
}) => {
  const config = platformConfigs[platform];
  const brandStyling = useBrandColors ? {
    backgroundColor: config.color,
    color: "white",
    "&:hover": {
      backgroundColor: config.hoverColor
    },
    "&:focus": {
      backgroundColor: config.hoverColor
    }
  } : {};
  const iconOnlyStyling = iconOnly ? {
    minWidth: "auto",
    padding: "8px",
    "& .MuiButton-startIcon": {
      margin: 0
    }
  } : {};
  return /* @__PURE__ */ jsxRuntime.jsx(
    ActionButton_default,
    {
      icon: config.icon,
      "aria-label": customAriaLabel || config.ariaLabel,
      sx: {
        ...brandStyling,
        ...iconOnlyStyling,
        ...sx
      },
      ...rest,
      children: !iconOnly && (children || `Follow on ${config.name}`)
    }
  );
};
var SocialButton_default = SocialButton;
var RouterContext = React22__namespace.createContext(null);
var RouterProvider = ({ router, children }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(RouterContext.Provider, { value: router, children });
};
var useRouter = () => {
  const contextRouter = React22__namespace.useContext(RouterContext);
  return React22__namespace.useMemo(() => {
    if (contextRouter) {
      return contextRouter;
    }
    return {
      back: () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          window.history.back();
        }
      },
      push: (path) => {
        if (typeof window !== "undefined") {
          window.location.href = path;
        }
      }
    };
  }, [contextRouter]);
};
var BackButton = ({
  onBack,
  fallbackHref,
  useHistory = true,
  showIcon = true,
  ariaLabel,
  router: customRouter,
  children = "Back",
  ...rest
}) => {
  const contextRouter = useRouter();
  const activeRouter = customRouter || contextRouter;
  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (activeRouter) {
      try {
        activeRouter.back();
        return;
      } catch (error) {
        console.warn("Router back failed:", error);
      }
    }
    if (useHistory && typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
      return;
    }
    if (fallbackHref && activeRouter) {
      try {
        activeRouter.push(fallbackHref);
        return;
      } catch (error) {
        console.warn("Router push failed:", error);
      }
    }
    if (fallbackHref && typeof window !== "undefined") {
      window.location.href = fallbackHref;
      return;
    }
    if (activeRouter) {
      try {
        activeRouter.push("/");
        return;
      } catch (error) {
        console.warn("Router push to home failed:", error);
      }
    }
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      onClick: handleBack,
      startIcon: showIcon ? /* @__PURE__ */ jsxRuntime.jsx(ArrowBackIcon__default.default, {}) : void 0,
      "aria-label": ariaLabel || (typeof children === "string" ? children : "Go back"),
      ...rest,
      children
    }
  );
};
var BackButton_default = BackButton;
var DEFAULT_FALLBACK_PLATFORMS = [
  "twitter",
  "linkedin",
  "facebook",
  "email",
  "copy"
];
var PLATFORM_CONFIG = {
  twitter: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(TwitterIcon__default.default, {}),
    label: "Share on Twitter",
    getUrl: (data) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text || "")}&url=${encodeURIComponent(data.url || "")}`
  },
  linkedin: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(LinkedInIcon__default.default, {}),
    label: "Share on LinkedIn",
    getUrl: (data) => `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url || "")}`
  },
  facebook: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(FacebookIcon__default.default, {}),
    label: "Share on Facebook",
    getUrl: (data) => `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url || "")}`
  },
  email: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(EmailIcon__default.default, {}),
    label: "Share via Email",
    getUrl: (data) => `mailto:?subject=${encodeURIComponent(data.title || "")}&body=${encodeURIComponent(`${data.text || ""}

${data.url || ""}`)}`
  },
  copy: {
    icon: /* @__PURE__ */ jsxRuntime.jsx(ContentCopyIcon2__default.default, {}),
    label: "Copy Link",
    getUrl: () => ""
    // Handled separately with Clipboard API
  }
};
var ShareButton = ({
  url,
  title,
  text,
  files,
  showFallbackOptions = true,
  fallbackPlatforms = DEFAULT_FALLBACK_PLATFORMS,
  onShare,
  children = "Share",
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = React22__namespace.useState(null);
  const [showSuccess, setShowSuccess] = React22__namespace.useState(false);
  const [successMessage, setSuccessMessage] = React22__namespace.useState("");
  const shareData = React22__namespace.useMemo(
    () => ({
      url: url || (typeof window !== "undefined" ? window.location.href : ""),
      title: title || (typeof document !== "undefined" ? document.title : ""),
      text,
      files
    }),
    [url, title, text, files]
  );
  const canUseNativeShare = React22__namespace.useMemo(() => {
    if (typeof navigator === "undefined" || !navigator.share) return false;
    if (files && files.length > 0) {
      return navigator.canShare && navigator.canShare({ files });
    }
    return true;
  }, [files]);
  const handleNativeShare = async () => {
    if (!canUseNativeShare) return false;
    try {
      await navigator.share(shareData);
      onShare == null ? void 0 : onShare(true, "native");
      setSuccessMessage("Content shared successfully!");
      setShowSuccess(true);
      return true;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.warn("Native share failed:", error);
        onShare == null ? void 0 : onShare(false, "native");
      }
      return false;
    }
  };
  const handleFallbackShare = async (platform) => {
    setAnchorEl(null);
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareData.url || "");
        onShare == null ? void 0 : onShare(true, "copy");
        setSuccessMessage("Link copied to clipboard!");
        setShowSuccess(true);
      } catch (error) {
        console.warn("Copy failed:", error);
        onShare == null ? void 0 : onShare(false, "copy");
      }
      return;
    }
    const config = PLATFORM_CONFIG[platform];
    if (config) {
      const shareUrl = config.getUrl(shareData);
      window.open(shareUrl, "_blank", "noopener,noreferrer");
      onShare == null ? void 0 : onShare(true, platform);
      setSuccessMessage(
        `Opened ${config.label.replace("Share on ", "").replace("Share via ", "")}`
      );
      setShowSuccess(true);
    }
  };
  const handleClick = async (event) => {
    if (canUseNativeShare) {
      const success = await handleNativeShare();
      if (success) return;
    }
    if (showFallbackOptions) {
      setAnchorEl(event.currentTarget);
    } else {
      await handleFallbackShare("copy");
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button6__default.default,
      {
        onClick: handleClick,
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(ShareIcon__default.default, {}),
        "aria-label": `Share: ${shareData.title || "content"}`,
        ...rest,
        children
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Menu__default.default,
      {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        children: fallbackPlatforms.map((platform) => {
          const config = PLATFORM_CONFIG[platform];
          return /* @__PURE__ */ jsxRuntime.jsxs(MenuItem__default.default, { onClick: () => handleFallbackShare(platform), children: [
            /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { children: config.icon }),
            /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: config.label })
          ] }, platform);
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Snackbar2__default.default,
      {
        open: showSuccess,
        autoHideDuration: 3e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Alert2__default.default,
          {
            onClose: () => setShowSuccess(false),
            severity: "success",
            icon: /* @__PURE__ */ jsxRuntime.jsx(CheckIcon2__default.default, {}),
            sx: { width: "100%" },
            children: successMessage
          }
        )
      }
    )
  ] });
};
var ShareButton_default = ShareButton;
var SubscribeButton = ({
  onSubscribe,
  placeholder = "Enter your email address",
  successMessage = "Successfully subscribed!",
  errorMessage = "Subscription failed. Please try again.",
  requireEmail = true,
  showInlineForm = true,
  children = "Subscribe",
  ...rest
}) => {
  const [email, setEmail] = React22__namespace.useState("");
  const [isLoading, setIsLoading] = React22__namespace.useState(false);
  const [showSuccess, setShowSuccess] = React22__namespace.useState(false);
  const [showError, setShowError] = React22__namespace.useState(false);
  const [emailError, setEmailError] = React22__namespace.useState("");
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const handleSubscribe = async () => {
    if (requireEmail && !email.trim()) {
      setEmailError("Email address is required");
      return;
    }
    if (requireEmail && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsLoading(true);
    try {
      const success = await onSubscribe(email);
      if (success) {
        setShowSuccess(true);
        setEmail("");
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };
  if (showInlineForm) {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Stack__default.default, { direction: { xs: "column", sm: "row" }, spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          TextField__default.default,
          {
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              setEmailError("");
            },
            placeholder,
            error: Boolean(emailError),
            helperText: emailError,
            type: "email",
            fullWidth: true,
            size: "medium"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button6__default.default,
          {
            onClick: handleSubscribe,
            disabled: isLoading,
            startIcon: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress2__default.default, { size: 20 }) : /* @__PURE__ */ jsxRuntime.jsx(MailOutlineIcon__default.default, {}),
            sx: { minWidth: 140 },
            ...rest,
            children: isLoading ? "Subscribing..." : children
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Snackbar2__default.default, { open: showSuccess, autoHideDuration: 4e3, onClose: () => setShowSuccess(false), children: /* @__PURE__ */ jsxRuntime.jsx(Alert2__default.default, { severity: "success", icon: /* @__PURE__ */ jsxRuntime.jsx(CheckCircleIcon__default.default, {}), children: successMessage }) }),
      /* @__PURE__ */ jsxRuntime.jsx(Snackbar2__default.default, { open: showError, autoHideDuration: 4e3, onClose: () => setShowError(false), children: /* @__PURE__ */ jsxRuntime.jsx(Alert2__default.default, { severity: "error", children: errorMessage }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      onClick: handleSubscribe,
      disabled: isLoading,
      startIcon: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress2__default.default, { size: 20 }) : /* @__PURE__ */ jsxRuntime.jsx(MailOutlineIcon__default.default, {}),
      ...rest,
      children: isLoading ? "Subscribing..." : children
    }
  );
};
var SubscribeButton_default = SubscribeButton;
var BookingButton = ({
  bookingUrl = "/book-consultation",
  serviceType,
  duration,
  children = "Book Consultation",
  ...rest
}) => {
  const ariaLabel = `Book ${serviceType || "consultation"}${duration ? ` (${duration})` : ""}`;
  return /* @__PURE__ */ jsxRuntime.jsx(
    ActionButton_default,
    {
      href: bookingUrl,
      icon: /* @__PURE__ */ jsxRuntime.jsx(CalendarTodayIcon__default.default, {}),
      "aria-label": ariaLabel,
      ...rest,
      children
    }
  );
};
var BookingButton_default = BookingButton;
var WhatsAppButton = ({
  phone,
  message = "Hi, I need help with...",
  countryCode,
  children = "Chat on WhatsApp",
  sx,
  ...rest
}) => {
  const formatPhoneNumber = (phone2, countryCode2) => {
    let formattedPhone = phone2.replace(/\D/g, "");
    if (countryCode2 && !formattedPhone.startsWith(countryCode2)) {
      formattedPhone = countryCode2 + formattedPhone;
    }
    return formattedPhone;
  };
  const whatsappUrl = React22__namespace.useMemo(() => {
    const formattedPhone = formatPhoneNumber(phone, countryCode);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  }, [phone, message, countryCode]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ActionButton_default,
    {
      href: whatsappUrl,
      icon: /* @__PURE__ */ jsxRuntime.jsx(WhatsAppIcon__default.default, {}),
      sx: {
        backgroundColor: "#25D366",
        color: "white",
        "&:hover": {
          backgroundColor: "#1ebe57"
        },
        ...sx
      },
      ...rest,
      children
    }
  );
};
var WhatsAppButton_default = WhatsAppButton;
var FavoriteButton = ({
  isFavorited = false,
  onToggle,
  itemId,
  favoriteType = "heart",
  showTooltip = true,
  tooltipText,
  sx,
  ...rest
}) => {
  const favorited = isFavorited;
  const handleToggle = () => {
    onToggle(!favorited, itemId);
  };
  const getIcons = () => {
    switch (favoriteType) {
      case "bookmark":
        return {
          filled: /* @__PURE__ */ jsxRuntime.jsx(BookmarkIcon__default.default, {}),
          outlined: /* @__PURE__ */ jsxRuntime.jsx(BookmarkBorderIcon__default.default, {}),
          color: "#1976d2"
        };
      case "like":
        return {
          filled: /* @__PURE__ */ jsxRuntime.jsx(ThumbUpIcon__default.default, {}),
          outlined: /* @__PURE__ */ jsxRuntime.jsx(ThumbUpOutlinedIcon__default.default, {}),
          color: "#1976d2"
        };
      default:
        return {
          filled: /* @__PURE__ */ jsxRuntime.jsx(FavoriteIcon__default.default, {}),
          outlined: /* @__PURE__ */ jsxRuntime.jsx(FavoriteBorderIcon__default.default, {}),
          color: "#f44336"
        };
    }
  };
  const getTooltipText = () => {
    if (tooltipText) {
      return favorited ? tooltipText.favorited : tooltipText.unfavorited;
    }
    switch (favoriteType) {
      case "bookmark":
        return favorited ? "Remove bookmark" : "Add bookmark";
      case "like":
        return favorited ? "Unlike" : "Like";
      default:
        return favorited ? "Remove from favorites" : "Add to favorites";
    }
  };
  const icons = getIcons();
  const currentIcon = favorited ? icons.filled : icons.outlined;
  const button = /* @__PURE__ */ jsxRuntime.jsx(
    IconButton__default.default,
    {
      onClick: handleToggle,
      "aria-label": getTooltipText(),
      sx: {
        color: favorited ? icons.color : "action.active",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
          color: icons.color
        },
        ...sx
      },
      ...rest,
      children: currentIcon
    }
  );
  if (showTooltip) {
    return /* @__PURE__ */ jsxRuntime.jsx(Tooltip__default.default, { title: getTooltipText(), children: button });
  }
  return button;
};
var FavoriteButton_default = FavoriteButton;
var CopyButton = ({
  text,
  successMessage = "Copied to clipboard!",
  showTooltip = true,
  iconOnly = false,
  onCopy,
  children = "Copy",
  sx,
  ...rest
}) => {
  const [showSuccess, setShowSuccess] = React22__namespace.useState(false);
  const [justCopied, setJustCopied] = React22__namespace.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowSuccess(true);
      setJustCopied(true);
      onCopy == null ? void 0 : onCopy(true);
      setTimeout(() => setJustCopied(false), 2e3);
    } catch (error) {
      console.error("Copy failed:", error);
      onCopy == null ? void 0 : onCopy(false);
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setShowSuccess(true);
        setJustCopied(true);
        onCopy == null ? void 0 : onCopy(true);
        setTimeout(() => setJustCopied(false), 2e3);
      } catch (fallbackError) {
        console.error("Fallback copy failed:", fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };
  const getButtonContent = () => {
    const icon = justCopied ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon2__default.default, {}) : /* @__PURE__ */ jsxRuntime.jsx(ContentCopyIcon2__default.default, {});
    if (iconOnly) {
      return icon;
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      icon,
      justCopied ? "Copied!" : children
    ] });
  };
  const button = /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      onClick: handleCopy,
      startIcon: iconOnly ? void 0 : justCopied ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon2__default.default, {}) : /* @__PURE__ */ jsxRuntime.jsx(ContentCopyIcon2__default.default, {}),
      sx: {
        minWidth: iconOnly ? "auto" : void 0,
        color: justCopied ? "success.main" : void 0,
        ...sx
      },
      "aria-label": iconOnly ? `Copy ${text}` : void 0,
      ...rest,
      children: iconOnly ? getButtonContent() : justCopied ? "Copied!" : children
    }
  );
  const wrappedButton = showTooltip && iconOnly ? /* @__PURE__ */ jsxRuntime.jsx(Tooltip__default.default, { title: `Copy: ${text.length > 50 ? text.substring(0, 50) + "..." : text}`, children: button }) : button;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    wrappedButton,
    /* @__PURE__ */ jsxRuntime.jsx(
      Snackbar2__default.default,
      {
        open: showSuccess,
        autoHideDuration: 2e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsxRuntime.jsx(Alert2__default.default, { severity: "success", icon: /* @__PURE__ */ jsxRuntime.jsx(CheckIcon2__default.default, {}), children: successMessage })
      }
    )
  ] });
};
var CopyButton_default = CopyButton;
var ClickTextImage = ({ title, image, text, ImageComponent }) => {
  const [open, setOpen2] = React22__namespace.useState(false);
  const contentId = React22.useId();
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 };
  const imageConf = React22__namespace.useMemo(
    () => ({
      src: image,
      overlayColor: open ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.45)"
    }),
    [image, open]
  );
  const toggleOpen = () => setOpen2((v) => !v);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Paper__default.default,
    {
      onClick: toggleOpen,
      onKeyDown,
      tabIndex: 0,
      role: "button",
      "aria-expanded": open,
      "aria-controls": contentId,
      "aria-label": "Toggle card details",
      sx: {
        position: "relative",
        display: "grid",
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        minHeight: TILE_MIN_H,
        appearance: "none",
        border: 0,
        background: "inherit",
        textAlign: "inherit",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "translateY(-2px)" },
        "&:focus-visible": (theme) => ({
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2
        })
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          BackgroundBox_default,
          {
            ImageComponent,
            imageConf,
            sx: {
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none"
            }
          }
        ),
        !open && /* @__PURE__ */ jsxRuntime.jsxs(
          Box3__default.default,
          {
            sx: {
              gridRow: "1 / -1",
              gridColumn: "1 / -1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: 3,
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                Typography9__default.default,
                {
                  variant: "narrative",
                  color: "common.white",
                  sx: { textShadow: "0 2px 6px rgba(0,0,0,0.35)", mb: 1 },
                  children: title
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { pt: 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(
                Button6__default.default,
                {
                  variant: "text",
                  size: "small",
                  onClick: (e) => {
                    e.stopPropagation();
                    setOpen2(true);
                  },
                  sx: {
                    fontWeight: "bold",
                    color: "common.white",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
                  },
                  children: "Learn more"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Fade__default.default, { in: open, unmountOnExit: true, timeout: 200, children: /* @__PURE__ */ jsxRuntime.jsxs(
          Box3__default.default,
          {
            id: contentId,
            "aria-label": "Card details",
            onClick: (e) => e.stopPropagation(),
            sx: {
              gridRow: "1 / -1",
              gridColumn: "1 / -1",
              overflowY: "auto",
              p: 3,
              bgcolor: "common.white",
              color: "text.primary",
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain",
              zIndex: 2,
              maxHeight: "100%"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "narrative", sx: { mb: 2 }, children: text }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Button6__default.default,
                {
                  variant: "text",
                  size: "small",
                  onClick: (e) => {
                    e.stopPropagation();
                    setOpen2(false);
                  },
                  sx: { fontWeight: "bold", "&:hover": { backgroundColor: "action.hover" } },
                  children: "Close"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
var ClickTextImage_default = React22__namespace.memo(ClickTextImage);
function createTreeTextStore(initialState) {
  let treeTextState = { ...initialState };
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState: () => treeTextState,
    setState: (next) => {
      if (next === treeTextState) return;
      treeTextState = typeof next === "function" ? next(treeTextState) : next;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
function useTreeTextOpen(store, nodeId) {
  return React22.useSyncExternalStore(
    store.subscribe,
    () => {
      var _a;
      return (_a = store.getState()[nodeId]) != null ? _a : false;
    },
    () => false
  );
}
function setTreeTextOpen(store, nodeId) {
  return (open) => {
    store.setState((prev) => ({ ...prev, [nodeId]: open }));
  };
}
var TextControllerContext = React22.createContext(null);
function useTextControllerContext() {
  const ctx = React22.useContext(TextControllerContext);
  if (!ctx) throw new Error("TextControllerContext missing. Wrap with <TextControllerContext>.");
  return ctx;
}
var TextTreeRendererContext = React22.createContext(null);
function useTextTreeRendererContext() {
  const ctx = React22.useContext(TextTreeRendererContext);
  if (!ctx)
    throw new Error("TextTreeRendererContext missing. Wrap with <TextTreeRendererContext>.");
  return ctx;
}
var TreeTextDepthContext = React22.createContext(null);
function useTextTreeDepthContext() {
  const ctx = React22.useContext(TreeTextDepthContext);
  if (!ctx) throw new Error("TreeTextDepthContext missing. Wrap with <TreeTextDepthContext>.");
  return ctx;
}
function TextOpenClose({
  id,
  textDrawerElement,
  textDrawerElementUI,
  children,
  isOpen,
  onToggle,
  depth
}) {
  const { openIndicator, closeIndicator, rendersRegistry } = useTextTreeRendererContext();
  if (!textDrawerElement) return null;
  const handleClick = () => {
    onToggle(!isOpen);
  };
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React22__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    TextElement,
    {
      id: childId,
      children: childBranch.children,
      textDrawerElement: childBranch.node,
      textDrawerElementUI: childBranch.overrides
    }
  ) }, childId)) : [];
  const renderer = textDrawerElement.renderer;
  const props = rendersRegistry[renderer].props({
    textDrawerElement,
    textDrawerElementUI,
    depth,
    hasChildren: true,
    isOpen,
    closeIndicator,
    openIndicator,
    onClick: handleClick
  });
  const Component = rendersRegistry[renderer].renderer;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props }),
    /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(TreeTextDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents }) })
  ] });
}
function TextElement({
  id,
  textDrawerElement,
  textDrawerElementUI,
  children
}) {
  const { treeTextStore } = useTextControllerContext();
  const isOpen = useTreeTextOpen(treeTextStore, id);
  const onToggle = (open) => setTreeTextOpen(treeTextStore, id)(open);
  const { depth } = useTextTreeDepthContext();
  const { rendersRegistry, openIndicator, closeIndicator, baseIndent, indentPolicy } = useTextTreeRendererContext();
  if (!textDrawerElement) return null;
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  if (hasChildren) {
    return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { pl: indentPolicy({ baseIndent, depth }), children: /* @__PURE__ */ jsxRuntime.jsx(
      TextOpenClose,
      {
        id,
        textDrawerElement,
        textDrawerElementUI,
        children,
        isOpen,
        onToggle,
        depth
      }
    ) });
  }
  const renderer = textDrawerElement.renderer;
  const props = rendersRegistry[renderer].props({
    textDrawerElement,
    textDrawerElementUI,
    depth,
    hasChildren,
    isOpen,
    closeIndicator,
    openIndicator,
    onClick: () => {
    }
  });
  const Component = rendersRegistry[renderer].renderer;
  return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { pl: indentPolicy({ baseIndent, depth }), children: /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props }) });
}
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography9__default.default,
    {
      variant: variantLevels[sectionType],
      component,
      sx,
      ...rest
    }
  );
};
TitleLabel.displayName = "TitleLabel";
var PageTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "page", ...p });
var SectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "section", ...p });
var SubsectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "subsection", ...p });
var SubsubsectionTitleLabel = (p) => /* @__PURE__ */ jsxRuntime.jsx(TitleLabel, { sectionType: "subsubsection", ...p });
function LabelOnly({ title, sx }) {
  return /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitleLabel, { component: "div", sx, children: title });
}
function LinkedLabel({ title, href, sx }) {
  return /* @__PURE__ */ jsxRuntime.jsx(MuiLink2__default.default, { href, underline: "hover", sx, children: /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitleLabel, { component: "span", children: title }) });
}

// src/components/content/textNodeRenderers/rendersRegistryTypes.ts
function defineEntry(e) {
  return e;
}
function SimpleText({ text, sx }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "narrative", sx, children: text });
}
var Spacer = ({ size = 4 }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box3__default.default,
    {
      sx: (theme) => ({
        height: theme.spacing(size),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      })
    }
  );
};
var Spacer_default = Spacer;
var STACK_SPACING = {
  compact: 2,
  standard: 4,
  relaxed: 6,
  large: 8,
  extraLarge: 10
};
var BaseStack = ({ size = "standard", ...props }) => {
  const spacing = STACK_SPACING[size];
  return /* @__PURE__ */ jsxRuntime.jsx(Stack__default.default, { spacing, ...props });
};
var StandardStack = ({ sx, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseStack,
    {
      ...props,
      sx: [
        {
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "visible"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ]
    }
  );
};
var StandardStack_default = StandardStack;
function TitleAndSubDepth({
  title,
  subtitle,
  indicator,
  onClick,
  depth
}) {
  const TitleLabel2 = depth === 0 ? SubsectionTitleLabel : SubsubsectionTitleLabel;
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { onClick, display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(StandardStack_default, { size: "compact", children: [
      /* @__PURE__ */ jsxRuntime.jsx(TitleLabel2, { component: "div", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitleLabel, { component: "div", children: subtitle })
    ] }),
    indicator
  ] });
}
function TitleAndSubStd({ title, subtitle, indicator, onClick }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { onClick, display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(StandardStack_default, { size: "compact", children: [
      /* @__PURE__ */ jsxRuntime.jsx(SubsectionTitle, { children: title }),
      subtitle && /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitle, { children: subtitle })
    ] }),
    indicator
  ] });
}
function TitledText({ title, subtitle, text, sx }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(StandardStack_default, { size: "compact", sx, children: [
    /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitleLabel, { component: "div", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitleLabel, { component: "div", children: subtitle }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "narrative", children: text })
  ] });
}

// src/components/content/textNodeRenderers/defaultTextPolicyRegister.ts
var defaultRendersRegistry = {
  /** Bare narrative text. Uses `content`; falls back to `title` when absent. Supports `sx`. */
  simpleText: {
    type: "plainText",
    props: ({ textDrawerElement, textDrawerElementUI }) => {
      var _a;
      return {
        text: (_a = textDrawerElement.content) != null ? _a : textDrawerElement.title,
        sx: textDrawerElementUI == null ? void 0 : textDrawerElementUI.sx
      };
    },
    renderer: SimpleText
  },
  /** Label + optional subtitle + body paragraph. Uses `content`; falls back to `title`. Supports `sx`. */
  titledText: defineEntry({
    type: "paragraph",
    props: ({ textDrawerElement, textDrawerElementUI }) => {
      var _a;
      return {
        title: textDrawerElement.title,
        subtitle: textDrawerElement.subtitle,
        text: (_a = textDrawerElement.content) != null ? _a : textDrawerElement.title,
        sx: textDrawerElementUI == null ? void 0 : textDrawerElementUI.sx
      };
    },
    renderer: TitledText
  }),
  /** Title-only label with no body content. Supports `sx`. */
  labelOnly: defineEntry({
    type: "plainText",
    props: ({ textDrawerElement, textDrawerElementUI }) => ({
      title: textDrawerElement.title,
      sx: textDrawerElementUI == null ? void 0 : textDrawerElementUI.sx
    }),
    renderer: LabelOnly
  }),
  /**
   * Collapsible section header — fixed heading size (h3 / `SubsectionTitle`).
   * Use when the section is always at the top level and heading size must not vary.
   */
  titleAndSubStd: defineEntry({
    type: "section",
    props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick }) => {
      const indicator = isOpen ? openIndicator : closeIndicator;
      return { title: textDrawerElement.title, subtitle: textDrawerElement.subtitle, indicator, onClick };
    },
    renderer: TitleAndSubStd
  }),
  /**
   * Collapsible section header — depth-aware heading size.
   * Renders `SubsectionTitleLabel` (h3) at depth 0 and `SubsubsectionTitleLabel` (h4)
   * at depth > 0.  Prefer this over `titleAndSubStd` for sections that may be nested.
   */
  titleAndSubDepth: defineEntry({
    type: "section",
    props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick, depth }) => {
      const indicator = isOpen ? openIndicator : closeIndicator;
      return { title: textDrawerElement.title, subtitle: textDrawerElement.subtitle, indicator, onClick, depth };
    },
    renderer: TitleAndSubDepth
  }),
  /**
   * Clickable link leaf node.  Requires `href` in the payload; falls back to `'#'`
   * if missing.  Supports `sx`.
   */
  linkedLabel: defineEntry({
    type: "plainText",
    props: ({ textDrawerElement, textDrawerElementUI }) => {
      var _a;
      return {
        title: textDrawerElement.title,
        href: (_a = textDrawerElement.href) != null ? _a : "#",
        sx: textDrawerElementUI == null ? void 0 : textDrawerElementUI.sx
      };
    },
    renderer: LinkedLabel
  })
};
function TextDrawer_Client({ treeFromRoot, indent = 0 }) {
  const renderContext = {
    baseIndent: indent,
    openIndicator: /* @__PURE__ */ jsxRuntime.jsx(ExpandLess__default.default, {}),
    closeIndicator: /* @__PURE__ */ jsxRuntime.jsx(ExpandMore__default.default, {}),
    rendersRegistry: defaultRendersRegistry,
    indentPolicy({ baseIndent, depth }) {
      return baseIndent * depth;
    }
  };
  const childrenComponents = treeFromRoot.children ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React22__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
    TextElement,
    {
      id: childId,
      children: childBranch.children,
      textDrawerElement: childBranch.node,
      textDrawerElementUI: childBranch.overrides
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxRuntime.jsx(TextTreeRendererContext.Provider, { value: renderContext, children: /* @__PURE__ */ jsxRuntime.jsx(TreeTextDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents }) });
}
function TextDrawer({ treeFromRoot, indent = 0 }) {
  const treeTextStore = React22.useMemo(() => {
    const initialStoreState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState);
    initialStoreState["root"] = false;
    return createTreeTextStore(initialStoreState);
  }, [treeFromRoot]);
  return /* @__PURE__ */ jsxRuntime.jsx(TextControllerContext.Provider, { value: { treeTextStore }, children: /* @__PURE__ */ jsxRuntime.jsx(TextDrawer_Client, { treeFromRoot, indent }) });
}
function populateInitialStoreState(node, store) {
  var _a, _b;
  if (node.children) {
    for (const key in node.children) {
      store[key] = (_b = (_a = node.children[key].overrides) == null ? void 0 : _a.defaultOpen) != null ? _b : false;
      populateInitialStoreState(node.children[key], store);
    }
  }
}

// src/core/hierarchy/hierarchyErrorShape.ts
var HIERARCHY_ERROR_CODE = {
  // --- Core grid / geometry issues ----------------------------
  MISSING_PARENT: "MISSING_PARENT",
  INVALID_PARENT: "INVALID_PARENT",
  INVALID_HIERARCHY: "INVALID_HIERARCHY",
  MISSING_ROOT_ATTACHMENT: "MISSING_ROOT_ATTACHMENT",
  D3_STRATIFY_ERROR: "D3_STRATIFY_ERROR",
  NULL_NODE: "NULL_NODE",
  INVALID_CYCLE: "INVALID_CYCLE"
};

// src/core/hierarchy/resolver.ts
function resolver(hierarchyTree) {
  const issues = [];
  let hasUndefinedElements = false;
  let hasMissingParents = false;
  let hasRoot = false;
  let hasInvalidParent = false;
  let hasInvalidHierarchy = false;
  const hierarchy = hierarchyTree.nodes;
  for (const key in hierarchy) {
    if (key === "root") {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `No element can have 'root' as its key.`
      });
      hasInvalidHierarchy = true;
      continue;
    }
    const element = hierarchy[key];
    if (!element) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Element ${key} is undefined.`
      });
      hasUndefinedElements = true;
      continue;
    }
    if (element.parent === void 0 || element.parent === null) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.MISSING_PARENT,
        message: `Element ${key} is missing a parent.`
      });
      hasMissingParents = true;
    } else {
      if (element.parent !== "root" && !(element.parent in hierarchy)) {
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_PARENT,
          message: `Element ${key} has a parent ${element.parent} which does not exist in the hierarchy.`
        });
        hasInvalidParent = true;
      }
      if (element.parent === key) {
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_PARENT,
          message: `Element ${key} cannot be its own parent.`
        });
        hasInvalidParent = true;
      }
      if (element.parent === "root") {
        hasRoot = true;
      }
    }
  }
  if (!hasRoot) {
    issues.push({
      code: HIERARCHY_ERROR_CODE.MISSING_ROOT_ATTACHMENT,
      message: `Hierarchy is missing an element with parent 'root'.`
    });
  }
  if (hasMissingParents || hasUndefinedElements || !hasRoot || hasInvalidParent || hasInvalidHierarchy) {
    return {
      ok: false,
      issues
    };
  }
  const visited = /* @__PURE__ */ new Map();
  let hasCycle = false;
  for (const key in hierarchy) {
    if (!visited.has(key)) {
      const path = [];
      const acyclicResult = acyclic(key, hierarchy, visited, path);
      if (!acyclicResult) {
        hasCycle = true;
        issues.push({
          code: HIERARCHY_ERROR_CODE.INVALID_CYCLE,
          message: `Cycle detected in hierarchy: ${path.join(" -> ")}`
        });
        break;
      }
    }
  }
  if (hasCycle) {
    return {
      ok: false,
      issues
    };
  }
  return {
    ok: true,
    resolvedHierarchy: hierarchyTree
  };
}
function acyclic(node, hierarchy, visited, path) {
  if (!visited.has(node)) {
    visited.set(node, "visiting");
    path.push(node);
    const parent = hierarchy[node].parent;
    if (parent === "root") {
      visited.set(node, "visited");
      return true;
    } else {
      const res = acyclic(parent, hierarchy, visited, path);
      if (res) {
        visited.set(node, "visited");
      }
      return res;
    }
  } else if (visited.get(node) === "visiting") {
    path.push(node);
    return false;
  } else {
    return true;
  }
}

// src/core/hierarchy/sortD3Stratify.ts
function sortD3Stratify(stratify2) {
  const issues = [];
  stratify2.each((node) => {
    if (node.parent === null) {
      return;
    }
    if (node.data.payload.node === null) {
      const parentId = node.parent ? node.parent.id : "null";
      let parentString = "";
      if (parentId) {
        parentString = ` under parent id ${parentId}`;
      }
      issues.push({
        code: HIERARCHY_ERROR_CODE.NULL_NODE,
        message: `There is a null node while sorting${parentString}.`
      });
    }
  });
  const root = stratify2.sort((a, b) => {
    if (a.data.payload.node === null || b.data.payload.node === null) {
      return 0;
    }
    const aOrder = a.data.payload.node.order;
    const bOrder = b.data.payload.node.order;
    if (aOrder === void 0 && bOrder === void 0) {
      return a.data.id.localeCompare(b.data.id);
    }
    if (aOrder === void 0 && bOrder !== void 0) return 1;
    if (aOrder !== void 0 && bOrder === void 0) return -1;
    if (aOrder !== void 0 && bOrder !== void 0) return aOrder - bOrder;
    return 0;
  });
  if (issues.length > 0) {
    return { ok: false, issues };
  }
  return { root, ok: true };
}

// src/core/hierarchy/buildTreeFromStratify.ts
function buildTreeFromStratify(stratify2) {
  const { node, overrides } = stratify2.data.payload;
  const root = {
    node,
    overrides
  };
  const issues = [];
  const buildNode = createBuildNode(issues);
  stratify2.eachBefore(buildNode);
  root.children = stratify2.data.payload.children;
  return { root, issues };
}
function createBuildNode(issues) {
  return (nodeStratify) => {
    const id = nodeStratify.id;
    if (id === void 0) {
      issues.push({
        code: HIERARCHY_ERROR_CODE.INVALID_HIERARCHY,
        message: `Node with undefined id found.`
      });
      return;
    }
    const parent = nodeStratify.parent;
    if (parent === null) {
      return;
    }
    let parentChildren = parent.data.payload.children;
    if (parentChildren === void 0) {
      parentChildren = {};
      parent.data.payload.children = parentChildren;
    }
    parentChildren[id] = nodeStratify.data.payload;
  };
}
function convertToD3Stratify(hierarchy, overridesNodes) {
  const data = [];
  const issues = [];
  data.push({
    id: "root",
    parentId: null,
    payload: { node: null, children: {} }
    // creating the children array only for root
  });
  for (const key in hierarchy) {
    const node = hierarchy[key].payload;
    let overrides = void 0;
    if (overridesNodes) {
      if (key in overridesNodes) {
        const oveR = overridesNodes[key];
        if (oveR !== void 0) {
          overrides = oveR.payload;
        }
      }
    }
    data.push({
      id: key,
      parentId: hierarchy[key].parent,
      payload: { node, ...overrides !== void 0 ? { overrides } : {} }
    });
  }
  try {
    const root = d3Hierarchy.stratify()(data);
    return { ok: true, root };
  } catch (e) {
    const message = e instanceof Error ? e.message : typeof e === "string" ? e : JSON.stringify(e);
    issues.push({
      code: HIERARCHY_ERROR_CODE.D3_STRATIFY_ERROR,
      message: `D3 Stratify error: ${message}`
    });
    return { ok: false, issues };
  }
}

// src/components/content/prepareTextTree.ts
function prepareTextTree({
  hierarchy,
  overrides
}) {
  const resolverReturn = resolver(hierarchy);
  if (!resolverReturn.ok) {
    console.error("Hierarchy issues detected:", resolverReturn.issues);
    return { ok: false, issues: resolverReturn.issues };
  }
  const resultHtoD3 = convertToD3Stratify(
    hierarchy.nodes,
    overrides.nodes
  );
  if (!resultHtoD3.ok) {
    console.error("Failed to convert hierarchy to D3 Stratify:", resultHtoD3.issues);
    return { ok: false, issues: resultHtoD3.issues };
  }
  const sorted = sortD3Stratify(resultHtoD3.root);
  if (!sorted.ok) {
    console.error("Failed to sort D3 Stratify:", sorted.issues);
    return { ok: false, issues: sorted.issues };
  }
  const treeBuildResult = buildTreeFromStratify(sorted.root);
  if (treeBuildResult.issues.length > 0) {
    console.error("Failed to build tree from D3 Stratify:", treeBuildResult.issues);
    return { ok: false, issues: treeBuildResult.issues };
  }
  return { ok: true, root: treeBuildResult.root };
}

// src/components/content/hierarchyToTextDrawerProps.ts
function hierarchyToTextDrawerProps({
  hierarchy,
  overrides
}) {
  const treeRoot = prepareTextTree({ hierarchy, overrides});
  if (!treeRoot.ok) {
    console.error("Failed to prepare text tree:", treeRoot.issues);
    return { ok: false, issues: treeRoot.issues };
  }
  return {
    ok: true,
    treeFromRoot: treeRoot.root
  };
}
var defineOverride = (_layout, override) => override;
function TwoColumnsFooter(props) {
  const layout = gridcss.getLayoutFromCatalog("secondary", "header2colFooter");
  const diagnostics = [];
  const absoluteLayout = gridcss.CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride(layout, {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_2 })
      }
    }
  });
  const rendered = gridcss.GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsxRuntime.jsx(system.Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride2 = (_layout, override) => override;
function ThreeColumnsFooter(props) {
  const layout = gridcss.getLayoutFromCatalog("secondary", "footerHeader3Columns");
  const diagnostics = [];
  const absoluteLayout = gridcss.CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride2(layout, {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_3 })
      }
    }
  });
  const rendered = gridcss.GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsxRuntime.jsx(system.Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride3 = (_layout, override) => override;
function FeaturedColumnsFooter(props) {
  const layout = gridcss.getLayoutFromCatalog("secondary", "header3colFooter");
  const diagnostics = [];
  const absoluteLayout = gridcss.CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride3(layout, {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_3 })
      }
    }
  });
  const rendered = gridcss.GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsxRuntime.jsx(system.Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride4 = (_layout, override) => override;
function FiveColumnsFooter(props) {
  const layout = gridcss.getLayoutFromCatalog("secondary", "footerHeader5Columns");
  const diagnostics = [];
  const absoluteLayout = gridcss.CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride4(layout, {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_3 })
      },
      block_4: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_4 })
      },
      block_5: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.column_5 })
      }
    }
  });
  const rendered = gridcss.GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsxRuntime.jsx(system.Box, { width: "100%", height: "100%", children: rendered });
}
var MenuControllerContext = React22.createContext(null);
function useMenuControllerContext() {
  const ctx = React22.useContext(MenuControllerContext);
  if (!ctx) throw new Error("MenuControllerContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuSelectorContext = React22.createContext(null);
function useMenuSelectorContext() {
  const ctx = React22.useContext(MenuSelectorContext);
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
  return React22.useSyncExternalStore(
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
var DefaultLinkLike = React22__namespace.forwardRef(function DefaultLinkLike2(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx("a", { ref, ...props });
});
var MenuDepthContext = React22.createContext(null);
function useMenuDepthContext() {
  const ctx = React22.useContext(MenuDepthContext);
  if (!ctx) throw new Error("MenuDepthContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuRenderContext = React22.createContext(null);
function useMenuRenderContext() {
  const ctx = React22.useContext(MenuRenderContext);
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
function camelCase(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}
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
    /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { ...typographyProps, children: text }) })
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
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React22__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const [openDrawer, setOpenDrawer] = React22.useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  const rootLabel = root.label || "Menu";
  const renderedTreeFromRoot = React22__namespace.default.useMemo(
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
  React22.useEffect(() => {
    for (const selectedId of selectedPathIds) {
      if (selectedId !== selectId) setOpen(menuStore, selectedId)(true);
    }
  }, [selectId, menuStore, selectedPathIds]);
  const childrenComponents = renderedTreeFromRoot.children ? Object.entries(renderedTreeFromRoot.children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React22__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const selectors = React22.useMemo(
    () => getSelectors({
      treeFromRoot,
      selector
    }),
    [treeFromRoot, selector]
  );
  const menuStore = React22.useMemo(() => {
    const initialStoreState = {};
    populateInitialStoreState2(treeFromRoot, initialStoreState, selectors.selectedPathIds);
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
function populateInitialStoreState2(node, store, selectedIs) {
  if (node.children) {
    for (const key in node.children) {
      store[key] = false;
      if (selectedIs.has(key)) {
        store[key] = true;
      }
      populateInitialStoreState2(node.children[key], store, selectedIs);
    }
  }
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
  const normalizedPath = React22__namespace.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React22__namespace.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React22__namespace.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React22__namespace.useMemo(() => {
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
            MuiLink2__default.default,
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
            MuiLink2__default.default,
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
        !hideRoot && /* @__PURE__ */ jsxRuntime.jsx(MuiLink2__default.default, { component: linkComponent, href: "/", underline: "hover", color: "inherit", children: "Home" }),
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
    Box3__default.default,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        ...sx
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ImageComponent, { src, width, height, alt }),
        subtitle ? /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "eyebrow", sx: { mt: 1 }, children: subtitle }) : null
      ]
    }
  );
}
function HeaderMinimal({ centerDown, centerUp, left, right }) {
  return (
    //
    /* @__PURE__ */ jsxRuntime.jsx(AppBar__default.default, { position: "sticky", children: /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: { display: "flex" }, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Box3__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { children: left }),
          /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { flex: "1 1 auto", minWidth: 0, children: /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", width: "100%", flexDirection: "column", alignItems: "center", children: [
            centerUp,
            centerDown
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { children: right })
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
var compactMegaMenuPolicy = {
  showColumnDividers: false,
  showItemDivider: false,
  columnMinWidth: 120,
  outerPadding: 1
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
  const childrenComponents = entries.map(([childId, childBranch], index) => /* @__PURE__ */ jsxRuntime.jsxs(React22__namespace.default.Fragment, { children: [
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
  return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { padding: outerPadding, children: /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, children: childrenComponents }) });
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
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(React22__namespace.default.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { padding: 2, sx: { minWidth: columnMinWidth }, children: /* @__PURE__ */ jsxRuntime.jsxs(List__default.default, { children: [
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
  const [anchorEl, setAnchorEl] = React22__namespace.default.useState(null);
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
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { display: "flex", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const selectors = React22.useMemo(
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
    /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { display: {
      xs: "block",
      sm: "none"
    } }, children: /* @__PURE__ */ jsxRuntime.jsx(HeaderDrawer, { breadMenuProps, drawerProps, logoProps }) }),
    /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { display: {
      xs: "none",
      sm: "block"
    } }, children: /* @__PURE__ */ jsxRuntime.jsx(HeaderMenu, { breadMenuProps, logoProps, menuProps }) })
  ] });
}
var DebouncedTextField = ({
  value: controlledValue,
  defaultValue = "",
  debounceMs = 500,
  onChange,
  onDebouncedChange,
  flushOnBlur = true,
  ...props
}) => {
  const isControlled = controlledValue !== void 0;
  const [uncontrolledValue, setUncontrolledValue] = React22__namespace.useState(String(defaultValue != null ? defaultValue : ""));
  const inputValue = isControlled ? String(controlledValue != null ? controlledValue : "") : uncontrolledValue;
  const timerRef = React22__namespace.useRef(null);
  const composingRef = React22__namespace.useRef(false);
  const lastEmittedRef = React22__namespace.useRef(inputValue);
  const clearTimer = React22__namespace.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const schedule = React22__namespace.useCallback(
    (next) => {
      if (!onDebouncedChange) return;
      clearTimer();
      const delay = Math.max(0, debounceMs);
      timerRef.current = setTimeout(() => {
        if (composingRef.current) return;
        if (next !== lastEmittedRef.current) {
          onDebouncedChange(next);
          lastEmittedRef.current = next;
        }
      }, delay);
    },
    [debounceMs, onDebouncedChange, clearTimer]
  );
  React22__namespace.useEffect(() => {
    schedule(inputValue);
  }, [debounceMs]);
  React22__namespace.useEffect(() => {
    if (isControlled) schedule(String(controlledValue != null ? controlledValue : ""));
  }, [isControlled, controlledValue]);
  React22__namespace.useEffect(() => clearTimer, [clearTimer]);
  const handleChange = React22__namespace.useCallback(
    (e) => {
      var _a;
      const next = (_a = e.target.value) != null ? _a : "";
      if (!isControlled) setUncontrolledValue(next);
      onChange == null ? void 0 : onChange(e);
      if (!composingRef.current) schedule(next);
    },
    [isControlled, onChange, schedule]
  );
  const handleBlur = React22__namespace.useCallback(
    (e) => {
      var _a, _b;
      if (flushOnBlur && onDebouncedChange) {
        const next = (_a = e.target.value) != null ? _a : "";
        clearTimer();
        if (next !== lastEmittedRef.current) {
          onDebouncedChange(next);
          lastEmittedRef.current = next;
        }
      }
      (_b = props.onBlur) == null ? void 0 : _b.call(props, e);
    },
    [flushOnBlur, onDebouncedChange, clearTimer, props]
  );
  const handleCompositionStart = () => {
    composingRef.current = true;
    clearTimer();
  };
  const handleCompositionEnd = (e) => {
    var _a;
    composingRef.current = false;
    const next = (_a = e.target.value) != null ? _a : "";
    schedule(next);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    TextField__default.default,
    {
      ...props,
      value: inputValue,
      onChange: handleChange,
      onBlur: handleBlur,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd
    }
  );
};
var DebouncedTextField_default = DebouncedTextField;
var PageLayout = ({ children, transparent = false, sx }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    StandardStack_default,
    {
      size: "large",
      sx: [
        {
          background: transparent ? "none" : void 0,
          backgroundColor: transparent ? "transparent" : "background.default"
        },
        ...Array.isArray(sx) ? sx : [sx]
      ],
      children
    }
  );
};
var PageLayout_default = PageLayout;
function formatTitle(node, kind = "title") {
  if (typeof node === "string") {
    return kind === "title" ? /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitle, { children: node }) : /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "strapline", children: node });
  }
  return React22__namespace.isValidElement(node) ? node : null;
}
var HeroBlock = ({
  image,
  alt,
  header,
  message,
  caption,
  subTitle,
  priority = false,
  ImageComponent,
  sx,
  ...containerProps
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Container__default.default,
    {
      ...containerProps,
      maxWidth: "lg",
      disableGutters: true,
      sx: [
        {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "inherit",
          width: "100%",
          height: "100%"
        },
        ...sx ? Array.isArray(sx) ? sx : [sx] : []
      ],
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        Grid__default.default,
        {
          container: true,
          spacing: 10,
          alignItems: "stretch",
          width: "100%",
          sx: { flex: 1, minHeight: "inherit" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Grid__default.default, { size: { xs: 12, md: 7 }, sx: { display: "flex" }, children: /* @__PURE__ */ jsxRuntime.jsxs(
              Stack__default.default,
              {
                spacing: 3,
                sx: {
                  py: { xs: 2, md: 0 },
                  justifyContent: "center",
                  width: "100%"
                },
                children: [
                  formatTitle(header, "title"),
                  message && /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "lead", color: "text.primary", sx: { textAlign: "left", maxWidth: 720 }, children: message }),
                  formatTitle(subTitle, "subtitle")
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsx(Grid__default.default, { size: { xs: 12, md: 5 }, sx: { display: "flex", alignItems: "stretch" }, children: /* @__PURE__ */ jsxRuntime.jsxs(
              Box3__default.default,
              {
                sx: { display: "flex", flexDirection: "column", flex: 1, minHeight: 0, width: "100%" },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Paper__default.default,
                    {
                      elevation: 12,
                      sx: {
                        position: "relative",
                        borderRadius: 3,
                        overflow: "hidden",
                        flex: 1,
                        width: "100%",
                        maxWidth: "none",
                        minHeight: { xs: 260, md: 0 }
                        // fallback so it never collapses
                      },
                      children: /* @__PURE__ */ jsxRuntime.jsx(
                        ImageComponent,
                        {
                          src: image,
                          alt: alt != null ? alt : typeof caption === "string" ? caption : "",
                          fill: true,
                          priority,
                          sizes: "(max-width: 600px) 90vw, (max-width: 1200px) 50vw, 45vw",
                          style: { objectFit: "cover" }
                        }
                      )
                    }
                  ),
                  caption && /* @__PURE__ */ jsxRuntime.jsx(
                    Typography9__default.default,
                    {
                      variant: "finePrint",
                      color: "text.secondary",
                      textAlign: "center",
                      mt: 2,
                      children: caption
                    }
                  )
                ]
              }
            ) })
          ]
        }
      )
    }
  );
};
var HeroBlock_default = HeroBlock;
var defineOverride5 = (layout, override) => {
  return override;
};
function toYouTubeEmbedSrc(input) {
  const value = input.trim();
  if (!value) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(value)) {
    return `https://www.youtube.com/embed/${value}`;
  }
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (host === "youtu.be") {
      const id = url.pathname.replace("/", "");
      if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
    if (host.includes("youtube.com")) {
      const watchId = url.searchParams.get("v");
      if (watchId && /^[A-Za-z0-9_-]{11}$/.test(watchId)) {
        return `https://www.youtube.com/embed/${watchId}`;
      }
      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.findIndex((p) => p === "embed" || p === "shorts");
      const id = embedIndex >= 0 ? parts[embedIndex + 1] : null;
      if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
  } catch {
    return null;
  }
  return null;
}
var MediaText = (props) => {
  var _a;
  const ImageComponent = props.ImageComponent;
  let layout;
  const preset = ((_a = props.textSplit) == null ? void 0 : _a.preset) || "50-50";
  if (preset === "40-60") {
    layout = {
      row_1: {
        block_1: { spanX: 4, spanY: 1 },
        block_2: { spanX: 6, spanY: 1 }
      }
    };
  } else if (preset === "45-55") {
    layout = {
      row_1: {
        block_1: { spanX: 9, spanY: 1 },
        block_2: { spanX: 11, spanY: 1 }
      }
    };
  } else if (preset === "50-50") {
    layout = {
      row_1: {
        block_1: { spanX: 1, spanY: 1 },
        block_2: { spanX: 1, spanY: 1 }
      }
    };
  } else if (preset === "55-45") {
    layout = {
      row_1: {
        block_1: { spanX: 11, spanY: 1 },
        block_2: { spanX: 9, spanY: 1 }
      }
    };
  } else if (preset === "60-40") {
    layout = {
      row_1: {
        block_1: { spanX: 6, spanY: 1 },
        block_2: { spanX: 4, spanY: 1 }
      }
    };
  } else {
    layout = {
      row_1: {
        block_1: { spanX: 1, spanY: 1 },
        block_2: { spanX: 1, spanY: 1 }
      }
    };
  }
  const layoutAbsolute = gridcss.CSSLayout({ layout, diagnostics: [] });
  let media = null;
  if ("image" in props && props.image) {
    const imageConf = {
      src: props.image,
      mode: "cover",
      // Fill container while maintaining aspect ratio
      objectPosition: "50% 50%"
      // Center the image within container
    };
    media = /* @__PURE__ */ jsxRuntime.jsx(
      BackgroundBox_default,
      {
        ImageComponent,
        imageConf,
        sx: {
          position: "absolute",
          inset: 0
          // Fill entire container
        }
      }
    );
  }
  if ("video" in props && props.video) {
    const embedSrc = toYouTubeEmbedSrc(props.video);
    media = /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { position: "absolute", inset: 0 }, children: embedSrc && /* @__PURE__ */ jsxRuntime.jsx(
      Box3__default.default,
      {
        component: "iframe",
        src: embedSrc,
        title: "YouTube video player",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        allowFullScreen: true,
        sx: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0
          // Remove default iframe border
        }
      }
    ) });
  }
  const renderer = defineOverride5(layout, {
    row_1: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.reverse ? props.message : media })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.reverse ? media : props.message })
      }
    }
  });
  const rendered = gridcss.GridCssMuiRenderer({
    layoutAbsolute,
    layoutRendering: renderer,
    diagnostics: []
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box3__default.default,
    {
      sx: {
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "inherit",
        // Inherit from parent Section when available
        flex: 1,
        // Grow to fill available space
        backgroundColor: props.backgroundColor,
        p: props.pad ? { xs: 2, md: 3 } : void 0,
        ...props.sx
        // Allow style overrides
      },
      children: rendered
    }
  );
};
var MediaText_default = MediaText;
function toYouTubeEmbedSrc2(value) {
  const input = value.trim();
  if (!input) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) {
    return `https://www.youtube.com/embed/${input}`;
  }
  try {
    const url = new URL(input);
    const host = url.hostname.toLowerCase();
    if (host === "youtu.be") {
      const id = url.pathname.replace("/", "");
      return /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host.includes("youtube.com")) {
      const watchId = url.searchParams.get("v");
      if (watchId && /^[A-Za-z0-9_-]{11}$/.test(watchId)) {
        return `https://www.youtube.com/embed/${watchId}`;
      }
      const parts = url.pathname.split("/").filter(Boolean);
      const i = parts.findIndex((p) => p === "embed" || p === "shorts");
      const id = i >= 0 ? parts[i + 1] : null;
      return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}
function resolveIframeSrc(videoId, src) {
  var _a;
  if (videoId) return (_a = toYouTubeEmbedSrc2(videoId)) != null ? _a : "";
  if (!src) return "";
  const fromYouTube = toYouTubeEmbedSrc2(src);
  return fromYouTube != null ? fromYouTube : src.trim();
}
function VideoModal({
  videoId,
  src,
  title = "Watch Video",
  trigger,
  avatarSrc = "/images/kellieBella2.jpg",
  buttonLabel = "Learn More",
  align = "flex-end",
  widthPercent = 80,
  modalSx
}) {
  const [open, setOpen2] = React22.useState(false);
  const titleId = React22.useId();
  const descId = React22.useId();
  const iframeSrc = resolveIframeSrc(videoId, src);
  const avatarUrl = typeof avatarSrc === "string" ? avatarSrc : avatarSrc == null ? void 0 : avatarSrc.src;
  const defaultTrigger = /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: align, gap: 1 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Avatar__default.default,
      {
        src: avatarUrl,
        alt: "",
        slotProps: { img: { loading: "lazy", decoding: "async" } }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Button6__default.default, { variant: "text", color: "secondary", onClick: () => setOpen2(true), children: buttonLabel })
  ] });
  const wrappedTrigger = trigger ? /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      role: "button",
      tabIndex: 0,
      "aria-label": typeof title === "string" ? `Open video: ${title}` : "Open video",
      onClick: () => setOpen2(true),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen2(true);
        }
      },
      style: { display: "inline-flex" },
      children: trigger
    }
  ) : defaultTrigger;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    wrappedTrigger,
    /* @__PURE__ */ jsxRuntime.jsx(
      Modal__default.default,
      {
        open,
        onClose: () => setOpen2(false),
        "aria-labelledby": titleId,
        "aria-describedby": descId,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          Box3__default.default,
          {
            sx: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: `${Math.min(100, Math.max(40, widthPercent))}%`,
              maxWidth: 1200,
              maxHeight: "90vh",
              overflowY: "auto",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              ...modalSx
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(SubsectionTitle, { id: titleId, gutterBottom: true, children: title }),
              /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { id: descId, sx: { position: "relative", width: "100%", paddingTop: "56.25%" }, children: iframeSrc ? /* @__PURE__ */ jsxRuntime.jsx(
                "iframe",
                {
                  src: iframeSrc,
                  title,
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  allowFullScreen: true,
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0
                  }
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                Box3__default.default,
                {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    px: 2,
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(Typography9__default.default, { variant: "narrative", color: "text.secondary", children: "Video source is missing or invalid." })
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { mt: 2, textAlign: "right" }, children: /* @__PURE__ */ jsxRuntime.jsx(Button6__default.default, { onClick: () => setOpen2(false), "aria-label": "Close video modal", children: "Close" }) })
            ]
          }
        )
      }
    )
  ] });
}

// src/components/menus/prepareMenuTree.ts
function prepareMenuTree({
  hierarchy,
  overrides
}) {
  const resolverReturn = resolver(hierarchy);
  if (!resolverReturn.ok) {
    console.error("Hierarchy issues detected:", resolverReturn.issues);
    return { ok: false, issues: resolverReturn.issues };
  }
  const resultHtoD3 = convertToD3Stratify(
    hierarchy.nodes,
    overrides.nodes
  );
  if (!resultHtoD3.ok) {
    console.error("Failed to convert hierarchy to D3 Stratify:", resultHtoD3.issues);
    return { ok: false, issues: resultHtoD3.issues };
  }
  const sorted = sortD3Stratify(resultHtoD3.root);
  if (!sorted.ok) {
    console.error("Failed to sort D3 Stratify:", sorted.issues);
    return { ok: false, issues: sorted.issues };
  }
  const treeBuildResult = buildTreeFromStratify(sorted.root);
  if (treeBuildResult.issues.length > 0) {
    console.error("Failed to build tree from D3 Stratify:", treeBuildResult.issues);
    return { ok: false, issues: treeBuildResult.issues };
  }
  return { ok: true, root: treeBuildResult.root };
}

// src/components/menus/drawer/hierarchyToDrawerInput.tsx
function hierarchyToDrawerInput({
  hierarchy,
  overrides
}) {
  var _a;
  const treeRoot = prepareMenuTree({ hierarchy, overrides});
  if (!treeRoot.ok) {
    console.error("Failed to prepare menu tree:", treeRoot.issues);
    return { ok: false, issues: treeRoot.issues };
  }
  const root = hierarchy.root;
  const rootOverrides = (_a = overrides.root) == null ? void 0 : _a.payload;
  return {
    ok: true,
    root,
    treeFromRoot: treeRoot.root,
    rootOverrides
  };
}

// src/core/hierarchy/defineHierarchyModel.ts
var defineHierarchyModel = (_payloadMap, model) => {
  return model;
};
function isStaticImageDataLike(x) {
  if (!x || typeof x !== "object") return false;
  return "src" in x && typeof x.src === "string";
}
function resolveImageSource(p) {
  const { src, width, height } = p;
  const url = isStaticImageDataLike(src) ? src.src : src;
  const resolvedWidth = width != null ? width : isStaticImageDataLike(src) ? src.width : void 0;
  const resolvedHeight = height != null ? height : isStaticImageDataLike(src) ? src.height : void 0;
  return { src: url, width: resolvedWidth, height: resolvedHeight };
}
function toImgAttrs(p) {
  const {
    src: _src,
    width: _w,
    height: _h,
    // Next-ish props to strip:
    fill,
    sizes,
    placeholder,
    priority,
    quality,
    unoptimized,
    // keep style separate (we may override when fill=true)
    style,
    ...rest
  } = p;
  const { src, width, height } = resolveImageSource({ src: _src, width: _w, height: _h });
  return {
    ...rest,
    src,
    width,
    height,
    style
  };
}
var HtmlImage = React22__namespace.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
  const mergedStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style != null ? style : {};
  const imgProps = toImgAttrs({ ...props, style: mergedStyle });
  return /* @__PURE__ */ jsxRuntime.jsx("img", { ref, ...imgProps });
});

// src/lib/text/index.ts
var text_exports = {};
__export(text_exports, {
  boldToNodes: () => boldToNodes,
  parseInlineMarkdown: () => parseInlineMarkdown,
  toTitleCase: () => toTitleCase
});
function boldToNodes(input, keyScope = "b") {
  const boldRe = /\*\*([^*]+)\*\*/g;
  return splitAndWrap(input, boldRe, (m, k) => /* @__PURE__ */ jsxRuntime.jsx("strong", { children: m[1] }, k), `${keyScope}-`);
}
function parseInlineMarkdown(input, Link, keyScope = "md") {
  const linkRe = /\[([^\]]+)\]\(((?:https?:\/\/|mailto:|tel:|\/|#)[^\s)]+)\)/g;
  const boldRe = /\*\*([^*]+)\*\*/g;
  const italicRe = /\*([^*]+)\*/g;
  const withLinks = splitAndWrap(
    input,
    linkRe,
    (m, k) => {
      const text = m[1];
      const href = m[2];
      if (href.startsWith("/")) {
        return /* @__PURE__ */ jsxRuntime.jsx(Link, { href, children: text }, k);
      }
      if (href.startsWith("http")) {
        return /* @__PURE__ */ jsxRuntime.jsx(MuiLink2__default.default, { href, target: "_blank", rel: "noopener noreferrer", children: text }, k);
      }
      return /* @__PURE__ */ jsxRuntime.jsx(MuiLink2__default.default, { href, children: text }, k);
    },
    `${keyScope}-link-`
  );
  const withBold = flatMapNodes(
    withLinks,
    (n) => typeof n === "string" ? splitAndWrap(n, boldRe, (m, k) => /* @__PURE__ */ jsxRuntime.jsx("strong", { children: m[1] }, k), `${keyScope}-b-`) : [n]
  );
  const withItalics = flatMapNodes(
    withBold,
    (n) => typeof n === "string" ? splitAndWrap(n, italicRe, (m, k) => /* @__PURE__ */ jsxRuntime.jsx("em", { children: m[1] }, k), `${keyScope}-i-`) : [n]
  );
  const newlineRe = /\r\n|\r|\n|\\n/g;
  const withBreaks = flatMapNodes(
    withItalics,
    (n) => typeof n === "string" ? splitAndWrap(n, newlineRe, (_m, k) => /* @__PURE__ */ jsxRuntime.jsx("br", {}, k), `${keyScope}-br-`) : [n]
  );
  return withBreaks;
}
function splitAndWrap(input, re, wrap, keyPrefix = "") {
  const out = [];
  let lastIndex = 0;
  let local = 0;
  for (; ; ) {
    const match = re.exec(input);
    if (!match) break;
    if (match.index > lastIndex) out.push(input.slice(lastIndex, match.index));
    out.push(wrap(match, `${keyPrefix}${local++}`));
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < input.length) out.push(input.slice(lastIndex));
  return out;
}
function flatMapNodes(nodes, fn) {
  const out = [];
  for (const n of nodes) out.push(...fn(n));
  return out;
}

// src/lib/icon/index.ts
var icon_exports = {};
__export(icon_exports, {
  IconPicker: () => IconPicker_default
});

exports.ActionButton = ActionButton_default;
exports.BackButton = BackButton_default;
exports.BackgroundBox = BackgroundBox_default;
exports.BannerCarousel = BannerCarousel_default;
exports.BannerStatic = BannerStatic_default;
exports.BlockCarousel = BlockCarousel_default;
exports.BookingButton = BookingButton_default;
exports.BreadMenu = BreadMenu_default;
exports.CallToActionButton = CallToActionButton_default;
exports.ClickTextImage = ClickTextImage_default;
exports.CopyButton = CopyButton_default;
exports.DebouncedTextField = DebouncedTextField_default;
exports.DefaultLinkLike = DefaultLinkLike;
exports.DownloadButton = DownloadButton_default;
exports.DrawerMenu = DrawerMenu;
exports.DropDown = DropDown;
exports.DynamicTransition = DynamicTransition_default;
exports.ElementButton = ElementButton;
exports.ElementLabel = ElementLabel;
exports.FavoriteButton = FavoriteButton_default;
exports.FeaturedColumnsFooter = FeaturedColumnsFooter;
exports.FiveColumnsFooter = FiveColumnsFooter;
exports.GetInTouch = GetInTouch_default;
exports.HIERARCHY_ERROR_CODE = HIERARCHY_ERROR_CODE;
exports.Header = Header;
exports.HeaderDrawer = HeaderDrawer;
exports.HeaderLogo = HeaderLogo;
exports.HeaderMenu = HeaderMenu;
exports.HeaderMinimal = HeaderMinimal;
exports.HeroBlock = HeroBlock_default;
exports.HtmlImage = HtmlImage;
exports.IconPicker = IconPicker_default;
exports.MainTitle = MainTitle_default;
exports.MediaText = MediaText_default;
exports.MenuRenderContext = MenuRenderContext;
exports.MenuSelectorContext = MenuSelectorContext;
exports.Pad = Pad;
exports.PageLayout = PageLayout_default;
exports.PageTitle = PageTitle;
exports.PageTitleLabel = PageTitleLabel;
exports.RouterProvider = RouterProvider;
exports.SECTION_MIN_H = SECTION_MIN_H;
exports.Section = Section;
exports.SectionTitle = SectionTitle;
exports.SectionTitleLabel = SectionTitleLabel;
exports.ShareButton = ShareButton_default;
exports.SocialButton = SocialButton_default;
exports.Spacer = Spacer_default;
exports.StandardStack = StandardStack_default;
exports.SubscribeButton = SubscribeButton_default;
exports.SubsectionTitle = SubsectionTitle;
exports.SubsectionTitleLabel = SubsectionTitleLabel;
exports.SubsubsectionTitle = SubsubsectionTitle;
exports.SubsubsectionTitleLabel = SubsubsectionTitleLabel;
exports.TextDrawer = TextDrawer;
exports.ThreeColumnsFooter = ThreeColumnsFooter;
exports.Title = Title;
exports.TitleLabel = TitleLabel;
exports.TouchButton = TouchButton_default;
exports.TwoColumnsFooter = TwoColumnsFooter;
exports.VideoModal = VideoModal;
exports.WhatsAppButton = WhatsAppButton_default;
exports.boldToNodes = boldToNodes;
exports.buildTreeFromStratify = buildTreeFromStratify;
exports.camelCase = camelCase;
exports.compactMegaMenuPolicy = compactMegaMenuPolicy;
exports.convertToD3Stratify = convertToD3Stratify;
exports.createMenuStore = createMenuStore;
exports.createTreeTextStore = createTreeTextStore;
exports.defaultDrawerRowPolicy = defaultDrawerRowPolicy;
exports.defaultDropDownPolicy = defaultDropDownPolicy;
exports.defaultRendersRegistry = defaultRendersRegistry;
exports.defineEntry = defineEntry;
exports.defineHierarchyModel = defineHierarchyModel;
exports.getSelectedAndPath = getSelectedAndPath;
exports.getSelectors = getSelectors;
exports.hierarchyToDrawerInput = hierarchyToDrawerInput;
exports.hierarchyToTextDrawerProps = hierarchyToTextDrawerProps;
exports.icon = icon_exports;
exports.isStaticImageDataLike = isStaticImageDataLike;
exports.parseInlineMarkdown = parseInlineMarkdown;
exports.prepareMenuTree = prepareMenuTree;
exports.resolver = resolver;
exports.safeTitleCase = safeTitleCase;
exports.sectionMinHeightSx = sectionMinHeightSx;
exports.setOpen = setOpen;
exports.setTreeTextOpen = setTreeTextOpen;
exports.sortD3Stratify = sortD3Stratify;
exports.standardMegaMenuPolicy = standardMegaMenuPolicy;
exports.text = text_exports;
exports.toImgAttrs = toImgAttrs;
exports.toTitleCase = toTitleCase;
exports.useMenuRenderContext = useMenuRenderContext;
exports.useMenuSelectorContext = useMenuSelectorContext;
exports.useNodeOpen = useNodeOpen;
exports.useRowPlan = useRowPlan;
exports.useTreeTextOpen = useTreeTextOpen;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map