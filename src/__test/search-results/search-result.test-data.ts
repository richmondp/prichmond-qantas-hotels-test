import { Amount, Offer, PreviewImage, Promotion, Property, Rating, SearchResult } from '../../types/search-result.ts';

const buildPromotion = (overrides?: Partial<Promotion>): Promotion => ({
  title: 'default-promotion-type',
  type: 'MEMBER',
  ...overrides,
});

export const buildAmount = (overrides?: Partial<Amount>): Amount => ({
  amount: 321.45,
  currency: 'AUD',
  ...overrides,
});

export const buildRating = (overrides?: Partial<Rating>): Rating => ({
  ratingValue: 4,
  ratingType: 'star',
  ...overrides,
});

const buildPreviewImage = (overrides?: Partial<PreviewImage>): PreviewImage => ({
  url: 'https://unsplash.it/145/125/?random',
  caption: 'default-image-caption',
  imageType: 'PRIMARY',
  ...overrides,
});

export const buildProperty = (overrides?: Partial<Property>): Property => ({
  propertyId: 'default-property-id',
  title: 'default-property-title',
  address: ['12 Test St', 'Collingwood'],
  previewImage: buildPreviewImage(),
  rating: buildRating(),
  ...overrides,
});

export const buildOffer = (overrides?: Partial<Offer>): Offer => ({
  promotion: buildPromotion(),
  name: 'default-offer-name',
  displayPrice: buildAmount(),
  savings: buildAmount({ amount: 35.0 }),
  cancellationOption: {
    cancellationType: 'NOT_REFUNDABLE',
  },
  ...overrides,
});

export const buildSearchResult = (overrides?: Partial<SearchResult>): SearchResult => ({
  id: 'test-search-result-default-id',
  property: buildProperty(),
  offer: buildOffer(),
  ...overrides,
});
