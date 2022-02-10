import styled from "styled-components/macro";

export const DropDownWrapper = styled.div`
  cursor: pointer;

  @media only screen and (min-width: 970px) {
    min-width: 175px;
  }
`;

export const DropDownHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 15px 10px;
`;

export const DropDownLabel = styled.span`
  font-family: Source Sans Pro;
  font-size: 11px;
  letter-spacing: 0.01em;
  color: #53c3d0;
`;

export const DropDownSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Source Sans Pro;
  font-size: 13px;
  letter-spacing: 0.01em;
  color: #022b54;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropDownContainer = styled("div")``;

export const DropDownList = styled("ul")`
  position: absolute;
  padding: 16px;
  background: white;
  border: 1px solid #e9eef1;
  border-radius: 2px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 8%);
  z-index: 2;
  list-style-type: none;
  margin: 0;
`;

export const ListItem = styled("li")`
  font-family: Source Sans Pro;
  font-size: 14px;
  margin-bottom: 4px;
  opacity: 0.6;
`;

export const Selected = styled("div")``;
