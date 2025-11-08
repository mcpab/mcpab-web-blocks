'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FooterColumnType, FooterItem } from '../../core/footer/types';
import { LinkTypeComponent } from '../../core/link';
import { SubsectionTitle } from '../typography';

// Types

interface FooterColumnProps {
  column: FooterColumnType;
  sx?: object;
  /** id for the heading used by aria-labelledby on parent Grid */
  headingId?: string;
  /** role for the list container (defaults to 'list') */
  listRole?: React.AriaRole;
  /** render list container as <address> (useful for contact blocks) */
  asAddress?: boolean;

  LinkComponent: LinkTypeComponent;
}


const FooterColumn: React.FC<FooterColumnProps> = ({
  column,
  sx,
  headingId,
  listRole = 'list',
  asAddress = false,
  LinkComponent,
}) => {
  const ListWrapper = asAddress ? 'address' : 'div';

  return (


    <Grid container rowSpacing={1} columnSpacing={0} justifyContent={'center'} sx={{ ...sx }}>
      {/* Heading */}
      <Grid size={{ xs: 12 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} >
        <SubsectionTitle id={headingId} fontWeight={'bold'}  >
          {column.title}
        </SubsectionTitle>
      </Grid>

      {/* List */}
      <Grid
        size={{ xs: 12 }}
        component={ListWrapper as any}
        display={'block'}
        sx={{ all: asAddress ? 'unset' : undefined }}
      >
        <ul role={listRole} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {column.items.map((item, index) => {

            const Icon = item.icon;

            return (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0' }}>
                {Icon ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0 }}>
                    <Icon fontSize="small" aria-hidden />
                  </span>
                ) : null}
                <RenderItem item={item} LinkComponent={LinkComponent} />
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );
};

const RenderItem: React.FC<{ item: FooterItem; LinkComponent: LinkTypeComponent }> = ({ item, LinkComponent }) => {

  let trg = '_external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if ('href' in item) {
    const href = item.href;
    return <LinkComponent
      href={href}
      {...trg}
      style={{ textDecoration: 'none', color: 'inherit' }}

    >
      <Typography
        variant="body2"
        sx={{ '&:hover': { textDecoration: 'underline' } }}
      >
        {item.label}
      </Typography>
    </LinkComponent>
  } else {
    return <Typography
      variant="body2"
      sx={{ '&:hover': { textDecoration: 'underline' } }}
    >
      {item.label}
    </Typography>;
  }

}

export default FooterColumn;
