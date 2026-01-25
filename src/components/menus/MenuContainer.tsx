'use client';

import { ElementLabel, ElementLabelProps } from "./ElementLabel";
import { useContext } from "react";
import MenuContext from "./MenuContext";

type MenuContainerProps = Omit<ElementLabelProps, 'fontWeight' | 'capitalize'> & {
    children: React.ReactNode;
}

export function MenuContainer(props:MenuContainerProps) {
    //
    const label = <ElementLabel label={props.label} pickIcon={props.pickIcon} capitalize />;

    const menuStore = useContext(MenuContext);

 
    


}

