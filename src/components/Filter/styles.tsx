import styled from "styled-components/macro";

export const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 1fr 2fr;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  margin-right: 10px;

  & > :not(:last-child) {
    position: relative;

    &:after {
      content: "";
      height: 30px;
      width: 1px;
      position: absolute;
      right: 0;
      top: 25%;
      background-color: #e8eff5;
    }
  }
`;
