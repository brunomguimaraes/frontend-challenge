import { createContext, PropsWithChildren, useContext } from "react";
import { useQuery } from "@apollo/client";

import { useFilterContext } from "./filter";
import { GET_HOMES } from "../graphql/queries";
import { Home } from "./types";
import React from "react";

interface Homes {
  homes: Home[];
  loading: boolean;
  error: any;
  count?: number;
  loadMore: (currentPage: number) => void;
}

export type HomesData = {
  homes: {
    count: number;
    results: Home[];
  };
};

const HomesContext = createContext<Homes>({
  homes: [],
  loading: true,
  error: null,
  count: 0,
  loadMore: () => {},
});

export function HomesProvider(props: PropsWithChildren<{}>) {
  const { selectedRegion, orderBy, period, guests } = useFilterContext();

  const homesDataFromApi = useQuery<HomesData>(GET_HOMES, {
    variables: {
      region: selectedRegion.value,
      order: orderBy.value,
      page: 1,
      period: {
        checkIn: period.startDate,
        checkOut: period.endDate ? period.endDate : period.startDate,
      },
      guests: guests.value,
    },
  });

  const loadMore = (currentPage: number) => {
    homesDataFromApi.fetchMore({
      variables: {
        page: currentPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult) {
          fetchMoreResult.homes.results = [
            ...prev.homes.results,
            ...fetchMoreResult?.homes.results,
          ];
          return fetchMoreResult;
        }
        return prev;
      },
    });
  };

  return (
    <HomesContext.Provider
      value={{
        homes: homesDataFromApi?.data?.homes?.results || [],
        count: homesDataFromApi?.data?.homes.count,
        loading: homesDataFromApi?.loading,
        error: homesDataFromApi?.error,
        loadMore: React.useCallback(loadMore, [homesDataFromApi]),
      }}
    >
      {props.children}
    </HomesContext.Provider>
  );
}

export function useHomesContext() {
  return useContext(HomesContext);
}
