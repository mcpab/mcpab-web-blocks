import IconPicker from '../../../lib/icon/IconPicker';
import { MenuLabelTypographyProps, RowPlan, RowPolicy, RowPolicyProps } from '../RowPolicyTypes';

import { safeTitleCase } from '../../../lib/utils';

/** Configuration for {@link defaultDrawerRowPolicy}. */
type DefaultRowPolicyProps = {
  /**
   * Base indentation multiplier in MUI spacing units.
   * Depth-N items receive `baseIndent * (N + 2)` units of inline-start padding,
   * designed to clear the icon width present at depth 0.
   * Should match the `indent` prop passed to {@link DrawerMenu}.
   */
  baseIndent: number;
  /** Icon shown next to a node when its children are expanded. */
  openIndicator: React.ReactNode;
  /** Icon shown next to a node when its children are collapsed. */
  closeIndicator: React.ReactNode;
};

/**
 * Default {@link RowPolicy} for the drawer menu.
 *
 * Styling rules:
 * - **depth 0** — semibold (`fontWeight: 600`), `text.primary`, icon resolved by label name via `IconPicker`.
 * - **depth 1+** — `0.875rem` font, `text.secondary`, no icon.
 * - **selected** — `primary.main` colour, semibold, 3px inline-start accent border + `action.hover` background.
 * - **ancestor of selected** — promoted to `text.primary` and semibold to trace the active path.
 *
 * Pass a custom `RowPolicy` via {@link MenuRenderContext} to restyle without modifying components.
 */
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

    const label = menuTreeElement.label;
    const displayLabel = depth === 0 ? safeTitleCase(label) : label;

    const icon = depth === 0 ? <IconPicker name={label ?? ''} fontSize="medium" /> : undefined;
    const indicator = hasChildren ? (isOpen ? openIndicator : closeIndicator) : undefined;
    const paddingInlineStart = depth === 0 ? 0 : baseIndent * (depth + 2);

    const typographyProps: MenuLabelTypographyProps = {
      variant: 'narrative',
      noWrap: true,
    };

    if (depth === 0) {
      typographyProps.fontWeight = 600;
      typographyProps.color = 'text.primary';
    } else {
      typographyProps.color = 'text.secondary';
      typographyProps.fontSize = '0.875rem';
    }

    let rowSx: RowPlan['rowSx'];

    if (isSelected) {
      typographyProps.color = 'primary.main';
      typographyProps.fontWeight = 600;
      rowSx = {
        borderInlineStart: '3px solid',
        borderColor: 'primary.main',
        bgcolor: 'action.hover',
      };
    }

    if (isAncestorSelected) {
      typographyProps.fontWeight = 600;
      typographyProps.color = 'text.primary';
    }

    return {
      text: displayLabel,
      icon,
      indicator,
      indicatorPlacement: 'end',
      paddingInlineStart,
      typographyProps,
      rowSx,
    };
  };
};
