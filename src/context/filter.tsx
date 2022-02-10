import { useQuery } from "@apollo/client";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  initialDates,
  initialFilterState,
  initialRegion,
} from "../constants/initial-states";
import { GUEST_OPTIONS, ORDER_BY_OPTIONS } from "../constants/options";
import { GET_ALL_REGIONS } from "../graphql/queries";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { DateSelection, FilterSelection, Region } from "./types";

interface Filter {
  regions: FilterSelection[];
  setRegions: (selectedRegions: FilterSelection[]) => void;
  selectedRegion: FilterSelection;
  setSelectedRegion: (selectedRegion: FilterSelection) => void;
  guests: FilterSelection;
  setGuests: (selectedGuests: FilterSelection) => void;
  period: DateSelection;
  setPeriod: (selectedPeriod: DateSelection) => void;
  orderBy: FilterSelection;
  setOrderBy: (selectedOrderBy: FilterSelection) => void;
  coupon: string;
  setCoupon: (selectedOrderBy: string) => void;
}

const FilterContext = createContext<Filter>({
  regions: [initialRegion],
  setRegions: () => {},
  selectedRegion: initialRegion,
  setSelectedRegion: () => {},
  guests: initialFilterState,
  setGuests: () => {},
  period: initialDates,
  setPeriod: () => {},
  orderBy: ORDER_BY_OPTIONS[0],
  setOrderBy: () => {},
  coupon: "",
  setCoupon: () => {},
});

export function FilterProvider(props: PropsWithChildren<{}>) {
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  const { pathname } = useLocation();

  /**
   * REGIONS
   */

  const regionNameFromUrl = pathname.split("/")[2];
  const [selectedRegion, setSelectedRegion] = useState<FilterSelection>(
    () => initialRegion
  );
  const [regions, setRegions] = useState<FilterSelection[]>(() => [
    initialRegion,
  ]);

  const regionsDataFromApi = useQuery(GET_ALL_REGIONS);

  useEffect(() => {
    const { data } = regionsDataFromApi;

    if (data) {
      const { regions: regionsData } = data;

      const sanitizedRegions = regionsData.map((region: Region) => {
        const { id: value, name, stateName: appendName } = region;
        return {
          value,
          name,
          appendName,
        };
      });

      setRegions(sanitizedRegions);
    }
  }, [regionsDataFromApi]);

  useEffect(() => {
    if (regionNameFromUrl) {
      setSelectedRegion(
        regions.find(
          (region) => region.name === decodeURI(regionNameFromUrl)
        ) || regions[0]
      );
    }
  }, [regions, regionNameFromUrl]);

  useEffect(() => {
    if (selectedRegion.name) {
      navigate({
        pathname:
          !regionNameFromUrl && selectedRegion.name === "Any Region"
            ? `/homes`
            : `/regions/${
                selectedRegion.name === "Any Region"
                  ? regionNameFromUrl
                  : selectedRegion.name
              }`,
        search: `?${searchParams}`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion]);

  const handleRegionsChange = (selectedRegions: FilterSelection[]) => {
    setRegions(selectedRegions);
  };

  /**
   * GUESTS
   */

  const guestsSearchParam = searchParams.get("guests");
  const [guests, setGuests] = useState<FilterSelection>({ value: 0, name: "" });
  const handleGuestChange = (selectedGuests: FilterSelection) => {
    if (selectedGuests?.value) {
      searchParams.set("guests", selectedGuests.value.toString());
      setSearchParams(searchParams);
    }

    setGuests(selectedGuests);
  };

  useEffect(() => {
    if (guestsSearchParam) {
      setGuests(
        GUEST_OPTIONS.find(
          (option) => option.value.toString() === guestsSearchParam
        ) || GUEST_OPTIONS[0]
      );
    }
  }, [guestsSearchParam]);

  /**
   * ORDER BY
   */

  const orderBySearchParam = searchParams.get("orderby");
  const [orderBy, setOrderBy] = useState<FilterSelection>(
    () => ORDER_BY_OPTIONS[0]
  );
  const handleOrderByChange = (selectedOrderBy: FilterSelection) => {
    if (selectedOrderBy?.value) {
      searchParams.set("orderby", selectedOrderBy.value.toString());
      setSearchParams(searchParams);
    }

    setOrderBy(selectedOrderBy);
  };

  useEffect(() => {
    if (orderBySearchParam) {
      setOrderBy(
        ORDER_BY_OPTIONS.find(
          (option) => option.value === orderBySearchParam
        ) || ORDER_BY_OPTIONS[0]
      );
    }
  }, [orderBySearchParam]);

  /**
   * PERIOD
   */

  const startDateSearchParam = searchParams.get("startDate");
  const endDateSearchParam = searchParams.get("endDate");
  const [period, setPeriod] = useState<DateSelection>({
    startDate: "",
    endDate: "",
  });
  const handlePeriodChange = (selectedPeriod: DateSelection) => {
    if (selectedPeriod?.startDate) {
      searchParams.set("startDate", selectedPeriod.startDate.toString());
    } else {
      searchParams.delete("startDate");
    }

    if (selectedPeriod?.endDate) {
      searchParams.set("endDate", selectedPeriod.endDate.toString());
    } else {
      searchParams.delete("endDate");
    }

    setSearchParams(searchParams);

    setPeriod(selectedPeriod);
  };

  useEffect(() => {
    setPeriod({
      startDate: startDateSearchParam ? startDateSearchParam : "",
      endDate: endDateSearchParam ? endDateSearchParam : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDateSearchParam, endDateSearchParam]);

  /**
   * COUPON
   */

  const couponSearchParam = searchParams.get("coupon");
  const [coupon, setCoupon] = useState<string>(() => "");
  const handleCouponChange = (chosenCoupon: string) => {
    setCoupon(chosenCoupon);

    if (chosenCoupon) {
      searchParams.set("coupon", chosenCoupon);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (couponSearchParam) {
      setCoupon(couponSearchParam);
    }
  }, [couponSearchParam]);

  return (
    <FilterContext.Provider
      value={{
        regions,
        setRegions: handleRegionsChange,
        selectedRegion,
        setSelectedRegion,
        period,
        setPeriod: handlePeriodChange,
        guests,
        setGuests: handleGuestChange,
        orderBy,
        setOrderBy: handleOrderByChange,
        coupon,
        setCoupon: handleCouponChange,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
