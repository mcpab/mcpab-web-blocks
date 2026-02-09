import { LinkTypeComponent } from '../../core/link';


export type MenuTreeElement = {
  label: string;
  link?: string;
  order?: number;
};

export type RootTreeElement = {
  label: string;
};

export type MenuTreeElementUI = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: boolean;
  divider?: boolean;
};

export type RootOverridesUI = {
  linkComponent?: LinkTypeComponent;
};

