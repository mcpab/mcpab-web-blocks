import * as React from 'react';

// Icons (MUI)
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

/**
 * Renders a Material icon resolved from a normalized semantic key.
 *
 * Returns `null` when no key match exists.
 */
export type IconPickerProps = {
  /** Prefer a semantic key (e.g. "home", "settings", "privacy-policy") over display label. */
  name: string;
  /** Optional icon size override (falls back to MUI default). */
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
};

/**
 * Normalize a string to a stable lookup key:
 * - trim
 * - lowercase
 * - collapse whitespace
 * - convert spaces/underscores to hyphens
 * - trim leading/trailing slashes
 */
function normalizeKey(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[ _]+/g, '-');
}

type IconComp = typeof HomeIcon;

/** Central mapping: add synonyms by pointing multiple keys to the same icon. */
const ICONS_BY_KEY = {
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
  'log-out': ExitToAppIcon,
  signout: ExitToAppIcon,
  'sign-out': ExitToAppIcon,
  login: LoginIcon,
  'log-in': LoginIcon,
  signin: LoginIcon,
  'sign-in': LoginIcon,
  info: InfoIcon,
  information: InfoIcon,
  about: PeopleIcon,
  'about-us': PeopleIcon,
  team: PeopleIcon,
  privacy: PrivacyTipIcon,
  'privacy-policy': PrivacyTipIcon,
} as const satisfies Record<string, IconComp>;

/** Union of normalized keys accepted by {@link IconPicker}. */
export type IconName = keyof typeof ICONS_BY_KEY;
/** Backward-compatible alias for existing imports. */
export type ICONS_NAMES = IconName;

function isIconName(value: string): value is IconName {
  return value in ICONS_BY_KEY;
}

/** Icon renderer from semantic names. */
const IconPicker: React.FC<IconPickerProps> = ({ name, fontSize = 'medium' }) => {
  const key = normalizeKey(name);

  if (!isIconName(key)) return null;
  const Icon = ICONS_BY_KEY[key];
  return <Icon fontSize={fontSize} />;
};

export default IconPicker;
