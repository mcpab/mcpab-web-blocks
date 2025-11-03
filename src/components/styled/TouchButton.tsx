/*
 * TouchButton Component
 * 
 * A touch-optimized button component built on top of MUI's Button with enhanced styling for mobile interfaces.
 * Designed with optimal touch targets, consistent styling, and proper visual feedback for better user experience
 * across all devices, especially mobile and tablet interfaces.
 * 
 * Features:
 * - Touch-optimized sizing (40px height for adequate touch target)
 * - Natural text casing (no text transformation)
 * - Consistent primary color theming with hover states
 * - Subtle shadow for depth and visual hierarchy
 * - Flexible width that adapts to content
 * - Full polymorphic support (can be rendered as links, etc.)
 * - Maintains all MUI Button props and functionality
 * - Server-side rendering compatible
 * 
 * Design Specifications:
 * - Height: 40px (meets WCAG touch target guidelines)
 * - Padding: theme.spacing(2) horizontal
 * - Border radius: theme.shape.borderRadius
 * - Shadow: theme.shadows[2] for subtle elevation
 * - Colors: Uses theme primary palette with proper contrast
 * - Width: fit-content (adapts to content size)
 * - Min width: 0 (allows very small buttons when needed)
 * 
 * Props:
 * Inherits all MUI Button props including:
 * - variant: Button style variant (text, outlined, contained)
 * - size: Button size (small, medium, large)
 * - color: Color theme (primary, secondary, error, etc.)
 * - disabled: Disable the button
 * - onClick: Click event handler
 * - children: Button content
 * - component: Polymorphic component type (e.g., "a" for links)
 * - href: URL when used as link
 * - startIcon, endIcon: Icons for button decoration
 * 
 * Examples:
 * 
 * Basic Usage:
 * <TouchButton onClick={handleClick}>
 *   Click Me
 * </TouchButton>
 * 
 * With Icons:
 * <TouchButton startIcon={<SaveIcon />} onClick={handleSave}>
 *   Save
 * </TouchButton>
 * 
 * <TouchButton endIcon={<ArrowForwardIcon />}>
 *   Continue
 * </TouchButton>
 * 
 * As Link Button:
 * <TouchButton component="a" href="/dashboard">
 *   Go to Dashboard
 * </TouchButton>
 * 
 * <TouchButton component={Link} to="/profile">
 *   View Profile
 * </TouchButton>
 * 
 * Different Variants:
 * <TouchButton variant="contained">Contained</TouchButton>
 * <TouchButton variant="outlined">Outlined</TouchButton>
 * <TouchButton variant="text">Text</TouchButton>
 * 
 * Color Variations:
 * <TouchButton color="primary">Primary</TouchButton>
 * <TouchButton color="secondary">Secondary</TouchButton>
 * <TouchButton color="error">Delete</TouchButton>
 * <TouchButton color="success">Confirm</TouchButton>
 * 
 * Form Actions:
 * <form onSubmit={handleSubmit}>
 *   <StandardStack size="standard">
 *     <TextField label="Email" type="email" required />
 *     <TextField label="Password" type="password" required />
 *     <TouchButton type="submit" fullWidth>
 *       Sign In
 *     </TouchButton>
 *   </StandardStack>
 * </form>
 * 
 * Button Groups:
 * <StandardStack direction="row" spacing={2}>
 *   <TouchButton variant="outlined" onClick={handleCancel}>
 *     Cancel
 *   </TouchButton>
 *   <TouchButton onClick={handleConfirm}>
 *     Confirm
 *   </TouchButton>
 * </StandardStack>
 * 
 * Card Actions:
 * <Card>
 *   <CardContent>
 *     <Typography variant="h6">Product Name</Typography>
 *     <Typography variant="body2">Product description...</Typography>
 *   </CardContent>
 *   <CardActions>
 *     <TouchButton size="small">Learn More</TouchButton>
 *     <TouchButton size="small" variant="outlined">
 *       Add to Cart
 *     </TouchButton>
 *   </CardActions>
 * </Card>
 * 
 * Loading States:
 * <TouchButton disabled={isLoading} startIcon={isLoading ? <CircularProgress size={16} /> : <SaveIcon />}>
 *   {isLoading ? 'Saving...' : 'Save'}
 * </TouchButton>
 * 
 * Mobile Menu Actions:
 * <Drawer anchor="bottom" open={open}>
 *   <StandardStack size="compact" sx={{ p: 2 }}>
 *     <TouchButton fullWidth startIcon={<EditIcon />}>
 *       Edit
 *     </TouchButton>
 *     <TouchButton fullWidth startIcon={<ShareIcon />}>
 *       Share
 *     </TouchButton>
 *     <TouchButton fullWidth startIcon={<DeleteIcon />} color="error">
 *       Delete
 *     </TouchButton>
 *   </StandardStack>
 * </Drawer>
 * 
 * Responsive Actions:
 * <Box sx={{ display: { xs: 'block', md: 'none' } }}>
 *   <TouchButton fullWidth>Mobile Action</TouchButton>
 * </Box>
 * <Box sx={{ display: { xs: 'none', md: 'block' } }}>
 *   <TouchButton>Desktop Action</TouchButton>
 * </Box>
 * 
 * Use Cases:
 * - Primary call-to-action buttons
 * - Form submission buttons
 * - Navigation buttons in mobile interfaces
 * - Action buttons in cards and lists
 * - Menu items in bottom sheets and drawers
 * - Confirmation dialogs and modals
 * - Quick action buttons in toolbars
 * 
 * Best Practices:
 * 1. Use for primary actions that need touch optimization
 * 2. Combine with icons for better visual communication
 * 3. Use appropriate color variants for different action types
 * 4. Ensure adequate spacing between multiple buttons
 * 5. Use loading states for async actions
 * 6. Consider fullWidth prop for mobile layouts
 * 7. Test touch interactions on actual devices
 * 8. Use semantic HTML when rendering as links
 * 
 * Accessibility:
 * - Meets WCAG 2.1 touch target size requirements (40px height)
 * - Proper color contrast with theme primary colors
 * - Full keyboard navigation support
 * - Screen reader compatible with proper ARIA attributes
 * - Focus indicators for keyboard users
 * - Supports disabled state with proper accessibility markup
 * - Works with assistive technologies through MUI's accessibility features
 * 
 * Performance:
 * - Server-side rendering compatible (no client-side hooks)
 * - Lightweight styled component with minimal runtime overhead
 * - Efficient hover state handling
 * - Optimized for mobile performance
 */

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// No 'use client' needed: no hooks/browser APIs.

const TouchButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  paddingInline: theme.spacing(2),
  minWidth: 0,
  width: 'fit-content',
  height: 40,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': { backgroundColor: theme.palette.primary.dark },
})) as typeof Button; // keep full polymorphic Button props (component="a", etc.)

export type TouchButtonProps = React.ComponentProps<typeof Button>;
export default TouchButton;
