'use strict';

var styles = require('@mui/material/styles');
var Box3 = require('@mui/material/Box');
var jsxRuntime = require('react/jsx-runtime');
var React16 = require('react');
var Container = require('@mui/material/Container');
var Fade = require('@mui/material/Fade');
var Stack = require('@mui/material/Stack');
var Typography13 = require('@mui/material/Typography');
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
var Collapse = require('@mui/material/Collapse');
var Divider = require('@mui/material/Divider');
var MuiLink2 = require('@mui/material/Link');
var gridcss = require('@mcpab/gridcss');
var system = require('@mui/system');
var ChevronRightIcon = require('@mui/icons-material/ChevronRight');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
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
var ListItemButton = require('@mui/material/ListItemButton');
var Drawer = require('@mui/material/Drawer');
var MenuIcon = require('@mui/icons-material/Menu');
var MuiBreadcrumbs = require('@mui/material/Breadcrumbs');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var Grid = require('@mui/material/Grid');
var Modal = require('@mui/material/Modal');
var Avatar = require('@mui/material/Avatar');
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

var Box3__default = /*#__PURE__*/_interopDefault(Box3);
var React16__namespace = /*#__PURE__*/_interopNamespace(React16);
var Container__default = /*#__PURE__*/_interopDefault(Container);
var Fade__default = /*#__PURE__*/_interopDefault(Fade);
var Stack__default = /*#__PURE__*/_interopDefault(Stack);
var Typography13__default = /*#__PURE__*/_interopDefault(Typography13);
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
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var Divider__default = /*#__PURE__*/_interopDefault(Divider);
var MuiLink2__default = /*#__PURE__*/_interopDefault(MuiLink2);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefault(ChevronRightIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
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
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var MuiBreadcrumbs__default = /*#__PURE__*/_interopDefault(MuiBreadcrumbs);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var Grid__default = /*#__PURE__*/_interopDefault(Grid);
var Modal__default = /*#__PURE__*/_interopDefault(Modal);
var Avatar__default = /*#__PURE__*/_interopDefault(Avatar);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);

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
var BannerStatic_default = React16__namespace.memo(BannerStatic);
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
  const frameItems = React16__namespace.useMemo(
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
  const [transitionState, setTransitionState] = React16__namespace.useState({
    activeIndex: initialIndex,
    previousIndex: initialIndex,
    hasTransitioned: false
  });
  React16__namespace.useEffect(() => {
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
var DynamicTransition_default = React16__namespace.memo(DynamicTransition);
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
  const frames = React16__namespace.useMemo(() => {
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
var BlockCarousel_default = React16__namespace.memo(BlockCarousel);
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
var BannerCarousel_default = React16__namespace.memo(BannerCarousel);
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography13__default.default,
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
var MainTitle_default = React16__namespace.memo(MainTitle);
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
  const [visible, setVisible] = React16__namespace.useState(true);
  React16__namespace.useEffect(() => {
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
  const [isDownloading, setIsDownloading] = React16__namespace.useState(false);
  const [downloadProgress, setDownloadProgress] = React16__namespace.useState(0);
  const [isComplete, setIsComplete] = React16__namespace.useState(false);
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
        /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "inherit", children: "Downloaded!" })
      ] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1, width: "100%" }, children: [
      fileIcon,
      /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "inherit", children }),
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
var RouterContext = React16__namespace.createContext(null);
var RouterProvider = ({ router, children }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(RouterContext.Provider, { value: router, children });
};
var useRouter = () => {
  const contextRouter = React16__namespace.useContext(RouterContext);
  return React16__namespace.useMemo(() => {
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
  const [anchorEl, setAnchorEl] = React16__namespace.useState(null);
  const [showSuccess, setShowSuccess] = React16__namespace.useState(false);
  const [successMessage, setSuccessMessage] = React16__namespace.useState("");
  const shareData = React16__namespace.useMemo(
    () => ({
      url: url || (typeof window !== "undefined" ? window.location.href : ""),
      title: title || (typeof document !== "undefined" ? document.title : ""),
      text,
      files
    }),
    [url, title, text, files]
  );
  const canUseNativeShare = React16__namespace.useMemo(() => {
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
  const [email, setEmail] = React16__namespace.useState("");
  const [isLoading, setIsLoading] = React16__namespace.useState(false);
  const [showSuccess, setShowSuccess] = React16__namespace.useState(false);
  const [showError, setShowError] = React16__namespace.useState(false);
  const [emailError, setEmailError] = React16__namespace.useState("");
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
    } catch {
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
  const whatsappUrl = React16__namespace.useMemo(() => {
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
  const [showSuccess, setShowSuccess] = React16__namespace.useState(false);
  const [justCopied, setJustCopied] = React16__namespace.useState(false);
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
  const [open, setOpen] = React16__namespace.useState(false);
  const contentId = React16.useId();
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 };
  const imageConf = React16__namespace.useMemo(
    () => ({
      src: image,
      overlayColor: open ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.45)"
    }),
    [image, open]
  );
  const toggleOpen = () => setOpen((v) => !v);
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
                Typography13__default.default,
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
                    setOpen(true);
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
              /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "narrative", sx: { mb: 2 }, children: text }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Button6__default.default,
                {
                  variant: "text",
                  size: "small",
                  onClick: (e) => {
                    e.stopPropagation();
                    setOpen(false);
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
var ClickTextImage_default = React16__namespace.memo(ClickTextImage);
var TextTreeRendererContext = React16.createContext(null);
function useTextTreeRendererContext() {
  const ctx = React16.useContext(TextTreeRendererContext);
  if (!ctx)
    throw new Error("TextTreeRendererContext missing. Wrap with <TextTreeRendererContext>.");
  return ctx;
}
function ContentTreeView({ tree }) {
  const { nodesRenderer } = useTextTreeRendererContext();
  return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { display: "flex", flexDirection: "column", children: tree.children.map((node) => {
    const result = nodesRenderer({ node });
    return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: result.rendered }, node.id);
  }) });
}
function RichText({ inlineNodes }) {
  const { nodesRenderer } = useTextTreeRendererContext();
  return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { component: "span", children: inlineNodes.map((node) => {
    const result = nodesRenderer({ node });
    return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: result.rendered }, node.id);
  }) });
}
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography13__default.default,
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
function Section2({
  title,
  content,
  defaultOpen: isOpen,
  collapsible: shouldOpen,
  hasDivider,
  contentGap
}) {
  const { nodesRenderer } = useTextTreeRendererContext();
  const [isOpenSection, setOpen] = React16.useState(isOpen);
  const { openIndicator, closeIndicator } = useTextTreeRendererContext();
  const onClick = () => {
    setOpen((open) => !open);
  };
  const indicator = shouldOpen ? isOpenSection ? openIndicator : closeIndicator : null;
  const titleRendered = nodesRenderer({ node: title }).rendered;
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "column", gap: contentGap, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "row", onClick: shouldOpen ? onClick : void 0, children: [
      indicator,
      /* @__PURE__ */ jsxRuntime.jsxs(SectionTitle, { children: [
        titleRendered,
        hasDivider && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: shouldOpen ? isOpenSection : true, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { display: "flex", flexDirection: "column", gap: contentGap, children: content.map((node) => {
      return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node }).rendered }, node.id);
    }) }) })
  ] });
}
function SubSection({
  title,
  content: richTextBlocks,
  hasDivider,
  contentGap,
  collapsible = false,
  defaultOpen = true
}) {
  const [isOpenSubSection, setOpen] = React16.useState(defaultOpen);
  const { closeIndicator, nodesRenderer, openIndicator } = useTextTreeRendererContext();
  const onClick = () => {
    setOpen((open) => !open);
  };
  const indicator = collapsible ? isOpenSubSection ? openIndicator : closeIndicator : null;
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "column", gap: contentGap, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "row", onClick: collapsible ? onClick : void 0, children: [
      indicator,
      /* @__PURE__ */ jsxRuntime.jsxs(SubsectionTitle, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(RichText, { inlineNodes: title.content }),
        hasDivider && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: collapsible ? isOpenSubSection : true, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { display: "flex", flexDirection: "column", gap: contentGap, children: richTextBlocks.map((node) => {
      return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node }).rendered }, node.id);
    }) }) })
  ] });
}
function InlineText({ body }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { component: "span", variant: "inherit", children: body });
}
function InlineStrong({ body }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { component: "strong", variant: "inherit", sx: { fontWeight: 700 }, children: body });
}
function InlineEmphasis({ body }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { component: "em", variant: "inherit", sx: { fontStyle: "italic" }, children: body });
}
function InlineStrongEmphasis({ body }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography13__default.default,
    {
      component: "strong",
      variant: "inherit",
      sx: { fontStyle: "italic", fontWeight: 700 },
      children: /* @__PURE__ */ jsxRuntime.jsx("em", { children: body })
    }
  );
}
function InlineCode({ body }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Typography13__default.default,
    {
      component: "code",
      variant: "inherit",
      sx: {
        borderRadius: 0.5,
        bgcolor: "action.hover",
        fontFamily: "monospace",
        px: 0.5
      },
      children: body
    }
  );
}
function InlineLink({ body, href }) {
  const { LinkComponent } = useTextTreeRendererContext();
  return /* @__PURE__ */ jsxRuntime.jsx(MuiLink2__default.default, { component: LinkComponent, href, underline: "hover", color: "inherit", children: body });
}
function isOverridableType(type) {
  return type === "section" || type === "subSection";
}
var defaultRenderedRegistry = {
  text: {
    type: "text",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineText, { body: node.body, ...overrides });
    }
  },
  strong: {
    type: "strong",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineStrong, { body: node.body, ...overrides });
    }
  },
  emphasis: {
    type: "emphasis",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineEmphasis, { body: node.body, ...overrides });
    }
  },
  strongEmphasis: {
    type: "strongEmphasis",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineStrongEmphasis, { body: node.body, ...overrides });
    }
  },
  code: {
    type: "code",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineCode, { body: node.body, ...overrides });
    }
  },
  link: {
    type: "link",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(InlineLink, { body: node.body, href: node.href, ...overrides });
    }
  },
  richText: {
    type: "richText",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(RichText, { inlineNodes: node.content, ...overrides });
    }
  },
  subSection: {
    type: "subSection",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(SubSection, { title: node.title, content: node.content, hasDivider: true, ...overrides });
    }
  },
  section: {
    type: "section",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        Section2,
        {
          defaultOpen: true,
          content: node.content,
          title: node.title,
          collapsible: true,
          hasDivider: true,
          ...overrides
        }
      );
    }
  }
};
var isValidId = (textOverrides, type, id) => {
  if (!isOverridableType(type)) return false;
  if (textOverrides === void 0) return false;
  if (textOverrides[type] === void 0) return false;
  if (id in textOverrides[type]) {
    return true;
  }
  return false;
};
function defaultRenderTextNode({
  contentTree,
  renderedRegistry = defaultRenderedRegistry,
  textOverrides
}) {
  const rt = ({ node }) => {
    var _a, _b;
    const nodeType = node.type;
    const nodeId = node.id;
    if (nodeType === "code") {
      const codeNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: codeNode }) };
    } else if (nodeType === "emphasis") {
      const emphasisNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: emphasisNode }) };
    } else if (nodeType === "link") {
      const linkNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: linkNode }) };
    } else if (nodeType === "strong") {
      const strongNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: strongNode }) };
    } else if (nodeType === "strongEmphasis") {
      const strongEmphasisNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: strongEmphasisNode }) };
    } else if (nodeType === "text") {
      const textNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: textNode }) };
    } else if (nodeType === "richText") {
      const richTextNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: richTextNode }) };
    } else if (nodeType === "subSection") {
      const subSectionNode = node;
      const overrides = isValidId(textOverrides, nodeType, nodeId) ? (_a = textOverrides == null ? void 0 : textOverrides[nodeType]) == null ? void 0 : _a[nodeId] : void 0;
      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: subSectionNode,
          overrides
        })
      };
    } else if (nodeType === "section") {
      const sectionNode = node;
      const overrides = isValidId(textOverrides, nodeType, nodeId) ? (_b = textOverrides == null ? void 0 : textOverrides[nodeType]) == null ? void 0 : _b[nodeId] : void 0;
      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: sectionNode,
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

// src/components/content/parseInlineText.ts
function createInlineNode(idPrefix, index, type, body, href) {
  const id = `${idPrefix}.${index}`;
  if (type === "link") {
    return {
      id,
      type,
      body,
      href: href != null ? href : ""
    };
  }
  return {
    id,
    type,
    body
  };
}
function findClosingMarker(source, marker, fromIndex) {
  return source.indexOf(marker, fromIndex + marker.length);
}
function parseLink(source, fromIndex) {
  const labelEnd = source.indexOf("]", fromIndex + 1);
  if (labelEnd === -1 || source[labelEnd + 1] !== "(") {
    return null;
  }
  const hrefEnd = source.indexOf(")", labelEnd + 2);
  if (hrefEnd === -1) {
    return null;
  }
  return {
    body: source.slice(fromIndex + 1, labelEnd),
    href: source.slice(labelEnd + 2, hrefEnd),
    end: hrefEnd + 1
  };
}
function parseInlineText(source, { idPrefix = "inline" } = {}) {
  const nodes = [];
  let index = 0;
  let cursor = 0;
  let textBuffer = "";
  const pushText = () => {
    if (!textBuffer) {
      return;
    }
    nodes.push(createInlineNode(idPrefix, index, "text", textBuffer));
    index += 1;
    textBuffer = "";
  };
  const pushNode = (type, body, href) => {
    pushText();
    nodes.push(createInlineNode(idPrefix, index, type, body, href));
    index += 1;
  };
  while (cursor < source.length) {
    const char = source[cursor];
    if (char === "[") {
      const link = parseLink(source, cursor);
      if (link) {
        pushNode("link", link.body, link.href);
        cursor = link.end;
        continue;
      }
    }
    if (char === "`") {
      const end = findClosingMarker(source, "`", cursor);
      if (end !== -1) {
        pushNode("code", source.slice(cursor + 1, end));
        cursor = end + 1;
        continue;
      }
    }
    if (source.startsWith("***", cursor)) {
      const end = findClosingMarker(source, "***", cursor);
      if (end !== -1) {
        pushNode("strongEmphasis", source.slice(cursor + 3, end));
        cursor = end + 3;
        continue;
      }
    }
    if (source.startsWith("**", cursor)) {
      const end = findClosingMarker(source, "**", cursor);
      if (end !== -1) {
        pushNode("strong", source.slice(cursor + 2, end));
        cursor = end + 2;
        continue;
      }
    }
    if (char === "*") {
      const end = findClosingMarker(source, "*", cursor);
      if (end !== -1) {
        pushNode("emphasis", source.slice(cursor + 1, end));
        cursor = end + 1;
        continue;
      }
    }
    textBuffer += char;
    cursor += 1;
  }
  pushText();
  return nodes;
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
var DefaultLinkLike = React16__namespace.forwardRef(function DefaultLinkLike2(props, ref) {
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

// src/lib/icon/index.ts
var icon_exports = {};
__export(icon_exports, {
  IconPicker: () => IconPicker_default
});
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
var DrawerMenuRenderContext = React16.createContext(null);
function useDrawerMenuRenderContext() {
  const ctx = React16.useContext(DrawerMenuRenderContext);
  if (!ctx)
    throw new Error("DrawerMenuRenderContext missing. Wrap with <DrawerMenuRenderContext>.");
  return ctx;
}
var MenuSelectionContext = React16.createContext(null);
function useMenuSelectionContext() {
  const ctx = React16.useContext(MenuSelectionContext);
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
            primary: /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "narrative", ...labelTypographyProps, children: label })
          }
        )
      ]
    }
  );
}
var MenuDepthContext = React16.createContext(null);
function useMenuDepthContext() {
  const ctx = React16.useContext(MenuDepthContext);
  if (!ctx)
    throw new Error("MenuDepthContext missing. Wrap with <MenuDepthContext>.");
  return ctx;
}
var DrawerMenuControllerContext = React16.createContext(null);
function useDrawerMenuControllerContext() {
  const ctx = React16.useContext(DrawerMenuControllerContext);
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
  return React16.useSyncExternalStore(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Box3__default.default,
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
          /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "narrative", fontWeight: "bold", ...labelTypographyProps, children: label })
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
          return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
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
  const selectors = React16.useMemo(
    () => getDrawerMenuSelectors({ drawerMenuTree: menuTree, currentPath }),
    [menuTree, currentPath]
  );
  const initialDrawerMenuState = React16.useMemo(
    () => getInitialDrawerMenuStoreState({ selectors }),
    [selectors]
  );
  const drawerMenuStore = React16.useMemo(
    () => createDrawerMenuStore(initialDrawerMenuState),
    [initialDrawerMenuState]
  );
  const nodesRenderer = React16.useMemo(
    () => defaultRenderDrawerMenuNode({
      runtimeOverrides: treeOverrides
    }),
    [treeOverrides]
  );
  const renderedContext = React16.useMemo(
    () => ({
      basePadding,
      closeIndicator,
      LinkComponent,
      openIndicator,
      nodesRenderer
    }),
    [basePadding, closeIndicator, LinkComponent, nodesRenderer, openIndicator]
  );
  const [openDrawer, setOpenDrawer] = React16.useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  return /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuRenderContext.Provider, { value: renderedContext, children: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuControllerContext.Provider, { value: { drawerMenuStore }, children: /* @__PURE__ */ jsxRuntime.jsxs(MenuDepthContext.Provider, { value: { depth: 0 }, children: [
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
          return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node: child }).rendered }, child.id);
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(IconButton__default.default, { onClick: toggleDrawer(true), "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {}) })
  ] }) }) }) }) });
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
  const normalizedPath = React16__namespace.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React16__namespace.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React16__namespace.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React16__namespace.useMemo(() => {
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
        subtitle ? /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "eyebrow", sx: { mt: 1 }, children: subtitle }) : null
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
      right: /* @__PURE__ */ jsxRuntime.jsx(DrawerMenuRoot, { ...drawerProps })
    }
  );
}
var DropDownMenuRenderContext = React16.createContext(null);
function useDropDownMenuRenderContext() {
  const ctx = React16.useContext(DropDownMenuRenderContext);
  if (!ctx)
    throw new Error("DropDownMenuRenderContext missing. Wrap with <DropDownMenuRenderContext>.");
  return ctx;
}
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
            return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
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
  const [uncontrolledValue, setUncontrolledValue] = React16__namespace.useState(String(defaultValue != null ? defaultValue : ""));
  const inputValue = isControlled ? String(controlledValue != null ? controlledValue : "") : uncontrolledValue;
  const timerRef = React16__namespace.useRef(null);
  const composingRef = React16__namespace.useRef(false);
  const lastEmittedRef = React16__namespace.useRef(inputValue);
  const clearTimer = React16__namespace.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const schedule = React16__namespace.useCallback(
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
  React16__namespace.useEffect(() => {
    schedule(inputValue);
  }, [debounceMs]);
  React16__namespace.useEffect(() => {
    if (isControlled) schedule(String(controlledValue != null ? controlledValue : ""));
  }, [isControlled, controlledValue]);
  React16__namespace.useEffect(() => clearTimer, [clearTimer]);
  const handleChange = React16__namespace.useCallback(
    (e) => {
      var _a;
      const next = (_a = e.target.value) != null ? _a : "";
      if (!isControlled) setUncontrolledValue(next);
      onChange == null ? void 0 : onChange(e);
      if (!composingRef.current) schedule(next);
    },
    [isControlled, onChange, schedule]
  );
  const handleBlur = React16__namespace.useCallback(
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
    return kind === "title" ? /* @__PURE__ */ jsxRuntime.jsx(SubsubsectionTitle, { children: node }) : /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "strapline", children: node });
  }
  return React16__namespace.isValidElement(node) ? node : null;
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
                  message && /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "lead", color: "text.primary", sx: { textAlign: "left", maxWidth: 720 }, children: message }),
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
                    Typography13__default.default,
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
  const [open, setOpen] = React16.useState(false);
  const titleId = React16.useId();
  const descId = React16.useId();
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
    /* @__PURE__ */ jsxRuntime.jsx(Button6__default.default, { variant: "text", color: "secondary", onClick: () => setOpen(true), children: buttonLabel })
  ] });
  const wrappedTrigger = trigger ? /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      role: "button",
      tabIndex: 0,
      "aria-label": typeof title === "string" ? `Open video: ${title}` : "Open video",
      onClick: () => setOpen(true),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(true);
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
        onClose: () => setOpen(false),
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
                  children: /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "narrative", color: "text.secondary", children: "Video source is missing or invalid." })
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(Box3__default.default, { sx: { mt: 2, textAlign: "right" }, children: /* @__PURE__ */ jsxRuntime.jsx(Button6__default.default, { onClick: () => setOpen(false), "aria-label": "Close video modal", children: "Close" }) })
            ]
          }
        )
      }
    )
  ] });
}
function DropDownGroup({
  id,
  items,
  label,
  headerProps,
  labelTypographyProps,
  hasDivider = true,
  dividerProps
}) {
  const { depth } = useMenuDepthContext();
  const { nodesRenderer, basePadding } = useDropDownMenuRenderContext();
  const { isAncestorSelected } = useMenuSelectionContext();
  const ancestorSelected = isAncestorSelected(id);
  const padding = Math.max(depth - 1, 0) * basePadding;
  const shouldShowDivider = hasDivider && depth > 0;
  const childDepth = depth + 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "column", paddingLeft: padding, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Box3__default.default, { display: "flex", flexDirection: "column", ...headerProps, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Typography13__default.default,
        {
          variant: "narrative",
          fontWeight: ancestorSelected ? 700 : 600,
          color: ancestorSelected ? "primary.main" : "text.primary",
          ...labelTypographyProps,
          children: label
        }
      ),
      shouldShowDivider && /* @__PURE__ */ jsxRuntime.jsx(Divider__default.default, { ...dividerProps })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: childDepth }, children: items.map((item) => {
      return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
    }) })
  ] });
}
function DropDownLink({
  href,
  id,
  label,
  buttonProps,
  disabled,
  icon,
  labelTypographyProps
}) {
  const { LinkComponent } = useDropDownMenuRenderContext();
  const { isSelected } = useMenuSelectionContext();
  const selected = isSelected(id);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button6__default.default,
    {
      component: LinkComponent,
      href,
      disabled,
      color: selected ? "primary" : "inherit",
      variant: "text",
      startIcon: icon,
      ...buttonProps,
      children: /* @__PURE__ */ jsxRuntime.jsx(Typography13__default.default, { variant: "narrative", ...labelTypographyProps, children: label })
    }
  );
}
function DropDownNavGroup({
  id,
  items,
  label,
  headerProps,
  labelTypographyProps,
  megaMenuProps
}) {
  const { isAncestorSelected } = useMenuSelectionContext();
  const [anchorEl, setAnchorEl] = React16.useState(null);
  const ancestorSelected = isAncestorSelected(id);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const childDepth = 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button6__default.default,
      {
        color: ancestorSelected ? "primary" : "inherit",
        variant: "text",
        onClick: handleClick,
        ...headerProps,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Typography13__default.default,
          {
            variant: "narrative",
            fontWeight: ancestorSelected ? 700 : 600,
            color: "inherit",
            ...labelTypographyProps,
            children: label
          }
        )
      }
    ),
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
        children: /* @__PURE__ */ jsxRuntime.jsx(MegaMenu, { childDepth, items, megaMenuProps })
      }
    )
  ] });
}
function MegaMenu({
  items,
  childDepth,
  megaMenuProps
}) {
  const { nodesRenderer } = useDropDownMenuRenderContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box3__default.default,
    {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "minmax(180px, 1fr)",
      columnGap: 3,
      rowGap: 2,
      padding: 3,
      ...megaMenuProps,
      children: /* @__PURE__ */ jsxRuntime.jsx(MenuDepthContext.Provider, { value: { depth: childDepth }, children: items.map((item) => {
        return /* @__PURE__ */ jsxRuntime.jsx(React16.Fragment, { children: nodesRenderer({ node: item }).rendered }, item.id);
      }) })
    }
  );
}
var defaultDropDownMenuRegistry = {
  link: {
    type: "link",
    rendering({ node, overrides }) {
      var _a;
      const Icon = /* @__PURE__ */ jsxRuntime.jsx(IconPicker_default, { name: (_a = node.iconKey) != null ? _a : node.label });
      return /* @__PURE__ */ jsxRuntime.jsx(DropDownLink, { href: node.href, id: node.id, label: node.label, icon: Icon, ...overrides });
    }
  },
  group: {
    type: "group",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(DropDownGroup, { id: node.id, items: node.children, label: node.label, ...overrides });
    }
  },
  navGroup: {
    type: "navGroup",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsxRuntime.jsx(DropDownNavGroup, { id: node.id, items: node.children, label: node.label, ...overrides });
    }
  }
};
function defaultRenderDropDownMenuNode({
  renderedRegistry = defaultDropDownMenuRegistry,
  runtimeOverrides
}) {
  const rt = ({ node }) => {
    var _a, _b, _c;
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
    } else if (nodeType === "navGroup") {
      const linkNode = node;
      const overrides = (_c = runtimeOverrides == null ? void 0 : runtimeOverrides[nodeType]) == null ? void 0 : _c[nodeId];
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

// src/components/menus/dropDown/DropDownMenuSelectors.ts
function walkNavigationNode({
  node,
  currentPath,
  ancestorIds,
  payload
}) {
  if (payload.selectedId !== null) {
    return;
  }
  if (node.type === "link") {
    if (node.href === currentPath) {
      payload.selectedId = node.id;
      payload.ancestorIds = ancestorIds;
    }
    return;
  }
  const childAncestorIds = [...ancestorIds, node.id];
  for (const child of node.children) {
    walkNavigationNode({
      node: child,
      currentPath,
      ancestorIds: childAncestorIds,
      payload
    });
  }
}
function getDropDownMenuSelectors({
  navigationTree,
  currentPath
}) {
  const payload = {
    ancestorIds: [],
    selectedId: null
  };
  for (const child of navigationTree.children) {
    walkNavigationNode({
      node: child,
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
var HtmlImage = React16__namespace.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
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
exports.ContentTreeView = ContentTreeView;
exports.CopyButton = CopyButton_default;
exports.DebouncedTextField = DebouncedTextField_default;
exports.DefaultLinkLike = DefaultLinkLike;
exports.DownloadButton = DownloadButton_default;
exports.DrawerMenuControllerContext = DrawerMenuControllerContext;
exports.DrawerMenuDepthContext = MenuDepthContext;
exports.DrawerMenuGroup = DrawerMenuGroup;
exports.DrawerMenuLink = DrawerMenuLink;
exports.DrawerMenuRenderContext = DrawerMenuRenderContext;
exports.DrawerMenuRoot = DrawerMenuRoot;
exports.DrawerMenuSelectionContext = MenuSelectionContext;
exports.DropDown = DropDown;
exports.DropDownGroup = DropDownGroup;
exports.DropDownLink = DropDownLink;
exports.DropDownMenuRenderContext = DropDownMenuRenderContext;
exports.DynamicTransition = DynamicTransition_default;
exports.FavoriteButton = FavoriteButton_default;
exports.FeaturedColumnsFooter = FeaturedColumnsFooter;
exports.FiveColumnsFooter = FiveColumnsFooter;
exports.GetInTouch = GetInTouch_default;
exports.Header = Header;
exports.HeaderDrawer = HeaderDrawer;
exports.HeaderLogo = HeaderLogo;
exports.HeaderMenu = HeaderMenu;
exports.HeaderMinimal = HeaderMinimal;
exports.HeroBlock = HeroBlock_default;
exports.HtmlImage = HtmlImage;
exports.IconPicker = IconPicker_default;
exports.InlineCode = InlineCode;
exports.InlineEmphasis = InlineEmphasis;
exports.InlineLink = InlineLink;
exports.InlineStrong = InlineStrong;
exports.InlineStrongEmphasis = InlineStrongEmphasis;
exports.InlineText = InlineText;
exports.MainTitle = MainTitle_default;
exports.MediaText = MediaText_default;
exports.Pad = Pad;
exports.PageLayout = PageLayout_default;
exports.PageTitle = PageTitle;
exports.PageTitleLabel = PageTitleLabel;
exports.RichText = RichText;
exports.RouterProvider = RouterProvider;
exports.SECTION_MIN_H = SECTION_MIN_H;
exports.Section = Section;
exports.SectionTitle = SectionTitle;
exports.SectionTitleLabel = SectionTitleLabel;
exports.ShareButton = ShareButton_default;
exports.SocialButton = SocialButton_default;
exports.Spacer = Spacer_default;
exports.StandardStack = StandardStack_default;
exports.SubSection = SubSection;
exports.SubscribeButton = SubscribeButton_default;
exports.SubsectionTitle = SubsectionTitle;
exports.SubsectionTitleLabel = SubsectionTitleLabel;
exports.SubsubsectionTitle = SubsubsectionTitle;
exports.SubsubsectionTitleLabel = SubsubsectionTitleLabel;
exports.TextTreeRendererContext = TextTreeRendererContext;
exports.ThreeColumnsFooter = ThreeColumnsFooter;
exports.Title = Title;
exports.TitleLabel = TitleLabel;
exports.TouchButton = TouchButton_default;
exports.TwoColumnsFooter = TwoColumnsFooter;
exports.VideoModal = VideoModal;
exports.WhatsAppButton = WhatsAppButton_default;
exports.boldToNodes = boldToNodes;
exports.camelCase = camelCase;
exports.createDrawerMenuStore = createDrawerMenuStore;
exports.defaultDrawerMenuRegistry = defaultDrawerMenuRegistry;
exports.defaultDropDownMenuRegistry = defaultDropDownMenuRegistry;
exports.defaultRenderDrawerMenuNode = defaultRenderDrawerMenuNode;
exports.defaultRenderDropDownMenuNode = defaultRenderDropDownMenuNode;
exports.defaultRenderTextNode = defaultRenderTextNode;
exports.defaultRenderedRegistry = defaultRenderedRegistry;
exports.getDrawerMenuSelectors = getDrawerMenuSelectors;
exports.getDropDownMenuSelectors = getDropDownMenuSelectors;
exports.getInitialDrawerMenuStoreState = getInitialDrawerMenuStoreState;
exports.icon = icon_exports;
exports.isStaticImageDataLike = isStaticImageDataLike;
exports.parseInlineMarkdown = parseInlineMarkdown;
exports.parseInlineText = parseInlineText;
exports.safeTitleCase = safeTitleCase;
exports.sectionMinHeightSx = sectionMinHeightSx;
exports.setDrawerMenuNodeOpen = setDrawerMenuNodeOpen;
exports.text = text_exports;
exports.toImgAttrs = toImgAttrs;
exports.toTitleCase = toTitleCase;
exports.useDrawerMenuControllerContext = useDrawerMenuControllerContext;
exports.useDrawerMenuDepthContext = useMenuDepthContext;
exports.useDrawerMenuNodeOpen = useDrawerMenuNodeOpen;
exports.useDrawerMenuRenderContext = useDrawerMenuRenderContext;
exports.useDrawerMenuSelectionContext = useMenuSelectionContext;
exports.useDropDownMenuRenderContext = useDropDownMenuRenderContext;
exports.useTextTreeRendererContext = useTextTreeRendererContext;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map