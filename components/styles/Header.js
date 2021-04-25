import styled from "styled-components";

export const PageHeaderStyle = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: var(--pageHeader);
  padding-bottom: var(--pageHeader);
  > * {
    grid-column: 2 / span 10;
  }
`;
