import { fireEvent, render, screen } from '@testing-library/react';
import { buildPreviewImage } from '../../__test/search-results/search-result.test-data.ts';
import HotelImage from './HotelImage.tsx';

describe(`HotelImage component`, () => {
  it('should show loading skeleton when image is not loaded', () => {
    render(<HotelImage image={buildPreviewImage({ url: 'does-not-exist' })} />);

    expect(screen.getByTestId('hotel-image-loading-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('hotel-image')).not.toBeVisible();
  });

  it('should show image once image has been loaded', () => {
    render(<HotelImage image={buildPreviewImage()} />);

    const image = screen.getByTestId('hotel-image');
    fireEvent.load(image); // trigger image loading

    expect(image).toBeVisible();
    expect(screen.queryByTestId('hotel-image-loading-skeleton')).toBeNull();
  });

  it('should not show promotion label if not provided', () => {
    render(<HotelImage image={buildPreviewImage()} />);

    const image = screen.getByTestId('hotel-image');
    fireEvent.load(image); // trigger image loading

    expect(screen.queryByTestId('hotel-image-promotion-label')).toBeNull();
  });

  it('should show promotion label when provided', () => {
    render(<HotelImage image={buildPreviewImage()} promotionLabel="special offer" />);

    const image = screen.getByTestId('hotel-image');
    fireEvent.load(image); // trigger image loading

    const promotionLabel = screen.getByTestId('hotel-image-promotion-label');
    expect(promotionLabel).toBeInTheDocument();
    expect(promotionLabel).toHaveTextContent('special offer');
  });
});
