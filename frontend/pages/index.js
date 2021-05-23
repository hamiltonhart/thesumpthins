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
      </Head>
      <FlexContainer justifyContent="center" padding="0">
        <FlexContainer flexDirection="row" justifyContent="center" padding="0">
          <Motto />
        </FlexContainer>
        <FlexContainer
          blockContent
          padding="calc(var(--xxlSpacing) * 2) calc(var(--xxlSpacing) * 2) 0 calc(var(--xxlSpacing) * 2)"
        >
          <BlockContent blocks={props[0].text} />
        </FlexContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          padding="var(--xxlSpacing)"
        >
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextStyle
              padding="var(--xlSpacing) var(--xlSpacing) 0 var(--xlSpacing)"
              fontSize="var(--lg)"
              textAlign="center"
            >
              Keep up with The Sumpthin's!
            </TextStyle>
            <a
              href="https://www.youtube.com/channel/UCKKsYVyFLsAprKt3pTHIiHQ"
              target="_window"
              style={{ textAlign: "center" }}
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
  return await client.fetch(
    `*[_type == "textItem" && textTitle == "Main Page Text"]`
  );
};
