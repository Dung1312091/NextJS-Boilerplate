import { Component } from "react";

class Submenu extends Component {
  renderSubMenu = subMenu => {
    let temp = [];
    subMenu.map((subMenuItem, index) => {
      return temp.push(<li key={index}>{subMenuItem.titleSubMenu}</li>);
    });
    return temp;
  };
  render() {
    // console.log("---smn: ",this.props )
    // const {commons} = this.props;
    const { subMenu } = this.props;
    return (
      <div>
        <img src="" alt="logo HDBank" />
        <ul>{subMenu && this.renderSubMenu(subMenu)}</ul>
        <h1>SUBMENU</h1>
      </div>
    );
  }
}

export default Submenu;
