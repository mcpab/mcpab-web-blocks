/**
 * @fileoverview FavoriteButton - Toggle favorite/bookmark button with state management
 * 
 * A stateful toggle button component for favoriting, bookmarking, or liking content.
 * Features smooth animations, state persistence, and accessibility compliance for
 * optimal user engagement in content discovery and personalization features.
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

'use client';
import * as React from 'react';
import { IconButton, type IconButtonProps, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export type FavoriteType = 'heart' | 'bookmark' | 'like';

export interface FavoriteButtonProps extends Omit<IconButtonProps, 'onClick'> {
  isFavorited?: boolean;
  onToggle: (isFavorited: boolean, itemId?: string) => void;
  itemId?: string;
  favoriteType?: FavoriteType;
  showTooltip?: boolean;
  tooltipText?: { favorited: string; unfavorited: string };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorited = false,
  onToggle,
  itemId,
  favoriteType = 'heart',
  showTooltip = true,
  tooltipText,
  sx,
  ...rest
}) => {
  const [favorited, setFavorited] = React.useState(isFavorited);

  React.useEffect(() => {
    setFavorited(isFavorited);
  }, [isFavorited]);

  const getIcons = () => {
    switch (favoriteType) {
      case 'bookmark':
        return {
          filled: <BookmarkIcon />,
          outlined: <BookmarkBorderIcon />,
          color: '#1976d2'
        };
      case 'like':
        return {
          filled: <ThumbUpIcon />,
          outlined: <ThumbUpOutlinedIcon />,
          color: '#1976d2'
        };
      default:
        return {
          filled: <FavoriteIcon />,
          outlined: <FavoriteBorderIcon />,
          color: '#f44336'
        };
    }
  };

  const getTooltipText = () => {
    if (tooltipText) {
      return favorited ? tooltipText.favorited : tooltipText.unfavorited;
    }

    switch (favoriteType) {
      case 'bookmark':
        return favorited ? 'Remove bookmark' : 'Add bookmark';
      case 'like':
        return favorited ? 'Unlike' : 'Like';
      default:
        return favorited ? 'Remove from favorites' : 'Add to favorites';
    }
  };

  const handleToggle = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);
    onToggle(newFavorited, itemId);
  };

  const icons = getIcons();
  const currentIcon = favorited ? icons.filled : icons.outlined;

  const button = (
    <IconButton
      onClick={handleToggle}
      aria-label={getTooltipText()}
      sx={{
        color: favorited ? icons.color : 'action.active',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
          color: icons.color,
        },
        ...sx
      }}
      {...rest}
    >
      {currentIcon}
    </IconButton>
  );

  if (showTooltip) {
    return (
      <Tooltip title={getTooltipText()}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default FavoriteButton;