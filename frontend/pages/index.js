import { useState } from "react";
import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";

export default function HomePage() {
  const [testInput, setTestInput] = useState("");
  return (
    <>
      <FlexContainer justifyContent="center">
        <PageHeadingText>Come back soon</PageHeadingText>
        <FlexContainer justifyContent="center">
          <TextStyle textAlign="center" fontSize="var(--lg)">
            Find us on{" "}
            <a href="https://www.youtube.com/channel/UCKKsYVyFLsAprKt3pTHIiHQ">
              YouTube!
            </a>
          </TextStyle>
        </FlexContainer>
      </FlexContainer>
    </>
  );
}
