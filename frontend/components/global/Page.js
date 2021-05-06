import { PrimaryContainer } from "../styles/Containers";
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <GlobalStyle />
        <Header />
        <PrimaryContainer>{children}</PrimaryContainer>
        <Footer>Footer Text</Footer>
      </div>
    </>
  );
}
