import styled from "styled-components/macro";

import { ReactComponent as satellite } from "assets/satellite.svg";
import { Button as button } from "components/Button";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding-top: 120px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-family: Source Sans Pro;
  color: #505051;
  margin: 5px 0 5px;
`;

export const Satellite = styled(satellite)`
  margin-bottom: 35px;
`;

export const Button = styled(button)`
  margin-top: 35px;
`;
