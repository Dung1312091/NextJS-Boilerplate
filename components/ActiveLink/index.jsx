import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = React.memo(function ActiveLink({
  router,
  children,
  ...props
}) {
  return (
    <Link {...props}>
      {React.cloneElement(Children.only(children), {
        className: router.asPath === props.href ? `active` : null
      })}
    </Link>
  );
});

export default withRouter(ActiveLink);
