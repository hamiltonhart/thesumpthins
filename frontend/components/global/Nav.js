import { useState } from "react";
import Link from "next/link";
import { HamburgerStyle, NavBarStyle } from "../styles/Nav";
import { Logo } from "./Logo";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // useMediaQuery at 900px to put a hamburger menu in the top left that pulls from the top, framer motion for a fun animation, close on the right
  const hamburger = useMediaQuery(900);

  return (
    <NavBarStyle>
      {!hamburger ? (
        <>
          <Link href="/sumpthins">
            <a className="first">Meet The Sumpthin's</a>
          </Link>
          <Logo />
          <Link href="/contact">
            <a className="second">Talk To The Sumpthin's</a>
          </Link>
        </>
      ) : (
        <>
          <Logo />
          <MenuIcon onClick={() => setOpen(true)} />
          {open && (
            <HamburgerStyle>
              <CloseIcon onClick={() => setOpen(false)} />
              <Link href="/sumpthins">
                <a className="first">Meet The Sumpthin's</a>
              </Link>

              <Link href="/contact">
                <a className="second">Talk To The Sumpthin's</a>
              </Link>
            </HamburgerStyle>
          )}
        </>
      )}
    </NavBarStyle>
  );
}
