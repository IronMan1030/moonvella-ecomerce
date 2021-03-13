import React from "react";
import { LeftMenuBox, LogoImage } from "./LeftMenu.style";
import LogoDarkImage from "../../../../assets/image/logo_dark.png";

export const LeftMenu = () => {
  return (
    <LeftMenuBox>
      <LogoImage src={LogoDarkImage} alt="shop-logo" />
    </LeftMenuBox>
  );
};
