import Head from "next/head";
import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";

export default function SumpthinsPage() {
  return (
    <>
      <Head>
        <title>The Sumpthin's | About</title>
      </Head>
      <PageHeadingText>Who Are The Sumpthin's?</PageHeadingText>
      <FlexContainer>
        <TextStyle
          as="h3"
          textAlign="center"
          fontSize="var(--lg)"
          padding="var(--xxlSpacing) 0 0 0"
        >
          The Sumpthin's are gathering their stories.
        </TextStyle>
        <TextStyle
          as="h3"
          textAlign="center"
          fontSize="var(--xl)"
          padding="var(--xxlSpacing) 0 0 0"
        >
          Come Back Soon!
        </TextStyle>
      </FlexContainer>
    </>
  );
}
