import styled from "styled-components/macro";
import { FeatureProps } from "components/Card";

export const CardSplit = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 30px;
  margin: 0 0 10px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Left = styled.div`
  height: 208px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 17px;
`;

export const Region = styled.label`
  color: #53c3d0;
  font-family: Source Sans Pro;
  font-size: 12px;
`;

export const Title = styled.label`
  color: #022b54;
  margin: 8px 0 16.5px;
  font-family: SangBleu Sunrise;
  font-size: 19px;
  font-weight: 700;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Features = styled.div`
  opacity: 0.3;
  display: flex;
  flex-direction: row;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  font-family: Source Sans Pro;
  font-size: 12px;
  margin-right: 20px;
`;

export const FeaturedLabel = styled.span<FeatureProps>`
  ${({ responsive }) => {
    if (responsive)
      return `

      @media only screen and (max-width: 860px) {
        span {
          display: none;
        }
      }
    `;
  }}
`;

export const Photo = styled.img`
  width: 390px;
  height: 208px;
  border-radius: 2px;
`;

export const PricesWrapper = styled.div`
  margin-top: 39.5px;
`;

export const PriceRangeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;

  @media only screen and (min-width: 1025px) {
    column-gap: 74px;
  }
`;

export const PriceRangeLabel = styled.span`
  font-size: 12px;
  opacity: 0.3;
  color: #022b54;
  font-family: Source Sans Pro;
  display: flex;
  align-items: center;
`;

export const PriceRange = styled.span`
  margin: 4px 0;
  font-size: 20px;
  color: #022b54;
  font-family: Source Sans Pro;
  font-weight: 600;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const PriceRangeItem = styled.div`
  display: flex;
  flex-direction: column;
`;
