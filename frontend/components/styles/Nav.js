import Link from "next/link";
import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  font-weight: 600;
  min-width: 100%;
  padding: var(--lgSpacing);
  border-top: 3px solid var(--black);
  border-bottom: 3px solid var(--black);
  a {
    font-size: var(--xl);
    color: var(--greyDark);
  }
  a:hover {
    color: var(--primary);
  }
`;
