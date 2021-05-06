import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const BodyContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  min-width: 50vw;
  margin-bottom: var(--xxlSpacing);
  @media (max-width: 900px) {
    min-width: 100vw;
  }
  /* display: flex;
  flex-direction: column;
  min-height: 100vh; */
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
  ${(props) => props.fullWidth && "width: 100%"}
`;
