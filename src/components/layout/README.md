# 🏗️ Layout System Documentation

A comprehensive, professional-grade layout system for React and Next.js applications. This package provides a complete suite of responsive layout components, grid systems, and design utilities that work seamlessly together to create modern, accessible, and performant web interfaces.

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [🏛️ Architecture](#-architecture)
- [📦 Components](#-components)
- [🎨 Design System](#-design-system)
- [🚀 Quick Start](#-quick-start)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Performance](#-performance)
- [🔧 Configuration](#-configuration)
- [📚 Examples](#-examples)
- [🛠️ Development](#-development)

## 🎯 Overview

### Core Philosophy

This layout system follows **mobile-first**, **component-driven** design principles with a focus on:

- **🎯 Developer Experience**: Intuitive APIs with TypeScript safety
- **📱 Responsive by Default**: Mobile-first approach with progressive enhancement
- **⚡ Performance Optimized**: Minimal bundle size and optimized rendering
- **🎨 Design System Integration**: Consistent spacing, typography, and visual hierarchy
- **♿ Accessibility First**: WCAG compliant components with semantic HTML
- **🔧 Framework Agnostic**: Works with React, Next.js, and other React-based frameworks

### Key Features

- **Flexible Grid Systems**: Mathematical precision with 12-column responsive grids
- **Section-Based Layout**: Semantic content organization with background management
- **Media-Text Combinations**: Professional media-text layouts with configurable ratios
- **Hero Sections**: Full-screen and contained hero blocks with background support
- **Alternating Layouts**: Zig-zag patterns for engaging content presentation
- **Foundation Components**: Page layouts, containers, and structural elements

## 🏛️ Architecture

### System Structure

```
src/components/layout/
├── 📁 grids/           # Grid calculation and layout systems
├── 📁 sections/        # Content section components  
├── 📄 BackgroundBox.tsx # Image/video background utility
├── 📄 PageLayout.tsx   # Main page structure component
├── 📄 Pad.tsx         # Spacing and padding utility
└── 📄 Section.tsx     # Semantic section wrapper
```

### Design Patterns

#### 1. **Composition Over Configuration**
Components are designed to work together through composition rather than complex configuration:

```tsx
<Section backgroundColor="primary.main" minHeight="100vh">
  <HeroBlock
    title="Welcome"
    subtitle="Professional layouts made simple"
    backgroundImage="/hero.jpg"
    ImageComponent={Image}
  />
</Section>
```

#### 2. **Progressive Enhancement**
Mobile-first design with desktop enhancements:

```tsx
<MediaText
  textSplit={{ preset: '50-50' }}  // Equal on desktop
  // Automatically stacks on mobile
  image="/feature.jpg"
  message={<FeatureContent />}
/>
```

#### 3. **Framework Agnostic Images**
Universal image component support:

```tsx
// Works with Next.js Image
<HeroBlock ImageComponent={NextImage} />

// Works with standard img
<HeroBlock ImageComponent="img" />

// Works with custom components
<HeroBlock ImageComponent={CustomImage} />
```

## 📦 Components

### 🏗️ Foundation Components

#### `<PageLayout />`
Main page structure with semantic HTML and accessibility features.

```tsx
<PageLayout
  header={<Header />}
  footer={<Footer />}
  maxWidth="lg"
>
  <YourPageContent />
</PageLayout>
```

**Features:**
- Semantic HTML5 structure (`<main>`, `<header>`, `<footer>`)
- Skip-to-content accessibility
- Responsive container management
- SEO-friendly markup

#### `<Section />`
Semantic content sections with background and spacing management.

```tsx
<Section
  backgroundColor="background.paper"
  minHeight="50vh"
  id="about"
>
  <SectionContent />
</Section>
```

**Features:**
- Background images with overlay support
- Minimum height constraints
- Semantic sectioning (`<section>`)
- Consistent vertical spacing

#### `<BackgroundBox />`
Universal background image/video utility component.

```tsx
<BackgroundBox
  ImageComponent={Image}
  imageConf={{
    src: "/background.jpg",
    mode: "cover",
    objectPosition: "center top"
  }}
/>
```

**Features:**
- Framework-agnostic image handling
- CSS object-fit modes (cover, contain, fill)
- Position control and overlay support
- Performance-optimized rendering

### 📊 Grid Systems

#### `<AlternateGrid />`
Dynamic zig-zag layouts for engaging content presentation.

```tsx
<AlternateGrid
  header="Our Features"
  blocks={[
    <FeatureCard key="1" />,
    <FeatureCard key="2" />,
    <FeatureCard key="3" />,
    <FeatureCard key="4" />
  ]}
  breakpoint="md"
  alternate={true}
/>
```

**Features:**
- Automatic content pairing and alternation
- Configurable responsive breakpoints
- Smart content alignment and spacing
- Performance-optimized with memoization

#### Grid Utilities
Mathematical precision for responsive layouts:

```tsx
import { calculateRatio, getGridSizes } from './grids';

// Calculate proportional ratios
const ratio = calculateRatio('60-40'); // { text: 7.2, media: 4.8 }

// Get responsive grid sizes
const sizes = getGridSizes({ xs: 12, md: 6 });
```

### 🎭 Section Components

#### `<HeroBlock />`
Professional hero sections with full background support.

```tsx
<HeroBlock
  title="Your Amazing Product"
  subtitle="Transform your business with our solution"
  backgroundImage="/hero-bg.jpg"
  ImageComponent={Image}
  overlay={{ opacity: 0.4, color: 'primary.main' }}
  minHeight="100vh"
/>
```

**Features:**
- Full-screen and contained layouts
- Background image optimization
- Overlay effects and gradients
- Typography hierarchy integration

#### `<MediaText />`
Responsive media-text combinations with configurable ratios.

```tsx
<MediaText
  image="/product-demo.jpg"
  ImageComponent={Image}
  message={<ProductDescription />}
  textSplit={{ preset: '60-40' }}
  reverse={true}
  backgroundColor="background.default"
/>
```

**Features:**
- Named ratio presets (40-60 through 60-40)
- Custom decimal ratios
- Image and YouTube video support
- Reversible column order

#### `<SectionWithAccordion />`
Expandable content sections with accordions.

```tsx
<SectionWithAccordion
  title="Frequently Asked Questions"
  items={[
    { title: "Question 1", content: "Answer content..." },
    { title: "Question 2", content: "More content..." }
  ]}
  defaultExpanded={0}
/>
```

**Features:**
- Accessible accordion implementation
- Controlled and uncontrolled modes
- Custom expansion icons
- Smooth animations

## 🎨 Design System

### Spacing System

The layout system uses a consistent 8px-based spacing scale:

```tsx
// Standardized spacing units
const spacing = {
  xs: 1,  // 8px
  sm: 2,  // 16px  
  md: 3,  // 24px
  lg: 4,  // 32px
  xl: 6,  // 48px
  xxl: 8  // 64px
};
```

### Responsive Breakpoints

Mobile-first breakpoint system:

```tsx
const breakpoints = {
  xs: 0,      // Mobile
  sm: 600,    // Small tablet
  md: 900,    // Large tablet
  lg: 1200,   // Desktop
  xl: 1536    // Large desktop
};
```

### Grid Ratios

Predefined content ratios for consistent layouts:

```tsx
const ratios = {
  '40-60': { text: 4.8, media: 7.2 },
  '50-50': { text: 6.0, media: 6.0 },
  '60-40': { text: 7.2, media: 4.8 }
};
```

## 🚀 Quick Start

### Basic Setup

1. **Install Dependencies**
```bash
npm install @mui/material @emotion/react @emotion/styled
```

2. **Basic Page Layout**
```tsx
import { PageLayout, Section, HeroBlock } from '@/components/layout';
import Image from 'next/image';

export default function HomePage() {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <Section backgroundColor="primary.main" minHeight="100vh">
        <HeroBlock
          title="Welcome to Your Site"
          subtitle="Professional layouts made simple"
          backgroundImage="/hero.jpg"
          ImageComponent={Image}
        />
      </Section>
      
      <Section>
        {/* Your content here */}
      </Section>
    </PageLayout>
  );
}
```

### Component Composition

```tsx
import { 
  Section, 
  MediaText, 
  AlternateGrid, 
  SectionWithAccordion 
} from '@/components/layout';

export default function FeaturePage() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="primary.main" minHeight="60vh">
        <HeroBlock {...heroProps} />
      </Section>

      {/* Feature Showcase */}
      <Section>
        <MediaText
          image="/feature-1.jpg"
          ImageComponent={Image}
          message={<FeatureContent />}
          textSplit={{ preset: '60-40' }}
        />
      </Section>

      {/* Benefits Grid */}
      <Section backgroundColor="background.paper">
        <AlternateGrid
          header="Key Benefits"
          blocks={benefitCards}
          breakpoint="md"
        />
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionWithAccordion
          title="Frequently Asked Questions"
          items={faqItems}
        />
      </Section>
    </>
  );
}
```

## 📱 Responsive Design

### Mobile-First Approach

All components default to mobile-optimized layouts:

```tsx
// Automatic mobile stacking
<MediaText
  image="/feature.jpg"
  ImageComponent={Image}
  message={content}
  // Desktop: side-by-side
  // Mobile: image top, text bottom
/>
```

### Responsive Configuration

Components support responsive prop values:

```tsx
<AlternateGrid
  rowSpacing={{ xs: 2, md: 4, lg: 6 }}
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  breakpoint="md"
/>
```

### Grid Behavior

- **Mobile (xs)**: Single column, vertical stacking
- **Tablet (sm/md)**: Configurable two-column layouts
- **Desktop (lg+)**: Full grid functionality with alternation

## ⚡ Performance

### Optimization Features

#### **Lazy Loading**
```tsx
// Images automatically lazy load with Next.js
<MediaText
  image="/large-image.jpg"
  ImageComponent={Image} // Next.js optimization
/>
```

#### **Memoization**
```tsx
// Grid calculations are memoized
const pairs = React.useMemo(() => 
  chunkPairs(blocks), [blocks]
);
```

#### **Efficient Rendering**
- Minimal DOM manipulation
- CSS-based responsive behavior
- Optimized re-render cycles

### Bundle Size

- **Tree-shakeable**: Import only what you need
- **Zero dependencies**: Beyond React and Material-UI
- **Minimal runtime**: Efficient component implementations

## 🔧 Configuration

### Theme Integration

```tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8, // 8px base unit
});
```

### Custom Ratios

```tsx
// Use custom decimal ratios
<MediaText
  textSplit={{ decimal: 0.65 }} // 65% text, 35% media
  image="/custom-layout.jpg"
  message={content}
/>
```

### Background Overlays

```tsx
<Section
  backgroundImage="/section-bg.jpg"
  ImageComponent={Image}
  overlay={{ 
    opacity: 0.6, 
    color: 'rgba(0, 0, 0, 0.4)' 
  }}
>
  <Content />
</Section>
```

## 📚 Examples

### Landing Page Layout

```tsx
function LandingPage() {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      {/* Hero Section */}
      <Section backgroundColor="primary.main" minHeight="100vh">
        <HeroBlock
          title="Transform Your Business"
          subtitle="Professional solutions for modern challenges"
          backgroundImage="/hero-bg.jpg"
          ImageComponent={Image}
        />
      </Section>

      {/* Features Section */}
      <Section>
        <AlternateGrid
          header="Why Choose Us"
          blocks={[
            <FeatureCard icon={<FastIcon />} title="Lightning Fast" />,
            <FeatureCard icon={<SecureIcon />} title="Bank-Level Security" />,
            <FeatureCard icon={<ScaleIcon />} title="Infinite Scale" />,
            <FeatureCard icon={<SupportIcon />} title="24/7 Support" />
          ]}
        />
      </Section>

      {/* Product Demo */}
      <Section backgroundColor="background.paper">
        <MediaText
          video="dQw4w9WgXcQ" // YouTube video ID
          ImageComponent={Image}
          message={
            <Box>
              <Typography variant="h3">See It In Action</Typography>
              <Typography>Watch our product demo...</Typography>
            </Box>
          }
          textSplit={{ preset: '50-50' }}
        />
      </Section>
    </PageLayout>
  );
}
```

### Documentation Site

```tsx
function DocsPage() {
  return (
    <PageLayout maxWidth="lg">
      <Section>
        <MediaText
          image="/docs-hero.jpg"
          ImageComponent={Image}
          message={
            <Box>
              <Typography variant="h2">Complete Documentation</Typography>
              <Typography>Everything you need to get started</Typography>
            </Box>
          }
          textSplit={{ preset: '60-40' }}
        />
      </Section>

      <Section>
        <SectionWithAccordion
          title="Getting Started"
          items={[
            {
              title: "Installation",
              content: <InstallationGuide />
            },
            {
              title: "Configuration", 
              content: <ConfigurationGuide />
            },
            {
              title: "First Steps",
              content: <FirstStepsGuide />
            }
          ]}
        />
      </Section>
    </PageLayout>
  );
}
```

## 🛠️ Development

### File Structure

```
src/components/layout/
├── grids/
│   ├── AlternateGrid.tsx       # Zig-zag grid layouts
│   ├── GridElement.tsx         # Individual grid items
│   └── index.ts               # Grid system exports
├── sections/
│   ├── HeroBlock/
│   │   ├── HeroBlock.tsx      # Hero section component
│   │   └── index.ts           # Hero exports
│   ├── MediaText/
│   │   ├── MediaText.tsx      # Media-text layouts
│   │   └── index.ts           # MediaText exports
│   └── SectionWithAccordion/
│       ├── SectionWithAccordion.tsx
│       └── index.ts
├── BackgroundBox.tsx          # Background utility
├── PageLayout.tsx             # Main page structure
├── Pad.tsx                   # Spacing utility  
├── Section.tsx               # Section wrapper
└── index.tsx                 # Main exports
```

### Contributing

1. **Code Style**: Follow TypeScript and React best practices
2. **Documentation**: Update JSDoc comments for all public APIs
3. **Testing**: Ensure responsive behavior across breakpoints
4. **Performance**: Profile components for optimization opportunities

### Build Commands

```bash
# Development build
npm run dev

# Production build
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 📞 Support

For questions, issues, or contributions:

- **Documentation**: Check component JSDoc comments
- **Examples**: See `/examples` directory
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions

---

**Built with ❤️ by MCPAB Web Blocks Team**

*Professional React layout components for modern web applications*