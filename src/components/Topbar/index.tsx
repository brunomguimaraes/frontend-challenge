import { TextInput } from "components/TextInput";

import { useFilterContext } from "context/filter";

import * as Styled from "./styles";

interface TopbarProps { }

export const Topbar = (props: TopbarProps) => {
  const { coupon, setCoupon } = useFilterContext();

  return (
    <Styled.Desktop.Wrapper>
      <Styled.Desktop.Header>
        <span>Logo</span>
        <span>Nav</span>
        <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </Styled.Desktop.Header>

      <Styled.Desktop.Filters>
        <span>Filter</span>
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
