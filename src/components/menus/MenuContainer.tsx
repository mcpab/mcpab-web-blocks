import { ElementLabel, ElementLabelProps } from "./ElementLabel";

type MenuContainerProps = Omit<ElementLabelProps, 'fontWeight' | 'capitalize'> & {
    children: React.ReactNode;
}

export function MenuContainer(props:MenuContainerProps) {
    //
    const label = <ElementLabel label={props.label} pickIcon={props.pickIcon} capitalize />;

    


}

