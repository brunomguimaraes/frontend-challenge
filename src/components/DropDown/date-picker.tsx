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
  const { startDate, endDate } = range;

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (selectedRange: DateSelection) => {
    setRange({
      startDate: selectedRange?.startDate ? moment(selectedRange.startDate).startOf('day').toISOString() : '',
      endDate: selectedRange?.endDate ? moment(selectedRange.endDate).endOf('day').toISOString() : ''
    });
  };

  const formatDateLabel = () => {
    let dateLabel = "";
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
        selected={range ? formatDateLabel() : { name: "Select..." }}
      />
      <DateRangePicker
        singleDateRange={false}
        show={isOpen}
        onChange={(selectedRange: DateSelection) => onOptionClicked(selectedRange)}
        onClickOut={() => setIsOpen(false)}
        startDate={startDate}
        endDate={endDate}
      />
    </Styled.DropDownWrapper>
  );
};
