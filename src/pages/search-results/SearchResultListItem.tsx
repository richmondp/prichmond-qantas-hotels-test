import { Box, Divider, ListItem, Typography } from '@mui/material';
import { SearchResult } from '../../types/search-result.ts';
import HotelPrice from '../../components/hotel-price/HotelPrice.tsx';
import HotelRating from '../../components/hotel-rating/HotelRating.tsx';

interface Props {
  item: SearchResult;
}

const SearchResultListItem = ({ item }: Props) => {
  return (
    <ListItem data-testid="search-result-list-item" sx={{ padding: 0 }}>
      <Box display="flex" flex={1} gap={2} sx={{ paddingY: 1 }}>
        <img src={item.property.previewImage.url} />
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
              <Box>
                <Box>{item.offer.name}</Box>
                <Box>{item.offer.cancellationOption.cancellationType}</Box>
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
