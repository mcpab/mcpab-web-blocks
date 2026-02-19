import IconPicker from '../../../lib/icon/IconPicker';
import { MenuLabelTypographyProps, RowPlan, RowPolicy, RowPolicyProps } from '../RowPolicyTypes';

import { safeTitleCase } from '../../../lib/utils';

/** Configuration for {@link defaultDropDownPolicy}. */
type DefaultDropDownProps = {
  /**
   * Reserved for future use. Currently unused — the dropdown does not apply
   * depth-based indentation to depth-0 items. Sub-items in the mega menu use
   * raw-pixel indentation: `(depth - 1) * 8px`.
   */
  baseIndent: number;
  /** Indicator icon shown on depth-0 items that have children (pointing downward). */
  downIndicator: React.ReactNode;
  /** Indicator icon shown on depth-2+ items that have children (pointing right). */
  rightIndicator: React.ReactNode;
};

/**
 * Default {@link RowPolicy} for the horizontal dropdown / mega menu navigation.
 *
 * Styling rules by depth:
 * - **depth 0** — nav bar items: `text.primary`, icon resolved by label name via `IconPicker`,
 *   down-chevron indicator. Label is title-cased.
 * - **depth 1** — mega menu column headers: uppercase, letter-spaced, small (`0.7rem`),
 *   `text.secondary`, bold (`700`). No icon.
 * - **depth 2+** — mega menu items: indented `(depth - 1) * 8px` (raw pixels). No icon.
 * - **selected** — `primary.main` colour, bold (`700`). No background change.
 * - **ancestor-selected at depth 0** — medium weight (`500`), `text.primary`.
 *
 * Pass a custom `RowPolicy` via {@link MenuRenderContext} to restyle without modifying components.
 */
export const defaultDropDownPolicy = ({
  baseIndent,
  downIndicator,
  rightIndicator,
}: DefaultDropDownProps): RowPolicy => {
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

    const indicatorIcon = depth === 0 ? downIndicator : rightIndicator;
    const indicator = hasChildren ? indicatorIcon : undefined;

    const paddingInlineStart = depth > 1 ? (depth - 1) * 8 : 0;

    let rowPolicy: RowPlan = {
      text: label,
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

    if (depth === 1) {
      // Category header in mega menu
      typographyProps.color = 'text.secondary';
      typographyProps.fontWeight = 700;
      typographyProps.fontSize = '0.7rem';
      typographyProps.letterSpacing = '0.08em';
      typographyProps.textTransform = 'uppercase';
    }

    if (isSelected) {
      typographyProps.color = 'primary.main';
      typographyProps.fontWeight = 700;
    }

    if (isAncestorSelected && depth === 0) {
      typographyProps.fontWeight = 500;
      typographyProps.color = 'text.primary';
    }

    rowPolicy.typographyProps = typographyProps;

    return rowPolicy;
  };
};
