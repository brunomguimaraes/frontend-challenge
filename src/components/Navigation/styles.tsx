import styled from "styled-components/macro";
import { AnchorNavProps } from "components/Navigation";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavigationItem = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-left: 11.62px;
  }
`;

export const NavLink = styled.a<AnchorNavProps>`
  color: #022B54;
  text-decoration: none;
  font-family: Source Sans Pro;
  font-size: 14px;

  &:hover {
    color: #53C3D0;
  }

  ${({ active }) => {
    if (active)
      return `
      color: #53C3D0;
  
      &:after {  
        content: '';
        width: 20px;
        height: 1px;
        background: #53C3D0;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -10px;
      }
    `;
  }}
  }
`;
