import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Thumb = styled('img')(({ theme }) => ({
  width: '100%',
  height: 80,
  objectFit: 'cover',
  borderRadius: 8,
  cursor: 'pointer',
  border: '2px solid transparent',
  transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 420,
  objectFit: 'contain',
  borderRadius: 12,
  background: theme.palette.mode === 'dark' ? '#0b0b0b' : '#fafafa',
}));

export default function ProductCarousel({
  images = [],            // [{ src, alt }]
  initialIndex = 0,
  onChange,               // (newIndex) => void
  showMaxThumbs = 4,
}) {
  const [index, setIndex] = React.useState(
    Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0))
  );

  const total = images.length;
  const current = images[index];

  const goPrev = React.useCallback(() => {
    if (!total) return;
    const next = (index - 1 + total) % total;
    setIndex(next);
    onChange?.(next);
  }, [index, total, onChange]);

  const goNext = React.useCallback(() => {
    if (!total) return;
    const next = (index + 1) % total;
    setIndex(next);
    onChange?.(next);
  }, [index, total, onChange]);

  const selectIndex = (i) => {
    setIndex(i);
    onChange?.(i);
  };

  // Keyboard navigation
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  const visibleThumbs = images.slice(0, showMaxThumbs);

  return (
    <Stack
      ref={containerRef}
      tabIndex={0}
      spacing={1.5}
      sx={{
        outline: 'none',
        width: '100%',
        maxWidth: 680,
        mx: 'auto',
      }}
    >
      {/* Main image with arrows */}
      <Box sx={{ position: 'relative' }}>
        {current ? (
          <>
            <MainImage
              src={current.src}
              alt={current.alt ?? `Image ${index + 1}`}
              loading="eager"
              draggable={false}
              style={{ userSelect: 'none' }}
            />

            {/* Left arrow */}
            {total > 1 && (
              <IconButton
                onClick={goPrev}
                aria-label="Previous image"
                size="small"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 8,
                  transform: 'translateY(-50%)',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
            )}

            {/* Right arrow */}
            {total > 1 && (
              <IconButton
                onClick={goNext}
                aria-label="Next image"
                size="small"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 8,
                  transform: 'translateY(-50%)',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            )}

            {/* Index indicator */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                px: 1,
                py: 0.25,
                borderRadius: 1,
                bgcolor: 'rgba(0,0,0,0.55)',
              }}
            >
              <Typography variant="caption" color="#fff">
                {index + 1} / {total || 1}
              </Typography>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              height: 420,
              borderRadius: 2,
              bgcolor: 'action.hover',
            }}
          />
        )}
      </Box>

      {/* Thumbnails (4) */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(visibleThumbs.length || 4, 4)}, 1fr)`,
          gap: 1,
        }}
      >
        {visibleThumbs.map((img, i) => {
          const isActive = i === index;
          return (
            <Box key={i} sx={{ position: 'relative' }}>
              <Thumb
                src={img.src}
                alt={img.alt ?? `Thumb ${i + 1}`}
                onClick={() => selectIndex(i)}
                style={{
                  borderColor: isActive ? '#ff9800' : 'transparent',
                  boxShadow: isActive ? '0 0 0 2px rgba(255,152,0,0.35) inset' : 'none',
                }}
              />
            </Box>
          );
        })}

        {/* If there are more than 4, show a "+N" tile that jumps to next */}
        {total > showMaxThumbs && (
          <Box
            onClick={goNext}
            sx={{
              height: 80,
              borderRadius: 2,
              bgcolor: 'action.hover',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              '&:hover': { filter: 'brightness(0.95)' },
            }}
          >
            <Typography variant="body2" fontWeight={700}>
              +{total - showMaxThumbs}
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
