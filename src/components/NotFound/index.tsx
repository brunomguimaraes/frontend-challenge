import { initialRegion, initialDates } from "constants/initial-states";

import { useFilterContext } from "context/filter";

import * as Styled from "./styles";

interface NotFoundProps { }

export const NotFound = (props: NotFoundProps) => {
  const {
    setSelectedRegion,
    setPeriod
  } = useFilterContext();

  const resetFilters = () => {
    setSelectedRegion(initialRegion);
    setPeriod(initialDates);
  }

  return (
    <Styled.Wrapper>
      <Styled.Satellite />
      <Styled.Label>
        Oops! We haven't found anything matching your search.
      </Styled.Label>
      <Styled.Label>
        Try something else or reset the filters to see all {`{region}`} homes
      </Styled.Label>
      <Styled.Button onClick={() => resetFilters()} large invertColors>
        See all {`{region}`} homes
      </Styled.Button>
    </Styled.Wrapper>
  );
};
