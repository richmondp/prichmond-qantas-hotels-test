import { render, screen, within } from '@testing-library/react';
import SearchResultsPage from './SearchResultsPage.tsx';
import { useSearchResults } from './useSearchResults.hook.ts';
import { buildAmount, buildOffer, buildSearchResult } from '../../__test/search-results/search-result.test-data.ts';
import { SortOption, sortOptionReferenceData } from '../../types/search-result-reference-data.ts';
import { clickDropDownByTestId, selectDropDownValueByTestId } from '../../__test/test-helpers.ts';

vi.mock('./useSearchResults.hook.ts');
const mockUseSearchResults = vi.mocked(useSearchResults);

describe('SearchResultsPage', () => {
  afterEach(() => {
    mockUseSearchResults.mockReset();
  });

  describe(`no results returned`, () => {
    beforeEach(() => {
      mockUseSearchResults.mockReturnValue({ data: [] });
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
    const getSearchResults = () => screen.getAllByTestId('search-result-list-item');

    it('should render qantas logo', () => {
      mockUseSearchResults.mockReturnValue({ data: [buildSearchResult()] });
      render(<SearchResultsPage />);

      expect(screen.getByTestId('logo-image')).toBeInTheDocument();
    });

    it('should display search results content when at least 1 search result returned', () => {
      mockUseSearchResults.mockReturnValue({ data: [buildSearchResult()] });

      render(<SearchResultsPage />);

      expect(screen.queryByTestId('no-search-results-container')).toBeNull();
      expect(screen.getByTestId('search-results-content')).toBeInTheDocument();
    });

    it('should display search options when user clicks on Sort By Drop down', async () => {
      mockUseSearchResults.mockReturnValue({ data: [buildSearchResult()] });

      render(<SearchResultsPage />);

      await clickDropDownByTestId('sort-option-select');

      expect(screen.getByRole('option', { name: 'Price (high-low)' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Price (low-high)' })).toBeInTheDocument();
    });

    it('should default to display values using sort order high-low', () => {
      mockUseSearchResults.mockReturnValue({
        data: [
          buildSearchResult({ id: 'id-1', offer: buildOffer({ displayPrice: buildAmount({ amount: 100 }) }) }),
          buildSearchResult({ id: 'id-2', offer: buildOffer({ displayPrice: buildAmount({ amount: 300 }) }) }),
          buildSearchResult({ id: 'id-3', offer: buildOffer({ displayPrice: buildAmount({ amount: 200 }) }) }),
        ],
      });

      render(<SearchResultsPage />);

      const listItemAmounts = getSearchResults().map((item) => ({
        amount: within(item).getByTestId('hotel-display-amount').textContent,
      }));

      expect(listItemAmounts).toEqual([{ amount: '$300' }, { amount: '$200' }, { amount: '$100' }]);
    });

    it('should display values using sort order low-high when user selects Price (low-high) option', async () => {
      mockUseSearchResults.mockReturnValue({
        data: [
          buildSearchResult({ id: 'id-1', offer: buildOffer({ displayPrice: buildAmount({ amount: 200 }) }) }),
          buildSearchResult({ id: 'id-2', offer: buildOffer({ displayPrice: buildAmount({ amount: 100 }) }) }),
          buildSearchResult({ id: 'id-3', offer: buildOffer({ displayPrice: buildAmount({ amount: 300 }) }) }),
        ],
      });

      render(<SearchResultsPage />);

      await selectDropDownValueByTestId('sort-option-select', sortOptionReferenceData[SortOption.PRICE_ASC]);

      const listItemAmounts = getSearchResults().map((item) => ({
        amount: within(item).getByTestId('hotel-display-amount').textContent,
      }));

      expect(listItemAmounts).toEqual([{ amount: '$100' }, { amount: '$200' }, { amount: '$300' }]);
    });
  });
});
