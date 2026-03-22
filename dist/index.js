import Box3 from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React24 from 'react';
import React24__default, { createContext, useId, useMemo, useState, useEffect, useContext, useSyncExternalStore } from 'react';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Typography9 from '@mui/material/Typography';
import Button8 from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { useMediaQuery, AppBar, Toolbar, Typography, Drawer, List, Button, Menu, MenuItem, ListItemIcon, ListItemText, Snackbar, Alert, Stack as Stack$1, TextField, CircularProgress, IconButton, Tooltip, Box as Box$1, Chip, LinearProgress, Collapse } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
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
import ContentCopyIcon2 from '@mui/icons-material/ContentCopy';
import CheckIcon2 from '@mui/icons-material/Check';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Paper from '@mui/material/Paper';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import MuiLink3 from '@mui/material/Link';
import { stratify } from 'd3-hierarchy';
import { getLayoutFromCatalog, CSSLayout, GridCssMuiRenderer } from '@mcpab/gridcss';
import { Box } from '@mui/system';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
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
import ExpandLess2 from '@mui/icons-material/ExpandLess';
import ExpandMore2 from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton2 from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Collapse2 from '@mui/material/Collapse';
import List$1 from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon2 from '@mui/material/ListItemIcon';
import ListItemText2 from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Popover from '@mui/material/Popover';
import AppBar$1 from '@mui/material/AppBar';
import Toolbar$1 from '@mui/material/Toolbar';
import TextField2 from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';

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
var BannerStatic_default = React24.memo(BannerStatic);
var FrameArray = class {
  constructor(frames, startIndex = 0) {
    this.fadeInKey = 0;
    this.fadeOutKey = 0;
    const normalized = Math.max(0, Math.min(startIndex, Math.max(frames.length - 1, 0)));
    this.frames = frames.map((frame, index) => ({ frame, key: index }));
    this.fadeInKey = normalized;
    this.fadeOutKey = normalized;
  }
  iterateFrame() {
    this.fadeOutKey = this.fadeInKey;
    const len = this.frames.length || 1;
    this.fadeInKey = (this.fadeInKey + 1) % len;
  }
  getFadeInFrame() {
    var _a;
    return { key: this.fadeInKey, frame: (_a = this.frames[this.fadeInKey]) == null ? void 0 : _a.frame };
  }
  getFadeOutFrame() {
    var _a;
    return { key: this.fadeOutKey, frame: (_a = this.frames[this.fadeOutKey]) == null ? void 0 : _a.frame };
  }
};
var DynamicTransition = ({
  frames,
  interval = 2e3,
  transitionDuration = 1e3,
  startIndex = 0,
  boxProps
}) => {
  var _a, _b;
  const faRef = React24.useRef(new FrameArray(frames != null ? frames : [], startIndex));
  const [tick, setTick] = React24.useState(0);
  React24.useEffect(() => {
    faRef.current = new FrameArray(frames != null ? frames : [], startIndex);
    setTick(0);
  }, [frames, startIndex]);
  React24.useEffect(() => {
    var _a2;
    const hasCycle = ((_a2 = frames == null ? void 0 : frames.length) != null ? _a2 : 0) >= 2;
    if (!hasCycle) return;
    const period = Math.max(0, interval) + Math.max(0, transitionDuration);
    const id = window.setInterval(() => {
      faRef.current.iterateFrame();
      setTick((t) => t + 1);
    }, period);
    return () => window.clearInterval(id);
  }, [frames, interval, transitionDuration]);
  const len = (_a = frames == null ? void 0 : frames.length) != null ? _a : 0;
  if (len === 0) return null;
  if (len === 1) {
    return /* @__PURE__ */ jsx(
      Box3,
      {
        ...boxProps,
        sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
        children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0 }, children: frames[0] })
      }
    );
  }
  const inFrame = faRef.current.getFadeInFrame();
  const outFrame = faRef.current.getFadeOutFrame();
  return /* @__PURE__ */ jsx(
    Box3,
    {
      ...boxProps,
      sx: { position: "relative", inset: 0, width: "100%", height: "100%", ...(boxProps == null ? void 0 : boxProps.sx) || {} },
      children: tick === 0 ? /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0 }, children: (_b = faRef.current.frames[Math.max(0, Math.min(startIndex, len - 1))]) == null ? void 0 : _b.frame }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Fade, { in: false, timeout: transitionDuration, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: outFrame.frame }) }, `out-${outFrame.key}`),
        /* @__PURE__ */ jsx(Fade, { in: true, timeout: transitionDuration, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, willChange: "opacity" }, children: inFrame.frame }) }, `in-${inFrame.key}`)
      ] })
    }
  );
};
var DynamicTransition_default = React24.memo(DynamicTransition);
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
  const frames = React24.useMemo(() => {
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
  }, [images, overlayColor, preloadFirst]);
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
var BlockCarousel_default = React24.memo(BlockCarousel);
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
var BannerCarousel_default = React24.memo(BannerCarousel);
var variantLevels = {
  page: "h1",
  section: "h2",
  subsection: "h3",
  subsubsection: "h4"
};
var Title = (props) => {
  const { sectionType: role, sx, ...rest } = props;
  return /* @__PURE__ */ jsx(
    Typography9,
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
var MainTitle_default = React24.memo(MainTitle);
var TouchButton = styled(Button8)(({ theme }) => ({
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
  const [showSuccess, setShowSuccess] = React24.useState(false);
  React24.useEffect(() => {
    if (success) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, successDuration);
      return () => clearTimeout(timer);
    }
  }, [success, successDuration]);
  const isDisabled = disabled || loading;
  const handleClick = (event) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };
  const getButtonContent = () => {
    if (showSuccess) {
      return /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsx(CheckCircleIcon, { sx: { color: green[500] } }),
        successText || children
      ] });
    }
    if (loading) {
      return /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsx(CircularProgress, { size: 20, color: "inherit" }),
        loadingText || children
      ] });
    }
    return /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      startIcon,
      children,
      endIcon
    ] });
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      disabled: isDisabled,
      onClick: handleClick,
      "aria-busy": loading,
      "aria-live": showSuccess ? "polite" : void 0,
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
  const [isDownloading, setIsDownloading] = React24.useState(false);
  const [downloadProgress, setDownloadProgress] = React24.useState(0);
  const [isComplete, setIsComplete] = React24.useState(false);
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
      setTimeout(() => {
        setDownloadProgress(100);
        setIsDownloading(false);
        setIsComplete(true);
        onDownloadComplete == null ? void 0 : onDownloadComplete();
        setTimeout(() => {
          setIsComplete(false);
          setDownloadProgress(0);
        }, 2e3);
      }, showProgress ? 1e3 : 500);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };
  const getButtonContent = () => {
    if (isComplete) {
      return /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ jsx(CheckCircleIcon, { sx: { color: green[500] } }),
        /* @__PURE__ */ jsx(Typography, { variant: "inherit", children: "Downloaded!" })
      ] });
    }
    return /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1, width: "100%" }, children: [
      fileIcon,
      /* @__PURE__ */ jsxs(Box$1, { sx: { flex: 1 }, children: [
        /* @__PURE__ */ jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "inherit", children }),
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
    Button,
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
var RouterContext = React24.createContext(null);
var RouterProvider = ({ router, children }) => {
  return /* @__PURE__ */ jsx(RouterContext.Provider, { value: router, children });
};
var useRouter = () => {
  const contextRouter = React24.useContext(RouterContext);
  return React24.useMemo(() => {
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
    Button,
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
  const [anchorEl, setAnchorEl] = React24.useState(null);
  const [showSuccess, setShowSuccess] = React24.useState(false);
  const [successMessage, setSuccessMessage] = React24.useState("");
  const shareData = React24.useMemo(() => ({
    url: url || (typeof window !== "undefined" ? window.location.href : ""),
    title: title || (typeof document !== "undefined" ? document.title : ""),
    text,
    files
  }), [url, title, text, files]);
  const canUseNativeShare = React24.useMemo(() => {
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
      setSuccessMessage(`Opened ${config.label.replace("Share on ", "").replace("Share via ", "")}`);
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
      Button,
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
          return /* @__PURE__ */ jsxs(
            MenuItem,
            {
              onClick: () => handleFallbackShare(platform),
              children: [
                /* @__PURE__ */ jsx(ListItemIcon, { children: config.icon }),
                /* @__PURE__ */ jsx(ListItemText, { primary: config.label })
              ]
            },
            platform
          );
        })
      }
    ),
    /* @__PURE__ */ jsx(
      Snackbar,
      {
        open: showSuccess,
        autoHideDuration: 3e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsx(
          Alert,
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
  const [email, setEmail] = React24.useState("");
  const [isLoading, setIsLoading] = React24.useState(false);
  const [showSuccess, setShowSuccess] = React24.useState(false);
  const [showError, setShowError] = React24.useState(false);
  const [emailError, setEmailError] = React24.useState("");
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
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Stack$1, { direction: { xs: "column", sm: "row" }, spacing: 1, sx: { width: "100%" }, children: [
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
          Button,
          {
            onClick: handleSubscribe,
            disabled: isLoading,
            startIcon: isLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : /* @__PURE__ */ jsx(MailOutlineIcon, {}),
            sx: { minWidth: 140 },
            ...rest,
            children: isLoading ? "Subscribing..." : children
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Snackbar, { open: showSuccess, autoHideDuration: 4e3, onClose: () => setShowSuccess(false), children: /* @__PURE__ */ jsx(Alert, { severity: "success", icon: /* @__PURE__ */ jsx(CheckCircleIcon, {}), children: successMessage }) }),
      /* @__PURE__ */ jsx(Snackbar, { open: showError, autoHideDuration: 4e3, onClose: () => setShowError(false), children: /* @__PURE__ */ jsx(Alert, { severity: "error", children: errorMessage }) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: handleSubscribe,
      disabled: isLoading,
      startIcon: isLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : /* @__PURE__ */ jsx(MailOutlineIcon, {}),
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
  const whatsappUrl = React24.useMemo(() => {
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
  const [favorited, setFavorited] = React24.useState(isFavorited);
  React24.useEffect(() => {
    setFavorited(isFavorited);
  }, [isFavorited]);
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
  const handleToggle = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);
    onToggle(newFavorited, itemId);
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
  const [showSuccess, setShowSuccess] = React24.useState(false);
  const [justCopied, setJustCopied] = React24.useState(false);
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
    Button,
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
      Snackbar,
      {
        open: showSuccess,
        autoHideDuration: 2e3,
        onClose: () => setShowSuccess(false),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ jsx(Alert, { severity: "success", icon: /* @__PURE__ */ jsx(CheckIcon2, {}), children: successMessage })
      }
    )
  ] });
};
var CopyButton_default = CopyButton;
var ClickTextImage = ({ title, image, text, ImageComponent }) => {
  const [open, setOpen2] = React24.useState(false);
  const contentId = useId();
  const TILE_MIN_H = { xs: 240, sm: 280, md: 300 };
  const imageConf = React24.useMemo(
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
                Typography9,
                {
                  variant: "narrative",
                  color: "common.white",
                  sx: { textShadow: "0 2px 6px rgba(0,0,0,0.35)", mb: 1 },
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(Box3, { sx: { pt: 1 }, children: /* @__PURE__ */ jsx(
                Button8,
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
              /* @__PURE__ */ jsx(Typography9, { variant: "narrative", sx: { mb: 2 }, children: text }),
              /* @__PURE__ */ jsx(
                Button8,
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
var ClickTextImage_default = React24.memo(ClickTextImage);
function createTreeTextStore(initialState) {
  let treeTextState = { ...initialState };
  let listeners = /* @__PURE__ */ new Set();
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
  return useSyncExternalStore(
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
var TextControllerContext = createContext(null);
function useTextControllerContext() {
  const ctx = useContext(TextControllerContext);
  if (!ctx) throw new Error("TextControllerContext missing. Wrap with <TextControllerContext>.");
  return ctx;
}
var TextTreeRendererContext = createContext(null);
function useTextTreeRendererContext() {
  const ctx = useContext(TextTreeRendererContext);
  if (!ctx)
    throw new Error("TextTreeRendererContext missing. Wrap with <TextTreeRendererContext>.");
  return ctx;
}
var TreeTextDepthContext = createContext(null);
function useTextTreeDepthContext() {
  const ctx = useContext(TreeTextDepthContext);
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
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(React24__default.Fragment, { children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Component, { ...props }),
    /* @__PURE__ */ jsx(Collapse, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(TreeTextDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents }) })
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
    return /* @__PURE__ */ jsx(Box3, { pl: indentPolicy({ baseIndent, depth }), children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(Box3, { pl: indentPolicy({ baseIndent, depth }), children: /* @__PURE__ */ jsx(Component, { ...props }) });
}
var TitleLabel = ({ sectionType, component = "span", sx, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Typography9,
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
function LabelOnly({ title, sx }) {
  return /* @__PURE__ */ jsx(SubsubsectionTitleLabel, { component: "div", sx, children: title });
}
function LinkedLabel({ title, href, sx }) {
  return /* @__PURE__ */ jsx(MuiLink3, { href, underline: "hover", sx, children: /* @__PURE__ */ jsx(SubsubsectionTitleLabel, { component: "span", children: title }) });
}

// src/components/content/textNodeRenderers/rendersRegistryTypes.ts
function defineEntry(e) {
  return e;
}
function SimpleText({ text, sx }) {
  return /* @__PURE__ */ jsx(Typography9, { variant: "narrative", sx, children: text });
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
function TitleAndSubDepth({ title, subtitle, indicator, onClick, depth }) {
  const TitleLabel2 = depth === 0 ? SubsectionTitleLabel : SubsubsectionTitleLabel;
  return /* @__PURE__ */ jsxs(Box$1, { onClick, display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxs(StandardStack_default, { size: "compact", children: [
      /* @__PURE__ */ jsx(TitleLabel2, { component: "div", children: title }),
      subtitle && /* @__PURE__ */ jsx(SubsubsectionTitleLabel, { component: "div", children: subtitle })
    ] }),
    indicator
  ] });
}
function TitleAndSubStd({ title, subtitle, indicator, onClick }) {
  return /* @__PURE__ */ jsxs(Box$1, { onClick, display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxs(StandardStack_default, { size: "compact", children: [
      /* @__PURE__ */ jsx(SubsectionTitle, { children: title }),
      subtitle && /* @__PURE__ */ jsx(SubsubsectionTitle, { children: subtitle })
    ] }),
    indicator
  ] });
}
function TitledText({ title, subtitle, text, sx }) {
  return /* @__PURE__ */ jsxs(StandardStack_default, { size: "compact", sx, children: [
    /* @__PURE__ */ jsx(SubsubsectionTitleLabel, { component: "div", children: title }),
    subtitle && /* @__PURE__ */ jsx(SubsubsectionTitleLabel, { component: "div", children: subtitle }),
    /* @__PURE__ */ jsx(Typography9, { variant: "narrative", children: text })
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
    openIndicator: /* @__PURE__ */ jsx(ExpandLess, {}),
    closeIndicator: /* @__PURE__ */ jsx(ExpandMore, {}),
    rendersRegistry: defaultRendersRegistry,
    indentPolicy({ baseIndent, depth }) {
      return baseIndent * depth;
    }
  };
  const childrenComponents = treeFromRoot.children ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(React24__default.Fragment, { children: /* @__PURE__ */ jsx(
    TextElement,
    {
      id: childId,
      children: childBranch.children,
      textDrawerElement: childBranch.node,
      textDrawerElementUI: childBranch.overrides
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsx(TextTreeRendererContext.Provider, { value: renderContext, children: /* @__PURE__ */ jsx(TreeTextDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents }) });
}
function TextDrawer({ treeFromRoot, indent = 0 }) {
  const treeTextStore = useMemo(() => {
    const initialStoreState = {};
    populateInitialStoreState(treeFromRoot, initialStoreState);
    initialStoreState["root"] = false;
    return createTreeTextStore(initialStoreState);
  }, [treeFromRoot]);
  return /* @__PURE__ */ jsx(TextControllerContext.Provider, { value: { treeTextStore }, children: /* @__PURE__ */ jsx(TextDrawer_Client, { treeFromRoot, indent }) });
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
  let issues = [];
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
    let node = hierarchy[key].payload;
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
    const root = stratify()(data);
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
  const layout = getLayoutFromCatalog("secondary", "header2colFooter");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride(layout, {
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
  });
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride2 = (_layout, override) => override;
function ThreeColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "footerHeader3Columns");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride2(layout, {
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
  });
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride3 = (_layout, override) => override;
function FeaturedColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "header3colFooter");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride3(layout, {
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
  });
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}
var defineOverride4 = (_layout, override) => override;
function FiveColumnsFooter(props) {
  const layout = getLayoutFromCatalog("secondary", "footerHeader5Columns");
  const diagnostics = [];
  const absoluteLayout = CSSLayout({ layout, diagnostics });
  const layoutRendering = defineOverride4(layout, {
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
  });
  const rendered = GridCssMuiRenderer({
    layoutAbsolute: absoluteLayout,
    layoutRendering,
    diagnostics
  });
  return /* @__PURE__ */ jsx(Box, { width: "100%", height: "100%", children: rendered });
}

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
        return /* @__PURE__ */ jsx(MuiLink3, { href, target: "_blank", rel: "noopener noreferrer", children: text }, k);
      }
      return /* @__PURE__ */ jsx(MuiLink3, { href, children: text }, k);
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
var DefaultLinkLike = React24.forwardRef(function DefaultLinkLike2(props, ref) {
  return /* @__PURE__ */ jsx("a", { ref, ...props });
});
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
  const normalizedPath = React24.useMemo(() => normalizePathname(pathname), [pathname]);
  const excludeSet = React24.useMemo(() => new Set(exclude != null ? exclude : []), [exclude]);
  const segments = React24.useMemo(() => {
    const raw = normalizedPath.split("/").filter(Boolean);
    return excludeSet.size ? raw.filter((s) => !excludeSet.has(s)) : raw;
  }, [normalizedPath, excludeSet]);
  const items = React24.useMemo(() => {
    const crumbs = [];
    let acc = [];
    segments.forEach((seg, idx) => {
      acc.push(seg);
      const href = "/" + acc.join("/");
      const isLast = idx === segments.length - 1;
      const label = segmentLabels && segmentLabels[seg] || (titleCase ? toTitleCase(seg) : seg);
      if (isLast) {
        crumbs.push(
          /* @__PURE__ */ jsx(
            MuiLink3,
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
            MuiLink3,
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
  }, [segments, segmentLabels, titleCase]);
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
        !hideRoot && /* @__PURE__ */ jsx(MuiLink3, { component: linkComponent, href: "/", underline: "hover", color: "inherit", children: "Home" }),
        items
      ]
    }
  ) });
};
BreadMenu.displayName = "BreadMenu";
var BreadMenu_default = BreadMenu;

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
var MenuControllerContext = createContext(null);
function useMenuControllerContext() {
  const ctx = useContext(MenuControllerContext);
  if (!ctx) throw new Error("MenuControllerContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuSelectorContext = createContext(null);
function useMenuSelectorContext() {
  const ctx = useContext(MenuSelectorContext);
  if (!ctx) throw new Error("MenuSelectorContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
function createMenuStore(initialState) {
  let menusState = { ...initialState };
  let listeners = /* @__PURE__ */ new Set();
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
  return useSyncExternalStore(
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
var MenuDepthContext = createContext(null);
function useMenuDepthContext() {
  const ctx = useContext(MenuDepthContext);
  if (!ctx) throw new Error("MenuDepthContext missing. Wrap with <MenuProvider>.");
  return ctx;
}
var MenuRenderContext = createContext(null);
function useMenuRenderContext() {
  const ctx = useContext(MenuRenderContext);
  if (!ctx) throw new Error("MenuRenderContext missing. Wrap with <MenuProvider>.");
  return ctx;
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
    const icon = depth === 0 ? /* @__PURE__ */ jsx(IconPicker_default, { name: label != null ? label : "", fontSize: "medium" }) : void 0;
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    icon && /* @__PURE__ */ jsx(ListItemIcon2, { sx: { minWidth: 36 }, children: icon }),
    /* @__PURE__ */ jsx(ListItemText2, { primary: /* @__PURE__ */ jsx(Typography9, { ...typographyProps, children: text }) })
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
  const elementLabel = /* @__PURE__ */ jsx(ElementLabel, { typographyProps, icon, text });
  const sx = [
    { paddingInlineStart },
    ...Array.isArray(rowSx) ? rowSx : rowSx ? [rowSx] : []
  ];
  const elementWithIndicator = /* @__PURE__ */ jsxs(Fragment, { children: [
    elementLabel,
    indicator
  ] });
  if (link && linkComponent) {
    return /* @__PURE__ */ jsx(ListItemButton, { component: linkComponent, href: link, onClick, sx, children: elementWithIndicator });
  } else if (onClick) {
    return /* @__PURE__ */ jsx(ListItemButton, { onClick, sx, children: elementWithIndicator });
  }
  return /* @__PURE__ */ jsx(ListItem, { sx, children: elementWithIndicator });
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
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(React24__default.Fragment, { children: /* @__PURE__ */ jsx(
    DrawerElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ElementButton, { overrides: localOverrides, rowPlan, indicator }),
    children && /* @__PURE__ */ jsx(Collapse2, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(
      List$1,
      {
        dense: true,
        disablePadding: true,
        sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
        children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
      }
    ) })
  ] });
}
function DrawerElement({ id, menuTreeElement, overrides, children }) {
  if (!menuTreeElement) return null;
  const { menuStore } = useMenuControllerContext();
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const isOpen = useNodeOpen(menuStore, id);
  const onToggle = (open) => setOpen(menuStore, id)(open);
  const { rowPolicy, linkLikeComp } = useMenuRenderContext();
  const { depth } = useMenuDepthContext();
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
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        DrawerOpenClose,
        {
          children,
          rowPlan,
          isOpen,
          onToggle,
          depth
        }
      ),
      (ui == null ? void 0 : ui.divider) && /* @__PURE__ */ jsx(Divider, {})
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ElementButton,
      {
        link: menuTreeElement.link,
        overrides,
        rowPlan,
        linkComponent: linkLikeComp
      }
    ),
    (ui == null ? void 0 : ui.divider) && /* @__PURE__ */ jsx(Divider, {})
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
  const linkLikeComp = (_a = rootOverrides == null ? void 0 : rootOverrides.linkComponent) != null ? _a : DefaultLinkLike;
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (drawerState) => () => setOpenDrawer(drawerState);
  const rootLabel = root.label || "Menu";
  treeFromRoot.node = {
    label: rootLabel
  };
  const renderContext = {
    linkLikeComp,
    rowPolicy: defaultDrawerRowPolicy({
      baseIndent: indent,
      openIndicator: /* @__PURE__ */ jsx(ExpandLess2, {}),
      closeIndicator: /* @__PURE__ */ jsx(ExpandMore2, {})
    })
  };
  const selectors = useMenuSelectorContext();
  const menuController = useMenuControllerContext();
  const selectedPathIds = selectors.selectedPathIds;
  const selectId = selectors.selectedId;
  const menuStore = menuController.menuStore;
  useEffect(() => {
    for (const selectedId of selectedPathIds) {
      if (selectedId !== selectId) setOpen(menuStore, selectedId)(true);
    }
  }, [selectId, menuStore]);
  const childrenComponents = treeFromRoot.children ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(React24__default.Fragment, { children: /* @__PURE__ */ jsx(
    DrawerElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsxs(MenuRenderContext.Provider, { value: renderContext, children: [
    /* @__PURE__ */ jsx(
      Drawer,
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
        children: /* @__PURE__ */ jsx(
          List,
          {
            dense: true,
            disablePadding: true,
            component: "nav",
            sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper", ...listSx },
            children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(IconButton2, { onClick: toggleDrawer(true), "aria-label": "Open menu", sx: triggerButtonSx, children: /* @__PURE__ */ jsx(MenuIcon, {}) })
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
  const selectors = useMemo(
    () => getSelectors({
      treeFromRoot,
      selector
    }),
    [treeFromRoot, selector]
  );
  const menuStore = useMemo(() => {
    const initialStoreState = {};
    populateInitialStoreState2(treeFromRoot, initialStoreState, selectors.selectedPathIds);
    initialStoreState["root"] = false;
    return createMenuStore(initialStoreState);
  }, [treeFromRoot]);
  return /* @__PURE__ */ jsx(MenuSelectorContext.Provider, { value: selectors, children: /* @__PURE__ */ jsx(MenuControllerContext.Provider, { value: { menuStore }, children: /* @__PURE__ */ jsx(
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
    const icon = depth === 0 ? /* @__PURE__ */ jsx(IconPicker_default, { name: label != null ? label : "", fontSize: "medium" }) : void 0;
    const indicatorIcon = depth === 0 ? downIndicator : rightIndicator;
    const indicator = hasChildren ? indicatorIcon : void 0;
    const paddingInlineStart = depth > 1 ? (depth - 1) * 8 : 0;
    let rowPolicy = {
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
  const childrenComponents = entries.map(([childId, childBranch], index) => /* @__PURE__ */ jsxs(React24__default.Fragment, { children: [
    /* @__PURE__ */ jsx(
      ColumnElement,
      {
        id: childId,
        node: childBranch.node,
        children: childBranch.children,
        overrides: childBranch.overrides,
        linkLikeComp
      }
    ),
    showColumnDividers && index < entries.length - 1 && /* @__PURE__ */ jsx(Divider, { orientation: "vertical", flexItem: true })
  ] }, childId));
  return /* @__PURE__ */ jsx(Box3, { padding: outerPadding, children: /* @__PURE__ */ jsx(Box3, { sx: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, children: childrenComponents }) });
}
function ColumnElement({ id, node, children, overrides, linkLikeComp }) {
  if (!node) return null;
  const { rowPlan, depth } = useRowPlan({ id, node, children, overrides });
  const { megaMenuPolicy = standardMegaMenuPolicy } = useMenuRenderContext();
  const { showItemDivider, columnMinWidth } = megaMenuPolicy;
  const elementLabel = /* @__PURE__ */ jsx(
    ElementButton,
    {
      link: node.link,
      overrides,
      rowPlan,
      linkComponent: linkLikeComp
    }
  );
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(React24__default.Fragment, { children: /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(Box3, { padding: 2, sx: { minWidth: columnMinWidth }, children: /* @__PURE__ */ jsxs(List$1, { children: [
      elementLabel,
      showItemDivider && /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
    ] }) });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      elementLabel,
      /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: depth + 1 }, children: childrenComponents })
    ] });
  }
}
function DropDownOpenClose({
  id,
  menuTreeElement,
  overrides,
  children
}) {
  if (!menuTreeElement) return null;
  const { depth } = useMenuDepthContext();
  if (depth !== 0) {
    console.warn("DropDownOpenClose should only be used at depth 0. Current depth:", depth);
    return null;
  }
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const hasChildren = children !== void 0 && Object.keys(children).length > 0;
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const [anchorEl, setAnchorEl] = React24__default.useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { rowPolicy } = useMenuRenderContext();
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ElementButton, { overrides: localOverrides, rowPlan, indicator }),
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
        children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: 1 }, children: /* @__PURE__ */ jsx(DropDownMegaMenu, { children }) })
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
  if (!menuTreeElement) return null;
  const { depth } = useMenuDepthContext();
  if (depth !== 0) {
    console.warn(
      "DropDownElement should only be used at the top level (depth 0). Current depth:",
      depth
    );
    return null;
  }
  const ui = overrides;
  if ((ui == null ? void 0 : ui.display) === false) return null;
  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const { rowPolicy, linkLikeComp } = useMenuRenderContext();
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
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      ElementButton,
      {
        link: menuTreeElement.link,
        overrides,
        rowPlan,
        linkComponent: linkLikeComp
      }
    ) });
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
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
      downIndicator: /* @__PURE__ */ jsx(ExpandMore2, { fontSize: "small" }),
      rightIndicator: /* @__PURE__ */ jsx(ChevronRightIcon, { fontSize: "small" })
    }),
    megaMenuPolicy: megaMenuPolicy !== void 0 ? megaMenuPolicy : standardMegaMenuPolicy
  };
  const childrenComponents = children ? Object.entries(children).map(([childId, childBranch]) => /* @__PURE__ */ jsx(Box3, { display: "flex", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsx(
    DropDownElement,
    {
      id: childId,
      menuTreeElement: childBranch.node,
      overrides: childBranch.overrides,
      children: childBranch.children
    }
  ) }, childId)) : [];
  return /* @__PURE__ */ jsx(MenuRenderContext.Provider, { value: renderContext, children: /* @__PURE__ */ jsx(
    AppBar$1,
    {
      position: "sticky",
      color: "default",
      elevation: 0,
      sx: { borderBottom: 1, borderColor: "divider", ...appBarSx },
      children: /* @__PURE__ */ jsx(
        Toolbar$1,
        {
          component: "nav",
          "aria-label": "Primary",
          sx: {
            justifyContent: "space-between",
            gap: 1,
            ...toolbarSx
          },
          children: /* @__PURE__ */ jsx(MenuDepthContext.Provider, { value: { depth: 0 }, children: childrenComponents })
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
  const selectors = useMemo(
    () => getSelectors({
      treeFromRoot,
      selector
    }),
    [treeFromRoot, selector]
  );
  return /* @__PURE__ */ jsx(MenuSelectorContext.Provider, { value: selectors, children: /* @__PURE__ */ jsx(
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
function normalizeHeaderProps(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if ("brand" in props) {
    return {
      brand: props.brand,
      routing: props.routing,
      navigation: {
        menuType: props.navigation.menuType,
        responsiveMenu: props.navigation.responsiveMenu,
        styles: props.navigation.styles,
        menuPosition: (_a = props.navigation.menuPosition) != null ? _a : "right",
        drawerAnchor: props.navigation.drawerAnchor,
        hierarchy: props.navigation.hierarchy,
        overrides: props.navigation.overrides,
        selector: props.navigation.selector,
        indent: props.navigation.indent
      },
      layout: {
        showBreadcrumbs: (_c = (_b = props.layout) == null ? void 0 : _b.showBreadcrumbs) != null ? _c : true,
        responsiveBreadcrumbs: (_d = props.layout) == null ? void 0 : _d.responsiveBreadcrumbs,
        appBarSx: (_e = props.layout) == null ? void 0 : _e.appBarSx,
        toolbarSx: (_f = props.layout) == null ? void 0 : _f.toolbarSx
      }
    };
  }
  return {
    brand: {
      logo: props.logo,
      altLogo: props.altLogo,
      logoSubtitle: props.logoSubtitle,
      ImageComponent: props.ImageComponent
    },
    routing: {
      linkComponent: props.linkComponent,
      pathname: props.pathname
    },
    navigation: {
      menuType: props.menuType,
      responsiveMenu: props.responsiveMenu,
      styles: props.styles,
      menuPosition: (_g = props.menuPosition) != null ? _g : "right",
      drawerAnchor: props.drawerAnchor,
      hierarchy: props.hierarchy,
      overrides: props.overrides,
      selector: props.selector,
      indent: props.indent
    },
    layout: {
      showBreadcrumbs: (_h = props.showBreadcrumbs) != null ? _h : true,
      responsiveBreadcrumbs: props.responsiveBreadcrumbs,
      appBarSx: props.appBarSx,
      toolbarSx: props.toolbarSx
    }
  };
}
var Header = function(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { brand, routing, navigation, layout } = normalizeHeaderProps(props);
  const { logo, altLogo = "Site logo", logoSubtitle, ImageComponent } = brand;
  const { linkComponent, pathname } = routing;
  const { menuType, responsiveMenu, styles, menuPosition, drawerAnchor, hierarchy, overrides, selector, indent = 2 } = navigation;
  const { showBreadcrumbs, responsiveBreadcrumbs, appBarSx, toolbarSx } = layout;
  const theme = useTheme();
  const result = hierarchyToDrawerInput({ hierarchy, overrides });
  if (!result.ok) {
    console.error("Failed to prepare menu tree for story:", result.issues);
    return /* @__PURE__ */ jsxs("div", { style: { color: "red" }, children: [
      "Menu preparation error: ",
      (_b = (_a = result.issues[0]) == null ? void 0 : _a.message) != null ? _b : "Unknown error"
    ] });
  }
  const { root, treeFromRoot, rootOverrides } = result;
  const resolvedDrawerAnchor = drawerAnchor != null ? drawerAnchor : menuPosition === "right" ? "right" : "left";
  const responsiveMode = {
    breakpoint: (_c = responsiveMenu == null ? void 0 : responsiveMenu.breakpoint) != null ? _c : "md",
    mobileType: (_d = responsiveMenu == null ? void 0 : responsiveMenu.mobileType) != null ? _d : "drawer",
    desktopType: (_e = responsiveMenu == null ? void 0 : responsiveMenu.desktopType) != null ? _e : "dropDown"
  };
  const isMobileViewport = useMediaQuery(theme.breakpoints.down(responsiveMode.breakpoint));
  const resolvedMenuType = menuType != null ? menuType : isMobileViewport ? responsiveMode.mobileType : responsiveMode.desktopType;
  const breadcrumbsMode = {
    breakpoint: (_f = responsiveBreadcrumbs == null ? void 0 : responsiveBreadcrumbs.breakpoint) != null ? _f : "md",
    mobile: (_g = responsiveBreadcrumbs == null ? void 0 : responsiveBreadcrumbs.mobile) != null ? _g : false,
    desktop: (_h = responsiveBreadcrumbs == null ? void 0 : responsiveBreadcrumbs.desktop) != null ? _h : true
  };
  const isMobileBreadcrumbViewport = useMediaQuery(theme.breakpoints.down(breadcrumbsMode.breakpoint));
  const shouldShowBreadcrumbs = showBreadcrumbs && (isMobileBreadcrumbViewport ? breadcrumbsMode.mobile : breadcrumbsMode.desktop);
  const BreadcrumbSlot = shouldShowBreadcrumbs ? /* @__PURE__ */ jsx(BreadMenu_default, { linkComponent, pathname }) : /* @__PURE__ */ jsx(Box, { "aria-hidden": true, sx: { minWidth: 24 } });
  const menuNode = resolvedMenuType === "drawer" ? /* @__PURE__ */ jsx(
    DrawerMenu,
    {
      root,
      treeFromRoot,
      rootOverrides,
      anchor: resolvedDrawerAnchor,
      indent,
      drawerPaperSx: (_i = styles == null ? void 0 : styles.drawer) == null ? void 0 : _i.drawerPaperSx,
      listSx: (_j = styles == null ? void 0 : styles.drawer) == null ? void 0 : _j.listSx,
      triggerButtonSx: (_k = styles == null ? void 0 : styles.drawer) == null ? void 0 : _k.triggerButtonSx,
      selector
    }
  ) : /* @__PURE__ */ jsx(
    DropDown,
    {
      root,
      treeFromRoot,
      rootOverrides,
      selector,
      appBarSx: (_l = styles == null ? void 0 : styles.dropDown) == null ? void 0 : _l.appBarSx,
      toolbarSx: (_m = styles == null ? void 0 : styles.dropDown) == null ? void 0 : _m.toolbarSx
    }
  );
  return /* @__PURE__ */ jsx(
    AppBar,
    {
      position: "sticky",
      elevation: 0,
      sx: {
        bgcolor: "#FFFFFF",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        ...appBarSx
      },
      children: /* @__PURE__ */ jsxs(
        Toolbar,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)",
            alignItems: "center",
            py: 2,
            gap: 2,
            ...toolbarSx
          },
          children: [
            /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifySelf: "start",
                  minWidth: 0
                },
                children: [
                  /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "flex-start", md: "center" }
                      },
                      children: [
                        /* @__PURE__ */ jsx(ImageComponent, { src: logo, width: 170, height: 50, priority: true, alt: altLogo }),
                        logoSubtitle ? /* @__PURE__ */ jsx(Typography, { variant: "eyebrow", sx: { mt: 1 }, children: logoSubtitle }) : null
                      ]
                    }
                  ),
                  menuPosition === "left" ? menuNode : null
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  minWidth: 0
                },
                children: [
                  BreadcrumbSlot,
                  menuPosition === "center" ? menuNode : null
                ]
              }
            ),
            /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "flex-end", minWidth: 0 }, children: menuPosition === "right" ? menuNode : null })
          ]
        }
      )
    }
  );
};
var Header_default = React24__default.memo(Header);
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
  const [uncontrolledValue, setUncontrolledValue] = React24.useState(String(defaultValue != null ? defaultValue : ""));
  const inputValue = isControlled ? String(controlledValue != null ? controlledValue : "") : uncontrolledValue;
  const timerRef = React24.useRef(null);
  const composingRef = React24.useRef(false);
  const lastEmittedRef = React24.useRef(inputValue);
  const clearTimer = React24.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const schedule = React24.useCallback(
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
  React24.useEffect(() => {
    schedule(inputValue);
  }, [debounceMs]);
  React24.useEffect(() => {
    if (isControlled) schedule(String(controlledValue != null ? controlledValue : ""));
  }, [isControlled, controlledValue]);
  React24.useEffect(() => clearTimer, [clearTimer]);
  const handleChange = React24.useCallback(
    (e) => {
      var _a;
      const next = (_a = e.target.value) != null ? _a : "";
      if (!isControlled) setUncontrolledValue(next);
      onChange == null ? void 0 : onChange(e);
      if (!composingRef.current) schedule(next);
    },
    [isControlled, onChange, schedule]
  );
  const handleBlur = React24.useCallback(
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
    TextField2,
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
var PageLayout = ({
  children,
  transparent = false,
  sx
}) => {
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
    return kind === "title" ? /* @__PURE__ */ jsx(SubsubsectionTitle, { children: node }) : /* @__PURE__ */ jsx(Typography9, { variant: "strapline", children: node });
  }
  return React24.isValidElement(node) ? node : null;
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
                  message && /* @__PURE__ */ jsx(Typography9, { variant: "lead", color: "text.primary", sx: { textAlign: "left", maxWidth: 720 }, children: message }),
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
                    Typography9,
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
  const renderer = defineOverride5(layout, {
    row_1: {
      block_1: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.reverse ? props.message : media })
      },
      block_2: {
        contentRenderer: () => /* @__PURE__ */ jsx(Fragment, { children: props.reverse ? media : props.message })
      }
    }
  });
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
  const [open, setOpen2] = useState(false);
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
    /* @__PURE__ */ jsx(Button8, { variant: "text", color: "secondary", onClick: () => setOpen2(true), children: buttonLabel })
  ] });
  const wrappedTrigger = trigger ? /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    wrappedTrigger,
    /* @__PURE__ */ jsx(
      Modal,
      {
        open,
        onClose: () => setOpen2(false),
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
                  children: /* @__PURE__ */ jsx(Typography9, { variant: "narrative", color: "text.secondary", children: "Video source is missing or invalid." })
                }
              ) }),
              /* @__PURE__ */ jsx(Box3, { sx: { mt: 2, textAlign: "right" }, children: /* @__PURE__ */ jsx(Button8, { onClick: () => setOpen2(false), "aria-label": "Close video modal", children: "Close" }) })
            ]
          }
        )
      }
    )
  ] });
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
var HtmlImage = React24.forwardRef(function HtmlImage2({ fill, style, ...props }, ref) {
  const mergedStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style != null ? style : {};
  const imgProps = toImgAttrs({ ...props, style: mergedStyle });
  return /* @__PURE__ */ jsx("img", { ref, ...imgProps });
});

export { ActionButton_default as ActionButton, BackButton_default as BackButton, BackgroundBox_default as BackgroundBox, BannerCarousel_default as BannerCarousel, BannerStatic_default as BannerStatic, BlockCarousel_default as BlockCarousel, BookingButton_default as BookingButton, BreadMenu_default as BreadMenu, CallToActionButton_default as CallToActionButton, ClickTextImage_default as ClickTextImage, CopyButton_default as CopyButton, DebouncedTextField_default as DebouncedTextField, DefaultLinkLike, DownloadButton_default as DownloadButton, DrawerMenu, DropDown, DynamicTransition_default as DynamicTransition, ElementButton, ElementLabel, FavoriteButton_default as FavoriteButton, FeaturedColumnsFooter, FiveColumnsFooter, GetInTouch_default as GetInTouch, HIERARCHY_ERROR_CODE, Header_default as Header, HeroBlock_default as HeroBlock, HtmlImage, IconPicker_default as IconPicker, MainTitle_default as MainTitle, MediaText_default as MediaText, MenuRenderContext, MenuSelectorContext, Pad, PageLayout_default as PageLayout, PageTitle, PageTitleLabel, RouterProvider, SECTION_MIN_H, Section, SectionTitle, SectionTitleLabel, ShareButton_default as ShareButton, SocialButton_default as SocialButton, Spacer_default as Spacer, StandardStack_default as StandardStack, SubscribeButton_default as SubscribeButton, SubsectionTitle, SubsectionTitleLabel, SubsubsectionTitle, SubsubsectionTitleLabel, TextDrawer, ThreeColumnsFooter, Title, TitleLabel, TouchButton_default as TouchButton, TwoColumnsFooter, VideoModal, WhatsAppButton_default as WhatsAppButton, boldToNodes, buildTreeFromStratify, camelCase, compactMegaMenuPolicy, convertToD3Stratify, createMenuStore, createTreeTextStore, defaultDrawerRowPolicy, defaultDropDownPolicy, defaultRendersRegistry, defineEntry, defineHierarchyModel, getSelectedAndPath, getSelectors, hierarchyToDrawerInput, hierarchyToTextDrawerProps, icon_exports as icon, isStaticImageDataLike, parseInlineMarkdown, prepareMenuTree, resolver, safeTitleCase, sectionMinHeightSx, setOpen, setTreeTextOpen, sortD3Stratify, standardMegaMenuPolicy, text_exports as text, toImgAttrs, toTitleCase, useMenuRenderContext, useMenuSelectorContext, useNodeOpen, useRowPlan, useTreeTextOpen };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map