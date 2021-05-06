import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";

export default function SumpthinsPage() {
  return (
    <>
      <PageHeadingText>The Sumpthin's</PageHeadingText>
      <FlexContainer>
        <TextStyle as="h3" textAlign="center" fontSize="var(--xl)">
          Coming Soon
        </TextStyle>
      </FlexContainer>
    </>
  );
}
