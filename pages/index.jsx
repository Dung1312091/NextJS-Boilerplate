import React from "react";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Home page</h1>
      </Layout>
    );
  }
}
export default withRouter(injectIntl(Index));
