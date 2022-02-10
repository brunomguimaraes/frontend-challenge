import { useEffect, useState } from "react";
import { Card } from "components/Card";
import { Skeleton } from "components/Skeleton";

import useElementOnScreen from "hooks/useElementOnScreen";
import { useHomesContext } from "context/homes";
import { Home } from "context/types";

import * as Styled from "./styles";

interface SearchResultsProps {}

export const SearchResults = (props: SearchResultsProps) => {
  const { loading, error, homes, count, loadMore } = useHomesContext();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { ref, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "1px",
    threshold: 1,
  });

  useEffect(() => {
    if (loading) return;

    if (isVisible && !loading) {
      setCurrentPage(currentPage + 1);
      loadMore(currentPage + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, loading]);

  if (loading)
    return (
      <Styled.Wrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Styled.Wrapper>
    );

  if (error) return <p>Error :(</p>;

  return (
    <Styled.Wrapper>
      {homes.map((home: Home) => {
        const { id } = home;
        return <Card key={id} home={home} />;
      })}
      {homes.length !== count && (
        <Styled.ShowMore ref={ref}>
          <span>Loading more homes...</span>
        </Styled.ShowMore>
      )}
    </Styled.Wrapper>
  );
};
