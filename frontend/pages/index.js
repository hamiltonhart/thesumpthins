import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingText, TextStyle } from "../components/styles/Typography";
import { Motto } from "../components/global/Motto";
import YouTubeLogo from "../public/svg/YouTube-Almost-Black-Logo.wine.svg";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The Sumpthin's | Home</title>
      </Head>
      <FlexContainer justifyContent="center" padding="0">
        <FlexContainer flexDirection="row" justifyContent="center" padding="0">
          <Motto />
        </FlexContainer>
        <FlexContainer>
          <TextStyle
            fontSize="var(--med)"
            padding="var(--xlSpacing) var(--xlSpacing) 0 var(--xlSpacing)"
          >
            I'm baby godard VHS art party 3 wolf moon, fashion axe keytar
            celiac. PBR&B cornhole mumblecore small batch, deep v jianbing
            single-origin coffee craft beer live-edge 3 wolf moon intelligentsia
            iceland wayfarers asymmetrical banh mi. Gastropub keytar food truck
            fanny pack. Brooklyn woke cold-pressed ennui. Tumeric yr ramps
            live-edge portland single-origin coffee. Kickstarter snackwave
            street art viral meditation irony leggings sartorial salvia
            chicharrones master cleanse.
          </TextStyle>
          <TextStyle
            fontSize="var(--med)"
            padding="var(--xlSpacing) var(--xlSpacing) 0 var(--xlSpacing)"
          >
            Neutra sustainable listicle drinking vinegar fingerstache. Organic
            swag street art mixtape cronut woke, marfa jianbing listicle twee
            man braid artisan austin meh raw denim. Subway tile post-ironic
            keytar, authentic mumblecore jean shorts chicharrones tacos. Schlitz
            fixie la croix 3 wolf moon wayfarers chambray lumbersexual hexagon
            everyday carry vinyl leggings portland. Quinoa pok pok gentrify +1
            skateboard migas, lo-fi pug vaporware pop-up tumblr echo park
            hexagon roof party. Everyday carry food truck pitchfork green juice
            normcore jianbing. Craft beer listicle 8-bit, chia leggings edison
            bulb irony hella pour-over.
          </TextStyle>
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
              href="https://www.youtube.com/watch?v=IfxPGxt9MD8"
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
