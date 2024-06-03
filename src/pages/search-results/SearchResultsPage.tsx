import PageLayout from '../../components/layout/PageLayout.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { Box, List, Typography } from '@mui/material';
import SearchResultListItem from './SearchResultListItem.tsx';

const SearchResultsPage = () => {
  const { data: searchResults } = useSearchResults();

  return (
    <PageLayout>
      <Box display="flex">
        <Typography>{searchResults.length} hotels in Sydney</Typography>
      </Box>
      <List>
        {searchResults.map((searchResult) => (
          <SearchResultListItem key={searchResult.id} item={searchResult} />
        ))}
      </List>
    </PageLayout>
  );
};

export default SearchResultsPage;
