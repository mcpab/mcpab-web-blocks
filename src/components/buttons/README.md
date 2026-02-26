# Button Components

A comprehensive collection of specialized button components designed for modern React applications. These components provide consistent styling, accessibility compliance, and enhanced user experience across various interaction patterns and use cases.

## 🌟 Overview

The button component library includes:

- **[ActionButton](#actionbutton)** - Semantic action button with external link handling
- **[GetInTouch](#getintouch)** - Standardized contact call-to-action
- **[CallToActionButton](#calltoactionbutton)** - Primary conversion buttons with loading states
- **[DownloadButton](#downloadbutton)** - File downloads with progress tracking
- **[SocialButton](#socialbutton)** - Multi-platform social media integration
- **[BackButton](#backbutton)** - Framework-agnostic navigation back button
- **[ShareButton](#sharebutton)** - Web Share API with progressive fallbacks
- **[SubscribeButton](#subscribebutton)** - Email subscription with validation
- **[BookingButton](#bookingbutton)** - Appointment and consultation scheduling
- **[WhatsAppButton](#whatsappbutton)** - Direct WhatsApp messaging
- **[FavoriteButton](#favoritebutton)** - Toggle favorite/bookmark with animations
- **[CopyButton](#copybutton)** - Copy to clipboard with feedback

## 📦 Quick Start

```tsx
import { 
  ActionButton, 
  CallToActionButton, 
  SocialButton,
  BackButton,
  RouterProvider 
} from '@/src/components/buttons';

// Basic usage
function QuickExample() {
  return (
    <Stack spacing={2} direction="row">
      <CallToActionButton 
        onClick={handleSignUp}
        variant="contained"
        size="large"
      >
        Get Started
      </CallToActionButton>
      
      <ActionButton 
        href="/contact"
        icon={<ContactIcon />}
        variant="outlined"
      >
        Contact Us
      </ActionButton>
      
      <SocialButton 
        platform="linkedin"
        href="https://linkedin.com/company/example"
        iconOnly
      />
    </Stack>
  );
}
```

## 🎯 Component Guide

## 🧩 Ladle Stories

Each component has a colocated Ladle story in this folder (e.g. `ActionButton.stories.tsx`).
Run Ladle at the workspace level and browse the “buttons” stories to review styling and
interactive states.

### ActionButton

Foundation button for semantic actions with automatic external link handling.

**When to use:**
- Call-to-action buttons with links
- Navigation buttons (internal/external)
- Contact and social links
- Download triggers

**Key Features:**
- Automatic external link security (target="_blank", rel="noopener noreferrer")
- Icon placement with Material-UI patterns
- Full Material-UI Button API compatibility
- TypeScript support with proper validation

```tsx
import { ActionButton } from '@/components/buttons';

// External link with security
<ActionButton 
  href="https://docs.example.com"
  icon={<LaunchIcon />}
  variant="contained"
>
  View Documentation
</ActionButton>

// Internal navigation
<ActionButton 
  href="/pricing"
  icon={<PriceCheckIcon />}
  variant="outlined"
>
  View Pricing
</ActionButton>

// Email contact
<ActionButton 
  href="mailto:support@company.com"
  icon={<EmailIcon />}
  variant="text"
>
  Email Support
</ActionButton>
```

### GetInTouch

Pre-configured contact button for consistent contact actions across the application.

**When to use:**
- Header navigation contact links
- Footer contact sections
- Secondary call-to-action placement
- Mobile contact triggers

**Key Features:**
- Zero configuration with optimized defaults
- Consistent phone icon and small sizing
- Pre-configured for "/contact" route
- Optimized for secondary action contexts

```tsx
import { GetInTouch } from '@/components/buttons';

// Header navigation
<AppBar>
  <Toolbar>
    <Logo />
    <Box sx={{ flexGrow: 1 }} />
    <GetInTouch />
  </Toolbar>
</AppBar>

// Footer integration
<Footer>
  <Grid container spacing={4}>
    <Grid item xs={12} md={3}>
      <Typography variant="h6">Contact</Typography>
      <GetInTouch />
    </Grid>
  </Grid>
</Footer>
```

### CallToActionButton

High-conversion primary action button with loading states and success feedback.

**When to use:**
- Primary conversion actions ("Start Free Trial", "Buy Now")
- Form submissions with async processing
- Registration and onboarding flows
- Newsletter subscriptions

**Key Features:**
- Built-in loading states with progress indicators
- Success feedback with checkmark animations
- Conversion optimization with large touch targets
- Error state handling with visual feedback

```tsx
import { CallToActionButton } from '@/components/buttons';

// Newsletter signup with feedback
const [isSubscribing, setIsSubscribing] = useState(false);
const [subscribed, setSubscribed] = useState(false);

<CallToActionButton
  onClick={handleSubscribe}
  loading={isSubscribing}
  success={subscribed}
  loadingText="Subscribing..."
  successText="Welcome aboard!"
  variant="contained"
  size="large"
  fullWidth
>
  Subscribe to Updates
</CallToActionButton>

// E-commerce checkout
<CallToActionButton
  onClick={handleCheckout}
  loading={processingPayment}
  success={paymentComplete}
  startIcon={<CreditCardIcon />}
  variant="contained"
  color="success"
  disabled={cartIsEmpty}
>
  Complete Purchase
</CallToActionButton>
```

### DownloadButton

File download button with metadata display and progress tracking.

**When to use:**
- PDF brochures and documentation
- Software application downloads
- Media file downloads
- Report exports and data downloads

**Key Features:**
- File size display for download planning
- File type detection with appropriate icons
- Download progress tracking (optional)
- Success confirmation feedback

```tsx
import { DownloadButton } from '@/components/buttons';

// Document download
<DownloadButton
  href="/files/product-guide.pdf"
  fileName="Product Guide"
  fileSize="3.2 MB"
  variant="contained"
>
  Download Guide
</DownloadButton>

// Software download with progress
<DownloadButton
  href="https://releases.app.com/installer.dmg"
  fileName="App Installer"
  fileSize="45.2 MB"
  fileType="app"
  showProgress
  onDownloadStart={() => analytics.track('app_download')}
>
  Download App
</DownloadButton>
```

### SocialButton

Multi-platform social media button with authentic brand styling.

**When to use:**
- Social media profile links
- Content sharing buttons
- Team member social profiles
- Follow/connect actions

**Key Features:**
- Authentic brand colors for each platform
- Platform-specific icons and styling
- Icon-only mode for compact layouts
- Support for LinkedIn, Twitter, Facebook, Instagram, GitHub, etc.

```tsx
import { SocialButton } from '@/components/buttons';

// Social media footer
<Stack direction="row" spacing={2}>
  <SocialButton 
    platform="linkedin" 
    href="https://linkedin.com/company/example"
  >
    Follow on LinkedIn
  </SocialButton>
  <SocialButton 
    platform="twitter" 
    href="https://twitter.com/example"
  >
    Follow on Twitter
  </SocialButton>
</Stack>

// Compact social toolbar
<Stack direction="row" spacing={1}>
  {['linkedin', 'twitter', 'github'].map(platform => (
    <SocialButton
      key={platform}
      platform={platform}
      href={`https://${platform}.com/example`}
      iconOnly
      size="small"
    />
  ))}
</Stack>
```

### BackButton

Framework-agnostic navigation back button with intelligent routing.

**When to use:**
- Multi-step form navigation
- Detail page back navigation
- Modal and drawer close actions
- Breadcrumb navigation

**Key Features:**
- Works with Next.js, React Router, or browser history
- Dependency injection pattern with RouterProvider
- Multiple fallback strategies
- Custom navigation handlers

```tsx
import { BackButton, RouterProvider } from '@/components/buttons';

// Next.js integration
import { useRouter } from 'next/navigation';

function App() {
  const nextRouter = useRouter();
  const router = {
    back: () => nextRouter.back(),
    push: (path: string) => nextRouter.push(path)
  };
  
  return (
    <RouterProvider router={router}>
      <BackButton fallbackHref="/products">
        Back to Products
      </BackButton>
    </RouterProvider>
  );
}

// Standalone usage (browser history)
<BackButton fallbackHref="/home">
  Back
</BackButton>

// Custom navigation logic
<BackButton 
  onBack={() => {
    if (formIsDirty) {
      showConfirmDialog();
    } else {
      navigateBack();
    }
  }}
>
  Cancel
</BackButton>
```

### ShareButton

Web Share API button with progressive fallback to social platforms.

**When to use:**
- Article and blog post sharing
- Product page social sharing
- Event announcements
- User-generated content sharing

**Key Features:**
- Native Web Share API for mobile devices
- Fallback to social platform URLs
- Copy-to-clipboard as ultimate fallback
- Success feedback with platform detection

```tsx
import { ShareButton } from '@/components/buttons';

// Article sharing
<ShareButton
  url={`https://blog.example.com/posts/${postId}`}
  title={post.title}
  text={post.excerpt}
  onShare={(success, platform) => {
    analytics.track('post_shared', { postId, platform });
  }}
>
  Share Article
</ShareButton>

// Product sharing with custom platforms
<ShareButton
  url={product.url}
  title={`Check out ${product.name}`}
  text={product.description}
  fallbackPlatforms={['twitter', 'facebook', 'copy']}
  variant="contained"
>
  Share Product
</ShareButton>
```

### SubscribeButton

Email subscription button with validation and success feedback.

**When to use:**
- Newsletter signup forms
- Email marketing campaigns
- Product update notifications
- Lead generation forms

**Key Features:**
- Email validation with real-time feedback
- Inline form with email input
- Loading states during subscription
- Success/error feedback with messaging

```tsx
import { SubscribeButton } from '@/components/buttons';

// Newsletter signup
<SubscribeButton
  onSubscribe={async (email) => {
    const result = await subscribeToNewsletter(email);
    return result.success;
  }}
  placeholder="Enter your email"
  successMessage="Thanks! Check your inbox."
  variant="contained"
>
  Subscribe
</SubscribeButton>

// Simple subscription button
<SubscribeButton
  onSubscribe={handleSubscribe}
  showInlineForm={false}
  variant="outlined"
>
  Get Updates
</SubscribeButton>
```

### BookingButton

Appointment and consultation booking button.

**When to use:**
- Service booking (consultations, appointments)
- Calendar integration triggers
- Professional service scheduling
- Event registration

```tsx
import { BookingButton } from '@/components/buttons';

// Consultation booking
<BookingButton
  bookingUrl="/book-consultation"
  serviceType="consultation"
  duration="30 minutes"
  variant="contained"
>
  Book Free Consultation
</BookingButton>

// External calendar integration
<BookingButton
  bookingUrl="https://calendly.com/example/meeting"
  variant="outlined"
>
  Schedule Meeting
</BookingButton>
```

### WhatsAppButton

Direct WhatsApp messaging with pre-filled messages.

**When to use:**
- Customer support chat triggers
- Sales inquiry buttons
- Mobile-first contact options
- International business communication

**Key Features:**
- International phone number formatting
- Pre-filled message support
- WhatsApp brand styling
- Mobile-optimized interactions

```tsx
import { WhatsAppButton } from '@/components/buttons';

// Customer support
<WhatsAppButton
  phone="+1234567890"
  message="Hi, I need help with my order"
  countryCode="1"
  variant="contained"
>
  Chat with Support
</WhatsAppButton>

// Fixed mobile chat button
<WhatsAppButton
  phone="+1234567890"
  message="Hi, I'm interested in your services"
  sx={{
    position: 'fixed',
    bottom: 20,
    right: 20,
    borderRadius: '50%',
    minWidth: 60,
    height: 60
  }}
  iconOnly
/>
```

### FavoriteButton

Toggle favorite/bookmark button with state management.

**When to use:**
- Content favoriting (articles, products)
- Bookmark functionality
- Like/unlike interactions
- Wishlist management

**Key Features:**
- Multiple favorite types (heart, bookmark, like)
- Smooth hover and click animations
- State persistence with callbacks
- Tooltip support with custom messages

```tsx
import { FavoriteButton } from '@/components/buttons';

// Product favoriting
<FavoriteButton
  isFavorited={product.isFavorited}
  onToggle={(isFavorited) => {
    updateProductFavorite(product.id, isFavorited);
  }}
  itemId={product.id}
  favoriteType="heart"
/>

// Bookmark functionality
<FavoriteButton
  isFavorited={isBookmarked}
  onToggle={handleBookmark}
  favoriteType="bookmark"
  tooltipText={{
    favorited: "Remove from reading list",
    unfavorited: "Add to reading list"
  }}
/>
```

### CopyButton

Copy to clipboard button with visual feedback.

**When to use:**
- Share links and URLs
- Code snippets and API keys
- Reference numbers and IDs
- Contact information

**Key Features:**
- Modern Clipboard API with fallbacks
- Visual feedback with checkmark animation
- Tooltip support for long text
- Icon-only mode for compact layouts

```tsx
import { CopyButton } from '@/components/buttons';

// URL sharing
<CopyButton
  text={window.location.href}
  successMessage="Link copied!"
  variant="outlined"
>
  Copy Link
</CopyButton>

// API key copying
<CopyButton
  text={apiKey}
  iconOnly
  showTooltip
  onCopy={(success) => {
    if (success) {
      analytics.track('api_key_copied');
    }
  }}
/>

// Code snippet with custom styling
<CopyButton
  text={codeSnippet}
  variant="text"
  sx={{ 
    fontFamily: 'monospace',
    fontSize: '0.875rem' 
  }}
>
  Copy Code
</CopyButton>
```

## 🎨 Design Patterns

### Landing Page Actions

```tsx
function LandingPageHero() {
  return (
    <Container>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h1">
          Transform Your Business
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Get started with our professional platform
        </Typography>
        
        {/* Primary and secondary actions */}
        <Stack direction="row" spacing={2}>
          <CallToActionButton
            onClick={handleStartTrial}
            variant="contained"
            size="large"
          >
            Start Free Trial
          </CallToActionButton>
          
          <ActionButton
            href="/demo"
            icon={<PlayArrowIcon />}
            variant="outlined"
            size="large"
          >
            Watch Demo
          </ActionButton>
        </Stack>
        
        {/* Social proof */}
        <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Follow us:
          </Typography>
          {['linkedin', 'twitter', 'github'].map(platform => (
            <SocialButton
              key={platform}
              platform={platform}
              href={`https://${platform}.com/company`}
              iconOnly
              size="small"
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
```

### Product Page Actions

```tsx
function ProductActions() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Premium Plan</Typography>
        <Typography variant="h3" color="primary">
          $29/month
        </Typography>
      </CardContent>
      
      <CardActions sx={{ flexDirection: 'column', gap: 2, p: 3 }}>
        {/* Primary conversion */}
        <CallToActionButton
          onClick={handlePurchase}
          variant="contained"
          size="large"
          fullWidth
          loading={isProcessing}
        >
          Start Premium Plan
        </CallToActionButton>
        
        {/* Secondary actions */}
        <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
          <BookingButton
            bookingUrl="/book-demo"
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
          >
            Book Demo
          </BookingButton>
          
          <ShareButton
            url={product.url}
            title={product.name}
            text={product.description}
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
          >
            Share
          </ShareButton>
          
          <FavoriteButton
            isFavorited={product.isFavorited}
            onToggle={handleFavorite}
            itemId={product.id}
          />
        </Stack>
      </CardActions>
    </Card>
  );
}
```

### Navigation Patterns

```tsx
// App-wide router setup for BackButton
import { useRouter } from 'next/navigation';
import { RouterProvider } from '@/components/buttons';

function RootLayout({ children }) {
  const nextRouter = useRouter();
  const router = {
    back: () => nextRouter.back(),
    push: (path: string) => nextRouter.push(path)
  };
  
  return (
    <RouterProvider router={router}>
      <AppShell>
        {children}
      </AppShell>
    </RouterProvider>
  );
}

// Page with navigation
function ProductDetailPage() {
  return (
    <Container>
      {/* Breadcrumb navigation */}
      <Box sx={{ mb: 3 }}>
        <BackButton 
          fallbackHref="/products"
          variant="text"
          size="small"
        >
          Back to Products
        </BackButton>
      </Box>
      
      {/* Product content */}
      <ProductDetails />
    </Container>
  );
}
```

### Contact and Support

```tsx
function ContactSection() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      
      <Typography variant="body1" paragraph>
        Ready to start your project? We're here to help.
      </Typography>
      
      {/* Multiple contact options */}
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <GetInTouch />
          
          <ActionButton
            href="mailto:hello@company.com"
            icon={<EmailIcon />}
            variant="outlined"
          >
            Email Us
          </ActionButton>
        </Stack>
        
        {/* Mobile-first WhatsApp */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <WhatsAppButton
            phone="+1234567890"
            message="Hi, I'm interested in your services"
            variant="contained"
            fullWidth
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </Box>
        
        {/* Newsletter signup */}
        <Divider />
        
        <Box>
          <Typography variant="h6" gutterBottom>
            Stay Updated
          </Typography>
          <SubscribeButton
            onSubscribe={handleSubscribe}
            placeholder="Your email address"
            variant="contained"
          >
            Subscribe to Newsletter
          </SubscribeButton>
        </Box>
      </Stack>
    </Paper>
  );
}
```

## 🔧 Configuration and Theming

### Theme Integration

```tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Custom button styling
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          },
        },
      },
    },
  },
});
```

### Custom Button Variants

```tsx
// Extend theme with custom variants
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
            },
          },
        },
      ],
    },
  },
});

// Usage with custom variant
<CallToActionButton variant="gradient" size="large">
  Get Started
</CallToActionButton>
```

## ♿ Accessibility

### Screen Reader Support

```tsx
// Proper ARIA labels
<ActionButton 
  href="/contact"
  aria-label="Contact our support team"
>
  Contact
</ActionButton>

// Icon-only buttons need labels
<SocialButton
  platform="linkedin"
  href="https://linkedin.com/company/example"
  iconOnly
  aria-label="Follow us on LinkedIn"
/>

// State descriptions
<FavoriteButton
  isFavorited={isFavorited}
  onToggle={handleToggle}
  aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
/>
```

### Keyboard Navigation

```tsx
// Focus management with proper tab order
<Stack direction="row" spacing={2} role="group" aria-label="Product actions">
  <CallToActionButton onClick={handlePurchase}>
    Buy Now
  </CallToActionButton>
  
  <ShareButton 
    url={product.url}
    title={product.name}
  >
    Share
  </ShareButton>
  
  <FavoriteButton
    isFavorited={product.isFavorited}
    onToggle={handleFavorite}
  />
</Stack>
```

### High Contrast Support

```tsx
// Ensure sufficient contrast ratios
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // WCAG AA compliant
    },
    secondary: {
      main: '#dc004e', // WCAG AA compliant
    },
  },
});
```

## 📱 Responsive Design

### Mobile-First Patterns

```tsx
function ResponsiveActions() {
  return (
    <Box>
      {/* Mobile stack, desktop row */}
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={2}
        sx={{ width: '100%' }}
      >
        <CallToActionButton
          onClick={handleAction}
          size={{ xs: 'large', md: 'medium' }}
          fullWidth={{ xs: true, md: false }}
        >
          Primary Action
        </CallToActionButton>
        
        <ActionButton
          href="/secondary"
          variant="outlined"
          size={{ xs: 'large', md: 'medium' }}
          fullWidth={{ xs: true, md: false }}
        >
          Secondary Action
        </ActionButton>
      </Stack>
      
      {/* Mobile-only WhatsApp */}
      <Box sx={{ 
        display: { xs: 'block', md: 'none' },
        mt: 2 
      }}>
        <WhatsAppButton
          phone="+1234567890"
          message="Hi, I need help"
          fullWidth
        >
          Chat with Us
        </WhatsAppButton>
      </Box>
    </Box>
  );
}
```

### Touch Optimization

```tsx
// Larger touch targets for mobile
<SocialButton
  platform="linkedin"
  href="https://linkedin.com/company/example"
  iconOnly
  sx={{
    minWidth: { xs: 48, md: 40 }, // Larger on mobile
    height: { xs: 48, md: 40 },
    '& .MuiButton-startIcon': {
      margin: 0,
    }
  }}
/>

// Fixed mobile action button
<WhatsAppButton
  phone="+1234567890"
  message="Hi, I need help"
  sx={{
    position: 'fixed',
    bottom: { xs: 20, md: 'auto' },
    right: { xs: 20, md: 'auto' },
    zIndex: 1000,
    display: { xs: 'flex', md: 'none' }, // Mobile only
    borderRadius: '50%',
    minWidth: 56,
    height: 56,
  }}
  iconOnly
/>
```

## 🧪 Testing

### Unit Testing

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CallToActionButton, BackButton, RouterProvider } from '@/components/buttons';

describe('CallToActionButton', () => {
  test('shows loading state', async () => {
    const handleClick = jest.fn().mockResolvedValue(true);
    
    render(
      <CallToActionButton loading>
        Subscribe
      </CallToActionButton>
    );
    
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });
  
  test('shows success state', () => {
    render(
      <CallToActionButton success successText="Subscribed!">
        Subscribe
      </CallToActionButton>
    );
    
    expect(screen.getByText('Subscribed!')).toBeInTheDocument();
    expect(screen.getByTestId('success-icon')).toBeInTheDocument();
  });
});

describe('BackButton', () => {
  test('uses provided router', () => {
    const mockRouter = {
      back: jest.fn(),
      push: jest.fn(),
    };
    
    render(
      <RouterProvider router={mockRouter}>
        <BackButton>Back</BackButton>
      </RouterProvider>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockRouter.back).toHaveBeenCalled();
  });
});
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('button components are accessible', async () => {
  const { container } = render(
    <div>
      <ActionButton href="/test">Action</ActionButton>
      <SocialButton platform="linkedin" href="https://linkedin.com">
        LinkedIn
      </SocialButton>
      <FavoriteButton isFavorited={false} onToggle={() => {}} />
    </div>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Integration Testing

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('subscription flow', async () => {
  const user = userEvent.setup();
  const mockSubscribe = jest.fn().mockResolvedValue(true);
  
  render(
    <SubscribeButton onSubscribe={mockSubscribe}>
      Subscribe
    </SubscribeButton>
  );
  
  // Enter email
  const emailInput = screen.getByPlaceholderText('Enter your email address');
  await user.type(emailInput, 'test@example.com');
  
  // Submit
  const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
  await user.click(subscribeButton);
  
  // Verify subscription
  expect(mockSubscribe).toHaveBeenCalledWith('test@example.com');
  
  // Check success message
  await waitFor(() => {
    expect(screen.getByText('Successfully subscribed!')).toBeInTheDocument();
  });
});
```

## 🚀 Performance Tips

### Code Splitting

```tsx
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const ShareButton = lazy(() => import('@/components/buttons/ShareButton'));
const DownloadButton = lazy(() => import('@/components/buttons/DownloadButton'));

function MyComponent() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Stack spacing={2}>
        <ShareButton url="https://example.com" title="Share this" />
        <DownloadButton href="/file.pdf" fileName="Document" />
      </Stack>
    </Suspense>
  );
}
```

### Bundle Optimization

```tsx
// Import only what you need
import ActionButton from '@/components/buttons/ActionButton';
import { SocialButton } from '@/components/buttons';

// Instead of importing everything
// import * as Buttons from '@/components/buttons'; // ❌ Larger bundle
```

### Memoization

```tsx
import { memo } from 'react';

// Memoize expensive button configurations
const MemoizedSocialButton = memo(SocialButton);

// Use stable references
const socialLinks = useMemo(() => [
  { platform: 'linkedin', href: 'https://linkedin.com/company/example' },
  { platform: 'twitter', href: 'https://twitter.com/example' },
], []);
```

## 📚 Related Components

- **[TouchButton](../styled/TouchButton.tsx)** - Base button with touch optimizations
- **[Spacer](../styled/Spacer.tsx)** - Layout spacing for button groups
- **[StandardStack](../styled/StandardStack.tsx)** - Consistent button layout container

## 🔗 External Dependencies

- `@mui/material` - UI components and theming (required)
- `@mui/icons-material` - Icons for buttons (required)
- `next/navigation` - Next.js routing (optional, for BackButton)
- `react-router-dom` - React Router (optional, for BackButton)

## 📄 Framework Integration

### Next.js Setup

```tsx
// app/layout.tsx
import { useRouter } from 'next/navigation';
import { RouterProvider } from '@/components/buttons';

export default function RootLayout({ children }) {
  const router = useRouter();
  const routerConfig = {
    back: () => router.back(),
    push: (path: string) => router.push(path)
  };
  
  return (
    <html>
      <body>
        <RouterProvider router={routerConfig}>
          {children}
        </RouterProvider>
      </body>
    </html>
  );
}
```

### React Router Setup

```tsx
// App.tsx
import { useNavigate } from 'react-router-dom';
import { RouterProvider } from '@/components/buttons';

function App() {
  const navigate = useNavigate();
  const router = {
    back: () => navigate(-1),
    push: (path: string) => navigate(path)
  };
  
  return (
    <RouterProvider router={router}>
      <Routes>
        {/* Your routes */}
      </Routes>
    </RouterProvider>
  );
}
```

## 📄 License

Part of the mcpab-web-blocks component library.