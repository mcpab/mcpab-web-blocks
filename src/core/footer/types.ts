
import type { SvgIconComponent } from '@mui/icons-material/';
import type { ExternalLink, InternalLink } from '../link';

export type FooterItemBase = {
    label: string;
    icon?: SvgIconComponent;
};
export type FooterItemExternal = FooterItemBase & ExternalLink & {
    readonly _external: true;
};

export type FooterItemInternal = FooterItemBase & InternalLink & {
    readonly _external: false;
};

export type FooterItem = FooterItemBase | FooterItemExternal | FooterItemInternal;
export type FooterColumnType = {
    title: string;
    items: FooterItem[];
};
