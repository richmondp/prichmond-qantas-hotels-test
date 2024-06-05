import { render, screen } from '@testing-library/react';
import HotelRating from './HotelRating.tsx';
import { buildRating } from '../../__test/search-results/search-result.test-data.ts';
import { Rating } from '../../types/search-result.ts';

describe('HotelRating', () => {
  const EMPTY_STAR_ICON_TEST_ID = 'empty-rating-icon-star';
  const FULL_STAR_ICON_TEST_ID = 'full-rating-icon-star';
  const HALF_STAR_ICON_TEST_ID = 'half-rating-icon-star';
  const EMPTY_SELF_ICON_TEST_ID = 'empty-rating-icon-self';
  const FULL_SELF_ICON_TEST_ID = 'full-rating-icon-self';
  const HALF_SELF_ICON_TEST_ID = 'half-rating-icon-self';

  describe(`star rating`, () => {
    let starRating: Rating;
    beforeEach(() => {
      starRating = buildRating({ ratingType: 'star' });
    });

    it('should only show 5 empty star icons when rating is 0', () => {
      starRating.ratingValue = 0;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 empty star icons when rating is negative', () => {
      starRating.ratingValue = -3;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 full star icons when rating is 5', () => {
      starRating.ratingValue = 5;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 full star icons when rating is above 5', () => {
      starRating.ratingValue = 12;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(0);
    });

    it('should show full star icons matching the ratingValue and empty star icons for the remainder when ratingValue is a whole number less than 5', () => {
      starRating.ratingValue = 3;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(2);
    });

    it('should show full star icons matching a rounded ratingValue and empty star icons for the remainder when ratingValue has a partial rating less than 0.5', () => {
      starRating.ratingValue = 3.49;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(2);
    });

    it('should show full star icons matching a rounded ratingValue, one half star icon  and empty star icons for the remainder when ratingValue has a partial rating of 0.5', () => {
      starRating.ratingValue = 3.5;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(1);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(1);
    });

    it('should show full star icons matching a rounded ratingValue, one half star icon  and empty star icons for the remainder when ratingValue has a partial rating greater than 0.5', () => {
      starRating.ratingValue = 2.99;

      render(<HotelRating rating={starRating} />);

      expect(screen.queryAllByTestId(FULL_STAR_ICON_TEST_ID).length).toBe(2);
      expect(screen.queryAllByTestId(HALF_STAR_ICON_TEST_ID).length).toBe(1);
      expect(screen.queryAllByTestId(EMPTY_STAR_ICON_TEST_ID).length).toBe(2);
    });

    it('should display half rating directly after full rating icons', () => {
      starRating.ratingValue = 2.5;

      render(<HotelRating rating={starRating} />);

      const allStarIcons = screen.queryAllByTestId(/^.*-rating-icon-star/);
      expect(allStarIcons.length).toBe(5);
      expect(allStarIcons[0].getAttribute('data-testid')).toBe('full-rating-icon-star');
      expect(allStarIcons[1].getAttribute('data-testid')).toBe('full-rating-icon-star');
      expect(allStarIcons[2].getAttribute('data-testid')).toBe('half-rating-icon-star');
      expect(allStarIcons[3].getAttribute('data-testid')).toBe('empty-rating-icon-star');
      expect(allStarIcons[4].getAttribute('data-testid')).toBe('empty-rating-icon-star');
    });
  });

  describe(`self rating`, () => {
    let selfRating: Rating;
    beforeEach(() => {
      selfRating = buildRating({ ratingType: 'self' });
    });

    it('should only show 5 empty star icons when rating is 0', () => {
      selfRating.ratingValue = 0;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 empty star icons when rating is negative', () => {
      selfRating.ratingValue = -3;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 full star icons when rating is 5', () => {
      selfRating.ratingValue = 5;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(0);
    });

    it('should only show 5 full star icons when rating is above 5', () => {
      selfRating.ratingValue = 12;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(5);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(0);
    });

    it('should show full star icons matching the ratingValue and empty star icons for the remainder when ratingValue is a whole number less than 5', () => {
      selfRating.ratingValue = 3;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(2);
    });

    it('should show full star icons matching a rounded ratingValue and empty star icons for the remainder when ratingValue has a partial rating less than 0.5', () => {
      selfRating.ratingValue = 3.49;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(0);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(2);
    });

    it('should show full star icons matching a rounded ratingValue, one half star icon  and empty star icons for the remainder when ratingValue has a partial rating of 0.5', () => {
      selfRating.ratingValue = 3.5;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(3);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(1);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(1);
    });

    it('should show full star icons matching a rounded ratingValue, one half star icon  and empty star icons for the remainder when ratingValue has a partial rating greater than 0.5', () => {
      selfRating.ratingValue = 2.99;

      render(<HotelRating rating={selfRating} />);

      expect(screen.queryAllByTestId(FULL_SELF_ICON_TEST_ID).length).toBe(2);
      expect(screen.queryAllByTestId(HALF_SELF_ICON_TEST_ID).length).toBe(1);
      expect(screen.queryAllByTestId(EMPTY_SELF_ICON_TEST_ID).length).toBe(2);
    });

    it('should display half rating directly after full rating icons', () => {
      selfRating.ratingValue = 2.5;

      render(<HotelRating rating={selfRating} />);

      const allStarIcons = screen.queryAllByTestId(/^.*-rating-icon-self/);
      expect(allStarIcons.length).toBe(5);
      expect(allStarIcons[0].getAttribute('data-testid')).toBe('full-rating-icon-self');
      expect(allStarIcons[1].getAttribute('data-testid')).toBe('full-rating-icon-self');
      expect(allStarIcons[2].getAttribute('data-testid')).toBe('half-rating-icon-self');
      expect(allStarIcons[3].getAttribute('data-testid')).toBe('empty-rating-icon-self');
      expect(allStarIcons[4].getAttribute('data-testid')).toBe('empty-rating-icon-self');
    });
  });
});
