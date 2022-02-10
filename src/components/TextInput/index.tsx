import * as Styled from "./styles";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput = ({
  value,
  placeholder,
  label,
  onChange,
}: TextInputProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Styled.InputWrapper>
  );
};
