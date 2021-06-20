import styled from "styled-components";

const ButtonBase = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  font-size: var(--std);
  box-shadow: var(--stdHeight);
  cursor: pointer;
  ${(props) => props.disabled && "background-color: var(--darkGrey);"}
`;

export const PrimaryButton = styled(ButtonBase)`
  border-radius: var(--borderRadius);
  /* TODO: Create variables for this spacing */
  padding: 21px 33px;
  background-color: var(--primaryDark);
  color: var(--primaryExtraLight);
`;

export const PrimaryButtonLight = styled(PrimaryButton)`
  background-color: var(--primaryExtraLight);
  color: var(--primaryDark);
`;

export const PrimaryButtonNoBG = styled(PrimaryButton)`
  background-color: transparent;
  box-shadow: none;
  color: ${(props) => (props.color ? props.color : "var(--primaryDark)")};
`;

export const IconButton = styled.button`
  border-radius: 50%;
  img {
    width: var(--iconSize);
  }
`;
