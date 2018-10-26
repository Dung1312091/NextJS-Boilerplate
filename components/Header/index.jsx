import { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import MenuButton from "./menuButton";
import { FormattedMessage, injectIntl } from "react-intl";
// import SwitchLanguage from "./switchLanguage";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-6 itemCenter">
            <MenuButton
              name={
                <FormattedMessage id="app.personal" defaultMessage="CÁ NHÂN" />
              }
            />
            <MenuButton
              name={
                <FormattedMessage
                  id="app.corporate"
                  defaultMessage="DOANH NGHIỆP"
                />
              }
            />
            <MenuButton
              name={
                <FormattedMessage
                  id="app.priority"
                  defaultMessage="KHÁCH HÀNG ƯU TIÊN"
                />
              }
            />
            <MenuButton
              name={
                <FormattedMessage
                  id="app.investors"
                  defaultMessage="NHÀ ĐẦU TƯ"
                />
              }
            />
          </div>
          <div className="col-md-6">{/* <SwitchLanguage /> */}</div>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/productDetail">
          <a>Detail</a>
        </Link>
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
