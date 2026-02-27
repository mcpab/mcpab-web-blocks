[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RouterProvider

# Variable: RouterProvider

> `const` **RouterProvider**: `React.FC`\<\{ `children`: `React.ReactNode`; `router`: `Router`; \}\>

Defined in: [src/components/buttons/BackButton.tsx:83](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/BackButton.tsx#L83)

Router provider component
Use this to provide router implementation to BackButton components

## Examples

```ts
// Next.js App Router
import { useRouter } from 'next/navigation';

function App() {
  const nextRouter = useRouter();
  const router = {
    back: () => nextRouter.back(),
    push: (path: string) => nextRouter.push(path)
  };
  
  return (
    <RouterProvider router={router}>
      <YourApp />
    </RouterProvider>
  );
}
```

```ts
// React Router v6
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const router = {
    back: () => navigate(-1),
    push: (path: string) => navigate(path)
  };
  
  return (
    <RouterProvider router={router}>
      <YourApp />
    </RouterProvider>
  );
}
```
