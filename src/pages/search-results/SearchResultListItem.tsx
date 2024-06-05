import { Box, Divider, ListItem, Typography } from '@mui/material';
import { SearchResult } from '../../types/search-result.ts';
import HotelPrice from '../../components/hotel-price/HotelPrice.tsx';
import HotelRating from '../../components/hotel-rating/HotelRating.tsx';
import { cancellationTypeReferenceData } from '../../types/search-result-reference-data.ts';
import HotelImage from '../../components/hotel-image/HotelImage.tsx';

interface Props {
  item: SearchResult;
}

const SearchResultListItem = ({ item }: Props) => {
  return (
    <ListItem data-testid="search-result-list-item" sx={{ padding: 0 }}>
      <Box display="flex" flex={1} gap={2} sx={{ paddingBottom: 1 }}>
        <HotelImage image={item.property.previewImage} promotionLabel={item.offer.promotion.title} />
        <Box flex={1}>
          <Divider />
          <Box display="flex" flexDirection="column" sx={{ paddingTop: 1 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography
                data-testid="search-result-hotel-name"
                sx={{ maxWidth: '260px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                variant="body1"
                color="text.primary"
              >
                {item.property.title}
              </Typography>
              <HotelRating rating={item.property.rating} />
            </Box>
            <Typography data-testid="search-result-address" variant="caption">
              {item.property.address.join(', ')}
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Typography data-testid="search-result-offer-name" variant="caption" color="red">
                  <u>{item.offer.name}</u>
                </Typography>
                <Typography data-testid="search-result-cancellation-policy" variant="caption" color="green">
                  {cancellationTypeReferenceData[item.offer.cancellationOption.cancellationType]}
                </Typography>
              </Box>
              <Box>
                <HotelPrice displayPrice={item.offer.displayPrice} savings={item.offer.savings} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default SearchResultListItem;
