import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";
import { Motto } from "../components/global/Motto";

export default function HomePage() {
  return (
    <>
      <FlexContainer justifyContent="center" padding="0">
        <FlexContainer flexDirection="row" justifyContent="center" padding="0">
          <Motto />
        </FlexContainer>
      </FlexContainer>
    </>
  );
}
