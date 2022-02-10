import { useRef, useState } from "react";
import { DropDownHeader } from "components/DropDown/header";
import useOnClickOutside from "hooks/useOnClickOutside";

import { FilterSelection } from "context/types";

import * as Styled from "./styles";

export interface DropDownProps {
  label: string;
  value: FilterSelection;
  onChange: (selectedFilter: FilterSelection) => void;
  options?: FilterSelection[];
}

export const DropDown = ({
  value,
  onChange,
  label,
  options,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => false);
  const ref = useRef(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: FilterSelection) => () => {
    onChange(value);
    setIsOpen(false);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <Styled.DropDownWrapper>
      <DropDownHeader
        isOpen={isOpen}
        onClick={toggling}
        label={label}
        selected={value}
      />

      {isOpen && (
        <Styled.DropDownContainer ref={ref}>
          <Styled.DropDownList>
            {options?.map((option) => {
              const { name, appendName } = option;
              return (
                <Styled.ListItem
                  onClick={onOptionClicked(option)}
                  key={option.value}
                >
                  {appendName ? (
                    <>
                      <b>{name}, </b>
                      {appendName}
                    </>
                  ) : (
                    name
                  )}
                </Styled.ListItem>
              );
            })}
          </Styled.DropDownList>
        </Styled.DropDownContainer>
      )}
    </Styled.DropDownWrapper>
  );
};
