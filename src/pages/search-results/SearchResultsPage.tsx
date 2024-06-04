import PageLayout from '../../components/layout/PageLayout.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { Box, FormControl, InputLabel, List, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import SearchResultListItem from './SearchResultListItem.tsx';
import { useEffect, useState } from 'react';
import { SortOption, sortOptionReferenceData } from '../../types/search-result-reference-data.ts';
import { SearchResult } from '../../types/search-result.ts';
import { orderBy } from 'lodash-es';

const SearchResultsPage = () => {
  const [filterOption, setFilterOption] = useState<SortOption>(SortOption.PRICE_DESC);
  const [orderedSearchResults, setOrderedSearchResults] = useState<ReadonlyArray<SearchResult>>([]);
  const { data: searchResults } = useSearchResults();

  const handleChange = (event: SelectChangeEvent) => {
    setFilterOption(event.target.value as SortOption);
  };

  useEffect(() => {
    if (searchResults.length) {
      setOrderedSearchResults(
        orderBy(
          searchResults,
          (searchResult) => searchResult.offer.displayPrice.amount,
          filterOption === SortOption.PRICE_DESC ? 'desc' : 'asc'
        )
      );
    } else {
      setOrderedSearchResults(searchResults);
    }
  }, [filterOption, searchResults]);

  if (!orderedSearchResults?.length) {
    return (
      <Box data-testid="no-search-results-container">
        <Typography>No search results</Typography>
      </Box>
    );
  }

  return (
    <PageLayout>
      <Box data-testid="search-results-content">
        <Box data-test-id="search-result-summary" display="flex" justifyContent="space-between" alignItems="baseline">
          <Typography>
            <strong>{orderedSearchResults.length}</strong> <em>hotels in</em> <strong>Sydney</strong>.
          </Typography>

          <FormControl variant="standard" sx={{ m: 1 }} size="medium">
            <InputLabel id="sort-option-select-label">Sort By</InputLabel>
            <Select
              data-testid="sort-option-select"
              labelId="sort-option-select-label"
              id="sort-option-select"
              value={filterOption}
              label="Sort by"
              onChange={handleChange}
            >
              {Object.entries(sortOptionReferenceData).map(([key, label]) => (
                <MenuItem key={key} value={key}>
                  <Typography>{label}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <List data-test-id="search-results-list">
          {orderedSearchResults.map((searchResult) => (
            <SearchResultListItem key={searchResult.id} item={searchResult} data-testid="search-result-list-item" />
          ))}
        </List>
      </Box>
    </PageLayout>
  );
};

export default SearchResultsPage;
