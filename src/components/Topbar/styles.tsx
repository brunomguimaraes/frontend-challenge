import styled from "styled-components/macro";

// Desktop
const DesktopWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  padding: 0 5.5%;
  display: grid;
  grid-template-rows: [header] max-content [filters] max-content;
  grid-template-areas:
    "header"
    "filters";
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
`;

const DesktopHeader = styled.header`
  grid-area: header;
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const DesktopFilters = styled.div`
  grid-area: filters;
  padding: 14px 0 14px;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

export const Desktop = {
  Wrapper: DesktopWrapper,
  Header: DesktopHeader,
  Filters: DesktopFilters,
};

// const TabletWrapper = styled.div`
//   padding: 0 3.9%;
// `;
