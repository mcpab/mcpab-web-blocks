// the basic menu element type.
// we assume that the link to the element is built using the tree structure below,
// but the element can provide an optional link that overrides that behavior.
// If it a non-clickable element, the link will not have effect and the element is just a label/container.
export type MenuTreeElement = {
  label: string;
  link?: string;
  noClickable?: boolean;
  display?: boolean;
  divider?: boolean;
};

// this type defines the list of elements in a tree structure, each identified by a unique string key.
// no structure is created yet.
export type MenuTreeElements = Record<string, MenuTreeElement>;

// each element in the tree can have a parent but it cannot be its own parent.
type AllowedParent<KM extends string, M extends MenuTreeElements> = Exclude<keyof M, KM & keyof M>;

// the tree structure type, where each element is associated with its parent (if any).
// the link to the element is built using the tree structure unless overridden in the element itself.
// The order of the elements is the order of entry in the MenuTreeElements type.
export type MenuTree<M extends MenuTreeElements> = {
  [E in keyof M]: {
    element: M[E];
    parent?: AllowedParent<E & string, M>;
  };
};

export type MenuTreeRendered<M extends MenuTreeElements> = {
  [E in keyof M]: {
    element: JSX.Element;
    children: Array<JSX.Element>;
  };
};

export type MenuPosition = 'left' | 'right' | 'center' | 'top' | 'bottom';

export type MenuProps = {
  /** Root menu nodes to render (will be sorted by `order`). */
  menus: MenuTree<any>;
  /** Where to align the control/trigger or content. */
  position: MenuPosition;
  /** Transform labels to uppercase/title-case. @defaultValue true */
  capitalize?: boolean;
};

// examples
const mn = {
  home: { label: 'Home', divider: true },
  about: { label: 'About', display: false },
  services: { label: 'Services' },
  consulting: { label: 'Consulting' },
  development: { label: 'Development' },
  'web-development': { label: 'Web Development' },
  'mobile-development': { label: 'Mobile Development' },
} as const satisfies MenuTreeElements;

const hjk: MenuTree<typeof mn> = {
  home: { element: { label: 'Home', divider: true }, parent: 'consulting' },
  about: { element: { label: 'About', display: false } },
  services: { element: { label: 'Services' } },
  consulting: { element: { label: 'Consulting' }, parent: 'services' },
  development: { element: { label: 'Development' }, parent: 'services' },
  'web-development': { element: { label: 'Web Development' }, parent: 'development' },
  'mobile-development': { element: { label: 'Mobile Development' }, parent: 'development' },
};
