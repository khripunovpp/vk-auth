import React, { useMemo } from "react";
import logo from "../logo.jpg";

const Header = ({ left = null, right = null }) => {
  const leftTpl = useMemo(() => left, [left]);
  const rightTpl = useMemo(() => right, [right]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {leftTpl}
          {<img src={logo} alt="" className="header__logo logo" />}
          {rightTpl}
        </div>
      </div>
    </header>
  );
};

export default Header;
