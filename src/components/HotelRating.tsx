import { Box } from '@mui/material';
import { Rating } from '../types/search-result.ts';

interface Props {
  rating: Rating;
}

const HotelRating = ({ rating: { ratingValue } }: Props) => {
  return <Box>{ratingValue}</Box>;
};

export default HotelRating;
