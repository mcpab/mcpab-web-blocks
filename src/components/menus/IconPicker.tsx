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

export interface IconPickerProps {
    /** Semantic name used to choose an icon (e.g., 'home', 'about-us'). */
    name: string;
}

/**
 * Map a semantic name to a Material Icon.
 * Defaults to a chevron if there is no specific match.
 */
const IconPicker: React.FC<IconPickerProps> = ({ name }) => {
    const key = name.toLowerCase();

    switch (key) {
        case 'home':
            return <HomeIcon sx={{ mr: 1 }} />;
        case 'settings':
            return <SettingsIcon sx={{ mr: 1 }} />;
        case 'profile':
            return <AccountCircleIcon sx={{ mr: 1 }} />;
        case 'contact':
            return <ContactMailIcon sx={{ mr: 1 }} />;
        case 'help':
            return <HelpIcon sx={{ mr: 1 }} />;
        case 'dashboard':
            return <DashboardIcon sx={{ mr: 1 }} />;
        case 'notifications':
            return <NotificationsIcon sx={{ mr: 1 }} />;
        case 'logout':
            return <ExitToAppIcon sx={{ mr: 1 }} />;
        case 'login':
            return <LoginIcon sx={{ mr: 1 }} />;
        case 'information':
        case 'info':
            return <InfoIcon sx={{ mr: 1 }} />;
        case 'about-us':
            return <PeopleIcon sx={{ mr: 1 }} />;
        case 'privacy':
        case 'privacy-policy':
            return <PrivacyTipIcon sx={{ mr: 1 }} />;
        default:
            return <ChevronRightIcon sx={{ mr: 1 }} />;
    }
};

export default React.memo(IconPicker);
