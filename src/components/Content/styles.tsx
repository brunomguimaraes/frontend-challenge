import styled from "styled-components/macro";

export const ContentWrapper = styled.div`
  padding: 130px 30px 0;
  margin: 0;

  @media only screen and (min-width: 860px) {
    margin: auto;
    width: max-content;
  }
`;

export const Header = styled.div`
  margin-top: 40px;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  font-family: Source Sans Pro;
  font-size: 9px;
  font-weight: 600;
  color: #53C3D0;
  text-transform: uppercase;

  &:after {
    border-top: 1px solid rgb(83, 195, 208);
    content: "";
    display: flex;
    height: 0px;
    margin-left: 7px;
    width: 50px;
`;

export const Title = styled.h1`
  color: #022b54;
  margin: 0;
  font-weight: 300;
  font-family: Source Sans Pro;
  font-size: 28px;
`;
