import { gql } from "@apollo/client/core";

export const GET_ALL_REGIONS = gql`
  query getRegions {
    regions {
      id
      name
      stateName
    }
  }
`;

export const GET_HOMES = gql`
  query getHomes(
    $region: UUID
    $period: BookingPeriod
    $order: HomesOrder
    $guests: Int
    $page: Int
  ) {
    homes(
      region: $region
      period: $period
      guests: $guests
      order: $order
      page: $page
      pageSize: 10
    ) {
      count
      results {
        id
        title
        description
        photos {
          url
        }
        roomsCount
        bathroomsCount
        maxOccupancy
        hasPool
        regionName
        cityName
        stateCode
        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
          lowSeason {
            minPrice
            maxPrice
          }
        }
      }
    }
  }
`;

export const GET_HOME_PRICING = gql`
  query getHomePricing($id: UUID, $period: BookingPeriod!, $coupon: String) {
    homesPricing(ids: [$id], period: $period, coupon: $coupon) {
      numberOfNights
      total
    }
  }
`;
