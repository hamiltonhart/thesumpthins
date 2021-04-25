import styled from "styled-components";

export const PageHeadingText = styled.h1`
  font-size: var(--huge);
  text-align: center;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: var(--xl);
  }
`;

export const TextStyle = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "var(--std)")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  a {
    color: var(--primary);
  }
`;
