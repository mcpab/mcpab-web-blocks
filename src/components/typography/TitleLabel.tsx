/*
 * TitleLabel Component & Semantic Wrappers
 *
 * A typography component that provides heading-like visual styling without affecting document semantics.
 * This component uses the same visual styles as the Title component (h1-h4) but renders as non-heading
 * elements, making it perfect for interactive controls where you want heading-style text without breaking
 * the document outline.
 *
 * Purpose:
 * Sometimes you need text that looks like a heading but shouldn't be part of the document's heading
 * hierarchy. TitleLabel solves this by applying Title styling to semantic elements like spans, divs,
 * or paragraphs, preserving accessibility while maintaining visual consistency.
 *
 * Features:
 * - Visual consistency with Title components (h1-h4 styling)
 * - Semantic non-heading elements (span, div, p)
 * - Prevents document outline pollution
 * - Perfect for interactive controls and UI elements
 * - Type-safe props with restricted component options
 * - Full MUI Typography prop support
 * - Convenient wrapper components for each heading level
 * - Accessibility-friendly design
 *
 * When to Use TitleLabel vs Title:
 * - Use Title: For actual document headings that structure content
 * - Use TitleLabel: For UI elements that need heading-style text but aren't content headings
 *
 * Examples of TitleLabel Usage:
 * - Accordion headers that aren't document sections
 * - Tab labels that need prominent styling
 * - Menu items with heading-like appearance
 * - Card titles within lists
 * - Dialog titles that aren't page sections
 * - Button text that needs emphasis
 * - Navigation labels
 *
 * Component Options:
 * - span (default): Inline text styling
 * - div: Block-level styling
 * - p: Paragraph-level styling
 *
 * Semantic Mapping (Visual Only):
 * - page → h1 styling (variant="h1") rendered as non-heading
 * - section → h2 styling (variant="h2") rendered as non-heading
 * - subsection → h3 styling (variant="h3") rendered as non-heading
 * - subsubsection → h4 styling (variant="h4") rendered as non-heading
 *
 * Examples:
 *
 * Basic Usage:
 * <TitleLabel sectionType="section">Card Title</TitleLabel>
 * <TitleLabel sectionType="subsection" component="div">Menu Category</TitleLabel>
 * <TitleLabel sectionType="page" component="p">Featured Item</TitleLabel>
 *
 * Wrapper Components (Recommended):
 * <PageTitleLabel>Hero Section Label</PageTitleLabel>
 * <SectionTitleLabel>Product Category</SectionTitleLabel>
 * <SubsectionTitleLabel>Feature Group</SubsectionTitleLabel>
 * <SubsubsectionTitleLabel>Detail Label</SubsubsectionTitleLabel>
 *
 * Accordion Implementation:
 * <Accordion>
 *   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
 *     <SectionTitleLabel>Account Settings</SectionTitleLabel>
 *   </AccordionSummary>
 *   <AccordionDetails>
 *     <SubsectionTitleLabel>Profile Information</SubsectionTitleLabel>
 *     <TextField label="Full Name" fullWidth margin="normal" />
 *     <TextField label="Email" fullWidth margin="normal" />
 *     
 *     <SubsectionTitleLabel sx={{ mt: 3 }}>Preferences</SubsectionTitleLabel>
 *     <FormControlLabel control={<Checkbox />} label="Email notifications" />
 *     <FormControlLabel control={<Checkbox />} label="SMS notifications" />
 *   </AccordionDetails>
 * </Accordion>
 *
 * Tab Labels:
 * <Tabs value={tabValue} onChange={handleTabChange}>
 *   <Tab 
 *     label={<SubsectionTitleLabel>Overview</SubsectionTitleLabel>} 
 *     value="overview" 
 *   />
 *   <Tab 
 *     label={<SubsectionTitleLabel>Settings</SubsectionTitleLabel>} 
 *     value="settings" 
 *   />
 *   <Tab 
 *     label={<SubsectionTitleLabel>Analytics</SubsectionTitleLabel>} 
 *     value="analytics" 
 *   />
 * </Tabs>
 *
 * Card Headers in Lists:
 * <Grid container spacing={3}>
 *   {products.map((product) => (
 *     <Grid item xs={12} md={4} key={product.id}>
 *       <Card>
 *         <CardMedia component="img" src={product.image} />
 *         <CardContent>
 *           <SubsectionTitleLabel gutterBottom>
 *             {product.name}
 *           </SubsectionTitleLabel>
 *           <Typography variant="body2" color="text.secondary">
 *             {product.description}
 *           </Typography>
 *           <SubsubsectionTitleLabel 
 *             color="primary" 
 *             sx={{ mt: 2, display: 'block' }}
 *           >
 *             ${product.price}
 *           </SubsubsectionTitleLabel>
 *         </CardContent>
 *       </Card>
 *     </Grid>
 *   ))}
 * </Grid>
 *
 * Menu Categories:
 * <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
 *   <MenuItem disabled>
 *     <SectionTitleLabel>Categories</SectionTitleLabel>
 *   </MenuItem>
 *   <Divider />
 *   <MenuItem onClick={() => handleCategory('electronics')}>
 *     <SubsectionTitleLabel>Electronics</SubsectionTitleLabel>
 *   </MenuItem>
 *   <MenuItem onClick={() => handleCategory('clothing')}>
 *     <SubsectionTitleLabel>Clothing</SubsectionTitleLabel>
 *   </MenuItem>
 *   <MenuItem onClick={() => handleCategory('books')}>
 *     <SubsectionTitleLabel>Books</SubsectionTitleLabel>
 *   </MenuItem>
 * </Menu>
 *
 * Dialog Titles (Non-Semantic):
 * <Dialog open={open} onClose={handleClose}>
 *   <DialogTitle>
 *     <SectionTitleLabel>Confirm Action</SectionTitleLabel>
 *   </DialogTitle>
 *   <DialogContent>
 *     <Typography>Are you sure you want to delete this item?</Typography>
 *   </DialogContent>
 *   <DialogActions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button onClick={handleConfirm} color="error">Delete</Button>
 *   </DialogActions>
 * </Dialog>
 *
 * Dashboard Widgets:
 * <Paper sx={{ p: 3 }}>
 *   <SectionTitleLabel gutterBottom>Sales Overview</SectionTitleLabel>
 *   <Grid container spacing={2}>
 *     <Grid item xs={6}>
 *       <SubsectionTitleLabel color="primary">
 *         Total Revenue
 *       </SubsectionTitleLabel>
 *       <Typography variant="h4">$45,230</Typography>
 *     </Grid>
 *     <Grid item xs={6}>
 *       <SubsectionTitleLabel color="secondary">
 *         New Customers
 *       </SubsectionTitleLabel>
 *       <Typography variant="h4">1,240</Typography>
 *     </Grid>
 *   </Grid>
 * </Paper>
 *
 * Navigation Breadcrumbs:
 * <Breadcrumbs>
 *   <Link href="/" underline="hover">
 *     <SubsubsectionTitleLabel>Home</SubsubsectionTitleLabel>
 *   </Link>
 *   <Link href="/products" underline="hover">
 *     <SubsubsectionTitleLabel>Products</SubsubsectionTitleLabel>
 *   </Link>
 *   <SubsubsectionTitleLabel color="text.primary">
 *     Electronics
 *   </SubsubsectionTitleLabel>
 * </Breadcrumbs>
 *
 * Comparison with Title Component:
 * 
 * Document Structure (Use Title):
 * <main>
 *   <PageTitle>Product Catalog</PageTitle>          // h1 - main page heading
 *   <SectionTitle>Featured Products</SectionTitle>  // h2 - section heading
 * </main>
 * 
 * UI Elements (Use TitleLabel):
 * <Card>
 *   <SectionTitleLabel>Product Name</SectionTitleLabel>  // span - visual only
 *   <SubsectionTitleLabel>Category</SubsectionTitleLabel> // span - visual only
 * </Card>
 *
 * Use Cases:
 * - Interactive component headers (accordions, tabs, dialogs)
 * - Card and widget titles within repetitive layouts
 * - Menu and navigation labels requiring emphasis
 * - Dashboard metrics and KPI labels
 * - Form section labels that aren't document headings
 * - Button text requiring heading-style prominence
 * - Breadcrumb navigation elements
 * - Status labels and badges with heading-style text
 *
 * Best Practices:
 * 1. Use TitleLabel for UI elements, Title for content structure
 * 2. Choose appropriate sectionType based on visual hierarchy needs
 * 3. Use span (default) for inline elements, div for blocks
 * 4. Consider accessibility when choosing between Title and TitleLabel
 * 5. Maintain visual consistency by using the same sectionType mapping
 * 6. Test with screen readers to ensure proper document navigation
 * 7. Use wrapper components for cleaner, more readable code
 * 8. Don't mix Title and TitleLabel arbitrarily - have clear semantic reasons
 *
 * Accessibility:
 * - Preserves document outline by avoiding heading elements
 * - Maintains visual hierarchy without semantic pollution
 * - Screen readers won't treat these as navigational headings
 * - Supports all MUI Typography accessibility features
 * - Proper color contrast through theme integration
 * - Compatible with assistive technologies
 * - Allows focus management without heading confusion
 *
 * Performance:
 * - Lightweight wrapper around MUI Typography
 * - Reuses Title component's variant mapping for consistency
 * - Minimal runtime overhead
 * - Efficient prop forwarding and type safety
 */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { variantLevels, type TitleTypes } from './Title';

/**
 * TitleLabel Component
 * 
 * Provides heading-like visual styling without semantic heading elements.
 * Visually matches Title component sizes (h1-h4) via `sectionType` but renders as 
 * non-heading elements (span, div, p) to preserve document outline integrity.
 * 
 * Perfect for interactive controls like AccordionSummary, Tabs, and Menus where
 * you want the visual impact of a heading without affecting document structure.
 * 
 * @param sectionType - Visual hierarchy level (page, section, subsection, subsubsection)
 * @param component - Non-heading HTML element to render (span, div, p)
 */
export interface TitleLabelProps
    extends Omit<React.ComponentProps<typeof Typography>, 'variant' | 'component'> {
    sectionType: TitleTypes;
    /** Restrict to non-heading tags to keep semantics clean. @defaultValue 'span' */
    component?: 'span' | 'div' | 'p';
}

export const TitleLabel: React.FC<TitleLabelProps> = ({
    sectionType,
    component = 'span',
    sx,
    ...rest
}) => {
    return (
        <Typography
            variant={variantLevels[sectionType]} // pulls h1..h4 sizing from theme
            component={component}               // always non-heading
            sx={sx}
            {...rest}
        />
    );
};

TitleLabel.displayName = 'TitleLabel';

/** Convenience wrappers mirroring your Title API (non-heading versions). */
export const PageTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => <TitleLabel sectionType="page" {...p} />;
export const SectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => <TitleLabel sectionType="section" {...p} />;
export const SubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => <TitleLabel sectionType="subsection" {...p} />;
export const SubsubsectionTitleLabel: React.FC<Omit<TitleLabelProps, 'sectionType'>> = (p) => <TitleLabel sectionType="subsubsection" {...p} />;

export default TitleLabel;
