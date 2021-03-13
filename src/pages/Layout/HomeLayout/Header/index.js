import React, { useState, useEffect } from "react";
import Search from "../../../../features/search/search";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { RightMenu } from "../RightMenu/RightMenu";
import "./index.scss";

function Header() {
  return (
    <div className="header-wrapper" id="layout-header">
      <LeftMenu />
      <Search minimal={true} className="headerSearch" />
      <RightMenu />
    </div>
  );
}

export default Header;
