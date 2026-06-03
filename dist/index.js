import { styled } from '@mui/material/styles';
import Box3 from '@mui/material/Box';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React17 from 'react';
import { createContext, useId, useContext, Fragment as Fragment$1, useState, useSyncExternalStore, useMemo } from 'react';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Typography13 from '@mui/material/Typography';
import Button6 from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import CircularProgress2 from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import AppsIcon from '@mui/icons-material/Apps';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Alert2 from '@mui/material/Alert';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar2 from '@mui/material/Snackbar';
import ContentCopyIcon2 from '@mui/icons-material/ContentCopy';
import CheckIcon2 from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import MuiLink2 from '@mui/material/Link';
import { getLayoutFromCatalog, CSSLayout, GridCssMuiRenderer } from '@mcpab/gridcss';
import { Box } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
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
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var PadRoot = styled(Box3, { shouldForwardProp: (p) => p !== "reverse" })(
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
  return /* @__PURE__ */ jsx(PadRoot, { reverse, sx, children });
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
  return /* @__PURE__ */ jsx(
    Box3,
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
var HtmlImage = React17.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
  const mergedStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style != null ? style : {};
  const imgProps = toImgAttrs({ ...props, style: mergedStyle });
  return /* @__PURE__ */ jsx("img", { ref, ...imgProps });
});
function getBoxPosition(objectPosition) {
  const [x = "50%", y = "50%"] = objectPosition.split(" ");
  return { left: x, top: y, transform: `translate(-${x}, -${y})` };
}
function computeAR({ imageConf }) {
  if (imageConf === void 0) {
    return {
      computedAR: "16 / 9",
      placeholder: "empty"
    };
  }
  let computedAR = "16 / 9";
  let placeholder = "empty";
  const src = imageConf.src;
  if (imageConf.aspectRatio !== void 0) {
    computedAR = imageConf.aspectRatio;
  } else {
    if (isStaticImageDataLike(src) && src.width !== void 0 && src.height !== void 0) {
      computedAR = src.width / src.height;
    }
  }
  if (imageConf.placeholder !== void 0) {
    placeholder = imageConf.placeholder;
  } else {
    if (isStaticImageDataLike(src)) {
      placeholder = "blur";
    }
  }
  return { computedAR, placeholder };
}
var BackgroundBox = ({
  imageConf,
  children,
  sx,
  className,
  ImageComponent,
  ...rest
}) => {
  var _a, _b, _c;
  const { computedAR, placeholder } = computeAR({ imageConf });
  const quality = (_a = imageConf == null ? void 0 : imageConf.quality) != null ? _a : 70;
  let imageLayer = null;
  if (imageConf == null ? void 0 : imageConf.src) {
    const objPos = imageConf.objectPosition || "50% 50%";
    if (imageConf.width) {
      imageLayer = /* @__PURE__ */ jsx(
        Box3,
        {
          sx: {
            position: "absolute",
            ...getBoxPosition(objPos),
            width: imageConf.width
          },
          children: /* @__PURE__ */ jsx(Box3, { sx: { position: "relative", width: "100%", aspectRatio: computedAR }, children: /* @__PURE__ */ jsx(
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
      imageLayer = /* @__PURE__ */ jsx(Box3, { sx: { position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx(Box3, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ jsx(
        ImageComponent,
        {
          alt: "",
          src: imageConf.src,
          fill: true,
          sizes: (_b = imageConf.sizes) != null ? _b : "100vw",
          placeholder,
          priority: imageConf.priority,
          quality,
          unoptimized: imageConf.unoptimized,
          style: {
            objectFit: imageConf.mode || "cover",
            objectPosition: objPos,
            opacity: (_c = imageConf.opacity) != null ? _c : 1,
            transform: imageConf.transform || "none",
            zIndex: 0
          }
        }
      ) }) });
    }
  }
  return /* @__PURE__ */ jsxs(
    Box3,
    {
      sx: { position: "relative", overflow: "hidden", width: "100%", ...sx || {} },
      className,
      ...rest,
      children: [
        imageLayer,
        (imageConf == null ? void 0 : imageConf.overlayColor) && /* @__PURE__ */ jsx(
          Box3,
          {
            role: "presentation",
            "aria-hidden": true,
            sx: { position: "absolute", inset: 0, backgroundColor: imageConf.overlayColor }
          }
        ),
        /* @__PURE__ */ jsx(Box3, { sx: { position: "relative", zIndex: 1, height: "100%" }, children })
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
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx(BackgroundBox_default, { imageConf: image, ImageComponent, children: /* @__PURE__ */ jsx(
        Container,
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
var BannerStatic_default = React17.memo(BannerStatic);
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
  const frameItems = React17.useMemo(
    () => (frames != null ? frames : []).map((frame, index) => ({ frame, key: index })),
    [frames]
  );
  return /* @__PURE__ */ jsx(
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
  const [transitionState, setTransitionState] = React17.useState({
    activeIndex: initialIndex,
    previousIndex: initialIndex,
    hasTransitioned: false
  });
  React17.useEffect(() => {
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
    return /* @__PURE__ */ jsx(
      Box3,
      {
        ...boxProps,
        sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
        children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0 }, children: (_a = frameItems[0]) == null ? void 0 : _a.frame })
      }
    );
  }
  const inFrame = frameItems[transitionState.activeIndex];
  const outFrame = frameItems[transitionState.previousIndex];
  return /* @__PURE__ */ jsx(
    Box3,
    {
      ...boxProps,
      sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
      children: !transitionState.hasTransitioned ? /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0 }, children: inFrame == null ? void 0 : inFrame.frame }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Fade, { in: false, timeout: transitionDuration, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: outFrame == null ? void 0 : outFrame.frame }) }, `out-${outFrame == null ? void 0 : outFrame.key}`),
        /* @__PURE__ */ jsx(Fade, { in: true, timeout: transitionDuration, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: inFrame == null ? void 0 : inFrame.frame }) }, `in-${inFrame == null ? void 0 : inFrame.key}`)
      ] })
    }
  );
}
var DynamicTransition_default = React17.memo(DynamicTransition);
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
  const frames = React17.useMemo(() => {
    return images.map((img, i) => {
      const { transform, image, objectPosition } = img;
      return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
    Box3,
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
        /* @__PURE__ */ jsx(
          Box3,
          {
            sx: {
              position: "relative",
              gridArea: "1 / 1",
              // layer 1
              minHeight: "inherit"
              // ensure a definite box for absolute children
            },
            children: /* @__PURE__ */ jsx(
              DynamicTransition_default,
              {
                frames,
                interval,
                transitionDuration
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(Box3, { sx: { gridArea: "1 / 1", zIndex: 1 } }),
        /* @__PURE__ */ jsx(
          Container,
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
var BlockCarousel_default = React17.memo(BlockCarousel);
var BannerCarousel = ({
  images,
  id,
  size = "micro",
  children,
  ImageComponent
}) => {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id,
      size,
      position: "relative",
      width: "100%",
      lockHeight: true,
      children: /* @__PURE__ */ jsx(
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
var BannerCarousel_default = React17.memo(BannerCarousel);
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsx(
    Typography13,
    {
      variant: variantLevels[role],
      sx,
      color: "primary",
      ...rest
    }
  );
};
Title.displayName = "Title";
var PageTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "page", ...props });
var SectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "section", ...props });
var SubsectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "subsection", ...props });
var SubsubsectionTitle = (props) => /* @__PURE__ */ jsx(Title, { sectionType: "subsubsection", ...props });

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
  return /* @__PURE__ */ jsx(Stack, { spacing: 4, ...slotProps == null ? void 0 : slotProps.stack, children: blocks.map((block, index) => {
    var _a;
    const content = typeof block.title === "string" && autoCapitalize ? toTitleCase(block.title) : block.title;
    const isPrimary = ((_a = block.type) != null ? _a : "primary") === "primary";
    const Component = isPrimary ? PageTitle : SectionTitle;
    const defaults = isPrimary ? slotProps == null ? void 0 : slotProps.title : slotProps == null ? void 0 : slotProps.subtitle;
    const componentProps = { ...defaults, ...block == null ? void 0 : block.titleProps };
    return /* @__PURE__ */ jsx(Component, { ...componentProps, children: content }, `main-title-${index}`);
  }) });
};
var MainTitle_default = React17.memo(MainTitle);
var TouchButton = styled(Button6)(({ theme }) => ({
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
  return /* @__PURE__ */ jsx(
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
var GetInTouch = () => /* @__PURE__ */ jsx(ActionButton_default, { icon: /* @__PURE__ */ jsx(PhoneIcon, {}), href: "/contact", size: "small", children: "Get In Touch" });
var GetInTouch_default = GetInTouch;
function SuccessButtonContent({
  successDuration,
  successText,
  children,
  fallback
}) {
  const [visible, setVisible] = React17.useState(true);
  React17.useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, successDuration);
    return () => window.clearTimeout(timer);
  }, [successDuration]);
  if (!visible) {
    return fallback;
  }
  return /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ jsx(CheckCircleIcon, { sx: { color: green[500] } }),
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
  const defaultContent = /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
    startIcon,
    children,
    endIcon
  ] });
  const getButtonContent = () => {
    if (success) {
      return /* @__PURE__ */ jsx(
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
      return /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsx(CircularProgress2, { size: 20, color: "inherit" }),
        loadingText || children
      ] });
    }
    return defaultContent;
  };
  return /* @__PURE__ */ jsx(
    Button6,
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
      return /* @__PURE__ */ jsx(PictureAsPdfIcon, {});
    case "doc":
      return /* @__PURE__ */ jsx(DescriptionIcon, {});
    case "image":
      return /* @__PURE__ */ jsx(ImageIcon, {});
    case "video":
      return /* @__PURE__ */ jsx(VideoFileIcon, {});
    case "audio":
      return /* @__PURE__ */ jsx(AudioFileIcon, {});
    case "zip":
      return /* @__PURE__ */ jsx(FolderZipIcon, {});
    case "app":
      return /* @__PURE__ */ jsx(AppsIcon, {});
    case "data":
      return /* @__PURE__ */ jsx(DescriptionIcon, {});
    default:
      return /* @__PURE__ */ jsx(DownloadIcon, {});
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
  const [isDownloading, setIsDownloading] = React17.useState(false);
  const [downloadProgress, setDownloadProgress] = React17.useState(0);
  const [isComplete, setIsComplete] = React17.useState(false);
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
      return /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsx(CheckCircleIcon, { sx: { color: green[500] } }),
        /* @__PURE__ */ jsx(Typography13, { variant: "inherit", children: "Downloaded!" })
      ] });
    }
    return /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1, width: "100%" }, children: [
      fileIcon,
      /* @__PURE__ */ jsxs(Box3, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsx(Typography13, { variant: "inherit", children }),
          showFileSize && fileSize && /* @__PURE__ */ jsx(
            Chip,
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
        isDownloading && showProgress && /* @__PURE__ */ jsx(
          LinearProgress,
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
  return /* @__PURE__ */ jsx(
    Button6,
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
    icon: /* @__PURE__ */ jsx(LinkedInIcon, {}),
    color: "#0077B5",
    hoverColor: "#005885",
    name: "LinkedIn",
    ariaLabel: "Connect on LinkedIn"
  },
  twitter: {
    icon: /* @__PURE__ */ jsx(TwitterIcon, {}),
    color: "#1DA1F2",
    hoverColor: "#0d8bd9",
    name: "Twitter",
    ariaLabel: "Follow on Twitter"
  },
  facebook: {
    icon: /* @__PURE__ */ jsx(FacebookIcon, {}),
    color: "#1877F2",
    hoverColor: "#166fe5",
    name: "Facebook",
    ariaLabel: "Follow on Facebook"
  },
  instagram: {
    icon: /* @__PURE__ */ jsx(InstagramIcon, {}),
    color: "#E4405F",
    hoverColor: "#d31447",
    name: "Instagram",
    ariaLabel: "Follow on Instagram"
  },
  youtube: {
    icon: /* @__PURE__ */ jsx(YouTubeIcon, {}),
    color: "#FF0000",
    hoverColor: "#cc0000",
    name: "YouTube",
    ariaLabel: "Subscribe on YouTube"
  },
  github: {
    icon: /* @__PURE__ */ jsx(GitHubIcon, {}),
    color: "#333333",
    hoverColor: "#24292e",
    name: "GitHub",
    ariaLabel: "View on GitHub"
  },
  whatsapp: {
    icon: /* @__PURE__ */ jsx(WhatsAppIcon, {}),
    color: "#25D366",
    hoverColor: "#1ebe57",
    name: "WhatsApp",
    ariaLabel: "Chat on WhatsApp"
  },
  email: {
    icon: /* @__PURE__ */ jsx(EmailIcon, {}),
    color: "#EA4335",
    hoverColor: "#d23f2d",
    name: "Email",
    ariaLabel: "Send email"
  },
  generic: {
    icon: /* @__PURE__ */ jsx(ShareIcon, {}),
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
  return /* @__PURE__ */ jsx(
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
var RouterContext = React17.createContext(null);
var RouterProvider = ({ router, children }) => {
  return /* @__PURE__ */ jsx(RouterContext.Provider, { value: router, children });
};
var useRouter = () => {
  const contextRouter = React17.useContext(RouterContext);
  return React17.useMemo(() => {
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
  return /* @__PURE__ */ jsx(
    Button6,
    {
      onClick: handleBack,
      startIcon: showIcon ? /* @__PURE__ */ jsx(ArrowBackIcon, {}) : void 0,
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
    icon: /* @__PURE__ */ jsx(TwitterIcon, {}),
    label: "Share on Twitter",
    getUrl: (data) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text || "")}&url=${encodeURIComponent(data.url || "")}`
  },
  linkedin: {
    icon: /* @__PURE__ */ jsx(LinkedInIcon, {}),
    label: "Share on LinkedIn",
    getUrl: (data) => `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url || "")}`
  },
  facebook: {
    icon: /* @__PURE__ */ jsx(FacebookIcon, {}),
    label: "Share on Facebook",
    getUrl: (data) => `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url || "")}`
  },
  email: {
    icon: /* @__PURE__ */ jsx(EmailIcon, {}),
    label: "Share via Email",
    getUrl: (data) => `mailto:?subject=${encodeURIComponent(data.title || "")}&body=${encodeURIComponent(`${data.text || ""}

${data.url || ""}`)}`
  },
  copy: {
    icon: /* @__PURE__ */ jsx(ContentCopyIcon2, {}),
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
  const [anchorEl, setAnchorEl] = React17.useState(null);
  const [showSuccess, setShowSuccess] = React17.useState(false);
  const [successMessage, setSuccessMessage] = React17.useState("");
  const shareData = React17.useMemo(
    () => ({
      url: url || (typeof window !== "undefined" ? window.location.href : ""),
      title: title || (typeof document !== "undefined" ? document.title : ""),
      text,
      files
    }),
    [url, title, text, files]
  );
  const canUseNativeShare = React17.useMemo(() => {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button6,
      {
        onClick: handleClick,
        startIcon: /* @__PURE__ */ jsx(ShareIcon, {}),
        "aria-label": `Share: ${shareData.title || "content"}`,
        ...rest,
        children
      }
    ),
    /* @__PURE__ */ jsx(
      Menu,
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
          return /* @__PURE__ */ jsxs(MenuItem, { onClick: () => handleFallbackShare(platform), children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: config.icon }),
            /* @__PURE__ */ jsx(ListItemText, { primary: config.label })
          ] }, platform);
        })
      }
    ),
    /* @__PURE__ */ jsx(
      Snackbar2,
      {
        open: showSuccess,
        autoHideDuration: 3e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsx(
          Alert2,
          {
            onClose: () => setShowSuccess(false),
            severity: "success",
            icon: /* @__PURE__ */ jsx(CheckIcon2, {}),
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
  const [email, setEmail] = React17.useState("");
  const [isLoading, setIsLoading] = React17.useState(false);
  const [showSuccess, setShowSuccess] = React17.useState(false);
  const [showError, setShowError] = React17.useState(false);
  const [emailError, setEmailError] = React17.useState("");
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
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 1, sx: { width: "100%" }, children: [
        /* @__PURE__ */ jsx(
          TextField,
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
        /* @__PURE__ */ jsx(
          Button6,
          {
            onClick: handleSubscribe,
            disabled: isLoading,
            startIcon: isLoading ? /* @__PURE__ */ jsx(CircularProgress2, { size: 20 }) : /* @__PURE__ */ jsx(MailOutlineIcon, {}),
            sx: { minWidth: 140 },
            ...rest,
            children: isLoading ? "Subscribing..." : children
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Snackbar2, { open: showSuccess, autoHideDuration: 4e3, onClose: () => setShowSuccess(false), children: /* @__PURE__ */ jsx(Alert2, { severity: "success", icon: /* @__PURE__ */ jsx(CheckCircleIcon, {}), children: successMessage }) }),
      /* @__PURE__ */ jsx(Snackbar2, { open: showError, autoHideDuration: 4e3, onClose: () => setShowError(false), children: /* @__PURE__ */ jsx(Alert2, { severity: "error", children: errorMessage }) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Button6,
    {
      onClick: handleSubscribe,
      disabled: isLoading,
      startIcon: isLoading ? /* @__PURE__ */ jsx(CircularProgress2, { size: 20 }) : /* @__PURE__ */ jsx(MailOutlineIcon, {}),
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
  return /* @__PURE__ */ jsx(
    ActionButton_default,
    {
      href: bookingUrl,
      icon: /* @__PURE__ */ jsx(CalendarTodayIcon, {}),
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
  const whatsappUrl = React17.useMemo(() => {
    const formattedPhone = formatPhoneNumber(phone, countryCode);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  }, [phone, message, countryCode]);
  return /* @__PURE__ */ jsx(
    ActionButton_default,
    {
      href: whatsappUrl,
      icon: /* @__PURE__ */ jsx(WhatsAppIcon, {}),
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
          filled: /* @__PURE__ */ jsx(BookmarkIcon, {}),
          outlined: /* @__PURE__ */ jsx(BookmarkBorderIcon, {}),
          color: "#1976d2"
        };
      case "like":
        return {
          filled: /* @__PURE__ */ jsx(ThumbUpIcon, {}),
          outlined: /* @__PURE__ */ jsx(ThumbUpOutlinedIcon, {}),
          color: "#1976d2"
        };
      default:
        return {
          filled: /* @__PURE__ */ jsx(FavoriteIcon, {}),
          outlined: /* @__PURE__ */ jsx(FavoriteBorderIcon, {}),
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
  const button = /* @__PURE__ */ jsx(
    IconButton,
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
    return /* @__PURE__ */ jsx(Tooltip, { title: getTooltipText(), children: button });
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
  const [showSuccess, setShowSuccess] = React17.useState(false);
  const [justCopied, setJustCopied] = React17.useState(false);
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
    const icon = justCopied ? /* @__PURE__ */ jsx(CheckIcon2, {}) : /* @__PURE__ */ jsx(ContentCopyIcon2, {});
    if (iconOnly) {
      return icon;
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      icon,
      justCopied ? "Copied!" : children
    ] });
  };
  const button = /* @__PURE__ */ jsx(
    Button6,
    {
      onClick: handleCopy,
      startIcon: iconOnly ? void 0 : justCopied ? /* @__PURE__ */ jsx(CheckIcon2, {}) : /* @__PURE__ */ jsx(ContentCopyIcon2, {}),
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
  const wrappedButton = showTooltip && iconOnly ? /* @__PURE__ */ jsx(Tooltip, { title: `Copy: ${text.length > 50 ? text.substring(0, 50) + "..." : text}`, children: button }) : button;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    wrappedButton,
    /* @__PURE__ */ jsx(
      Snackbar2,
      {
        open: showSuccess,
        autoHideDuration: 2e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsx(Alert2, { severity: "success", icon: /* @__PURE__ */ jsx(CheckIcon2, {}), children: successMessage })
      }
    )
  ] });
};
var CopyButton_default = CopyButton;
var ClickTextImage = ({ title, image, text, ImageComponent }) => {
  const [open, setOpen] = React17.useState(false);
  const contentId = useId();
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 };
  const imageConf = React17.useMemo(
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
  return /* @__PURE__ */ jsxs(
    Paper,
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
        /* @__PURE__ */ jsx(
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
        !open && /* @__PURE__ */ jsxs(
          Box3,
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
              /* @__PURE__ */ jsx(
                Typography13,
                {
                  variant: "narrative",
                  color: "common.white",
                  sx: { textShadow: "0 2px 6px rgba(0,0,0,0.35)", mb: 1 },
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(Box3, { sx: { pt: 1 }, children: /* @__PURE__ */ jsx(
                Button6,
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
        /* @__PURE__ */ jsx(Fade, { in: open, unmountOnExit: true, timeout: 200, children: /* @__PURE__ */ jsxs(
          Box3,
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
              /* @__PURE__ */ jsx(Typography13, { variant: "narrative", sx: { mb: 2 }, children: text }),
              /* @__PURE__ */ jsx(
                Button6,
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
var ClickTextImage_default = React17.memo(ClickTextImage);
var TextTreeRendererContext = createContext(null);
function useTextTreeRendererContext() {
  const ctx = useContext(TextTreeRendererContext);
  if (!ctx)
    throw new Error("TextTreeRendererContext missing. Wrap with <TextTreeRendererContext>.");
  return ctx;
}
function ContentTreeView({ tree }) {
  const { nodesRenderer } = useTextTreeRendererContext();
  return /* @__PURE__ */ jsx(Box3, { display: "flex", flexDirection: "column", children: tree.children.map((node) => {
    const result = nodesRenderer({ node });
    return /* @__PURE__ */ jsx(Fragment$1, { children: result.rendered }, node.id);
  }) });
}
function RichText({ inlineNodes }) {
  const { nodesRenderer } = useTextTreeRendererContext();
  return /* @__PURE__ */ jsx(Box3, { component: "span", children: inlineNodes.map((node) => {
    const result = nodesRenderer({ node });
    return /* @__PURE__ */ jsx(Fragment$1, { children: result.rendered }, node.id);
  }) });
}
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Typography13,
    {
      variant: variantLevels[sectionType],
      component,
      sx,
      ...rest
    }
  );
};
TitleLabel.displayName = "TitleLabel";
var PageTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "page", ...p });
var SectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "section", ...p });
var SubsectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "subsection", ...p });
var SubsubsectionTitleLabel = (p) => /* @__PURE__ */ jsx(TitleLabel, { sectionType: "subsubsection", ...p });
function Section2({
  title,
  content,
  defaultOpen: isOpen,
  collapsible: shouldOpen,
  hasDivider,
  contentGap
}) {
  const { nodesRenderer } = useTextTreeRendererContext();
  const [isOpenSection, setOpen] = useState(isOpen);
  const { openIndicator, closeIndicator } = useTextTreeRendererContext();
  const onClick = () => {
    setOpen((open) => !open);
  };
  const indicator = shouldOpen ? isOpenSection ? openIndicator : closeIndicator : null;
  const titleRendered = nodesRenderer({ node: title }).rendered;
  return /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "column", gap: contentGap, children: [
    /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "row", onClick: shouldOpen ? onClick : void 0, children: [
      indicator,
      /* @__PURE__ */ jsxs(SectionTitle, { children: [
        titleRendered,
        hasDivider && /* @__PURE__ */ jsx(Divider, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(Collapse, { in: shouldOpen ? isOpenSection : true, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(Box3, { display: "flex", flexDirection: "column", gap: contentGap, children: content.map((node) => {
      return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node }).rendered }, node.id);
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
  const [isOpenSubSection, setOpen] = useState(defaultOpen);
  const { closeIndicator, nodesRenderer, openIndicator } = useTextTreeRendererContext();
  const onClick = () => {
    setOpen((open) => !open);
  };
  const indicator = collapsible ? isOpenSubSection ? openIndicator : closeIndicator : null;
  return /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "column", gap: contentGap, children: [
    /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "row", onClick: collapsible ? onClick : void 0, children: [
      indicator,
      /* @__PURE__ */ jsxs(SubsectionTitle, { children: [
        /* @__PURE__ */ jsx(RichText, { inlineNodes: title.content }),
        hasDivider && /* @__PURE__ */ jsx(Divider, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(Collapse, { in: collapsible ? isOpenSubSection : true, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(Box3, { display: "flex", flexDirection: "column", gap: contentGap, children: richTextBlocks.map((node) => {
      return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node }).rendered }, node.id);
    }) }) })
  ] });
}
function InlineText({ body }) {
  return /* @__PURE__ */ jsx(Typography13, { component: "span", variant: "inherit", children: body });
}
function InlineStrong({ body }) {
  return /* @__PURE__ */ jsx(Typography13, { component: "strong", variant: "inherit", sx: { fontWeight: 700 }, children: body });
}
function InlineEmphasis({ body }) {
  return /* @__PURE__ */ jsx(Typography13, { component: "em", variant: "inherit", sx: { fontStyle: "italic" }, children: body });
}
function InlineStrongEmphasis({ body }) {
  return /* @__PURE__ */ jsx(
    Typography13,
    {
      component: "strong",
      variant: "inherit",
      sx: { fontStyle: "italic", fontWeight: 700 },
      children: /* @__PURE__ */ jsx("em", { children: body })
    }
  );
}
function InlineCode({ body }) {
  return /* @__PURE__ */ jsx(
    Typography13,
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
  return /* @__PURE__ */ jsx(MuiLink2, { component: LinkComponent, href, underline: "hover", color: "inherit", children: body });
}
function isOverridableType(type) {
  return type === "section" || type === "subSection";
}
var defaultRenderedRegistry = {
  text: {
    type: "text",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineText, { body: node.body, ...overrides });
    }
  },
  strong: {
    type: "strong",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineStrong, { body: node.body, ...overrides });
    }
  },
  emphasis: {
    type: "emphasis",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineEmphasis, { body: node.body, ...overrides });
    }
  },
  strongEmphasis: {
    type: "strongEmphasis",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineStrongEmphasis, { body: node.body, ...overrides });
    }
  },
  code: {
    type: "code",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineCode, { body: node.body, ...overrides });
    }
  },
  link: {
    type: "link",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(InlineLink, { body: node.body, href: node.href, ...overrides });
    }
  },
  richText: {
    type: "richText",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(RichText, { inlineNodes: node.content, ...overrides });
    }
  },
  subSection: {
    type: "subSection",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(SubSection, { title: node.title, content: node.content, hasDivider: true, ...overrides });
    }
  },
  section: {
    type: "section",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(
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
        rendered: /* @__PURE__ */ jsxs(Fragment, { children: [
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
function TwoColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "header2colFooter");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_2 })
      }
    }
  };
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
function ThreeColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "footerHeader3Columns");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_3 })
      }
    }
  };
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
function FeaturedColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "header3colFooter");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_3 })
      }
    }
  };
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
function FiveColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "footerHeader5Columns");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = {
    header: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.header })
      }
    },
    footer: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.footer })
      }
    },
    content: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_1 })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_2 })
      },
      block_3: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_3 })
      },
      block_4: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_4 })
      },
      block_5: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.column_5 })
      }
    }
  };
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
var DefaultLinkLike = React17.forwardRef(function DefaultLinkLike2(props, ref) {
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

// src/lib/icon/index.ts
var icon_exports = {};
__export(icon_exports, {
  IconPicker: () => IconPicker_default
});
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
            primary: /* @__PURE__ */ jsx(Typography13, { variant: "narrative", ...labelTypographyProps, children: label })
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
  return /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ jsxs(
      Box3,
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
          /* @__PURE__ */ jsx(Typography13, { variant: "narrative", fontWeight: "bold", ...labelTypographyProps, children: label })
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
  return /* @__PURE__ */ jsx(Box3, { children: /* @__PURE__ */ jsx(MenuSelectionContext.Provider, { value: selectors, children: /* @__PURE__ */ jsx(DrawerMenuRenderContext.Provider, { value: renderedContext, children: /* @__PURE__ */ jsx(DrawerMenuControllerContext.Provider, { value: { drawerMenuStore }, children: /* @__PURE__ */ jsxs(MenuDepthContext.Provider, { value: { depth: 0 }, children: [
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
  const normalizedPath = React17.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React17.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React17.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React17.useMemo(() => {
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
            MuiLink2,
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
            MuiLink2,
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
        !hideRoot && /* @__PURE__ */ jsx(MuiLink2, { component: linkComponent, href: "/", underline: "hover", color: "inherit", children: "Home" }),
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
    Box3,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        ...sx
      },
      children: [
        /* @__PURE__ */ jsx(ImageComponent, { src, width, height, alt }),
        subtitle ? /* @__PURE__ */ jsx(Typography13, { variant: "eyebrow", sx: { mt: 1 }, children: subtitle }) : null
      ]
    }
  );
}
function HeaderMinimal({ centerDown, centerUp, left, right }) {
  return (
    //
    /* @__PURE__ */ jsx(AppBar, { position: "sticky", children: /* @__PURE__ */ jsx(Toolbar, { sx: { display: "flex" }, children: /* @__PURE__ */ jsxs(
      Box3,
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
          /* @__PURE__ */ jsx(Box3, { children: left }),
          /* @__PURE__ */ jsx(Box3, { flex: "1 1 auto", minWidth: 0, children: /* @__PURE__ */ jsxs(Box3, { display: "flex", width: "100%", flexDirection: "column", alignItems: "center", children: [
            centerUp,
            centerDown
          ] }) }),
          /* @__PURE__ */ jsx(Box3, { children: right })
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
function useDropDownMenuRenderContext() {
  const ctx = useContext(DropDownMenuRenderContext);
  if (!ctx)
    throw new Error("DropDownMenuRenderContext missing. Wrap with <DropDownMenuRenderContext>.");
  return ctx;
}
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
    /* @__PURE__ */ jsx(Box3, { sx: { display: {
      xs: "block",
      sm: "none"
    } }, children: /* @__PURE__ */ jsx(HeaderDrawer, { breadMenuProps, drawerProps, logoProps }) }),
    /* @__PURE__ */ jsx(Box3, { sx: { display: {
      xs: "none",
      sm: "block"
    } }, children: /* @__PURE__ */ jsx(HeaderMenu, { breadMenuProps, logoProps, menuProps }) })
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
  const [uncontrolledValue, setUncontrolledValue] = React17.useState(String(defaultValue != null ? defaultValue : ""));
  const inputValue = isControlled ? String(controlledValue != null ? controlledValue : "") : uncontrolledValue;
  const timerRef = React17.useRef(null);
  const composingRef = React17.useRef(false);
  const lastEmittedRef = React17.useRef(inputValue);
  const clearTimer = React17.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const schedule = React17.useCallback(
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
  React17.useEffect(() => {
    schedule(inputValue);
  }, [debounceMs]);
  React17.useEffect(() => {
    if (isControlled) schedule(String(controlledValue != null ? controlledValue : ""));
  }, [isControlled, controlledValue]);
  React17.useEffect(() => clearTimer, [clearTimer]);
  const handleChange = React17.useCallback(
    (e) => {
      var _a;
      const next = (_a = e.target.value) != null ? _a : "";
      if (!isControlled) setUncontrolledValue(next);
      onChange == null ? void 0 : onChange(e);
      if (!composingRef.current) schedule(next);
    },
    [isControlled, onChange, schedule]
  );
  const handleBlur = React17.useCallback(
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
  return /* @__PURE__ */ jsx(
    TextField,
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
  return /* @__PURE__ */ jsx(Stack, { spacing, ...props });
};
var StandardStack = ({ sx, ...props }) => {
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
    return kind === "title" ? /* @__PURE__ */ jsx(SubsubsectionTitle, { children: node }) : /* @__PURE__ */ jsx(Typography13, { variant: "strapline", children: node });
  }
  return React17.isValidElement(node) ? node : null;
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
  return /* @__PURE__ */ jsx(
    Container,
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
      children: /* @__PURE__ */ jsxs(
        Grid,
        {
          container: true,
          spacing: 10,
          alignItems: "stretch",
          width: "100%",
          sx: { flex: 1, minHeight: "inherit" },
          children: [
            /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 7 }, sx: { display: "flex" }, children: /* @__PURE__ */ jsxs(
              Stack,
              {
                spacing: 3,
                sx: {
                  py: { xs: 2, md: 0 },
                  justifyContent: "center",
                  width: "100%"
                },
                children: [
                  formatTitle(header, "title"),
                  message && /* @__PURE__ */ jsx(Typography13, { variant: "lead", color: "text.primary", sx: { textAlign: "left", maxWidth: 720 }, children: message }),
                  formatTitle(subTitle, "subtitle")
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 5 }, sx: { display: "flex", alignItems: "stretch" }, children: /* @__PURE__ */ jsxs(
              Box3,
              {
                sx: { display: "flex", flexDirection: "column", flex: 1, minHeight: 0, width: "100%" },
                children: [
                  /* @__PURE__ */ jsx(
                    Paper,
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
                      children: /* @__PURE__ */ jsx(
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
                  caption && /* @__PURE__ */ jsx(
                    Typography13,
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
  const layoutAbsolute = CSSLayout({ layout, diagnostics: [] });
  let media = null;
  if ("image" in props && props.image) {
    const imageConf = {
      src: props.image,
      mode: "cover",
      // Fill container while maintaining aspect ratio
      objectPosition: "50% 50%"
      // Center the image within container
    };
    media = /* @__PURE__ */ jsx(
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
    media = /* @__PURE__ */ jsx(Box3, { sx: { position: "absolute", inset: 0 }, children: embedSrc && /* @__PURE__ */ jsx(
      Box3,
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
  const renderer = {
    row_1: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.reverse ? props.message : media })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.reverse ? media : props.message })
      }
    }
  };
  const rendered = GridCssMuiRenderer({
    layoutAbsolute,
    layoutRendering: renderer,
    diagnostics: []
  });
  return /* @__PURE__ */ jsx(
    Box3,
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
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descId = useId();
  const iframeSrc = resolveIframeSrc(videoId, src);
  const avatarUrl = typeof avatarSrc === "string" ? avatarSrc : avatarSrc == null ? void 0 : avatarSrc.src;
  const defaultTrigger = /* @__PURE__ */ jsxs(Box3, { sx: { display: "flex", alignItems: "center", justifyContent: align, gap: 1 }, children: [
    /* @__PURE__ */ jsx(
      Avatar,
      {
        src: avatarUrl,
        alt: "",
        slotProps: { img: { loading: "lazy", decoding: "async" } }
      }
    ),
    /* @__PURE__ */ jsx(Button6, { variant: "text", color: "secondary", onClick: () => setOpen(true), children: buttonLabel })
  ] });
  const wrappedTrigger = trigger ? /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    wrappedTrigger,
    /* @__PURE__ */ jsx(
      Modal,
      {
        open,
        onClose: () => setOpen(false),
        "aria-labelledby": titleId,
        "aria-describedby": descId,
        children: /* @__PURE__ */ jsxs(
          Box3,
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
              /* @__PURE__ */ jsx(SubsectionTitle, { id: titleId, gutterBottom: true, children: title }),
              /* @__PURE__ */ jsx(Box3, { id: descId, sx: { position: "relative", width: "100%", paddingTop: "56.25%" }, children: iframeSrc ? /* @__PURE__ */ jsx(
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
              ) : /* @__PURE__ */ jsx(
                Box3,
                {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    px: 2,
                    textAlign: "center"
                  },
                  children: /* @__PURE__ */ jsx(Typography13, { variant: "narrative", color: "text.secondary", children: "Video source is missing or invalid." })
                }
              ) }),
              /* @__PURE__ */ jsx(Box3, { sx: { mt: 2, textAlign: "right" }, children: /* @__PURE__ */ jsx(Button6, { onClick: () => setOpen(false), "aria-label": "Close video modal", children: "Close" }) })
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
  return /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "column", paddingLeft: padding, children: [
    /* @__PURE__ */ jsxs(Box3, { display: "flex", flexDirection: "column", ...headerProps, children: [
      /* @__PURE__ */ jsx(
        Typography13,
        {
          variant: "narrative",
          fontWeight: ancestorSelected ? 700 : 600,
          color: ancestorSelected ? "primary.main" : "text.primary",
          ...labelTypographyProps,
          children: label
        }
      ),
      shouldShowDivider && /* @__PURE__ */ jsx(Divider, { ...dividerProps })
    ] }),
    /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: childDepth }, children: items.map((item) => {
      return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node: item }).rendered }, item.id);
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
  return /* @__PURE__ */ jsx(
    Button6,
    {
      component: LinkComponent,
      href,
      disabled,
      color: selected ? "primary" : "inherit",
      variant: "text",
      startIcon: icon,
      ...buttonProps,
      children: /* @__PURE__ */ jsx(Typography13, { variant: "narrative", ...labelTypographyProps, children: label })
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
  const [anchorEl, setAnchorEl] = useState(null);
  const ancestorSelected = isAncestorSelected(id);
  const isOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const childDepth = 1;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button6,
      {
        color: ancestorSelected ? "primary" : "inherit",
        variant: "text",
        onClick: handleClick,
        ...headerProps,
        children: /* @__PURE__ */ jsx(
          Typography13,
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
    /* @__PURE__ */ jsx(
      Popover,
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
        children: /* @__PURE__ */ jsx(MegaMenu, { childDepth, items, megaMenuProps })
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
  return /* @__PURE__ */ jsx(
    Box3,
    {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "minmax(180px, 1fr)",
      columnGap: 3,
      rowGap: 2,
      padding: 3,
      ...megaMenuProps,
      children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: childDepth }, children: items.map((item) => {
        return /* @__PURE__ */ jsx(Fragment$1, { children: nodesRenderer({ node: item }).rendered }, item.id);
      }) })
    }
  );
}
var defaultDropDownMenuRegistry = {
  link: {
    type: "link",
    rendering({ node, overrides }) {
      var _a;
      const Icon = /* @__PURE__ */ jsx(IconPicker_default, { name: (_a = node.iconKey) != null ? _a : node.label });
      return /* @__PURE__ */ jsx(DropDownLink, { href: node.href, id: node.id, label: node.label, icon: Icon, ...overrides });
    }
  },
  group: {
    type: "group",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(DropDownGroup, { id: node.id, items: node.children, label: node.label, ...overrides });
    }
  },
  navGroup: {
    type: "navGroup",
    rendering({ node, overrides }) {
      return /* @__PURE__ */ jsx(DropDownNavGroup, { id: node.id, items: node.children, label: node.label, ...overrides });
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
        rendered: /* @__PURE__ */ jsxs(Fragment, { children: [
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
  return /* @__PURE__ */ jsx(
    Box3,
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

// src/lib/text/index.ts
var text_exports = {};
__export(text_exports, {
  boldToNodes: () => boldToNodes,
  parseInlineMarkdown: () => parseInlineMarkdown,
  toTitleCase: () => toTitleCase
});
function boldToNodes(input, keyScope = "b") {
  const boldRe = /\*\*([^*]+)\*\*/g;
  return splitAndWrap(input, boldRe, (m, k) => /* @__PURE__ */ jsx("strong", { children: m[1] }, k), `${keyScope}-`);
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
        return /* @__PURE__ */ jsx(Link, { href, children: text }, k);
      }
      if (href.startsWith("http")) {
        return /* @__PURE__ */ jsx(MuiLink2, { href, target: "_blank", rel: "noopener noreferrer", children: text }, k);
      }
      return /* @__PURE__ */ jsx(MuiLink2, { href, children: text }, k);
    },
    `${keyScope}-link-`
  );
  const withBold = flatMapNodes(
    withLinks,
    (n) => typeof n === "string" ? splitAndWrap(n, boldRe, (m, k) => /* @__PURE__ */ jsx("strong", { children: m[1] }, k), `${keyScope}-b-`) : [n]
  );
  const withItalics = flatMapNodes(
    withBold,
    (n) => typeof n === "string" ? splitAndWrap(n, italicRe, (m, k) => /* @__PURE__ */ jsx("em", { children: m[1] }, k), `${keyScope}-i-`) : [n]
  );
  const newlineRe = /\r\n|\r|\n|\\n/g;
  const withBreaks = flatMapNodes(
    withItalics,
    (n) => typeof n === "string" ? splitAndWrap(n, newlineRe, (_m, k) => /* @__PURE__ */ jsx("br", {}, k), `${keyScope}-br-`) : [n]
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
  if (/[/._+:#@\\-]/.test(str)) return true;
  if (/[A-Z]{2,}/.test(str)) return true;
  if (/[a-z][A-Z]/.test(str)) return true;
  if ([...str].some((char) => char.charCodeAt(0) > 127)) return true;
  return false;
}

export { ActionButton_default as ActionButton, BackButton_default as BackButton, BackgroundBox_default as BackgroundBox, BannerCarousel_default as BannerCarousel, BannerStatic_default as BannerStatic, BlockCarousel_default as BlockCarousel, BookingButton_default as BookingButton, BreadMenu_default as BreadMenu, CallToActionButton_default as CallToActionButton, ClickTextImage_default as ClickTextImage, ContentTreeView, CopyButton_default as CopyButton, DebouncedTextField_default as DebouncedTextField, DefaultLinkLike, DownloadButton_default as DownloadButton, DrawerMenuControllerContext, MenuDepthContext as DrawerMenuDepthContext, DrawerMenuGroup, DrawerMenuLink, DrawerMenuRenderContext, DrawerMenuRoot, MenuSelectionContext as DrawerMenuSelectionContext, DropDown, DropDownGroup, DropDownLink, DropDownMenuRenderContext, DynamicTransition_default as DynamicTransition, FavoriteButton_default as FavoriteButton, FeaturedColumnsFooter, FiveColumnsFooter, GetInTouch_default as GetInTouch, Header, HeaderDrawer, HeaderLogo, HeaderMenu, HeaderMinimal, HeroBlock_default as HeroBlock, HtmlImage, IconPicker_default as IconPicker, InlineCode, InlineEmphasis, InlineLink, InlineStrong, InlineStrongEmphasis, InlineText, MainTitle_default as MainTitle, MediaText_default as MediaText, Pad, PageLayout_default as PageLayout, PageTitle, PageTitleLabel, RichText, RouterProvider, SECTION_MIN_H, Section, SectionTitle, SectionTitleLabel, ShareButton_default as ShareButton, SocialButton_default as SocialButton, Spacer_default as Spacer, StandardStack_default as StandardStack, SubSection, SubscribeButton_default as SubscribeButton, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, TextTreeRendererContext, ThreeColumnsFooter, Title, TitleLabel, TouchButton_default as TouchButton, TwoColumnsFooter, VideoModal, WhatsAppButton_default as WhatsAppButton, boldToNodes, camelCase, createDrawerMenuStore, defaultDrawerMenuRegistry, defaultDropDownMenuRegistry, defaultRenderDrawerMenuNode, defaultRenderDropDownMenuNode, defaultRenderTextNode, defaultRenderedRegistry, getDrawerMenuSelectors, getDropDownMenuSelectors, getInitialDrawerMenuStoreState, icon_exports as icon, isStaticImageDataLike, parseInlineMarkdown, parseInlineText, safeTitleCase, sectionMinHeightSx, setDrawerMenuNodeOpen, text_exports as text, toImgAttrs, toTitleCase, useDrawerMenuControllerContext, useMenuDepthContext as useDrawerMenuDepthContext, useDrawerMenuNodeOpen, useDrawerMenuRenderContext, useMenuSelectionContext as useDrawerMenuSelectionContext, useDropDownMenuRenderContext, useTextTreeRendererContext };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map