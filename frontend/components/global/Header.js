import Nav from "./Nav";
import { PageHeaderStyle } from "../styles/Header";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <PageHeaderStyle>
      <Nav />
    </PageHeaderStyle>
  );
}
