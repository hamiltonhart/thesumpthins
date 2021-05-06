import { BodyContainer, MainContainer } from "../styles/Containers";
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <>
      <MainContainer>
        <GlobalStyle />
        <Header />
        <BodyContainer>{children}</BodyContainer>
        <Footer />
      </MainContainer>
    </>
  );
}
