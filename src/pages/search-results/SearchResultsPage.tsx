import PageLayout from '../../components/layout/PageLayout.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { Box } from '@mui/material';

const SearchResultsPage = () => {
  const { data: searchResults } = useSearchResults();

  return (
    <PageLayout>
      <Box>
        {searchResults.map((searchResult) => (
          <Box key={searchResult.id}>{searchResult.id}</Box>
        ))}
      </Box>
    </PageLayout>
  );
};

export default SearchResultsPage;
