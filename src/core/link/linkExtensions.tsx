import * as React from 'react';

/**
 * Framework-agnostic link component contract.
 *
 * Uses the anchor element prop surface so adapters can map to
 * framework-specific link primitives (e.g. Next.js Link wrappers).
 */
export type LinkTypeComponent =
  | React.ComponentType<React.ComponentPropsWithoutRef<'a'>>
  | React.ForwardRefExoticComponent<
      React.ComponentPropsWithoutRef<'a'> & React.RefAttributes<HTMLAnchorElement>
    >;

/**
 * Default link implementation backed by a plain `<a>` element.
 */
export const DefaultLinkLike: LinkTypeComponent = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(function DefaultLinkLike(props, ref) {
  return <a ref={ref} {...props} />;
});
