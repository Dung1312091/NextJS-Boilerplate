import React from "react";
import "./style.scss";
const CollapseTransistion = React.memo(function Footer({ isToogle, children }) {
  return (
    <div className={`select-box__item ${isToogle ? "toggle" : ""}`}>
      {children}
    </div>
  );
});
export default CollapseTransistion;
