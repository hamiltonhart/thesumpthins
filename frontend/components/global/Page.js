import { PrimaryContainer } from "../styles/Containers";
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <PrimaryContainer>{children}</PrimaryContainer>
    </div>
  );
}
