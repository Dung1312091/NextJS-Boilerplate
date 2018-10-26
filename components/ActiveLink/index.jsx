import { withRouter } from "next/router";
import { Link } from "../../routes";
import React, { Children } from "react";
import "./style.scss";
const ActiveLink = withRouter(({ router, children, ...props }) => {
  return (
    <Link {...props}>
      {React.cloneElement(Children.only(children), {
        className: router.pathname === props.href ? `active` : null
      })}
    </Link>
  );
});

export default withRouter(ActiveLink);
