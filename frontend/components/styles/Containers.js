import styled from "styled-components";

export const PrimaryContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
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
