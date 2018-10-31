import { Component } from "react";
// import Link from "next/link";
import { connect } from "react-redux";
import SwitchLanguage from "../SwitchLanguage";
import { injectIntl } from "react-intl";
import ActiveLink from "../ActiveLink";
// import './style.scss'
import Submenu from "../Submenu";
// import Submenu from "../Submenu";
// import SwitchLanguage from "./switchLanguage";
const menu = [
  {
    title: "CÁ NHÂN",
    href: "/",
    subMenu: [
      {
        key: 1,
        titleSubMenu: "Sản Phẩm"
      },
      {
        key: 2,
        titleSubMenu: "Hỗ trợ"
      },
      {
        key: 3,
        titleSubMenu: "Công cụ"
      }
    ]
  },
  {
    title: "DOANH NGHIỆP",
    href: "/corporate",
    subMenu: [
      {
        key: 1,
        titleSubMenu: "Sản Phẩm"
      },
      {
        key: 2,
        titleSubMenu: "Hỗ trợ"
      },
      {
        key: 3,
        titleSubMenu: "Công Cụ"
      }
    ]
  },
  {
    title: "KHÁCH HÀNG ƯU TIÊN",
    href: "/priority-customer"
  },
  {
    title: "NHÀ ĐẦU TƯ",
    href: "/investor"
  }
];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      selectedMenu: {},
      current: undefined
    };
    console.log("constaructor");
  }
  // openSubmenu = (item, index) => {
  //   console.log("open");
  //   console.log("index: ", index)
  //   console.log("current: ", this.state.current)
  //   const {isActive,current} = this.state;
  //   this.setState({
  //     isActive: current === index ? !isActive : isActive,
  //     selectedMenu: item,
  //     current: index
  //   });
  // };
  checkIsActive = index => {
    const { current } = this.state;
    console.log("current: ", current);
    console.log("---- crr", this.state.current);
    console.log("---- in", index);
    if (current !== undefined) {
      console.log("===");
      return this.state.current === index ? !this.state.isActive : true;
    } else {
      return true;
    }
  };
  openSubmenu = (item, index) => {
    console.log("0pen");
    // console.log("... ", this.checkIsActive(index));
    this.setState({
      isActive: this.checkIsActive(index),
      current: index,
      selectedMenu: item
    });
  };
  renderMenu = menu => {
    let temp = [];
    menu.map((item, index) => {
      return temp.push(
        <ActiveLink key={index} href={item.href}>
          <a onClick={() => this.openSubmenu(item, index)}>{item.title}</a>
        </ActiveLink>
      );
    });
    return temp;
  };
  render() {
    // console.log("--- header props:", this.props);
    const { isActive, selectedMenu } = this.state;
    console.log("isactive: ", isActive);
    return (
      <header className="navbar">
        <div className="navbar-menu-left">{this.renderMenu(menu)}</div>
        {/* <Submenu/> */}
        {isActive ? (
          <Submenu subMenu={selectedMenu.subMenu} {...this.props} />
        ) : (
          ""
        )}
        <SwitchLanguage />
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    commons: state.commonReducer.commons
  };
};
export default injectIntl(connect(mapStateToProps)(Header));
