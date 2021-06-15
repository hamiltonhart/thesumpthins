import { useRef } from "react";
import Link from "next/link";
import { HamburgerStyle, NavBarStyle } from "../styles/Nav";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Nav() {
  const menuRef = useRef();

  const handleMenuClick = () => {
    menuRef.current.classList.add("show-menu");
  };

  const handleMenuClose = () => {
    menuRef.current.classList.remove("show-menu");
  };

  return (
    <>
      <NavBarStyle>
        <MenuIcon onClick={(e) => handleMenuClick(e)} />
        <span className="logo-mobile">
          <Logo />
        </span>
        <ul className="nav-bar" ref={menuRef}>
          <CloseIcon onClick={(e) => handleMenuClose(e)} />
          <li className="first" onClick={(e) => handleMenuClose(e)}>
            <Link href="/sumpthins">
              <a>Meet The Sumpthin's</a>
            </Link>
          </li>
          <li className="logo-desktop">
            <Logo />
          </li>
          <li className="second" onClick={(e) => handleMenuClose(e)}>
            <Link href="/contact">
              <a>Send A Message</a>
            </Link>
          </li>
        </ul>
      </NavBarStyle>
    </>
  );
}
