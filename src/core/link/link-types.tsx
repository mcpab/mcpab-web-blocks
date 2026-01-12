export type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string; // keep required
};

export type LinkTypeComponent = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>;
 
