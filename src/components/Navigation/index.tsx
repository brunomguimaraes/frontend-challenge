import { Icon } from "components/Icon";

import * as Styled from "./styles";

export interface AnchorNavProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const Navigation = (props: AnchorNavProps) => {
  return (
    <Styled.NavBar>
      <Styled.NavigationItem>
        <Styled.NavLink active href="">
          Find Homes
        </Styled.NavLink>
      </Styled.NavigationItem>

      <Styled.NavigationItem>
        <Styled.NavLink href="">Partners</Styled.NavLink>
      </Styled.NavigationItem>

      <Styled.NavigationItem>
        <Styled.NavLink href="">Company Retreats</Styled.NavLink>
      </Styled.NavigationItem>

      <Styled.NavigationItem>
        <Styled.NavLink href="">More</Styled.NavLink>
        <Icon size={"sm"} name={"chevron"} />
      </Styled.NavigationItem>
    </Styled.NavBar>
  );
};
