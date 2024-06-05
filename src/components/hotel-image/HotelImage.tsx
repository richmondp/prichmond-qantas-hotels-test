import { Box, Skeleton, Typography } from '@mui/material';
import { PreviewImage } from '../../types/search-result.ts';
import { useState } from 'react';

interface Props {
  image: PreviewImage;
  promotionLabel?: string;
}

const HotelImage = ({ image, promotionLabel }: Props) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const handleLoadingImage = () => {
    setLoadingImage(false);
  };
  return (
    <Box display="flex" alignItems="center">
      {loadingImage && (
        <Skeleton data-testid="hotel-image-loading-skeleton" variant="rectangular" width="145px" height="125px" />
      )}
      <Box sx={{ position: 'relative' }}>
        {!loadingImage && promotionLabel && (
          <Box
            data-testid="hotel-image-promotion-label"
            sx={{ position: 'absolute', backgroundColor: 'white', top: '15px', paddingX: 1, maxWidth: '100px' }}
          >
            <Typography variant="caption" color="red">
              <strong>{promotionLabel}</strong>
            </Typography>
          </Box>
        )}
        <img
          data-testid="hotel-image"
          src={image.url}
          alt={image.caption}
          onLoad={handleLoadingImage}
          style={{ backgroundColor: 'lightyellow', ...(loadingImage && { display: 'none' }) }}
        />
      </Box>
    </Box>
  );
};

export default HotelImage;
