type ImageType = 'PRIMARY';
type RatingType = 'self' | 'star';
type PromotionType = 'MEMBER' | 'CAMPAIGN';
type CANCELLATION_TYPE = 'FREE_CANCELLATION' | 'NOT_REFUNDABLE';

interface PreviewImage {
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

interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

interface Promotion {
  title: string;
  type: PromotionType;
}

interface CancellationOption {
  cancellationType: CANCELLATION_TYPE;
}

interface Offer {
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
