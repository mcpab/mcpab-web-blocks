import * as React from 'react';

export type LinkTypeComponent = React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<'a'> & React.RefAttributes<HTMLAnchorElement>
>;

// Default that always works (plain <a>) AND matches ForwardRefExoticComponent
export const DefaultLinkLike: LinkTypeComponent = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(function DefaultLinkLike(props, ref) {
  return <a ref={ref} {...props} />;
});
