
/*
 * StandardStack Component
 * 
 * A semantic column stack component that provides predefined spacing presets for consistent layout design.
 * Built on top of MUI's Stack component, it offers semantic size tokens instead of numeric spacing values,
 * making it easier to maintain design consistency across your application.
 * 
 * Features:
 * - Semantic spacing presets (compact, standard, relaxed, large, extraLarge)
 * - Full-width layout with column direction by default
 * - Inherits all MUI Stack props for maximum flexibility
 * - TypeScript support with proper prop typing
 * - Consistent spacing based on MUI theme system
 * - Responsive and accessible design
 * 
 * Props:
 * - size: Semantic spacing preset ('compact' | 'standard' | 'relaxed' | 'large' | 'extraLarge')
 *         Default: 'standard'
 * - All other MUI Stack props are supported (direction, alignItems, justifyContent, etc.)
 * 
 * Spacing Scale:
 * - compact: 16px (theme.spacing(2))
 * - standard: 32px (theme.spacing(4)) - Default
 * - relaxed: 48px (theme.spacing(6))
 * - large: 64px (theme.spacing(8))
 * - extraLarge: 80px (theme.spacing(10))
 * 
 * Examples:
 * 
 * Basic Usage:
 * <StandardStack>
 *   <Typography variant="h4">Title</Typography>
 *   <Typography variant="body1">Content paragraph</Typography>
 *   <Button variant="contained">Action Button</Button>
 * </StandardStack>
 * 
 * Different Spacing Sizes:
 * <StandardStack size="compact">
 *   <TextField label="Name" />
 *   <TextField label="Email" />
 *   <TextField label="Phone" />
 * </StandardStack>
 * 
 * <StandardStack size="relaxed">
 *   <Card>Section 1</Card>
 *   <Card>Section 2</Card>
 *   <Card>Section 3</Card>
 * </StandardStack>
 * 
 * Form Layout Example:
 * <StandardStack size="standard">
 *   <Typography variant="h5">Contact Information</Typography>
 *   <TextField label="Full Name" fullWidth required />
 *   <TextField label="Email Address" type="email" fullWidth required />
 *   <TextField label="Phone Number" fullWidth />
 *   <TextField label="Message" multiline rows={4} fullWidth />
 *   <Button variant="contained" size="large">Submit</Button>
 * </StandardStack>
 * 
 * Card Layout Example:
 * <StandardStack size="large">
 *   <Card>
 *     <CardContent>
 *       <Typography variant="h6">Feature 1</Typography>
 *       <Typography variant="body2">Description of feature 1</Typography>
 *     </CardContent>
 *   </Card>
 *   <Card>
 *     <CardContent>
 *       <Typography variant="h6">Feature 2</Typography>
 *       <Typography variant="body2">Description of feature 2</Typography>
 *     </CardContent>
 *   </Card>
 * </StandardStack>
 * 
 * Combined with MUI Stack Props:
 * <StandardStack 
 *   size="relaxed" 
 *   alignItems="center" 
 *   justifyContent="center"
 *   sx={{ minHeight: '100vh', bgcolor: 'background.paper' }}
 * >
 *   <Avatar sx={{ width: 100, height: 100 }} />
 *   <Typography variant="h4">Welcome</Typography>
 *   <Typography variant="body1" textAlign="center">
 *     Get started with our amazing platform
 *   </Typography>
 *   <Button variant="contained" size="large">Get Started</Button>
 * </StandardStack>
 * 
 * Responsive Layout Example:
 * <StandardStack 
 *   size="standard"
 *   direction={{ xs: 'column', md: 'row' }}
 *   spacing={{ xs: 2, md: 4 }}
 * >
 *   <Box flex={1}>Left content</Box>
 *   <Box flex={1}>Right content</Box>
 * </StandardStack>
 * 
 * Use Cases:
 * - Form layouts with consistent field spacing
 * - Card grids and content sections
 * - Page content with semantic spacing hierarchy
 * - Dashboard widgets and components
 * - Landing page sections
 * - Settings and configuration panels
 * 
 * Best Practices:
 * 1. Use semantic size names instead of numeric values for better maintainability
 * 2. Choose 'compact' for dense forms and lists
 * 3. Use 'standard' for general content layout (default)
 * 4. Apply 'relaxed' for comfortable reading sections
 * 5. Use 'large' and 'extraLarge' for major page sections
 * 6. Combine with MUI Stack props for advanced layouts
 * 7. Consider responsive spacing for mobile devices
 * 
 * Accessibility:
 * - Provides adequate spacing for touch targets
 * - Maintains consistent visual rhythm for better readability
 * - Supports screen reader navigation with proper semantic structure
 * - Full keyboard navigation support inherited from MUI Stack
 */

import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

type StackSize = 'compact' | 'standard' | 'relaxed' | 'large' | 'extraLarge';

const STACK_SPACING: Record<StackSize, number> = {
  compact: 2,
  standard: 4,
  relaxed: 6,
  large: 8,
  extraLarge: 10,
};

export interface StandardStackProps extends StackProps {
  /** Semantic spacing preset. @defaultValue 'standard' */
  size?: StackSize;
}

const BaseStack: React.FC<StandardStackProps> = ({ size = 'standard', ...props }) => {
  const spacing = STACK_SPACING[size];
  return <Stack spacing={spacing} {...props} />;
};

const StandardStack = styled(BaseStack)(({ /* theme */ }) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'visible',
}));

export default StandardStack;
