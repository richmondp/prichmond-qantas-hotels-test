import { render, screen } from '@testing-library/react';
import SearchResultsPage from './SearchResultsPage.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { buildSearchResult } from '../../__test/search-results/search-result.test-data.ts';

vi.mock('./useSearchResults.hook.ts');
const mockUseSearchResults = vi.mocked(useSearchResults);

describe('SearchResultsPage', () => {
  afterEach(() => {
    mockUseSearchResults.mockReset();
  });

  describe(`no results returned`, () => {
    beforeEach(() => {
      mockUseSearchResults.mockReturnValueOnce({ data: [] });
    });

    it('should not render qantas logo', () => {
      render(<SearchResultsPage />);

      expect(screen.queryByTestId('logo-image')).toBeNull();
    });

    it('should only display no results message when search results are empty', () => {
      mockUseSearchResults.mockReturnValueOnce({ data: [] });

      render(<SearchResultsPage />);

      expect(screen.getByTestId('no-search-results-container')).toBeInTheDocument();
      expect(screen.queryByTestId('search-results-content')).toBeNull();
    });
  });

  describe(`when search results are returned`, () => {
    beforeEach(() => {
      mockUseSearchResults.mockReturnValueOnce({ data: [buildSearchResult()] });
    });

    it('should render qantas logo', () => {
      render(<SearchResultsPage />);

      expect(screen.getByTestId('logo-image')).toBeInTheDocument();
    });

    it('should display search results content when at least 1 search result returned', () => {
      render(<SearchResultsPage />);

      expect(screen.queryByTestId('no-search-results-container')).toBeNull();
      expect(screen.getByTestId('search-results-content')).toBeInTheDocument();
    });
  });
});
