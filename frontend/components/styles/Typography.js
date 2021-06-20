import styled from "styled-components";

export const PageHeadingText = styled.h1`
  font-size: var(--huge);
  text-align: center;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 940px) {
    font-size: var(--xl);
  }
`;

export const TextStyle = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "var(--std)")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "inherit"};
  color: ${(props) => (props.color ? props.color : "black")};
  ${(props) => props.padding && `padding: ${props.padding};`}
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "inherit"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "inherit")};
  a {
    color: var(--primary);
  }
`;
