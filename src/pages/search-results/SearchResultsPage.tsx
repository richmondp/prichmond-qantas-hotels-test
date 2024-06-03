import PageLayout from '../../components/layout/PageLayout.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { Box, List, Typography } from '@mui/material';
import SearchResultListItem from './SearchResultListItem.tsx';

const SearchResultsPage = () => {
  const { data: searchResults } = useSearchResults();

  if (!searchResults?.length) {
    return (
      <Box data-testid="no-search-results-container">
        <Typography>No search results</Typography>
      </Box>
    );
  }

  return (
    <PageLayout>
      <Box data-testid="search-results-content">
        <Box display="flex" data-test-id="search-result-summary">
          <Typography>{searchResults.length} hotels in Sydney</Typography>
        </Box>
        <List data-test-id="search-results-list">
          {searchResults.map((searchResult) => (
            <SearchResultListItem key={searchResult.id} item={searchResult} />
          ))}
        </List>
      </Box>
    </PageLayout>
  );
};

export default SearchResultsPage;
