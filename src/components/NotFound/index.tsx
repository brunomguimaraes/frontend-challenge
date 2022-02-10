import { useFilterContext } from "context/filter";

import * as Styled from "./styles";

interface NotFoundProps { }

export const NotFound = (props: NotFoundProps) => {
  const {
    resetFilter,
    selectedRegion
  } = useFilterContext();

  const { name } = selectedRegion;
  const regionName = name === 'Any Region' ? name.toLowerCase() : `all ${name}`

  return (
    <Styled.Wrapper>
      <Styled.Satellite />
      <Styled.Label>
        Oops! We haven't found anything matching your search.
      </Styled.Label>
      <Styled.Label>
        Try something else or reset the filters to see {regionName} homes
      </Styled.Label>
      <Styled.Button onClick={() => resetFilter()} large invertColors>
        See {regionName} homes
      </Styled.Button>
    </Styled.Wrapper>
  );
};
