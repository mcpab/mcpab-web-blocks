[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / BackButton

# Variable: BackButton

> `const` **BackButton**: `React.FC`\<[`BackButtonProps`](../interfaces/BackButtonProps.md)\>

Defined in: [src/components/buttons/BackButton.tsx:296](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/BackButton.tsx#L296)

BackButton - Framework-agnostic navigation back button

A comprehensive navigation button that provides intelligent back navigation
with multiple fallback strategies. Works with any React router or falls back
to browser history while supporting custom navigation flows.

Navigation Priority:
1. Custom onBack handler (if provided)
2. Custom router instance (if provided via props)
3. Context router (if provided via RouterProvider)
4. Browser history navigation (universal fallback)
5. Fallback URL navigation (if provided)
6. Default to home page ("/")

Framework Integration Examples:
- Next.js: Use RouterProvider with Next.js router
- React Router: Use RouterProvider with React Router hooks
- Custom routers: Implement Router interface
- Static sites: Works with browser history only

Accessibility Features:
- Semantic navigation context with proper ARIA labels
- Keyboard navigation and focus management
- Screen reader support with meaningful descriptions
- High contrast support for visual clarity

Performance Considerations:
- Efficient router integration with context pattern
- Minimal re-renders with proper dependency management
- Optimized for both mobile and desktop interactions
- Progressive enhancement with graceful fallbacks

## Param

Component props

## Param

Custom navigation handler

## Param

Fallback navigation URL

## Param

Enable browser history navigation

## Param

Display back arrow icon

## Param

Accessibility label

## Param

Custom router instance

## Param

Button text content

## Param

All other Material-UI Button props

## Returns

Enhanced navigation back button

## Examples

```ts
// Basic usage (works with any framework)
<BackButton fallbackHref="/products">
  Back to Products
</BackButton>
```

```ts
// With Next.js RouterProvider setup
import { useRouter } from 'next/navigation';
import { RouterProvider } from '@/components/buttons/BackButton';

function App() {
  const nextRouter = useRouter();
  const router = {
    back: () => nextRouter.back(),
    push: (path: string) => nextRouter.push(path)
  };
  
  return (
    <RouterProvider router={router}>
      <BackButton>Back</BackButton>
    </RouterProvider>
  );
}
```

```ts
// With React Router v6
import { useNavigate } from 'react-router-dom';
import { RouterProvider } from '@/components/buttons/BackButton';

function App() {
  const navigate = useNavigate();
  const router = {
    back: () => navigate(-1),
    push: (path: string) => navigate(path)
  };
  
  return (
    <RouterProvider router={router}>
      <BackButton>Back</BackButton>
    </RouterProvider>
  );
}
```

```ts
// Custom navigation handler
<BackButton 
  onBack={() => {
    // Custom logic (form validation, state cleanup, etc.)
    if (formIsDirty) {
      showConfirmDialog();
    } else {
      navigateBack();
    }
  }}
>
  Back
</BackButton>
```
