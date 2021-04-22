import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${"" /* Primary Colors */}
    --primaryExtraDark: #05400A;
    --primaryDark: #207227;
    --primary: #3F9142;
    --primaryLight: #A3D9A5;
    --primaryExtraLight: #E3F9E5;
    ${"" /* Secondary Colors */}
    --secondaryExtraDark:#240754;
    --secondaryDark: #421987;
    --secondary: #653CAD;
    --secondaryLight: #8662C7;
    --secondaryExtraLight: #EAE2F8;
    ${"" /* Greys / Black */}
    --black: #222222;
    --greyDark: #515151;
    --grey: #979797;
    --greyLight: #CFCFCF;
    --greyExtraLight: #F7F7F7;
    ${"" /* Typography Sizing */}
    --xxs: 1rem;
    --xs: 1.2rem;
    --sm: 1.4rem;
    --std: 1.6rem;
    --med: 1.8rem;
    --lg: 2.2rem;
    --xl: 2.8rem;
    --xxl: 3.6rem;
    --huge: 4.8rem;
    --xhuge: 6.4rem;
    ${"" /* Spacing */}
      --smallLineSpacing: 1;
      --normalLineSpacing: 1.5;
      --extraLineSpacing: 2;
      --xsSpacing: 0.8rem;
      --smSpacing: 1.2rem;
      --medSpacing: 1.6rem;
      --lgSpacing: 2rem;
      --xlSpacing: 2.4rem;
      --xxlSpacing: 3rem;
      --pageHeader: 4rem;
    ${"" /* Radius */}
    --borderRadius: 10px;
    --buttonRadius: var(--borderRadius);
    --buttonRadiusSmall: 28px;
    ${"" /* Box Shadow */}
    --stdHeight: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);

    font-size: 10px;
  }

  *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *:focus {
        outline: none;
    }

    body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        ${"" /* margin: left-auto;
        margin-right: auto; */}
        font-size: var(--std);
        color: var(--black);
    }

    a,
    a:visited,
    a:focus,
    a:hover {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: none;
    }

    input {
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
        box-shadow: none;
    }

    textarea {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
    }

    p {
      font-size: var(--std);
    }
`;
