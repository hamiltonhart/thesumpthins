import Head from "next/head";
import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";
// import client from "../client";
// import SanityBlockContent from "@sanity/block-content-to-react";

export default function SumpthinsPage(props) {
  return (
    <>
      <Head>
        <title>The Sumpthin's | About</title>
      </Head>
      {console.log(props)}
      <PageHeadingText>Who Are The Sumpthin's?</PageHeadingText>
      {/* <FlexContainer>
        {Object.keys(props).map((key, index) => (
          <div key={key}>
            <h2>{props[key].name}</h2>
            <SanityBlockContent blocks={props[key].story} />
          </div>
        ))}
      </FlexContainer> */}
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

// SumpthinsPage.getInitialProps = async function (context) {
//   return await client.fetch(`*[_type == "sumpthin"]{name, story}`);
// };
