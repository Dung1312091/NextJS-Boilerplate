import { Component } from "react";
import Layout from "./../components/Layout";
import { withRouter } from "next/router";
class PriorityCustomer extends Component {
  render() {
    // console.log("props priorityCustom:", this.props);
    return (
      <Layout key={1}>
        <div className="textRed">PriorityCustomer</div>
      </Layout>
    );
  }
}
export default withRouter(PriorityCustomer);
