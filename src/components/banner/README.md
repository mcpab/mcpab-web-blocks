# Banner Components

A comprehensive collection of hero banner and carousel components designed for modern web applications. These components provide flexible, accessible, and performant solutions for creating compelling hero sections, product showcases, and marketing banners.

## 🌟 Overview

The banner component library includes:

- **[BannerStatic](#bannerstatic)** - Single background image heroes
- **[BannerCarousel](#bannercarousel)** - Multi-image carousel heroes  
- **[BlockCarousel](#blockcarousel)** - Core carousel engine with transitions
- **[DynamicTransition](#dynamictransition)** - Advanced frame transition controller
- **[MainTitle](#maintitle)** - Semantic multi-line headings

## 📦 Quick Start

```tsx
import { BannerStatic, BannerCarousel, MainTitle } from '@/src/components/banner';

// Static hero with single background
function StaticHero() {
  return (
    <BannerStatic 
      image={{ src: '/hero.jpg', alt: 'Hero background' }}
      size="standard"
    >
      <MainTitle
        blocks={[
          { title: "Welcome to Our Platform", type: "primary" },
          { title: "Innovative solutions for modern challenges", type: "secondary" },
        ]}
      />
    </BannerStatic>
  );
}

// Carousel hero with rotating backgrounds
function CarouselHero() {
  return (
    <BannerCarousel
      images={{
        slides: [
          { src: '/hero1.jpg', alt: 'Hero 1' },
          { src: '/hero2.jpg', alt: 'Hero 2' },
          { src: '/hero3.jpg', alt: 'Hero 3' },
        ],
        autoPlay: true,
        interval: 5000,
      }}
      size="large"
    >
      <MainTitle
        blocks={[
          { title: "Dynamic Experience", type: "primary" },
          { title: "Showcasing excellence through visuals", type: "secondary" },
        ]}
      />
    </BannerCarousel>
  );
}
```

## 🎯 Component Guide

### BannerStatic

Perfect for single-image heroes with optimal performance and simplicity.

**When to use:**
- Landing pages with hero images
- Product showcases  
- About page headers
- Simple announcements

**Key Features:**
- Single image optimization
- Fast loading with Next.js integration
- Responsive container management
- Overlay content positioning

```tsx
import BannerStatic from '@/src/components/banner/BannerStatic';

// Basic usage
<BannerStatic
  image={{
    src: '/hero.jpg',
    alt: 'Hero background',
    priority: true, // For above-the-fold images
  }}
  size="standard"
  boxProps={{ id: 'main-hero' }}
>
  <YourHeroContent />
</BannerStatic>

// Advanced configuration
<BannerStatic
  image={{
    src: '/product-hero.jpg',
    alt: 'Product showcase',
    overlay: 'rgba(0,0,0,0.4)', // Dark overlay for text contrast
    position: 'center top',
    quality: 90,
  }}
  size="large"
  boxProps={{
    sx: {
      '& .MuiContainer-root': {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        pb: 8,
      }
    }
  }}
>
  <CustomProductInfo />
</BannerStatic>
```

### BannerCarousel

Dynamic carousel banners with smooth transitions and accessibility features.

**When to use:**
- Marketing campaigns with multiple visuals
- Product galleries
- Brand storytelling
- Portfolio showcases

**Key Features:**
- Smooth image transitions
- Accessibility compliance (WCAG 2.2.2)
- Reduced motion support
- Configurable timing and effects

```tsx
import BannerCarousel from '@/src/components/banner/BannerCarousel';

// Marketing carousel
<BannerCarousel
  images={{
    slides: [
      { 
        src: '/marketing1.jpg', 
        alt: 'Innovation',
        caption: 'Revolutionary Design'
      },
      { 
        src: '/marketing2.jpg', 
        alt: 'Excellence',
        caption: 'Proven Results'
      },
    ],
    autoPlay: true,
    interval: 6000,
    pauseOnHover: true,
    showIndicators: true,
  }}
  size="large"
  id="marketing-hero"
>
  <Container maxWidth="md">
    <Stack spacing={3} alignItems="center">
      <Typography variant="h1" color="white">
        Next-Generation Solutions
      </Typography>
      <Typography variant="h5" color="grey.200">
        Empowering businesses with cutting-edge technology
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Start Free Trial</Button>
        <Button variant="outlined" color="inherit">Watch Demo</Button>
      </Stack>
    </Stack>
  </Container>
</BannerCarousel>
```

### BlockCarousel

Core carousel engine with Next.js optimization and advanced transition control.

**When to use:**
- Custom carousel implementations
- Direct carousel control needed
- Performance-critical applications
- Complex overlay layouts

**Key Features:**
- Next.js StaticImageData support
- GPU-accelerated transitions
- Intelligent preloading
- Custom container layouts

```tsx
import BlockCarousel from '@/src/components/banner/BlockCarousel';
import hero1 from '/public/hero-1.jpg'; // Next.js StaticImageData

// Next.js optimized carousel
const carouselConfig = {
  images: [
    { 
      image: hero1, // StaticImageData for optimization
      objectPosition: 'center top',
    },
    { 
      image: '/api/dynamic-hero.jpg', // Dynamic URL
      transform: 'scale(1.05)',
    },
  ],
  interval: 5000,
  transitionDuration: 1000,
  overlayColor: 'rgba(0,0,0,0.3)',
  preloadFirst: 2, // Preload first 2 images
};

<BlockCarousel 
  config={carouselConfig}
  containerProps={{ maxWidth: 'lg' }}
>
  <YourOverlayContent />
</BlockCarousel>
```

### DynamicTransition

Low-level transition controller for custom carousel implementations.

**When to use:**
- Custom transition effects
- Non-image content carousels
- Advanced animation control
- Performance-critical transitions

**Key Features:**
- Smooth fade transitions
- Frame management optimization
- Memory leak prevention
- Custom content support

```tsx
import DynamicTransition from '@/src/components/banner/DynamicTransition';

// Custom content carousel
const frames = [
  <CustomSlide1 key="slide1" />,
  <CustomSlide2 key="slide2" />,
  <CustomSlide3 key="slide3" />,
];

<DynamicTransition
  frames={frames}
  interval={5000}
  transitionDuration={1000}
  boxProps={{
    sx: { borderRadius: 2, overflow: 'hidden' }
  }}
/>
```

### MainTitle

Semantic multi-line headings with automatic text processing.

**When to use:**
- Hero banner headings
- Multi-line titles
- Marketing headlines
- Product announcements

**Key Features:**
- Semantic HTML structure (h1, h2)
- Automatic text capitalization
- Email address preservation
- Flexible styling options

```tsx
import MainTitle from '@/src/components/banner/MainTitle';

// Basic multi-line heading
<MainTitle
  blocks={[
    {
      title: "welcome to the future",
      type: "primary", // → h1
      titleProps: {
        sx: { fontSize: { xs: '2rem', md: '4rem' } }
      }
    },
    {
      title: "innovative solutions for modern challenges",
      type: "secondary", // → h2
      titleProps: {
        color: "text.secondary",
        sx: { maxWidth: 600 }
      }
    },
  ]}
  slotProps={{
    stack: { spacing: 4, alignItems: 'center' }
  }}
/>

// Complex content with React nodes
<MainTitle
  blocks={[
    {
      title: (
        <Stack direction="row" spacing={2} alignItems="center">
          <Chip label="New" color="primary" />
          <span>iPhone 15 Pro</span>
          <VerifiedIcon sx={{ color: 'success.main' }} />
        </Stack>
      ),
      type: "primary",
    },
    {
      title: "Contact us at support@company.com", // Email preserved
      type: "secondary",
    },
  ]}
/>
```

## 🎨 Design Patterns

### Landing Page Hero

```tsx
function LandingPageHero() {
  return (
    <BannerStatic
      image={{
        src: '/landing-hero.jpg',
        alt: 'Modern workspace',
        priority: true,
        overlay: 'rgba(0,0,0,0.4)',
      }}
      size="large"
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <MainTitle
            blocks={[
              {
                title: "transform your business",
                type: "primary",
                titleProps: {
                  sx: {
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    color: 'white',
                  }
                }
              },
              {
                title: "Join thousands of companies already using our platform",
                type: "secondary",
                titleProps: {
                  sx: {
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: 'grey.300',
                    maxWidth: 600,
                  }
                }
              },
            ]}
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">
              Get Started Free
            </Button>
            <Button variant="outlined" size="large" sx={{ color: 'white' }}>
              Watch Demo
            </Button>
          </Stack>
        </Stack>
      </Container>
    </BannerStatic>
  );
}
```

### E-commerce Product Showcase

```tsx
import product1 from '/public/products/hero-1.jpg';
import product2 from '/public/products/hero-2.jpg';

function ProductShowcase() {
  return (
    <BannerCarousel
      images={{
        slides: [
          { 
            image: product1,
            objectPosition: 'center center',
          },
          { 
            image: product2,
            objectPosition: 'right center',
            transform: 'scale(1.03)',
          },
        ],
        interval: 4000,
        transitionDuration: 1200,
        preloadFirst: 2,
      }}
      size="standard"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <MainTitle
              blocks={[
                {
                  title: "summer collection 2024",
                  type: "primary",
                  titleProps: {
                    sx: {
                      fontFamily: 'serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      color: 'white',
                    }
                  }
                },
                {
                  title: "Discover our latest designs crafted for modern living",
                  type: "secondary",
                  titleProps: {
                    sx: {
                      color: 'grey.300',
                      maxWidth: 500,
                    }
                  }
                },
              ]}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained">Shop Now</Button>
              <Button variant="outlined" sx={{ color: 'white' }}>
                View Collection
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
            }}>
              <Typography variant="h3" color="primary">
                $299.99
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Limited time offer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BannerCarousel>
  );
}
```

### Company About Hero

```tsx
function AboutHero() {
  return (
    <BannerStatic
      image={{
        src: '/about/team-photo.jpg',
        alt: 'Our diverse team working together',
        position: 'center top',
        overlay: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
      }}
      size="standard"
      boxProps={{
        sx: {
          '& .MuiContainer-root': {
            alignItems: 'flex-start',
            pt: 8,
          }
        }
      }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <MainTitle
          blocks={[
            {
              title: "building the future together",
              type: "primary",
              titleProps: {
                sx: {
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 600,
                  color: 'white',
                  mb: 3,
                }
              }
            },
            {
              title: "We're a passionate team of innovators, designers, and engineers committed to creating technology that makes a difference.",
              type: "secondary",
              titleProps: {
                sx: {
                  color: 'grey.300',
                  lineHeight: 1.6,
                  fontSize: '1.125rem',
                  mb: 4,
                }
              }
            },
          ]}
        />
        <Button variant="contained" size="large">
          Meet Our Team
        </Button>
      </Box>
    </BannerStatic>
  );
}
```

## 🔧 Size Configuration

All banner components support consistent size presets:

```tsx
// Size options with typical use cases
size="micro"      // Compact announcements (420px min)
size="standard"   // Default heroes (35vh, 420-600px range)
size="compact"    // Medium sections (balanced height)
size="large"      // Full hero experience (50vh+)
size="extraLarge" // Maximum impact (60vh+)
```

## ♿ Accessibility

### Heading Hierarchy

```tsx
// ✅ Correct: One primary (h1) with supporting secondary (h2) lines
<MainTitle
  blocks={[
    { title: "Main Page Heading", type: "primary" },    // h1
    { title: "Supporting Information", type: "secondary" }, // h2
    { title: "Additional Details", type: "secondary" },     // h2
  ]}
/>

// ❌ Avoid: Multiple primary headings
<MainTitle
  blocks={[
    { title: "First Heading", type: "primary" },   // h1
    { title: "Second Heading", type: "primary" },  // h1 - problematic
  ]}
/>
```

### Motion Preferences

```tsx
// Respect user motion preferences
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

<BannerCarousel
  images={{
    slides: [...],
    interval: prefersReducedMotion ? 10000 : 5000, // Longer intervals
    pauseOnHover: true,
    pauseOnFocus: true,
  }}
/>
```

### Color Contrast

```tsx
// Ensure sufficient contrast
<BannerStatic
  image={{
    src: '/hero.jpg',
    alt: 'Hero background',
    overlay: 'rgba(0,0,0,0.6)', // Dark overlay for text contrast
  }}
>
  <Typography variant="h1" sx={{ color: 'white' }}>
    High Contrast Text
  </Typography>
</BannerStatic>
```

## 🚀 Performance Tips

### Next.js Image Optimization

```tsx
// Use StaticImageData for best performance
import heroImage from '/public/hero.jpg';

<BlockCarousel
  config={{
    images: [
      {
        image: heroImage, // Optimized with Next.js
        priority: true,   // Preload for LCP
      }
    ],
    preloadFirst: 2, // Preload first 2 images
  }}
/>
```

### Responsive Images

```tsx
// Configure responsive sizing
const imageConfig = {
  src: '/hero.jpg',
  alt: 'Hero background',
  sizes: '100vw',
  quality: 85,
  priority: true, // For above-the-fold content
};
```

### Memory Management

```tsx
// Use useMemo for stable frame arrays
const frames = useMemo(() => [
  <BackgroundBox key="1" imageConf={...} />,
  <BackgroundBox key="2" imageConf={...} />,
], []);

<DynamicTransition frames={frames} />
```

## 🎭 Theming

### Custom Typography

```tsx
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
});
```

### Component Overrides

```tsx
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      },
    },
  },
});
```

## 📱 Responsive Design

### Breakpoint Strategy

```tsx
<MainTitle
  blocks={[
    {
      title: "responsive heading",
      type: "primary",
      titleProps: {
        sx: {
          fontSize: {
            xs: '2rem',    // Mobile
            sm: '2.5rem',  // Tablet
            md: '3.5rem',  // Desktop
            lg: '4.5rem',  // Large screens
          }
        }
      }
    }
  ]}
/>
```

### Container Management

```tsx
<BannerStatic
  boxProps={{
    sx: {
      '& .MuiContainer-root': {
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
      }
    }
  }}
>
  <ResponsiveContent />
</BannerStatic>
```

## 🧪 Testing

### Unit Testing

```tsx
import { render, screen } from '@testing-library/react';
import { MainTitle } from '@/src/components/banner';

test('renders semantic heading structure', () => {
  render(
    <MainTitle
      blocks={[
        { title: "Main Heading", type: "primary" },
        { title: "Sub Heading", type: "secondary" },
      ]}
    />
  );
  
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Heading');
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sub Heading');
});
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('banner components are accessible', async () => {
  const { container } = render(<YourBannerComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📚 Related Components

- **[Section](../Section.tsx)** - Layout container for consistent heights
- **[BackgroundBox](../layout/BackgroundBox.tsx)** - Background image handling
- **[Title Components](../typography/Title.tsx)** - Semantic heading wrappers

## 🔗 External Dependencies

- `@mui/material` - UI components and theming
- `next/image` - Image optimization (when using StaticImageData)
- React 18+ - Modern React features and hooks

## 📄 License

Part of the mcpab-web-blocks component library.