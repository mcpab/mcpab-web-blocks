import IconPicker from '../../../lib/icon/IconPicker';
import { MenuLabelTypographyProps, RowPolicy } from '../RowPolicyTypes';

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
  return ({ depth, node, isOpen }) => {
    ///

    const hasChildren = node.children !== undefined && Object.keys(node.children).length > 0;

    let label = node.node ? node.node.label : '';
    let color = 'text.secondary';

    if (depth === 0) {
      // Capitalize root label
      label = safeTitleCase(label);
      color = 'text.primary';
    }

    const paddingInlineStart = baseIndent * depth;

    const typographyProps: MenuLabelTypographyProps = {
      variant: 'narrative',
      noWrap: true,
      color: color,
    };

    const icon = depth === 0 ? <IconPicker name={label ?? ''} fontSize="medium" /> : undefined;

    const indicator = hasChildren ? (isOpen ? openIndicator : closeIndicator) : undefined;

    return {
      text: label,
      typographyProps: typographyProps,
      icon: icon,
      indicator: indicator,
      indicatorPlacement: 'end',
      paddingInlineStart: paddingInlineStart,
    };
  };
};
