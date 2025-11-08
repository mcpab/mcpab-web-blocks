import {FooterColumnType, FooterItemExternal, FooterItemBase, FooterItemInternal} from 'src/core/footer/types';
import  IconPicker  from '../icon/IconPicker';
import type { SvgIconComponent } from '@mui/icons-material/';
import { LinkTypeComponent } from '../../core/link';

type FooterItemForFactoryExternal = Omit<FooterItemExternal,'_external'> & {
    order?: number;
}

type FooterItemForFactoryInternal = Omit<FooterItemInternal,'_external'> & {
    order?: number;
}
type FooterItemForFactory = FooterItemForFactoryExternal | FooterItemForFactoryInternal | FooterItemBase;

type FooterFactoryProps = {
    title: string;
    linkComponent: LinkTypeComponent;
    items: {
        external: FooterItemForFactoryExternal[];
        internal: FooterItemForFactoryInternal[];
        base: FooterItemBase[];
    }
    iconFactory?: (item: FooterItemForFactory) => SvgIconComponent;
}

const baseIconFactory = (item: FooterItemForFactory): SvgIconComponent => {

    if( item.icon ) {
        return item.icon;
    }

    const iconName = item.label.replace(/\s+/g,'-').toLowerCase();
    return IconPicker({name: iconName});
}

export function footerFactory({title, items, iconFactory=baseIconFactory}: FooterFactoryProps): FooterColumnType {

    let column: FooterColumnType = {
        title: title,
        items: [],
    };


    for( let item of items ) {



    }



}


