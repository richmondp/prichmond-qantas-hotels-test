export enum SortOption {
  PRICE_DESC = 'PRICE_DESC',
  PRICE_ASC = 'PRICE_ASC',
}

export const sortOptionReferenceData: Record<SortOption, string> = {
  [SortOption.PRICE_DESC]: 'Price (high-low)',
  [SortOption.PRICE_ASC]: 'Price (low-high)',
};
