import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ImageComponentLike, StaticImageDataLike } from '../../core/image/image-types';
import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/system';

export type HeaderLogoProps = {
  ImageComponent: ImageComponentLike;
  src: string | StaticImageDataLike;
  width?: string | number ;
  height?: string | number;
  subtitle?: string;
  alt?: string;
  sx?: SxProps<Theme>;
};

export function HeaderLogo({
  ImageComponent,
  src,
  subtitle,
  alt = 'Site logo',
  sx,
  height,
  width,
}: HeaderLogoProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
    >
      <ImageComponent src={src} width={width} height={height} alt={alt} />
      {subtitle ? (
        <Typography variant="eyebrow" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}

export default HeaderLogo;
