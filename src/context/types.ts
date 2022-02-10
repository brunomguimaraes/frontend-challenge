export interface FilterSelection {
  value?: string | number;
  name: string;
  appendName?: string;
}

export interface Region {
  id: string;
  name: string;
  stateName: string;
}

export interface DateSelection {
  startDate?: Date | string | number;
  endDate?: Date | string | number;
}

export interface Home {
  id: string;
  cityName: string;
  regionName: string;
  stateName: string;
  stateCode: string;
  bedsCount: number;
  roomsCount: number;
  hasPool?: boolean;
  maxOccupancy: number;
  photos: Photo[];
  bathroomsCount: number;
  title: string;
  seasonPricing: SeasonPricing;
}

interface Photo {
  url: string;
}

export interface SeasonPricing {
  highSeason: PricingRange;
  lowSeason: PricingRange;
}

interface PricingRange {
  minPrice: number;
  maxPrice: number;
}

interface Pricing {
  numberOfNights: number;
  total: number;
}

export interface HomePrice {
  homesPricing: Pricing[];
}
