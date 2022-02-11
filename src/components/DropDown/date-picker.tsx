import { useState } from "react";
import { DropDownHeader } from "./header";

import { DateSelection } from "context/types";

import moment from "moment";
import DateRangePicker from "@avantstay/avantstay-ui/lib/DateRangePicker";

import * as Styled from "./styles";

export interface DatePickerProps {
  label: string;
  range: DateSelection;
  setRange: (selectedDate: DateSelection) => void;
}

export const DatePicker = ({ range, setRange, label }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (range: DateSelection) => {
    const {startDate: start, endDate: end} = range
  
    if (start && end) {
      const startDate = moment(start).startOf('day').toISOString();
      const endDate = moment(end).endOf('day').toISOString();
  
      setRange({
        startDate,
        endDate
      });
    } else if (!start && !end) {
      setRange({
        startDate: "",
        endDate: ""
      });
    }
  };

  const formatDateLabel = (range: DateSelection) => {
    let dateLabel = "";
    const { startDate, endDate } = range;
    if (!!startDate && !!endDate) {
      dateLabel = `${moment(startDate).format("ll")} - ${moment(endDate).format(
        "ll"
      )}`;
    } else if (!!startDate) {
      dateLabel = `${moment(startDate).format("ll")}`;
    }

    return {
      name: dateLabel,
    };
  };

  return (
    <Styled.DropDownWrapper>
      <DropDownHeader
        isOpen={isOpen}
        onClick={toggling}
        label={label}
        selected={range ? formatDateLabel(range) : { name: "Select..." }}
      />
      <DateRangePicker
        singleDateRange={false}
        show={isOpen}
        onChange={(range: DateSelection) => onOptionClicked(range)}
        onClickOut={() => setIsOpen(false)}
        startDate={range.startDate}
        endDate={range.endDate}
      />
    </Styled.DropDownWrapper>
  );
};
