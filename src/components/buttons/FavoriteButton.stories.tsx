import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FavoriteButton from "./FavoriteButton";

export const Interactive: Story = () => {
  const [heart, setHeart] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(true);

  return (
    <Stack spacing={2} sx={{ p: 3, maxWidth: 520 }}>
      <Typography variant="h6">FavoriteButton</Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <FavoriteButton
          favoriteType="heart"
          isFavorited={heart}
          onToggle={(next) => setHeart(next)}
          showTooltip
        />
        <Typography variant="body2">heart: {String(heart)}</Typography>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <FavoriteButton
          favoriteType="bookmark"
          isFavorited={bookmark}
          onToggle={(next) => setBookmark(next)}
          tooltipText={{
            favorited: "Remove bookmark",
            unfavorited: "Add bookmark",
          }}
        />
        <Typography variant="body2">bookmark: {String(bookmark)}</Typography>
      </Stack>
    </Stack>
  );
};

Interactive.storyName = "Interactive";
