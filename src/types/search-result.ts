export type ImageType = 'PRIMARY';
export type RatingType = 'self' | 'star';
export type PromotionType = 'MEMBER' | 'CAMPAIGN';
export type CANCELLATION_TYPE = 'FREE_CANCELLATION' | 'NOT_REFUNDABLE';

export interface PreviewImage {
  url: string;
  caption: string;
  imageType: ImageType;
}

export interface Amount {
  amount: number;
  currency: string;
}

export interface Rating {
  ratingValue: number;
  ratingType: RatingType;
}

export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

export interface Promotion {
  title: string;
  type: PromotionType;
}

export interface CancellationOption {
  cancellationType: CANCELLATION_TYPE;
}

export interface Offer {
  promotion: Promotion;
  name: string;
  displayPrice: Amount;
  savings: Amount | null;
  cancellationOption: CancellationOption;
}

export interface SearchResult {
  id: string;
  property: Property;
  offer: Offer;
}
