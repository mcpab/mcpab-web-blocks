[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ShareButton

# Variable: ShareButton

> `const` **ShareButton**: `React.FC`\<[`ShareButtonProps`](../interfaces/ShareButtonProps.md)\>

Defined in: [src/components/buttons/ShareButton.tsx:255](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/ShareButton.tsx#L255)

ShareButton - Progressive Web Share API button with fallbacks

A sophisticated sharing component that provides the best possible sharing
experience across all devices and browsers. Uses native Web Share API
when available and provides comprehensive fallback options.

Progressive Enhancement Strategy:
1. Detect native Web Share API support
2. Use native sharing for supported content types
3. Fall back to social platform URLs for broader support
4. Provide copy-to-clipboard as ultimate fallback
5. Show appropriate success/error feedback

Accessibility Features:
- Semantic sharing context with proper ARIA labels
- Keyboard navigation for fallback menu
- Screen reader support with meaningful descriptions
- High contrast support for visual clarity

Performance Considerations:
- Efficient native API detection
- Lazy loading of fallback menu
- Minimal bundle impact with selective platform imports
- Optimized for both mobile and desktop interactions

## Param

Component props

## Returns

Enhanced sharing button

## Examples

```ts
// Blog post sharing
<ShareButton
  url={`https://blog.example.com/posts/${postId}`}
  title={post.title}
  text={post.excerpt}
  onShare={(success, platform) => {
    if (success) {
      setShareCount(prev => prev + 1);
      analytics.track('post_shared', { postId, platform });
    }
  }}
  variant="outlined"
  sx={{ ml: 2 }}
>
  Share Post
</ShareButton>
```

```ts
// E-commerce product sharing
<ShareButton
  url={`https://store.example.com/products/${product.id}`}
  title={`Check out ${product.name}`}
  text={`${product.description} - Starting at $${product.price}`}
  fallbackPlatforms={['twitter', 'facebook', 'copy']}
  variant="contained"
  color="secondary"
  startIcon={<ShareIcon />}
>
  Share Product
</ShareButton>
```

```ts
// Event sharing with custom styling
<ShareButton
  url={event.url}
  title={event.name}
  text={`Join us for ${event.name} on ${formatDate(event.date)}`}
  sx={{
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF5252, #26C6DA)',
    }
  }}
>
  Share Event
</ShareButton>
```
