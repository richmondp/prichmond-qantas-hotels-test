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
          <Box sx={{ paddingTop: 1 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography
                flex={0.5}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                variant="body1"
                color="text.primary"
              >
                {item.property.title}
              </Typography>
              <HotelRating rating={item.property.rating} />
            </Box>
            {item.property.address.join(',')}
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Box></Box>
                <Typography variant="caption" color="red">
                  <u>{item.offer.name}</u>
                </Typography>
                <Typography variant="caption" color="green">
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
