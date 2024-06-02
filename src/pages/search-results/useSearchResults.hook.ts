import results from './search-result-data.json' assert { type: 'json' };
import { useEffect, useState } from 'react';
import { SearchResult } from '../../types/search-result.ts';

export const useSearchResults = () => {
  const [data, setData] = useState<ReadonlyArray<SearchResult>>([]);
  useEffect(() => {
    // casting here for now
    setData(results.results as SearchResult[]);
  }, []);
  return { data };
};
