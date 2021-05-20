import styled from "styled-components";

export const NavBarStyle = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr auto auto 1fr 1fr;
  grid-gap: var(--lgSpacing);
  justify-items: center;
  min-width: 100%;
  .first {
    grid-column: 2;
  }
  a {
    text-transform: uppercase;
    font-size: var(--med);
    font-weight: 600;
    color: var(--greyDark);
    padding-top: var(--lgSpacing);
    padding-bottom: var(--lgSpacing);
    border-top: 3px solid var(--black);
    border-bottom: 3px solid var(--black);
    min-width: 100%;
    text-align: center;
    align-self: center;
  }
  a:hover {
    color: var(--primary);
  }
  @media (max-width: 1460px) {
    grid-template-columns: 0.5fr 1fr auto auto 1fr 0.5fr;
    a {
      font-size: var(--sm);
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: var(--smSpacing);
    justify-items: center;
    min-width: 100%;
    .first {
      grid-row: 2;
      grid-column: 1 / span 2;
    }
    .second {
      grid-row: 2;
      grid-column: 3 / span 2;
    }
  }
`;

export const HamburgerStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 90vw;
  height: 100%;
  background-color: var(--secondary);
  padding: var(--lgSpacing);
  border-top-right-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
  a {
    text-align: left;
    font-size: var(--lg);
    margin-top: var(--medSpacing);
    margin-bottom: var(--medSpacing);
    border: none;
    color: var(--black);
  }
`;
