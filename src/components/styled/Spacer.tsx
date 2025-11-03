/*
 * Spacer Component
 * 
 * A flexible vertical spacing component that provides consistent spacing using the MUI theme spacing scale.
 * This component creates vertical space between elements while maintaining visual alignment and consistency
 * throughout your application.
 * 
 * Features:
 * - Uses MUI theme spacing scale for consistent spacing
 * - Flexible sizing with customizable `size` prop
 * - Centers content both horizontally and vertically
 * - TypeScript support with proper prop typing
 * - Optimized prop forwarding to prevent unnecessary DOM attributes
 * 
 * Props:
 * - size: The spacing multiplier based on theme.spacing() scale (default: 4)
 *         Each unit typically represents 8px in the default MUI theme
 * 
 * Examples:
 * 
 * Basic Usage:
 * <Spacer />  // Default 32px spacing (4 * 8px)
 * 
 * Custom Spacing Sizes:
 * <Spacer size={2} />  // Small spacing: 16px
 * <Spacer size={6} />  // Medium spacing: 48px
 * <Spacer size={8} />  // Large spacing: 64px
 * <Spacer size={12} /> // Extra large spacing: 96px
 * 
 * Form Layout Example:
 * <form>
 *   <TextField label="Name" fullWidth />
 *   <Spacer size={3} />
 *   <TextField label="Email" fullWidth />
 *   <Spacer size={3} />
 *   <TextField label="Message" multiline rows={4} fullWidth />
 *   <Spacer size={5} />
 *   <Button variant="contained" type="submit">Send Message</Button>
 * </form>
 * 
 * Card Layout Example:
 * <Card>
 *   <CardMedia component="img" src="/product.jpg" />
 *   <CardContent>
 *     <Typography variant="h5">Product Name</Typography>
 *     <Spacer size={2} />
 *     <Typography variant="body2" color="text.secondary">
 *       Product description goes here...
 *     </Typography>
 *     <Spacer size={4} />
 *     <Typography variant="h6" color="primary">$29.99</Typography>
 *   </CardContent>
 * </Card>
 * 
 * Spacing Scale Reference (based on default MUI theme where theme.spacing(1) = 8px):
 * - size={1} = 8px   (tiny spacing)
 * - size={2} = 16px  (small spacing)
 * - size={3} = 24px  (small-medium spacing)
 * - size={4} = 32px  (default medium spacing)
 * - size={5} = 40px  (medium-large spacing)
 * - size={6} = 48px  (large spacing)
 * - size={8} = 64px  (extra large spacing)
 * - size={10} = 80px (section spacing)
 * - size={12} = 96px (major section spacing)
 * 
 * Best Practices:
 * 1. Use consistent spacing values throughout your application
 * 2. Prefer smaller values (2-4) for component internal spacing
 * 3. Use larger values (6-12) for section and layout spacing
 * 4. Consider your design system's spacing hierarchy
 * 5. Test spacing on different screen sizes for responsive design
 * 
 * Accessibility:
 * - Provides adequate spacing for touch targets and readability
 * - Maintains consistent visual rhythm for better user experience
 * - Centers content for proper alignment with assistive technologies
 */

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export type SpacerProps = { 
  /** The spacing multiplier based on theme.spacing() scale (default: 4) */
  size?: number;
};

const Spacer = styled(Box, {
  shouldForwardProp: (p) => p !== 'size',
})<SpacerProps>(({ theme, size = 4 }) => ({
  height: theme.spacing(size),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default Spacer;
