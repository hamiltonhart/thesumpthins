import styled from "styled-components";

export const LogoStyle = styled.img`
  width: 300px;
  padding-left: var(--lgSpacing);
  padding-right: var(--lgSpacing);
  grid-column: 3 / span 2;
  @media (max-width: 1460px) {
    width: 250px;
  }
  @media (max-width: 900px) {
    grid-column: 2 / span 2;
  }
`;
