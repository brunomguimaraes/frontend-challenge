import { DropDown } from "components/DropDown";
import { DatePicker } from "components/DropDown/date-picker";
import { GUEST_OPTIONS, ORDER_BY_OPTIONS } from "constants/options";

import { useFilterContext } from "context/filter";

import * as Styled from "./styles";

export interface FilterProps {}

export const Filter = (props: FilterProps) => {
  const {
    regions,
    selectedRegion,
    setSelectedRegion,
    guests,
    setGuests,
    period,
    setPeriod,
    orderBy,
    setOrderBy,
  } = useFilterContext();

  return (
    <Styled.FilterWrapper>
      <DropDown
        label={"Where"}
        options={regions}
        value={selectedRegion}
        onChange={setSelectedRegion}
      />
      <DatePicker label={"When"} range={period} onChange={setPeriod} />
      <DropDown
        label={"Who"}
        options={GUEST_OPTIONS}
        value={guests}
        onChange={setGuests}
      />
      <DropDown
        label={"Order"}
        options={ORDER_BY_OPTIONS}
        value={orderBy}
        onChange={setOrderBy}
      />
    </Styled.FilterWrapper>
  );
};
