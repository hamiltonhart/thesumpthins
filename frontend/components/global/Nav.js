import Link from "next/link";
import { NavBarStyle } from "../styles/Nav";
import CNLogo from "../../public/svg/TheCrowsNestCircle.svg";

export default function Nav() {
  return (
    <NavBarStyle>
      <Link href="/sumpthins">Meet The Sumpthin's</Link>
      <Link href="/">
        <img src={CNLogo} />
      </Link>
      <Link href="/contact">Speak to Mrs Crow</Link>
    </NavBarStyle>
  );
}
