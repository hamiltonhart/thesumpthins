import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const BodyContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 100vw;
  margin-bottom: var(--xxlSpacing);
  @media (min-width: 940px) {
    max-width: 1200px;
    min-width: 900px;
    width: 100%;
  }
`;

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  margin-top: auto;
  background-color: var(--primaryLight);
  padding: var(--lgSpacing);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  padding: ${(props) => (props.padding ? props.padding : "var(--smSpacing)")};
  margin: ${(props) => (props.margin ? props.margin : "inherit")};
  ${(props) => props.fullWidth && "width: 100%;"}

  p {
    ${(props) => props.blockContent && "font-size: var(--med)"}
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.columns ? props.columns : "auto")};
  grid-template-rows: ${(props) => (props.rows ? props.rows : "auto")};
  grid-gap: ${(props) => (props.gap ? props.gap : "var(--xsSpacing)")};
  padding: ${(props) => (props.padding ? props.padding : "var(--smSpacing)")};
  margin: ${(props) => (props.margin ? props.margin : "inherit")};
  ${(props) => props.fullWidth && "width: 100%;"}
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(207, 207, 207, 0.8);
  width: 100vw;
  height: 100vh;
  padding-left: var(--medSpacing);
  padding-right: var(--medSpacing);
`;
