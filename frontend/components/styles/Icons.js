import styled from "styled-components";

export const IconStyle = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 50%;
  background-color: transparent;
  padding: var(--smSpacing);
  img {
    width: ${(props) => (props.width ? props.width : "30px")};
  }
  :hover {
    background-color: ${(props) =>
      props.noBG ? "transparent" : "var(--secondaryExtraLight)"};
  }
`;
