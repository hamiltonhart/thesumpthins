import Link from "next/link";
import { HamburgerStyle, NavBarStyle } from "../styles/Nav";
import { Logo } from "./Logo";
import { useMediaQuery } from "../../utils/useMediaQuery";

export default function Nav() {
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
          {/* <Link href="/sumpthins">
            <a className="first">Meet The Sumpthin's</a>
          </Link> */}
          <Logo />
          {/* <Link href="/contact">
            <a className="second">Talk To The Sumpthin's</a>
          </Link> */}
          <HamburgerStyle>
            <Link href="/sumpthins">
              <a className="first">Meet The Sumpthin's</a>
            </Link>

            <Link href="/contact">
              <a className="second">Talk To The Sumpthin's</a>
            </Link>
          </HamburgerStyle>
        </>
      )}
    </NavBarStyle>
  );
}
