import { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import SwitchLanguage from "../SwitchLanguage";
import { injectIntl } from "react-intl";
// import SwitchLanguage from "./switchLanguage";
class Header extends Component {
  render() {
    return (
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/productDetail">
          <a>Detail</a>
        </Link>
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
