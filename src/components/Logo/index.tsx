import companyLogoTextSvg from "assets/logo-text.svg";
import companyLogoSvg from "assets/logo.svg";

import * as Styled from "./styles";

export const Logo = () => {
  return (
    <>
      <Styled.CompanyLogoText src={companyLogoTextSvg} alt="Company Logo" />
      <Styled.CompanyLogo src={companyLogoSvg} alt="Company Logo" />
    </>
  );
};
