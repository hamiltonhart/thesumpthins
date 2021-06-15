import styled from "styled-components";

// export const NavBarStyle = styled.nav`
//   display: grid;
//   grid-template-columns: 1fr 1fr auto auto 1fr 1fr;
//   grid-gap: var(--lgSpacing);
//   justify-items: center;
//   min-width: 100%;
//   .first {
//     grid-column: 2;
//   }
//   a {
//     text-transform: uppercase;
//     font-size: var(--med);
//     font-weight: 600;
//     color: var(--greyDark);
//     padding-top: var(--lgSpacing);
//     padding-bottom: var(--lgSpacing);
//     border-top: 3px solid var(--black);
//     border-bottom: 3px solid var(--black);
//     min-width: 100%;
//     text-align: center;
//     align-self: center;
//   }
//   a:hover {
//     color: var(--primary);
//   }
//   @media (max-width: 1460px) {
//     grid-template-columns: 0.5fr 1fr auto auto 1fr 0.5fr;
//     a {
//       font-size: var(--sm);
//     }
//   }
//   @media (max-width: 900px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-gap: var(--smSpacing);
//     justify-items: center;
//     min-width: 100%;
//     .first {
//       grid-row: 2;
//       grid-column: 1 / span 2;
//     }
//     .second {
//       grid-row: 2;
//       grid-column: 3 / span 2;
//     }
//   }
// `;

export const NavBarStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .nav-bar {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    height: 100%;
    background-color: var(--primaryLight);
    padding: calc(var(--xxlSpacing) * 3) 0 0 var(--xlSpacing);
    transform: translate3d(100%, 0, 0);
    transition: transform 250ms ease-in-out;

    &.show-menu {
      display: block;
      transform: translate3d(0, 0, 0);
    }

    .logo-desktop {
      display: none;
    }

    li {
      padding-bottom: 2rem;
    }

    li > a {
      color: var(--primaryExtraDark);
      font-size: var(--lg);
      letter-spacing: 0.2rem;

      &:hover {
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 940px) {
    .logo-mobile {
      display: none;
    }
    button {
      display: none;
    }
    .nav-bar {
      position: unset;
      display: grid;
      grid-template-columns: auto 2fr 1fr 2fr auto;
      align-items: center;
      justify-content: center;
      transform: unset;
      padding: unset;
      background-color: unset;
      .logo-desktop {
        display: block;
        grid-column: 3;
        text-align: center;
      }
      .first,
      .second {
        text-align: center;
        a {
          color: var(--black);
          display: inline-block;
          position: relative;
          width: 100%;
          padding: 1.5rem;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          &:hover {
            color: var(--primary);
            border-top: 2px solid var(--primary);
            border-bottom: 2px solid var(--primary);
            font-weight: unset;
          }
        }
      }
      .first {
        grid-column: 2;
      }
      .second {
        grid-column: 4;
      }
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
