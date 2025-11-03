/**
 * @packageDocumentation
 *
 * # Menu types
 * Shared types for the navigation components.
 */

/**
 * Single menu node.
 *
 * @property name    Kebab case or plain; rendered label is derived by the menu.
 * @property path    URL path (internal) or href. Use leading "/" for internal routes.
 * @property isPage  If true and there are no children, render as a direct link.
 * @property children Nested children (optional).
 * @property order    Numeric sort order (lower comes first). Missing = bottom.
 * @property display  Optional visibility toggle (true by default).
 * @property divider  Optional flag to render a divider after this item.
 */
export interface MenuElement {
    name: string;
    path: string;
    isPage: boolean;
    children: MenuElement[];
    order?: number;
    display?: boolean;
    divider?: boolean;
}

export type MenuPosition = 'left' | 'right' | 'center' | 'top' | 'bottom';

export type MenuProps = {
    /** Root menu nodes to render (will be sorted by `order`). */
    menus: MenuElement[];
    /** Where to align the control/trigger or content. */
    position: MenuPosition;
    /** Transform labels to uppercase/title-case. @defaultValue true */
    capitalize?: boolean;
};
