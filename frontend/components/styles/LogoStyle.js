import styled from "styled-components";

export const LogoStyle = styled.img`
  width: 250px;
  padding-left: var(--lgSpacing);
  padding-right: var(--lgSpacing);
  grid-column: 2 / span 2;
  @media (min-width: 1460px) {
    width: 300px;
  }
  @media (min-width: 900px) {
    grid-column: 3 / span 2;
  }
`;
