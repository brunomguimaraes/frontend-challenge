import styled from "styled-components/macro";
import { ButtonProps } from "components/Button";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  display: inline-block;
  font-family: Source Sans Pro;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.01em;
  border-radius: 3px;

  ${({ large }) => (large ? "padding: 8px 40px;" : "padding: 8px 25px;")}

  ${({ borderless }) =>
    borderless ? "border: none;" : "border: 2px solid #022B54;"}

  ${({ invertColors }) =>
    invertColors
      ? `
    color: #53C3D0;
    border-color: #53C3D0;
    
    &:hover {
      border-color: #1C5D9F;
      color: #1C5D9F;
    }
    
    &:active {
      border-color: #022B54;
      color: #022B54;
    }
  `
      : `
    color: #022B54;

    &:hover {
      border-color: #53C3D0;
      color: #53C3D0;
    }

    &:active {
      border-color: #34AEBC;
      color: #34AEBC;
    }
  `}
`;
