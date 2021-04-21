import styled from "styled-components";

export const LabelStyle = styled.label`
  display: ${(props) => (props.display ? props.display : "block")};
  padding: var(--xsSpacing);
  font-size: var(--std);
`;

export const TextInputStyle = styled.input`
  background-color: var(--greyExtraLight);
  border: 2px solid var(--greyExtraLight);
  padding: var(--smSpacing);
  border-radius: var(--borderRadius);
  font-size: var(--std);
  &::placeholder {
    color: var(--grey);
  }
  :active {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
  }
`;

export const TextAreaStyle = styled.textarea`
  background-color: var(--greyExtraLight);
  border: 2px solid var(--greyExtraLight);
  padding: var(--smSpacing);
  border-radius: var(--borderRadius);
  font-size: var(--std);
  overflow: scroll;
  resize: none;
  &::placeholder {
    color: var(--grey);
  }
  :active {
    border-color: var(--primary);
  }
  :focus {
    border-color: var(--primary);
  }
`;
