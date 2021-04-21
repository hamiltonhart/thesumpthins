import Link from "next/link";
import { NavBarStyle, NavItemStyle } from "../styles/Nav";
// import CNLogo from "../../svg/TheCrowsNestCircle.svg";
// import Circle from "../../svg/Circle.svg";

export default function Nav() {
  return (
    <NavBarStyle>
      {/* <Link href="/">
        <img src={Circle} />
      </Link> */}
      <Link href="/sumpthins">Meet The Sumpthin's</Link>
      <Link href="/contact">Speak to Mrs Crow</Link>
    </NavBarStyle>
  );
}
