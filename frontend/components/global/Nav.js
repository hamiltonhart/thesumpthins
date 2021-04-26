import Link from "next/link";
import { NavBarStyle } from "../styles/Nav";
import SumpthinsLogo from "../../public/svg/TheSumpthins_Logo.svg";

export default function Nav() {
  return (
    <NavBarStyle>
      {/* <Link href="/sumpthins">Meet The Sumpthin's</Link> */}
      <Link href="/">
        <img src={SumpthinsLogo} />
      </Link>
      {/* <Link href="/contact">Talk to Mrs Crow</Link> */}
    </NavBarStyle>
  );
}
