import * as React from 'react';
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { SvgIconComponent } from 'node_modules/@mui/icons-material';

export interface IconPickerProps {
    /** Semantic name used to choose an icon (e.g., 'home', 'about-us'). */
    name: string;
}

/**
 * Map a semantic name to a Material Icon.
 * Defaults to a chevron if there is no specific match.
 */
const IconPicker= ({ name }: IconPickerProps): SvgIconComponent => {

    const key = name.toLowerCase();

    switch (key) {
        case 'home':
            return HomeIcon ;
        case 'settings':
            return SettingsIcon;
        case 'profile':
            return AccountCircleIcon;
        case 'contact':
            return ContactMailIcon;
        case 'help':
            return HelpIcon;
        case 'dashboard':
            return DashboardIcon;
        case 'notifications':
            return NotificationsIcon;
        case 'logout':
            return ExitToAppIcon;
        case 'login':
            return LoginIcon;
        case 'information':
        case 'info':
            return InfoIcon;
        case 'about-us':
            return PeopleIcon;
        case 'privacy':
        case 'privacy-policy':
            return PrivacyTipIcon;
        default:
            return ChevronRightIcon;
    }
};

export default IconPicker;
