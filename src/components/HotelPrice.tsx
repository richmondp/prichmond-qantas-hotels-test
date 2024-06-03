import { Box } from '@mui/material';
import { Amount } from '../types/search-result.ts';

interface Props {
  displayPrice: Amount;
  savings?: Amount | null;
}

const HotelPrice = ({ displayPrice, savings }: Props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box>{displayPrice.amount}</Box>
      {savings?.amount && <Box>{savings.amount}</Box>}
    </Box>
  );
};

export default HotelPrice;
