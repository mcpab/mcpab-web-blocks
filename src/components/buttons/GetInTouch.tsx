/**
 * @fileoverview GetInTouch - Standardized contact call-to-action button
 * 
 * A pre-configured ActionButton component specifically designed for contact actions.
 * Provides a consistent user experience across the application for initiating
 * contact or communication flows. Features standardized styling, icon placement,
 * and semantic HTML structure optimized for accessibility and conversion.
 * 
 * Key Features:
 * - Consistent contact call-to-action design across the application
 * - Pre-configured phone icon for immediate visual recognition
 * - Optimized button size for secondary action contexts
 * - Semantic link structure for proper navigation and SEO
 * - Accessibility compliance with clear action intent
 * - Zero configuration required for standard contact flows
 * 
 * Use Cases:
 * - Header navigation contact links
 * - Footer contact sections
 * - Product page inquiry buttons
 * - Service page consultation requests
 * - About page team contact
 * - Secondary call-to-action placement
 * - Mobile-optimized contact triggers
 * 
 * Design Considerations:
 * - Small size for non-intrusive placement
 * - Phone icon suggests direct communication
 * - Consistent with standard web conventions
 * - Complements primary call-to-action buttons
 * - Works well in both light and dark themes
 * 
 * Integration Patterns:
 * - Pairs well with primary action buttons
 * - Suitable for toolbar and navigation contexts
 * - Works in both horizontal and vertical layouts
 * - Responsive design friendly
 * 
 * @example
 * // Standard header placement
 * <Header>
 *   <Logo />
 *   <Navigation />
 *   <Stack direction="row" spacing={1}>
 *     <GetInTouch />
 *     <PrimaryActionButton />
 *   </Stack>
 * </Header>
 * 
 * @example
 * // Footer contact section
 * <FooterSection title="Contact Us">
 *   <Stack spacing={2}>
 *     <Typography>Ready to start your project?</Typography>
 *     <GetInTouch />
 *   </Stack>
 * </FooterSection>
 * 
 * @example
 * // Product page secondary action
 * <ProductActions>
 *   <Button variant="contained">Buy Now</Button>
 *   <GetInTouch />
 * </ProductActions>
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
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
