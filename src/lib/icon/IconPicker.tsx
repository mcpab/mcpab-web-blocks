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
 */
function normalizeKey(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[ _]+/g, '-');
}

type IconComp = typeof HomeIcon;

/** Central mapping: add synonyms by pointing multiple keys to the same icon. */
const ICONS_BY_KEY:Record<string, IconComp> = {
  //
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
  'about-us/': PeopleIcon, // just in case
  team: PeopleIcon,

  privacy: PrivacyTipIcon,
  'privacy-policy': PrivacyTipIcon,
} ;

export type ICONS_NAMES = keyof typeof ICONS_BY_KEY;

const IconPicker: React.FC<IconPickerProps> = ({ name, fontSize = 'medium' }) => {
  const key = normalizeKey(name);
 
  const Icon = ICONS_BY_KEY[key];
  if (!Icon) return null;
  return <Icon fontSize={fontSize} />;
};

export default IconPicker;
