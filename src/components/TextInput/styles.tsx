import styled from "styled-components/macro";

// the margin: -1px on hover is to avoid the 2px border behavior(moving the whole element)
export const InputWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 8px 0 10px 15px;
  width: 100%;

  &:hover {
    box-sizing: border-box;
    border: 2px solid #d1eff2;
    margin: -1px;
  }

  &:focus-within {
    border: 2px solid #a3dfe6;
    margin: -1px;
  }
`;

export const Input = styled.input`
  border: none;
  appearance: auto;
  outline: none;
  padding: 0;
  font-family: Source Sans Pro;
  font-size: 13px;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Label = styled.span`
  color: #53c3d0;
  font-family: Source Sans Pro;
  font-size: 11px;
  margin-bottom: 2px;
`;
