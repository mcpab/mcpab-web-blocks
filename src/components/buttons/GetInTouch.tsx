/**
 * GetInTouch
 *
 * Standard contact CTA that bundles common “contact us” actions (e.g. phone/email)
 * into a single component.
 *
 * Exact behavior depends on your project conventions (routes, email/phone targets),
 * but the intent is to centralize the UX so every page uses the same contact affordance.
 */

// GetInTouch.tsx
import ActionButton from './ActionButton';
import PhoneIcon from '@mui/icons-material/Phone';

/**
 * GetInTouch - Standardized contact call-to-action button component
 * 
 * A pre-built contact button that provides consistent styling and behavior
 * across the application. Built on ActionButton with optimized defaults for
 * contact scenarios, featuring a phone icon and standardized sizing.
 * 
 * Component Features:
 * - Pre-configured PhoneIcon for universal contact recognition
 * - Small size optimization for secondary action contexts
 * - Semantic link to "/contact" route for proper navigation
 * - Zero-configuration implementation for rapid deployment
 * - Consistent styling that integrates with any theme
 * - Accessibility-compliant with clear action intent
 * 
 * Technical Implementation:
 * - Built on ActionButton for consistent behavior and security
 * - Uses Material-UI PhoneIcon for cross-platform compatibility
 * - Leverages internal routing (no external link attributes)
 * - Minimal bundle impact with shared component dependencies
 * - Server-side rendering compatible
 * 
 * Design Philosophy:
 * - Follows established UX patterns for contact actions
 * - Non-intrusive sizing suitable for various layout contexts
 * - Clear visual hierarchy as secondary call-to-action
 * - Universal phone icon provides immediate recognition
 * - Complements primary action buttons without competition
 * 
 * Customization:
 * While this component uses standard defaults, it can be easily customized
 * by creating a new component based on ActionButton with different props:
 * 
 * @returns {React.ReactElement} Pre-configured contact button
 * 
 * @example
 * // Basic usage in navigation
 * <AppBar>
 *   <Toolbar>
 *     <Logo />
 *     <Box sx={{ flexGrow: 1 }} />
 *     <GetInTouch />
 *   </Toolbar>
 * </AppBar>
 * 
 * @example
 * // Footer contact section
 * <Footer>
 *   <Container>
 *     <Grid container spacing={4}>
 *       <Grid item xs={12} md={3}>
 *         <Typography variant="h6" gutterBottom>
 *           Contact
 *         </Typography>
 *         <Stack spacing={2}>
 *           <Typography variant="body2">
 *             Ready to discuss your project?
 *           </Typography>
 *           <GetInTouch />
 *         </Stack>
 *       </Grid>
 *     </Grid>
 *   </Container>
 * </Footer>
 * 
 * @example
 * // Product card secondary action
 * <Card>
 *   <CardContent>
 *     <Typography variant="h5">Premium Service</Typography>
 *     <Typography variant="body2">
 *       Custom solutions for your business needs.
 *     </Typography>
 *   </CardContent>
 *   <CardActions>
 *     <Button variant="contained" fullWidth>
 *       Learn More
 *     </Button>
 *     <GetInTouch />
 *   </CardActions>
 * </Card>
 * 
 * @example
 * // Hero section with dual actions
 * <HeroSection>
 *   <Container>
 *     <Stack spacing={4} alignItems="center">
 *       <Typography variant="h1">
 *         Transform Your Business
 *       </Typography>
 *       <Typography variant="h5" color="text.secondary">
 *         Professional solutions tailored to your needs
 *       </Typography>
 *       <Stack direction="row" spacing={2}>
 *         <Button variant="contained" size="large">
 *           Get Started
 *         </Button>
 *         <GetInTouch />
 *       </Stack>
 *     </Stack>
 *   </Container>
 * </HeroSection>
 * 
 * @example
 * // Mobile-optimized contact trigger
 * <Box sx={{ 
 *   position: 'fixed', 
 *   bottom: 16, 
 *   right: 16,
 *   display: { xs: 'block', md: 'none' } // Mobile only
 * }}>
 *   <GetInTouch />
 * </Box>
 * 
 * @example
 * // Service page consultation request
 * <ServiceDescription>
 *   <Typography variant="h4" gutterBottom>
 *     Web Development Services
 *   </Typography>
 *   <Typography variant="body1" paragraph>
 *     We build modern, responsive websites that drive results.
 *   </Typography>
 *   <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
 *     <Button variant="contained" color="primary">
 *       View Portfolio
 *     </Button>
 *     <GetInTouch />
 *   </Stack>
 * </ServiceDescription>
 * 
 * @example
 * // About page team contact
 * <TeamSection>
 *   <Typography variant="h3" gutterBottom>
 *     Meet Our Team
 *   </Typography>
 *   <Typography variant="body1" paragraph>
 *     Our experienced professionals are ready to help you succeed.
 *   </Typography>
 *   <GetInTouch />
 * </TeamSection>
 */
const GetInTouch = () => (
  <ActionButton icon={<PhoneIcon />} href="/contact" size="small">
    Get In Touch
  </ActionButton>
);

export default GetInTouch;
