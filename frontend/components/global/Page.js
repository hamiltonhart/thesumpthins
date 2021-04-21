import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {children}
    </div>
  );
}
