// Footers.stories.tsx
import * as React from 'react';
import type { Story } from '@ladle/react';

import { TwoColumnsFooter } from './TwoColumnsFooter';
import { ThreeColumnsFooter } from './ThreeColumnsFooter';
import { FeaturedColumnsFooter } from './FeaturedColumnsFooter';
import { FiveColumnsFooter } from './FiveColumnsFooter';

// ---------------------------------------------------------------------------
// Shared mock slot components
// ---------------------------------------------------------------------------

const Logo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px' }}>
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
      }}
    />
    <span style={{ fontWeight: 700, fontSize: 18 }}>Acme Corp</span>
  </div>
);

const NavCol: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div style={{ padding: '16px 24px' }}>
    <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', marginBottom: 12 }}>
      {title.toUpperCase()}
    </div>
    {links.map((l) => (
      <div key={l} style={{ marginBottom: 8, fontSize: 14, opacity: 0.7, cursor: 'pointer' }}>
        {l}
      </div>
    ))}
  </div>
);

const ServiceCard: React.FC<{ icon: string; title: string; blurb: string }> = ({
  icon,
  title,
  blurb,
}) => (
  <div style={{ padding: '16px 24px' }}>
    <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
    <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
    <div style={{ fontSize: 13, opacity: 0.65, lineHeight: 1.5 }}>{blurb}</div>
  </div>
);

const Copyright: React.FC<{ extra?: string }> = ({ extra }) => (
  <div
    style={{
      padding: '10px 24px',
      fontSize: 12,
      opacity: 0.55,
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    © {new Date().getFullYear()} Acme Corp. All rights reserved.{extra ? ` · ${extra}` : ''}
  </div>
);

/** Dark page-footer wrapper to mimic a real site footer background. */
const DarkFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: '#0f172a', color: '#f8fafc', width: '100%', minHeight: 300 }}>
    {children}
  </div>
);

/** Light page-footer wrapper. */
const LightFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      background: '#f1f5f9',
      color: '#1e293b',
      width: '100%',
      minHeight: 300,
      borderTop: '1px solid #e2e8f0',
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// TwoColumnsFooter
// ---------------------------------------------------------------------------

export const TwoColumns: Story = () => (
  <DarkFrame>
    <TwoColumnsFooter
      header={<Logo />}
      column_1={
        <NavCol
          title="Company"
          links={['About Us', 'Careers', 'Press', 'Blog', 'Contact']}
        />
      }
      column_2={
        <NavCol
          title="Legal"
          links={['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']}
        />
      }
      footer={<Copyright extra="Privacy · Terms" />}
    />
  </DarkFrame>
);
TwoColumns.storyName = 'Two columns (dark)';

export const TwoColumnsLight: Story = () => (
  <LightFrame>
    <TwoColumnsFooter
      header={<Logo />}
      column_1={
        <NavCol
          title="Product"
          links={['Features', 'Pricing', 'Changelog', 'Roadmap']}
        />
      }
      column_2={
        <NavCol
          title="Support"
          links={['Documentation', 'Status', 'Community', 'Contact']}
        />
      }
      footer={<Copyright />}
    />
  </LightFrame>
);
TwoColumnsLight.storyName = 'Two columns (light)';

export const TwoColumnsEmptySlots: Story = () => (
  <DarkFrame>
    <TwoColumnsFooter
      column_1={<NavCol title="Company" links={['About', 'Blog']} />}
      column_2={<NavCol title="Legal" links={['Privacy', 'Terms']} />}
    />
  </DarkFrame>
);
TwoColumnsEmptySlots.storyName = 'Two columns — no header/footer slots';

// ---------------------------------------------------------------------------
// ThreeColumnsFooter
// ---------------------------------------------------------------------------

export const ThreeColumns: Story = () => (
  <DarkFrame>
    <ThreeColumnsFooter
      header={<Logo />}
      column_1={
        <NavCol
          title="Product"
          links={['Features', 'Pricing', 'Integrations', 'Changelog']}
        />
      }
      column_2={
        <NavCol
          title="Company"
          links={['About Us', 'Careers', 'Press', 'Contact']}
        />
      }
      column_3={
        <NavCol
          title="Legal"
          links={['Privacy Policy', 'Terms of Service', 'Cookie Settings']}
        />
      }
      footer={<Copyright />}
    />
  </DarkFrame>
);
ThreeColumns.storyName = 'Three columns (dark)';

export const ThreeColumnsLight: Story = () => (
  <LightFrame>
    <ThreeColumnsFooter
      header={<Logo />}
      column_1={
        <NavCol title="Solutions" links={['Enterprise', 'Startups', 'Agencies', 'Education']} />
      }
      column_2={
        <NavCol title="Resources" links={['Blog', 'Case Studies', 'Webinars', 'Docs']} />
      }
      column_3={
        <NavCol title="Support" links={['Help Center', 'Community', 'Status', 'Contact']} />
      }
      footer={<Copyright extra="Made with care" />}
    />
  </LightFrame>
);
ThreeColumnsLight.storyName = 'Three columns (light)';

// ---------------------------------------------------------------------------
// FeaturedColumnsFooter
// ---------------------------------------------------------------------------

export const FeaturedColumns: Story = () => (
  <DarkFrame>
    <FeaturedColumnsFooter
      header={<Logo />}
      column_1={
        <ServiceCard
          icon="⚡"
          title="Fast"
          blurb="Sub-100 ms response times, global edge caching included."
        />
      }
      column_2={
        <ServiceCard
          icon="🔒"
          title="Secure"
          blurb="SOC 2 Type II certified. Data encrypted at rest and in transit."
        />
      }
      column_3={
        <ServiceCard
          icon="♾️"
          title="Scalable"
          blurb="From hobby projects to Fortune 500 — no infrastructure headaches."
        />
      }
      footer={<Copyright extra="Our Services" />}
    />
  </DarkFrame>
);
FeaturedColumns.storyName = 'Featured columns — service cards (dark)';

export const FeaturedColumnsLight: Story = () => (
  <LightFrame>
    <FeaturedColumnsFooter
      header={<Logo />}
      column_1={
        <ServiceCard
          icon="🎨"
          title="Design"
          blurb="Pixel-perfect components built on a 20-column GridCSS system."
        />
      }
      column_2={
        <ServiceCard
          icon="🛠️"
          title="Engineering"
          blurb="TypeScript-first, tree-shakeable, zero-runtime-CSS approach."
        />
      }
      column_3={
        <ServiceCard
          icon="📊"
          title="Analytics"
          blurb="Built-in layout diagnostics to track render and coverage issues."
        />
      }
      footer={<Copyright />}
    />
  </LightFrame>
);
FeaturedColumnsLight.storyName = 'Featured columns — service cards (light)';

// ---------------------------------------------------------------------------
// FiveColumnsFooter
// ---------------------------------------------------------------------------

export const FiveColumns: Story = () => (
  <DarkFrame>
    <FiveColumnsFooter
      header={<Logo />}
      column_1={
        <NavCol
          title="Product"
          links={['Features', 'Pricing', 'Changelog', 'Roadmap']}
        />
      }
      column_2={
        <NavCol
          title="Solutions"
          links={['Enterprise', 'Startups', 'Agencies', 'Education']}
        />
      }
      column_3={
        <NavCol
          title="Resources"
          links={['Blog', 'Case Studies', 'Webinars', 'Docs']}
        />
      }
      column_4={
        <NavCol
          title="Company"
          links={['About Us', 'Careers', 'Press', 'Contact']}
        />
      }
      column_5={
        <NavCol
          title="Legal"
          links={['Privacy Policy', 'Terms', 'Cookies', 'GDPR']}
        />
      }
      footer={<Copyright extra="All trademarks belong to their respective owners" />}
    />
  </DarkFrame>
);
FiveColumns.storyName = 'Five columns (dark)';

export const FiveColumnsLight: Story = () => (
  <LightFrame>
    <FiveColumnsFooter
      header={<Logo />}
      column_1={<NavCol title="Platform" links={['Analytics', 'Dashboard', 'API']} />}
      column_2={<NavCol title="Integrations" links={['Slack', 'GitHub', 'Zapier', 'REST']} />}
      column_3={<NavCol title="Resources" links={['Docs', 'Tutorials', 'Videos', 'Blog']} />}
      column_4={<NavCol title="Community" links={['Forum', 'Discord', 'Events', 'OSS']} />}
      column_5={<NavCol title="Company" links={['About', 'Jobs', 'Press', 'Contact']} />}
      footer={<Copyright />}
    />
  </LightFrame>
);
FiveColumnsLight.storyName = 'Five columns (light)';

export const FiveColumnsPartial: Story = () => (
  <DarkFrame>
    <FiveColumnsFooter
      header={<Logo />}
      column_1={<NavCol title="Product" links={['Features', 'Pricing']} />}
      column_3={<NavCol title="Company" links={['About', 'Careers']} />}
      column_5={<NavCol title="Legal" links={['Privacy', 'Terms']} />}
      footer={<Copyright extra="Columns 2 and 4 intentionally omitted" />}
    />
  </DarkFrame>
);
FiveColumnsPartial.storyName = 'Five columns — sparse slots (gaps visible)';
