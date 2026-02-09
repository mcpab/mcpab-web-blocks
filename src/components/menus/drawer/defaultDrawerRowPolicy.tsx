import IconPicker from '../../../lib/icon/IconPicker';
import { MenuLabelTypographyProps, RowPlan, RowPolicy, RowPolicyProps } from '../RowPolicyTypes';

import { safeTitleCase } from '../../../lib/utils';

type DefaultRowPolicyProps = {
  baseIndent: number;
  openIndicator: React.ReactNode;
  closeIndicator: React.ReactNode;
};

export const defaultDrawerRowPolicy = ({
  baseIndent,
  openIndicator,
  closeIndicator,
}: DefaultRowPolicyProps): RowPolicy => {
  //
  return ({
    depth,
    menuTreeElement,
    menuTreeElementUI,
    isOpen,
    isSelected,
    isAncestorSelected,
    hasChildren,
  }: RowPolicyProps) => {
    ///

    let label = menuTreeElement.label;
    const icon = depth === 0 ? <IconPicker name={label ?? ''} fontSize="medium" /> : undefined;

    const indicator = hasChildren ? (isOpen ? openIndicator : closeIndicator) : undefined;

    const paddingInlineStart = baseIndent * depth;

    let rowPolicy: RowPlan = {
      text: label,
      typographyProps: {},
      icon: icon,
      indicator: indicator,
      indicatorPlacement: 'end',
      paddingInlineStart: paddingInlineStart,
    };


    const typographyProps: MenuLabelTypographyProps = {
      variant: 'narrative',
      noWrap: true,
      // color: color,
      // fontWeight: fontWeight,
    };

    if (depth === 0) {
      // Capitalize root label
      label = safeTitleCase(label);
      typographyProps.color = 'text.primary';
    }

    if (isSelected) {
      typographyProps.color = 'primary.main';
      rowPolicy.rowSx = {
        backgroundColor: 'action.selected',
        borderInlineStart: '3px solid',
        borderColor: 'primary.main',
      };
    }

    if (isAncestorSelected) {
      typographyProps.fontWeight = 500;
    }
    if (isAncestorSelected) {
      typographyProps.sx = {
        opacity: 0.9,
      };
    }

    rowPolicy.typographyProps = typographyProps;

    return  rowPolicy;
  };
};
