[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / DownloadButton

# Variable: DownloadButton

> `const` **DownloadButton**: `React.FC`\<[`DownloadButtonProps`](../interfaces/DownloadButtonProps.md)\>

Defined in: [src/components/buttons/DownloadButton.tsx:300](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/buttons/DownloadButton.tsx#L300)

DownloadButton - Enhanced file download button with progress and metadata

A comprehensive download button component that provides file information,
download progress tracking, and success feedback. Optimized for various
file types with appropriate icons and user experience enhancements.

Download Process:
1. User clicks button triggering onDownloadStart callback
2. Progress bar shows (if enabled) during download
3. Browser handles file download with proper attribution
4. Success state shows with completion callback
5. Button returns to normal state after feedback period

Accessibility Features:
- Semantic download context with proper ARIA labels
- File size and type information for screen readers
- Keyboard navigation and focus management
- High contrast support for progress indicators

Performance Considerations:
- Efficient file type detection using extension parsing
- Minimal re-renders with proper state management
- Optimized icon selection with selective imports
- Progressive enhancement for download progress

## Param

Component props

## Returns

Enhanced download button

## Examples

```ts
// Document library download
<DownloadButton
  href="/documents/user-guide.pdf"
  fileName="User Guide"
  fileSize="3.2 MB"
  variant="outlined"
  fullWidth
  onDownloadStart={() => {
    analytics.track('guide_downloaded');
    setDownloadCount(prev => prev + 1);
  }}
>
  Download User Guide
</DownloadButton>
```

```ts
// Mobile app download
<DownloadButton
  href="https://releases.myapp.com/mobile-app.apk"
  fileName="Mobile App"
  fileSize="28.5 MB"
  fileType="app"
  showProgress
  variant="contained"
  color="success"
  size="large"
  sx={{
    background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
    '&:hover': {
      background: 'linear-gradient(45deg, #45a049, #7CB342)',
    }
  }}
>
  Download for Android
</DownloadButton>
```

```ts
// Data export with custom handling
<DownloadButton
  href="/api/export/user-data.csv"
  fileName="My Data Export"
  fileSize="892 KB"
  fileType="data"
  showFileSize={false}
  startIcon={<GetAppIcon />}
  onDownloadStart={() => {
    toast.info('Preparing your data export...');
  }}
  onDownloadComplete={() => {
    toast.success('Data exported successfully!');
  }}
>
  Export My Data
</DownloadButton>
```
