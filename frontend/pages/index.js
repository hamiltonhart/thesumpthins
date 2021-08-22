import { FlexContainer } from "../components/styles/Containers";
import { TextStyle } from "../components/styles/Typography";
import { Motto } from "../components/global/Motto";
import YouTubeLogo from "../public/svg/YouTube-Almost-Black-Logo.wine.svg";
import Head from "next/head";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>The Sumpthin's | Home</title>
        <meta
          name="description"
          content="Join Mrs. Crow and her group of Sumpthin's as they discuss life lessons, read stories and generally have fun for kids and parents alike."
        />
      </Head>
      <FlexContainer justifyContent="center" padding="0">
        <FlexContainer flexDirection="row" justifyContent="center" padding="0">
          <Motto />
        </FlexContainer>
        <FlexContainer
          className="block-content easy-reading"
          blockContent
          margin="0 auto"
          padding="var(--xxlSpacing) var(--xxlSpacing) 0"
        >
          <BlockContent blocks={props[0].text} />
        </FlexContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          padding="var(--xxlSpacing) 0"
        >
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextStyle
              padding="var(--xlSpacing) var(--xlSpacing) 0 var(--xlSpacing)"
              fontSize="var(--med)"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing=".3rem"
              color="var(--primary)"
              fontWeight="bold"
            >
              Keep up with The Sumpthin's!
            </TextStyle>
            <a
              href="https://www.youtube.com/channel/UCKKsYVyFLsAprKt3pTHIiHQ"
              target="_blank"
              style={{ textAlign: "center", marginTop: "-2rem" }}
            >
              <img src={YouTubeLogo} alt="YouTube" width="200px" />
            </a>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </>
  );
}

HomePage.getInitialProps = async function (context) {
  return await client.fetch(`*[_type == "textItem" && textTitle == "Welcome"]`);
};
