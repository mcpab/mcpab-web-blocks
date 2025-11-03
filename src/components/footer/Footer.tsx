'use client';
/**
 * @packageDocumentation
 *
 * # Footer
 * Site footer with brand identity, resource/contact columns, and LocalBusiness JSON-LD.
 *
 * - Uses MUI Grid v2 (`size={{ xs: 12, md: 3 }}`) for simple responsive layout.
 * - Columns are provided via `footerColumns` (static here; extract to props if you plan to vary).
 * - Includes an SR-only landmark heading for screen readers.
 */

import * as React from 'react';
import { useMemo } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // 
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Script from 'next/script';
import { SectionTitle } from '../typography';
import kellieBella from '@/public/images/kellieBella.jpg';

import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import FooterColumn, { type FooterColumn as FooterColumnType } from './FooterColumn';

/** Column content (static for now to keep component lean). */
const footerColumns: (Partial<FooterColumnType> & { title?: string })[] = [
  {
    title: 'Resources',
    items: [
      {
        label: 'Seven Practices to Shift Energy',
        href: 'https://drive.google.com/file/d/1eVfZlqYwUgifmcgBwA3doVDDx9JCkAkv/view',
        icon: MenuBookIcon,
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Maitland Wellness Center',
        href: 'https://maps.app.goo.gl/XNjjSC8csVgtW6wV6',
        icon: BusinessIcon,
      },
      {
        label: '237 Lookout Place, Maitland, FL 32751',
        href: 'https://maps.app.goo.gl/XNjjSC8csVgtW6wV6',
      },
      {
        label: 'kellie@psychologyorlando.com',
        icon: MailOutlineIcon,
        href: 'mailto:kellie@psychologyorlando.com?subject=Information%20Request',
      },
      {
        label: '(407) 435-1897',
        icon: LocalPhoneIcon,
        href: 'tel:+14074351897',
      },
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'About Us', href: '/about/about-kellie', icon: LinkIcon },
    ],
  },
];

export default function Footer() {
  // Freeze the year so it doesn’t change during a long SPA session
  const year = useMemo(() => new Date().getFullYear(), []);

  // Brand/identity block (kept outside Grid cell render)
  const brand = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: 2,
        color: 'primary.contrastText',
      }}
    >
      <Avatar
        alt="Portrait of Kellie S. Ffrench, Ph.D."
        src={kellieBella.src}
        sx={{ width: 64, height: 64 }}
        slotProps={
          { img: { loading: 'lazy', decoding: 'async' } }
        }
      />

      <Box>
        <Typography variant="narrative" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          Kellie S. Ffrench, Ph.D.
        </Typography>
        <Typography variant="narrative" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          License #PY 6706
        </Typography>
      </Box>
    </Box>
  );

  return (
    <footer aria-labelledby="site-footer-heading">
      {/* SR-only heading for the footer landmark */}
      <SectionTitle
        id="site-footer-heading"
        style={{ position: 'absolute', left: -10000, top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
      >
        Site footer
      </SectionTitle>

      <Paper
        elevation={3}
        square
        sx={{
          width: '100%',
          bgcolor: 'primary.light',
          boxShadow: '0 -8px 16px -8px rgba(0,0,0,0.2)', // top shadow only
          borderTop: '1px solid rgba(0,0,0,0.2)',
        }}
      >
        <Divider />

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            pb: 8,
          }}
        >
          <Grid
            container
            sx={{ width: '100%', mt: 8, mb: 8 }}
            rowSpacing={{ xs: 4, md: 6 }}
            columnSpacing={{ xs: 2, md: 4 }}
          >
            {/* Brand / identity */}
            <Grid size={{ xs: 12, md: 3 }} component="section" aria-labelledby="footer-brand">
              <SectionTitle
                id="footer-brand"
                style={{ position: 'absolute', left: -10000, top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
              >
                Practice identity
              </SectionTitle>
              {brand}
            </Grid>

            {/* Spacer on md+ to keep symmetry */}
            <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 12, md: 3 }} />

            {/* Columns */}
            {footerColumns.map((column, index) => {
              if (!column.title) return null;
              const headingId = `footer-col-${index}`;
              const isContact = column.title.toLowerCase() === 'contact';

              return (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 3 }}
                  component="nav"
                  aria-labelledby={headingId}
                >
                  <FooterColumn
                    column={column as FooterColumnType}
                    headingId={headingId}
                    listRole="list"
                    asAddress={isContact}
                    sx={{ color: 'primary.contrastText' }}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Divider sx={{ width: '100%', bgcolor: 'primary.contrastText' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 2,
              mt: 2,
              width: '100%',
            }}
          >
            <Typography variant="body2" sx={{ textAlign: 'left', color: 'primary.contrastText' }}>
              © {year} Kellie Ffrench, Ph.D. Licensed Psychologist in Orlando, Florida. Psychology Orlando. All rights
              reserved.
            </Typography>

            <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
              <Link href="/about/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Container>

        {/* JSON-LD for LocalBusiness (keep in client component, Script handles SSR) */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Kellie S. Ffrench, Ph.D.',
              url: 'https://psychologyorlando.com',
              image: 'https://psychologyorlando.com/images/kellieBella.jpg',
              telephone: '+1-407-435-1897',
              email: 'kellie@psychologyorlando.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '237 Lookout Place',
                addressLocality: 'Maitland',
                addressRegion: 'FL',
                postalCode: '32751',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </Paper>
    </footer>
  );
}
