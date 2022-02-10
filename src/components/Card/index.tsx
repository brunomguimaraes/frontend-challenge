import { useQuery } from "@apollo/client";
import { Icon } from "components/Icon";
import { Skeleton } from "components/Skeleton";
import { useFilterContext } from "context/filter";
import { Home, HomePrice, SeasonPricing } from "context/types";
import { GET_HOME_PRICING } from "graphql/queries/queries";
import { formatCurrency } from "utils/formatting";

import * as Styled from "./styles";

interface CardProps {
  home: Home;
}

export interface FeatureProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  responsive?: boolean;
}

const renderRegionLabel = (cityName: string, regionName: string) => {
  if (cityName === regionName) {
    return cityName;
  }

  return `${cityName} • ${regionName}`;
};

const renderFeatures = (home: Home) => {
  const { roomsCount, bathroomsCount, hasPool, maxOccupancy } = home;

  return (
    <Styled.Features>
      {roomsCount && (
        <Styled.Feature>
          <Icon name={"rooms"} />{" "}
          <Styled.FeaturedLabel>
            {roomsCount} <span>Bedrooms</span>
          </Styled.FeaturedLabel>
        </Styled.Feature>
      )}

      {bathroomsCount && (
        <Styled.Feature>
          <Icon name={"bath"} />{" "}
          <Styled.FeaturedLabel responsive>
            {bathroomsCount} <span>Bathrooms</span>
          </Styled.FeaturedLabel>
        </Styled.Feature>
      )}

      {hasPool && (
        <Styled.Feature>
          <Icon name={"pool"} />{" "}
          <Styled.FeaturedLabel responsive>
            <span>Pool</span>
          </Styled.FeaturedLabel>
        </Styled.Feature>
      )}

      {maxOccupancy && (
        <Styled.Feature>
          <Icon name={"guest"} />{" "}
          <Styled.FeaturedLabel responsive>
            {maxOccupancy} <span>Guests</span>
          </Styled.FeaturedLabel>
        </Styled.Feature>
      )}
    </Styled.Features>
  );
};

const renderPriceRange = (seasonPricing: SeasonPricing) => {
  const { highSeason, lowSeason } = seasonPricing;
  return (
    <Styled.PriceRangeWrapper>
      <Styled.PriceRangeItem>
        <Styled.PriceRangeLabel>
          <Icon name={"arrowDown"} /> Budget Season
        </Styled.PriceRangeLabel>
        <Styled.PriceRange>
          ${formatCurrency(lowSeason.minPrice)} — $
          {formatCurrency(lowSeason.maxPrice)}
        </Styled.PriceRange>
        <Styled.PriceRangeLabel>per night</Styled.PriceRangeLabel>
      </Styled.PriceRangeItem>

      <Styled.PriceRangeItem>
        <Styled.PriceRangeLabel>
          <Icon name={"arrow"} /> Prime Season
        </Styled.PriceRangeLabel>
        <Styled.PriceRange>
          ${formatCurrency(highSeason.minPrice)} — $
          {formatCurrency(highSeason.maxPrice)}
        </Styled.PriceRange>
        <Styled.PriceRangeLabel>per night</Styled.PriceRangeLabel>
      </Styled.PriceRangeItem>
    </Styled.PriceRangeWrapper>
  );
};

const renderHomePricing = (loading: boolean, data: HomePrice | undefined) => {
  if (loading || !data) {
    return <Skeleton variant />;
  } else {
    const {
      homesPricing: [priceData],
    } = data;

    return (
      <Styled.PriceRangeItem>
        <Styled.PriceRangeLabel>
          Total • {priceData.numberOfNights} night
          {priceData.numberOfNights > 1 ? "s" : ""}
        </Styled.PriceRangeLabel>
        <Styled.PriceRange>
          ${formatCurrency(priceData.total)}
        </Styled.PriceRange>
        <Styled.PriceRangeLabel>
          $
          {formatCurrency(
            Math.round(priceData.total / priceData.numberOfNights)
          )}{" "}
          per night
        </Styled.PriceRangeLabel>
      </Styled.PriceRangeItem>
    );
  }
};

export const Card = ({ home }: CardProps) => {
  const {
    id,
    title,
    cityName,
    regionName,
    stateCode,
    photos: [photo],
    seasonPricing,
  } = home;
  const { period, coupon } = useFilterContext();
  const hasPeriodSelected = !!period.startDate || !!period.endDate;

  const { loading, data } = useQuery<HomePrice>(GET_HOME_PRICING, {
    variables: {
      id,
      period: { checkIn: period.startDate, checkOut: period.endDate },
      coupon,
    },
  });

  return (
    <Styled.CardSplit>
      <Styled.Left>
        <Styled.Photo
          src={`${photo.url}?quality=100&height=208&width=390`}
          alt="home-photo"
        />
      </Styled.Left>

      <Styled.Right>
        <Styled.Region>
          {renderRegionLabel(cityName, regionName)}, {stateCode}
        </Styled.Region>

        <Styled.Title>{title}</Styled.Title>

        {renderFeatures(home)}

        <Styled.PricesWrapper>
          {hasPeriodSelected
            ? renderHomePricing(loading, data)
            : renderPriceRange(seasonPricing)}
        </Styled.PricesWrapper>
      </Styled.Right>
    </Styled.CardSplit>
  );
};
