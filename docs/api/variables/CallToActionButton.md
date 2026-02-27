[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / CallToActionButton

# Variable: CallToActionButton

> `const` **CallToActionButton**: `React.FC`\<[`CallToActionButtonProps`](../interfaces/CallToActionButtonProps.md)\>

Defined in: [src/components/buttons/CallToActionButton.tsx:196](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/CallToActionButton.tsx#L196)

CallToActionButton - High-conversion primary action button

A sophisticated button component optimized for conversion actions with
built-in loading states, success feedback, and accessibility features.
Designed to maximize user engagement and provide clear action feedback.

State Management:
- Loading state disables interaction and shows progress
- Success state provides positive feedback with checkmark
- Automatic state reset after success confirmation
- Preserves all other button states and interactions

Accessibility Features:
- Proper ARIA states for loading and success conditions
- Screen reader announcements for state changes
- Keyboard navigation and focus management
- High contrast support for visual clarity

Performance Considerations:
- Efficient re-renders with React.useEffect for success timeout
- Minimal bundle impact with selective Material-UI imports
- Optimized for both mobile and desktop interactions
- Supports server-side rendering

## Param

Component props

## Param

Loading state indicator

## Param

Success state indicator

## Param

Success display duration

## Param

Loading state text

## Param

Success state text

## Param

Icon before text

## Param

Icon after text

## Param

Button content

## Param

All other Material-UI Button props

## Returns

Enhanced call-to-action button

## Examples

```ts
// Newsletter signup with feedback
const [isSubscribing, setIsSubscribing] = useState(false);
const [subscribed, setSubscribed] = useState(false);

const handleSubscribe = async () => {
  setIsSubscribing(true);
  try {
    await subscribeToNewsletter(email);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  } finally {
    setIsSubscribing(false);
  }
};

<CallToActionButton
  onClick={handleSubscribe}
  loading={isSubscribing}
  success={subscribed}
  loadingText="Subscribing..."
  successText="Welcome aboard!"
  variant="contained"
  color="primary"
  size="large"
  fullWidth
>
  Subscribe to Updates
</CallToActionButton>
```

```ts
// E-commerce checkout flow
<CallToActionButton
  onClick={handleCheckout}
  loading={processingPayment}
  success={paymentComplete}
  loadingText="Processing payment..."
  successText="Order confirmed!"
  startIcon={<CreditCardIcon />}
  variant="contained"
  color="success"
  size="large"
  disabled={cartIsEmpty}
  sx={{
    minHeight: 56,
    fontSize: '1.1rem',
    fontWeight: 600,
  }}
>
  Complete Purchase
</CallToActionButton>
```

```ts
// Free trial conversion
<CallToActionButton
  onClick={handleStartTrial}
  loading={creatingAccount}
  success={accountCreated}
  variant="contained"
  size="large"
  sx={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)',
    }
  }}
>
  Start Free Trial
</CallToActionButton>
```
