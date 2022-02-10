import { Icon } from "components/Icon";
import { FilterSelection } from "context/types";

import * as Styled from "./styles";

export interface DropDownHeaderProps {
  label: string;
  selected: FilterSelection;
  onClick: () => void;
  isOpen: boolean;
}

export const DropDownHeader = ({
  selected,
  label,
  onClick,
  isOpen,
}: DropDownHeaderProps) => {
  const { name, appendName } = selected;

  return (
    <Styled.DropDownHeader onClick={onClick}>
      <Styled.DropDownLabel>{label}</Styled.DropDownLabel>
      <Styled.DropDownSelector>
        <Styled.Selected>
          {(appendName ? (
            <>
              <b>{name}, </b>
              {appendName}
            </>
          ) : (
            name
          )) || "Select..."}
        </Styled.Selected>
        <Icon inverted={!!isOpen} name={"chevron"} opacity={0.3} size={"md"} />
      </Styled.DropDownSelector>
    </Styled.DropDownHeader>
  );
};
