export type LinkRef= {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export type LinkTypeComponent = React.ComponentType<LinkRef>;

export type ExternalLink = {
  href: `${'http' | 'https'}://${string}` | `mailto:${string}` | `tel:${string}`;   
};

export type InternalLink = {
  href: `/${string}`;   
};
