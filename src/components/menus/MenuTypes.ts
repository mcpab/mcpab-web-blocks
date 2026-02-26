import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { LinkTypeComponent } from '../../core/link';

/** Data payload for a single menu node. Stored in the hierarchy tree. */
export type MenuTreeElement = {
  /** Display label shown in the UI. */
  label: string;
  /** Navigation target. Omit for toggle-only (non-link) nodes. */
  link?: string;
  /** Sort order among siblings. Lower values appear first. */
  order?: number;
};

/** Data payload for the invisible root node of the tree. */
export type RootTreeElement = {
  label: string;
};

/** Per-node UI overrides applied on top of the default {@link RowPolicy} output. */
export type MenuTreeElementUI = {
  /** Click handler — attached to the row wrapper instead of (or in addition to) navigation. */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Set to `false` to hide the node entirely. Defaults to `true`. */
  display?: boolean;
  /** Render a divider below this node. */
  divider?: boolean;
};

/** Root-level overrides that apply to the whole menu, not to individual nodes. */
export type RootOverridesUI = {
  /** Custom link component (e.g. Next.js `Link`). Falls back to a plain `<a>` when omitted. */
  linkComponent?: LinkTypeComponent;
};

/**
 * Base props shared by all menu variants (DrawerMenu, DropDown).
 *
 * Build these props with {@link hierarchyToDrawerProps} rather than constructing them by hand.
 */
export type MenuPropsRendering = {
  root: RootTreeElement;
  treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  rootOverrides?: RootOverridesUI;
};
