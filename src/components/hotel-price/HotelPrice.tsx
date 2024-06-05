import { Box, Stack, Typography } from '@mui/material';
import { Amount } from '../../types/search-result.ts';
import { toCurrencyFormat } from '../../utils/number.ts';

interface Props {
  displayPrice: Amount;
  savings?: Amount | null;
}

const HotelPrice = ({ displayPrice, savings }: Props) => {
  return (
    <Stack>
      <Typography data-testid="hotel-price-summary" variant="caption">
        <strong>1</strong> night total ({displayPrice.currency})
      </Typography>
      <Box
        data-testid="hotel-display-amount"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        sx={{ mb: 1 }}
      >
        <Typography component="sup" variant="body1" sx={{ fontSize: '1em', lineHeight: '70%' }}>
          $
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '2em', lineHeight: '70%' }}>
          {toCurrencyFormat(displayPrice.amount)}
        </Typography>
      </Box>
      {savings?.amount && (
        <Box data-testid="hotel-savings-price" display="flex" justifyContent="flex-end">
          <Typography variant="body1" sx={{ fontSize: '1em' }} color="red">
            Save ${toCurrencyFormat(savings.amount)}~
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default HotelPrice;
