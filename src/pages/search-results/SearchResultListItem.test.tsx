import { render, screen } from '@testing-library/react';
import SearchResultListItem from './SearchResultListItem.tsx';
import { buildOffer, buildProperty, buildSearchResult } from '../../__test/search-results/search-result.test-data.ts';

describe(`SearchResultListItem component`, () => {
  it('should display search result image', () => {
    render(<SearchResultListItem item={buildSearchResult()} />);

    expect(screen.getByTestId('hotel-image-container')).toBeInTheDocument();
  });

  it('should display hotel name', () => {
    render(<SearchResultListItem item={buildSearchResult({ property: buildProperty({ title: 'Test Hotel' }) })} />);

    const hotelName = screen.getByTestId('search-result-hotel-name');
    expect(hotelName).toBeInTheDocument();
    expect(hotelName).toHaveTextContent('Test Hotel');
  });

  it('should display hotel address', () => {
    render(
      <SearchResultListItem
        item={buildSearchResult({ property: buildProperty({ address: ['Street', 'Suburb', 'State'] }) })}
      />
    );

    const hotelAddress = screen.getByTestId('search-result-address');
    expect(hotelAddress).toBeInTheDocument();
    expect(hotelAddress).toHaveTextContent('Street, Suburb, State');
  });

  it('should display star rating', () => {
    render(<SearchResultListItem item={buildSearchResult()} />);

    expect(screen.getByTestId('hotel-rating-container')).toBeInTheDocument();
  });

  it('should display offer name', () => {
    render(<SearchResultListItem item={buildSearchResult({ offer: buildOffer({ name: 'Test Offer Name' }) })} />);

    const hotelAddress = screen.getByTestId('search-result-offer-name');
    expect(hotelAddress).toBeInTheDocument();
    expect(hotelAddress).toHaveTextContent('Test Offer Name');
  });

  it('should display cancellation policy when cancellation type is FREE_CANCELLATION', () => {
    render(
      <SearchResultListItem
        item={buildSearchResult({
          offer: buildOffer({ cancellationOption: { cancellationType: 'FREE_CANCELLATION' } }),
        })}
      />
    );

    const hotelAddress = screen.getByTestId('search-result-cancellation-policy');
    expect(hotelAddress).toBeInTheDocument();
    expect(hotelAddress).toHaveTextContent('Free cancellation');
  });

  it('should display empty string for cancellation policy when cancellation type is NOT_REFUNDABLE', () => {
    render(
      <SearchResultListItem
        item={buildSearchResult({
          offer: buildOffer({ cancellationOption: { cancellationType: 'NOT_REFUNDABLE' } }),
        })}
      />
    );

    const hotelAddress = screen.getByTestId('search-result-cancellation-policy');
    expect(hotelAddress).toBeInTheDocument();
    expect(hotelAddress).toHaveTextContent('');
  });

  it('should display hotel price', () => {
    render(<SearchResultListItem item={buildSearchResult()} />);

    expect(screen.getByTestId('hotel-price-container')).toBeInTheDocument();
  });
});
