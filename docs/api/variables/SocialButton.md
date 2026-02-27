[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / SocialButton

# Variable: SocialButton

> `const` **SocialButton**: `React.FC`\<[`SocialButtonProps`](../interfaces/SocialButtonProps.md)\>

Defined in: [src/components/buttons/SocialButton.tsx:343](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/SocialButton.tsx#L343)

SocialButton - Multi-platform social media button with brand styling

A specialized button component that provides authentic social media
integration with platform-specific styling, icons, and accessibility.
Built on ActionButton for consistent behavior and external link safety.

Brand Authenticity:
- Official platform colors and styling
- Authentic icons from Material-UI's social icon set
- Hover states that maintain brand recognition
- Consistent sizing and typography

Accessibility Features:
- Platform-specific ARIA labels for context
- Proper external link handling with security
- Screen reader support with meaningful descriptions
- Keyboard navigation and focus management

Technical Implementation:
- Built on ActionButton for external link safety
- Dynamic styling based on platform configuration
- Efficient icon selection with selective imports
- Responsive design with mobile optimization

## Param

Component props

## Param

Target social platform

## Param

Apply platform brand colors

## Param

Icon-only display mode

## Param

Custom accessibility label

## Param

Social media URL or profile link

## Param

Button text content

## Param

All other ActionButton properties

## Returns

Styled social media button

## Examples

```ts
// Complete social media footer
<Stack direction="row" spacing={2}>
  <SocialButton 
    platform="linkedin" 
    href="https://linkedin.com/company/mycompany"
    variant="contained"
  >
    Follow on LinkedIn
  </SocialButton>
  <SocialButton 
    platform="twitter" 
    href="https://twitter.com/mycompany"
    variant="contained"
  >
    Follow on Twitter
  </SocialButton>
  <SocialButton 
    platform="github" 
    href="https://github.com/mycompany"
    variant="contained"
  >
    View on GitHub
  </SocialButton>
</Stack>
```

```ts
// Compact social toolbar
<Paper sx={{ p: 1 }}>
  <Stack direction="row" spacing={1}>
    {['linkedin', 'twitter', 'facebook', 'instagram'].map(platform => (
      <SocialButton
        key={platform}
        platform={platform as SocialPlatform}
        href={`https://${platform}.com/mycompany`}
        iconOnly
        variant="text"
        size="small"
      />
    ))}
  </Stack>
</Paper>
```

```ts
// Content sharing buttons
<Stack direction="row" spacing={2} sx={{ mt: 3 }}>
  <SocialButton
    platform="twitter"
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`}
    variant="outlined"
    useBrandColors={false}
    sx={{ color: 'text.primary', borderColor: 'divider' }}
  >
    Share on Twitter
  </SocialButton>
  <SocialButton
    platform="linkedin"
    href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
    variant="outlined"
    useBrandColors={false}
    sx={{ color: 'text.primary', borderColor: 'divider' }}
  >
    Share on LinkedIn
  </SocialButton>
</Stack>
```

```ts
// Team member social profiles
<Card>
  <CardContent>
    <Avatar src="/team/john.jpg" sx={{ width: 80, height: 80, mx: 'auto' }} />
    <Typography variant="h6" align="center" sx={{ mt: 2 }}>
      John Smith
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      Senior Developer
    </Typography>
    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
      <SocialButton
        platform="linkedin"
        href="https://linkedin.com/in/johnsmith"
        iconOnly
        size="small"
      />
      <SocialButton
        platform="github"
        href="https://github.com/johnsmith"
        iconOnly
        size="small"
      />
      <SocialButton
        platform="email"
        href="mailto:john@company.com"
        iconOnly
        size="small"
      />
    </Stack>
  </CardContent>
</Card>
```

```ts
// WhatsApp contact button
<SocialButton
  platform="whatsapp"
  href="https://wa.me/1234567890?text=Hi,%20I%20need%20help%20with..."
  variant="contained"
  size="large"
  sx={{
    position: 'fixed',
    bottom: 20,
    right: 20,
    borderRadius: '50%',
    minWidth: 60,
    height: 60,
    zIndex: 1000
  }}
  iconOnly
  customAriaLabel="Chat with us on WhatsApp"
/>
```
