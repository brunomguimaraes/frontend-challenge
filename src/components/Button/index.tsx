import * as Styled from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderless?: boolean;
  large?: boolean;
  invertColors?: boolean;
}

export const Button = ({ children, ...attributes }: ButtonProps) => {
  return <Styled.Button {...attributes}>{children}</Styled.Button>;
};
