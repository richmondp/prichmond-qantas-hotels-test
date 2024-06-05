import { render, screen } from '@testing-library/react';
import HotelPrice from './HotelPrice.tsx';
import { buildAmount } from '../../__test/search-results/search-result.test-data.ts';

describe('HotelPrice', () => {
  it('should show nightly rate summary given for currency', () => {
    render(<HotelPrice displayPrice={buildAmount({ currency: 'NZD' })} />);

    const summary = screen.getByTestId('hotel-price-summary');
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('1 night total (NZD)');
  });

  it('should show display amount', () => {
    render(<HotelPrice displayPrice={buildAmount({ amount: 412 })} />);

    const displayPriceAmount = screen.getByTestId('hotel-display-amount');
    expect(displayPriceAmount).toBeInTheDocument();
    expect(displayPriceAmount).toHaveTextContent('$412');
  });

  it('should show display amount with decimal values', () => {
    render(<HotelPrice displayPrice={buildAmount({ amount: 412.57343 })} />);

    const displayPriceAmount = screen.getByTestId('hotel-display-amount');
    expect(displayPriceAmount).toBeInTheDocument();
    expect(displayPriceAmount).toHaveTextContent('$412.57');
  });

  it('should not show savings amount when not provided', () => {
    render(<HotelPrice displayPrice={buildAmount()} />);

    const displaySavingsAmount = screen.queryByTestId('hotel-savings-price');
    expect(displaySavingsAmount).toBeNull();
  });

  it('should not show savings amount when null provided', () => {
    render(<HotelPrice displayPrice={buildAmount()} savings={null} />);

    const displaySavingsAmount = screen.queryByTestId('hotel-savings-price');
    expect(displaySavingsAmount).toBeNull();
  });

  it('should show savings amount', () => {
    render(<HotelPrice displayPrice={buildAmount()} savings={buildAmount({ amount: 34 })} />);

    const displaySavingsAmount = screen.getByTestId('hotel-savings-price');
    expect(displaySavingsAmount).toBeInTheDocument();
    expect(displaySavingsAmount).toHaveTextContent('$34~');
  });

  it('should show savings amount with decimals', () => {
    render(<HotelPrice displayPrice={buildAmount()} savings={buildAmount({ amount: 34.235 })} />);

    const displaySavingsAmount = screen.getByTestId('hotel-savings-price');
    expect(displaySavingsAmount).toBeInTheDocument();
    expect(displaySavingsAmount).toHaveTextContent('$34.24~');
  });
});
