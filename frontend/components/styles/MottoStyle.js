import styled from "styled-components";

export const MottoStyle = styled.img`
  /* width: ${(props) => (props.width ? props.width : "inherit")}; */
  width: 75%;
  min-width: 400px;
  max-width: 900px;
  ${(props) => props.maxWidth && `${props.maxWidth};`}
  ${(props) => props.maxWidth && `${props.maxWidth};`}
`;
