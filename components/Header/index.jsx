import { Component } from "react";
import Link from "next/link";
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
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
export default Header;
