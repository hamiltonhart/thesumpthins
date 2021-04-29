import Link from "next/link";
import SumpthinsLogo from "../../public/svg/TheSumpthins_Logo.svg";
import { LogoStyle } from "../styles/LogoStyle";

export const Logo = () => {
  return (
    <Link href="/">
      <LogoStyle src={SumpthinsLogo} alt="The Sumpthins" />
    </Link>
  );
};
