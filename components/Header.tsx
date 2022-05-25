import type { NextPage } from "next";
import Link from "next/link";
import Nav from "./Nav";


const Header = () => {
  return (
    <header>
        <div>
            <Link href={"/"}>eMart</Link>
        </div>
        <Nav />
        <div>
            <p>Search</p>
        </div>
    </header>
  );
};

export default Header;
