import { NotFound } from "components/NotFound";
import { SearchResults } from "components/SearchResults";
import { useHomesContext } from "context/homes";

import * as Styled from "./styles";

interface ContentProps {}

export const Content = (props: ContentProps) => {
  const { loading, count } = useHomesContext();

  return (
    <Styled.ContentWrapper>
      {!loading && count === 0 ? (
        <NotFound />
      ) : (
        <>
          <Styled.Header>
            <Styled.Label>
              {loading ? "Please Wait" : "Your stay in one of"}
            </Styled.Label>
            <Styled.Title>
              <b>{loading ? "Loading" : count}</b>
              {` homes`}
            </Styled.Title>
          </Styled.Header>
          <SearchResults />
        </>
      )}
    </Styled.ContentWrapper>
  );
};
