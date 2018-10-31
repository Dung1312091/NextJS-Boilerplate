import { Component } from "react";
import Layout from "./../components/Layout";
import { withRouter } from 'next/router'
class ProductDetail extends Component {
  render() {
    // console.log("props productdetail:", this.props);
    return (
      <Layout>
        <div className="textRed">ProductDetail</div>
      </Layout>
    );
  }
}
export default withRouter(ProductDetail);
