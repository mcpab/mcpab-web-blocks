import MuiLink from '@mui/material/Link';
import { useTextTreeRendererContext } from '../TextTreeRenderContext';

export type InlineLinkProps = {
  body: string;
  href: string;
   
};

export function InlineLink({ body, href}: InlineLinkProps) {

  const {LinkComponent} = useTextTreeRendererContext();

  return (
    <MuiLink component={LinkComponent} href={href} underline="hover" color="inherit">
      {body}
    </MuiLink>
  );
}

