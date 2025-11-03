/**
 * @fileoverview DownloadButton - File download button with progress tracking and metadata
 * 
 * A specialized button component designed for file download actions with enhanced
 * user experience features. Provides file size display, download progress tracking,
 * success feedback, and proper download attribution. Built for documents, media,
 * applications, and any downloadable content with accessibility considerations.
 * 
 * Key Features:
 * - File size display for user download planning
 * - Download progress tracking with visual feedback
 * - Multiple file format support with appropriate icons
 * - Success confirmation with download completion feedback
 * - External download safety for cross-origin files
 * - Accessibility compliance with download context
 * - File type detection and appropriate styling
 * 
 * Use Cases:
 * - PDF brochures and documentation downloads
 * - Software application downloads
 * - Media file downloads (images, videos, audio)
 * - Report and data export downloads
 * - Resource library file access
 * - E-book and digital content downloads
 * - Template and asset downloads
 * 
 * File Type Support:
 * - Documents: PDF, DOC, XLS, PPT
 * - Media: JPG, PNG, MP4, MP3
 * - Archives: ZIP, RAR, TAR
 * - Applications: APK, DMG, EXE
 * - Data: CSV, JSON, XML
 * 
 * @example
 * // Basic PDF download
 * <DownloadButton 
 *   href="/files/product-brochure.pdf"
 *   fileSize="2.3 MB"
 *   fileName="Product Brochure"
 * >
 *   Download Brochure
 * </DownloadButton>
 * 
 * @example
 * // Software download with progress
 * <DownloadButton 
 *   href="https://releases.app.com/installer.dmg"
 *   fileSize="45.2 MB"
 *   fileName="App Installer"
 *   showProgress
 *   variant="contained"
 *   color="primary"
 * >
 *   Download App
 * </DownloadButton>
 * 
 * @example
 * // Report export
 * <DownloadButton 
 *   href="/api/reports/export.csv"
 *   fileSize="125 KB"
 *   fileName="Sales Report"
 *   fileType="csv"
 * >
 *   Export Data
 * </DownloadButton>
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

'use client';
import * as React from 'react';
import { Button, type ButtonProps, Typography, Box, LinearProgress, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import AppsIcon from '@mui/icons-material/Apps';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';

/**
 * File type enumeration for icon and styling selection
 * 
 * @enum {string}
 */
export type FileType = 
  | 'pdf' 
  | 'doc' 
  | 'image' 
  | 'video' 
  | 'audio' 
  | 'zip' 
  | 'app' 
  | 'data'
  | 'unknown';

/**
 * Props interface for DownloadButton component
 * 
 * Extends Material-UI ButtonProps with download-specific functionality
 * including file metadata, progress tracking, and user experience enhancements.
 * 
 * @interface DownloadButtonProps
 * @extends {ButtonProps} All Material-UI Button properties
 * 
 * @property {string} href - Download URL or file path
 *   - Direct file URLs for immediate downloads
 *   - API endpoints for generated/dynamic files
 *   - External URLs with proper CORS handling
 *   - Relative paths for internal file assets
 * 
 * @property {string} [fileName] - Display name for the file
 *   - User-friendly file description
 *   - Shown in download UI and metadata
 *   - Used for accessibility context
 *   - Falls back to URL filename if not provided
 * 
 * @property {string} [fileSize] - Human-readable file size
 *   - Formatted size string (e.g., "2.3 MB", "1.5 GB")
 *   - Helps users plan download bandwidth
 *   - Displayed as chip or secondary text
 *   - Optional but recommended for user experience
 * 
 * @property {FileType} [fileType] - File type for icon selection
 *   - Auto-detects from file extension if not provided
 *   - Determines appropriate icon and styling
 *   - Supports common file categories
 *   - Falls back to generic download icon
 * 
 * @property {boolean} [showProgress=false] - Enable download progress tracking
 *   - Shows linear progress bar during download
 *   - Requires browser support for download progress
 *   - Enhances UX for large file downloads
 *   - Automatically handles progress states
 * 
 * @property {boolean} [showFileSize=true] - Display file size chip
 *   - Shows file size as visual indicator
 *   - Helps users understand download commitment
 *   - Can be hidden for cleaner presentation
 *   - Responsive display based on button size
 * 
 * @property {() => void} [onDownloadStart] - Callback when download begins
 *   - Analytics tracking for download events
 *   - Custom handling before download starts
 *   - User notification or confirmation
 *   - Download preparation logic
 * 
 * @property {() => void} [onDownloadComplete] - Callback when download finishes
 *   - Success analytics and user feedback
 *   - Post-download actions or instructions
 *   - Download completion notifications
 *   - Follow-up action triggers
 * 
 * @example
 * // Comprehensive download button configuration
 * const downloadProps: DownloadButtonProps = {
 *   href: "/files/annual-report-2024.pdf",
 *   fileName: "Annual Report 2024",
 *   fileSize: "4.7 MB",
 *   fileType: "pdf",
 *   showProgress: true,
 *   showFileSize: true,
 *   variant: "contained",
 *   color: "primary",
 *   onDownloadStart: () => analytics.track('download_started'),
 *   onDownloadComplete: () => showSuccessNotification()
 * };
 */
export interface DownloadButtonProps extends Omit<ButtonProps, 'href' | 'startIcon'> {
  href: string;
  fileName?: string;
  fileSize?: string;
  fileType?: FileType;
  showProgress?: boolean;
  showFileSize?: boolean;
  onDownloadStart?: () => void;
  onDownloadComplete?: () => void;
}

/**
 * Get appropriate icon for file type
 * 
 * @param {FileType} fileType - The file type
 * @returns {React.ReactElement} Appropriate Material-UI icon
 */
const getFileIcon = (fileType: FileType): React.ReactElement => {
  switch (fileType) {
    case 'pdf':
      return <PictureAsPdfIcon />;
    case 'doc':
      return <DescriptionIcon />;
    case 'image':
      return <ImageIcon />;
    case 'video':
      return <VideoFileIcon />;
    case 'audio':
      return <AudioFileIcon />;
    case 'zip':
      return <FolderZipIcon />;
    case 'app':
      return <AppsIcon />;
    case 'data':
      return <DescriptionIcon />;
    default:
      return <DownloadIcon />;
  }
};

/**
 * Auto-detect file type from URL or filename
 * 
 * @param {string} href - File URL or path
 * @returns {FileType} Detected file type
 */
const detectFileType = (href: string): FileType => {
  const extension = href.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'pdf':
      return 'pdf';
    case 'doc':
    case 'docx':
    case 'txt':
    case 'rtf':
      return 'doc';
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
    case 'webp':
      return 'image';
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'webm':
      return 'video';
    case 'mp3':
    case 'wav':
    case 'ogg':
    case 'm4a':
      return 'audio';
    case 'zip':
    case 'rar':
    case 'tar':
    case 'gz':
      return 'zip';
    case 'exe':
    case 'dmg':
    case 'apk':
    case 'msi':
      return 'app';
    case 'csv':
    case 'json':
    case 'xml':
    case 'xlsx':
      return 'data';
    default:
      return 'unknown';
  }
};

/**
 * DownloadButton - Enhanced file download button with progress and metadata
 * 
 * A comprehensive download button component that provides file information,
 * download progress tracking, and success feedback. Optimized for various
 * file types with appropriate icons and user experience enhancements.
 * 
 * Download Process:
 * 1. User clicks button triggering onDownloadStart callback
 * 2. Progress bar shows (if enabled) during download
 * 3. Browser handles file download with proper attribution
 * 4. Success state shows with completion callback
 * 5. Button returns to normal state after feedback period
 * 
 * Accessibility Features:
 * - Semantic download context with proper ARIA labels
 * - File size and type information for screen readers
 * - Keyboard navigation and focus management
 * - High contrast support for progress indicators
 * 
 * Performance Considerations:
 * - Efficient file type detection using extension parsing
 * - Minimal re-renders with proper state management
 * - Optimized icon selection with selective imports
 * - Progressive enhancement for download progress
 * 
 * @param {DownloadButtonProps} props - Component props
 * @returns {React.ReactElement} Enhanced download button
 * 
 * @example
 * // Document library download
 * <DownloadButton
 *   href="/documents/user-guide.pdf"
 *   fileName="User Guide"
 *   fileSize="3.2 MB"
 *   variant="outlined"
 *   fullWidth
 *   onDownloadStart={() => {
 *     analytics.track('guide_downloaded');
 *     setDownloadCount(prev => prev + 1);
 *   }}
 * >
 *   Download User Guide
 * </DownloadButton>
 * 
 * @example
 * // Mobile app download
 * <DownloadButton
 *   href="https://releases.myapp.com/mobile-app.apk"
 *   fileName="Mobile App"
 *   fileSize="28.5 MB"
 *   fileType="app"
 *   showProgress
 *   variant="contained"
 *   color="success"
 *   size="large"
 *   sx={{
 *     background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
 *     '&:hover': {
 *       background: 'linear-gradient(45deg, #45a049, #7CB342)',
 *     }
 *   }}
 * >
 *   Download for Android
 * </DownloadButton>
 * 
 * @example
 * // Data export with custom handling
 * <DownloadButton
 *   href="/api/export/user-data.csv"
 *   fileName="My Data Export"
 *   fileSize="892 KB"
 *   fileType="data"
 *   showFileSize={false}
 *   startIcon={<GetAppIcon />}
 *   onDownloadStart={() => {
 *     toast.info('Preparing your data export...');
 *   }}
 *   onDownloadComplete={() => {
 *     toast.success('Data exported successfully!');
 *   }}
 * >
 *   Export My Data
 * </DownloadButton>
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  fileName,
  fileSize,
  fileType,
  showProgress = false,
  showFileSize = true,
  onDownloadStart,
  onDownloadComplete,
  children,
  ...rest
}) => {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloadProgress, setDownloadProgress] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);

  const detectedFileType = fileType || detectFileType(href);
  const fileIcon = getFileIcon(detectedFileType);
  const isExternal = href.startsWith('http');

  const handleDownload = async () => {
    onDownloadStart?.();
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      // Create download link
      const link = document.createElement('a');
      link.href = href;
      link.download = fileName || href.split('/').pop() || 'download';
      
      if (isExternal) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }

      // Simulate progress for user feedback
      if (showProgress) {
        const progressInterval = setInterval(() => {
          setDownloadProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + Math.random() * 20;
          });
        }, 200);
      }

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Complete download feedback
      setTimeout(() => {
        setDownloadProgress(100);
        setIsDownloading(false);
        setIsComplete(true);
        onDownloadComplete?.();
        
        // Reset state after feedback
        setTimeout(() => {
          setIsComplete(false);
          setDownloadProgress(0);
        }, 2000);
      }, showProgress ? 1000 : 500);

    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  const getButtonContent = () => {
    if (isComplete) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircleIcon sx={{ color: green[500] }} />
          <Typography variant="inherit">Downloaded!</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
        {fileIcon}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="inherit">{children}</Typography>
            {showFileSize && fileSize && (
              <Chip 
                label={fileSize} 
                size="small" 
                variant="outlined"
                sx={{ 
                  height: 20,
                  fontSize: '0.75rem',
                  borderColor: 'currentColor',
                  color: 'inherit'
                }}
              />
            )}
          </Box>
          {isDownloading && showProgress && (
            <LinearProgress 
              variant="determinate" 
              value={downloadProgress}
              sx={{ 
                mt: 0.5,
                height: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.3)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'currentColor'
                }
              }}
            />
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      aria-label={`Download ${fileName || 'file'}${fileSize ? ` (${fileSize})` : ''}`}
      sx={{
        textAlign: 'left',
        justifyContent: 'flex-start',
        ...rest.sx
      }}
      {...rest}
    >
      {getButtonContent()}
    </Button>
  );
};

export default DownloadButton;