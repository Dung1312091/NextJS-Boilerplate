import React from "react";
const MenuButton = React.memo(function MenuButton(props) {
  return (
    <div className="itemCenter">
      <div>Name</div>
      <div onClick={props.handleToggle}>Icon</div>
    </div>
  );
});
export default MenuButton;
