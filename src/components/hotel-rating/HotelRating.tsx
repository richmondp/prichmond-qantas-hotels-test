import { Rating } from '../../types/search-result.ts';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import React, { ReactNode, useMemo } from 'react';
import { Box } from '@mui/material';

interface Props {
  rating: Rating;
}

const MAX_RANKING = 5;

const HotelRating = ({ rating: { ratingValue, ratingType } }: Props) => {
  const ratingIcons = useMemo(() => {
    const FullIcon = ratingType === 'star' ? StarIcon : CircleIcon;
    const HalfIcon = ratingType === 'star' ? StarHalfIcon : CircleOutlinedIcon;
    const fullStars = Math.floor(ratingValue);
    const halfStars = ratingValue < MAX_RANKING ? Math.round(ratingValue - fullStars) : 0;
    const stars: ReactNode[] = [];
    for (let i = 0; i < MAX_RANKING; i++) {
      if (i < fullStars) {
        stars.push(
          <FullIcon data-testid={`full-rating-icon-${ratingType}`} style={{ fontSize: '1em', color: 'gold' }} />
        );
      } else if (i === fullStars && halfStars === 1) {
        stars.push(
          <HalfIcon data-testid={`half-rating-icon-${ratingType}`} style={{ fontSize: '1em', color: 'gold' }} />
        );
      } else {
        stars.push(
          <FullIcon data-testid={`empty-rating-icon-${ratingType}`} style={{ fontSize: '1em', color: 'lightgray' }} />
        );
      }
    }
    return stars;
  }, [ratingValue, ratingType]);

  return (
    <Box data-testid="hotel-rating-container" display="flex">
      {ratingIcons.map((station, index) => (
        <React.Fragment key={index}> {station} </React.Fragment>
      ))}
    </Box>
  );
};

export default HotelRating;
