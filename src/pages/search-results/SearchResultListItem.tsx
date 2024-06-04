import { Box, Divider, ListItem, Typography } from '@mui/material';
import { SearchResult } from '../../types/search-result.ts';
import HotelRating from '../../components/HotelRating.tsx';
import HotelPrice from '../../components/HotelPrice.tsx';

interface Props {
  item: SearchResult;
}

const SearchResultListItem = ({ item }: Props) => {
  return (
    <ListItem data-testid="search-result-list-item" sx={{ padding: 0 }}>
      <Box display="flex">
        <img src={item.property.previewImage.url} />
        <Box>
          <Divider />
          <Box display="flex">
            <Typography variant="body1" color="text.primary">
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
    </ListItem>
  );
};

export default SearchResultListItem;
