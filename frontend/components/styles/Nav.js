import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  a {
    text-transform: uppercase;
    font-size: var(--med);
    font-weight: 600;
    color: var(--greyDark);
    padding: var(--lgSpacing);
    border-top: 3px solid var(--black);
    border-bottom: 3px solid var(--black);
  }
  a:hover {
    color: var(--primary);
  }
  img {
    width: 300px;
    padding-left: var(--lgSpacing);
    padding-right: var(--lgSpacing);
  }
`;
