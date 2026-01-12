import ListItemButton from '@mui/material/ListItemButton';
import { LinkTypeComponent } from '../../core/link';
import { ElementLabel, ElementLabelProps } from './ElementLabel';

export type ElementButtonProps = (
  | {
      linkComponent: LinkTypeComponent;
      href: string;
      kind: 'link';
    }
  | {
      onClick: React.MouseEventHandler<HTMLElement>;
      kind: 'action';
    }
) &
  ElementLabelProps & { icon?: React.ReactElement };

export function ElementButton(props: ElementButtonProps) {
  //
  const elementLabel = (
    <ElementLabel label={props.label} fontWeight={props.fontWeight} capitalize={props.capitalize} />
  );

  if ('href' in props) {
    return (
      <>
        <ListItemButton component={props.linkComponent} href={props.href}>
          {elementLabel}
        </ListItemButton>
        {props.icon}
      </>
    );
  } else {
    return (
      <>
        <ListItemButton onClick={props.onClick}>{elementLabel}</ListItemButton>
        {props.icon}
      </>
    );
  }
  //
}
