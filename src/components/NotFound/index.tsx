import * as Styled from "./styles";

interface NotFoundProps {}

export const NotFound = (props: NotFoundProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Satellite />
      <Styled.Label>
        Oops! We haven't found anything matching your search.
      </Styled.Label>
      <Styled.Label>
        Try something else or reset the filters to see all {`{region}`} homes
      </Styled.Label>
      <Styled.Button large invertColors>
        See all {`{region}`} homes
      </Styled.Button>
    </Styled.Wrapper>
  );
};
