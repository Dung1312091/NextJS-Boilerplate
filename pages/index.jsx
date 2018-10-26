import React from "react";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Home page</h1>
        <Button color="primary">primary</Button>
        <Button color="info">info</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
      </Layout>
    );
  }
}
export default withRouter(injectIntl(Index));
