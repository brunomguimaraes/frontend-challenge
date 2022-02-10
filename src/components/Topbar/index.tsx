import { Logo } from "components/Logo";
import { TextInput } from "components/TextInput";
import { Button } from "components/Button";
import { Navigation } from "components/Navigation";
import { Filter } from "components/Filter";

import { useFilterContext } from "context/filter";

import * as Styled from "./styles";

interface TopbarProps {}

export const Topbar = (props: TopbarProps) => {
  const { coupon, setCoupon } = useFilterContext();

  return (
    <Styled.Desktop.Wrapper>
      <Styled.Desktop.Header>
        <Logo />
        <Navigation />
        <div>
          <Button borderless>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </Styled.Desktop.Header>

      <Styled.Desktop.Filters>
        <Filter />
        <TextInput
          value={coupon}
          placeholder={"Got a code?"}
          label={"Coupon"}
          onChange={setCoupon}
        />
      </Styled.Desktop.Filters>
    </Styled.Desktop.Wrapper>
  );
};
