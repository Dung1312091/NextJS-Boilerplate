import React from "react";
import DetectReponsive from "../Hoc/Reponsive";

const MenuButton = React.memo(function MenuButton(props) {
  // console.log("props MenuButton==>", props);
  return !props.isMobile ? (
    <div onClick={props.handleToggle} className="itemCenter">
      <div>Name</div>
      <div>Icon</div>
    </div>
  ) : (
    <div onClick={props.handleToggle}>
      <div>Image</div>
      <div>Icon</div>
    </div>
  );
});
export default DetectReponsive(MenuButton);
