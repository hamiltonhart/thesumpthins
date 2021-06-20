import Head from "next/head";
import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";
import client from "../client";

import { Sumpthin } from "../components/sumpthins/sumpthin";
import { AllSumpthinsContainer } from "../components/sumpthins/styles";

export default function SumpthinsPage(props) {
  return (
    <>
      <Head>
        <title>The Sumpthin's | About</title>
      </Head>
      <PageHeadingText>Who Are The Sumpthin's?</PageHeadingText>
      {Object.keys(props).length > 0 ? (
        <AllSumpthinsContainer>
          {Object.keys(props).map((key, index) => (
            <Sumpthin
              key={key}
              name={props[key].name}
              story={props[key].story}
              picture={props[key].picture}
            />
          ))}
        </AllSumpthinsContainer>
      ) : (
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
      )}
    </>
  );
}

SumpthinsPage.getInitialProps = async function (context) {
  return await client.fetch(`*[_type == "sumpthin"]{name, story, picture}`);
};
