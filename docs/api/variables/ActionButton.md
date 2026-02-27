[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / ActionButton

# Variable: ActionButton

> `const` **ActionButton**: `React.FC`\<[`ActionButtonProps`](../interfaces/ActionButtonProps.md)\>

Defined in: [src/components/buttons/ActionButton.tsx:176](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/ActionButton.tsx#L176)

ActionButton - Semantic action button with intelligent link handling

A sophisticated button component that automatically handles external link security,
icon positioning, and semantic HTML generation. Built on top of TouchButton for
consistent styling and behavior across the application.

Security Features:
- Automatically detects external links (starting with "http")
- Applies target="_blank" for external URLs to open in new tab
- Adds rel="noopener noreferrer" to prevent security vulnerabilities
- Maintains internal navigation without additional attributes

Accessibility Features:
- Semantic anchor element generation for proper screen reader support
- Maintains focus management for keyboard navigation
- Preserves all ARIA attributes passed through props
- Icon integration with proper text alternatives

Technical Implementation:
- Uses TouchButton as base for consistent touch interactions
- Leverages Material-UI's component prop system for semantic HTML
- Efficient external link detection with string.startsWith()
- Spread operator for clean prop forwarding

## Param

Component props extending ButtonProps

## Param

Icon element for button start position

## Param

Link destination URL or path

## Param

All other Material-UI Button properties

## Returns

Rendered anchor button element

## Examples

```ts
// External link with security handling
<ActionButton
  href="https://docs.example.com"
  icon={<HelpIcon />}
  variant="outlined"
  color="info"
>
  View Documentation
</ActionButton>
// Renders: <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">
```

```ts
// Internal navigation
<ActionButton
  href="/dashboard"
  icon={<DashboardIcon />}
  variant="contained"
>
  Go to Dashboard
</ActionButton>
// Renders: <a href="/dashboard"> (no target or rel attributes)
```

```ts
// Email link
<ActionButton
  href="mailto:support@company.com"
  icon={<EmailIcon />}
  variant="text"
  color="secondary"
>
  Email Support
</ActionButton>
```

```ts
// File download
<ActionButton
  href="/downloads/product-guide.pdf"
  icon={<GetAppIcon />}
  variant="contained"
  color="success"
  sx={{ mb: 2 }}
>
  Download Guide
</ActionButton>
```

```ts
// Custom styling with Material-UI props
<ActionButton
  href="https://github.com/company/repo"
  icon={<GitHubIcon />}
  variant="outlined"
  sx={{
    borderColor: 'grey.800',
    color: 'grey.800',
    '&:hover': {
      borderColor: 'grey.900',
      backgroundColor: 'grey.50',
    }
  }}
>
  View on GitHub
</ActionButton>
```
