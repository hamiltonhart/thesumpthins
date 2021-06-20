import styled from "styled-components";

export const AllSumpthinsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--xxlSpacing);
  margin: var(--xxlSpacing) var(--medSpacing);

  @media (min-width: 940px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: calc(var(--xxlSpacing) * 2);
  }
`;

export const SumpthinContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    h3 {
      font-weight: bold;
      color: var(--primary);
    }
    img {
      box-shadow: var(--stdHeight);
      transform: scale(1);
    }
  }
`;

export const SumpthinImageStyle = styled.img`
  border-radius: 50%;
  border: 2px solid var(--primary);
  transform: scale(0.9);
  transition: transform 100ms ease-in-out;
  width: 150px;
  height: 150px;
`;

export const SumpthinName = styled.h3`
  text-align: center;
  font-size: var(--lg);
  font-weight: normal;
  margin-top: var(--smSpacing);
  letter-spacing: 0.2rem;
`;

export const SumpthinDetailStyle = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  padding-left: var(--lgSpacing);
  padding-right: var(--lgSpacing);
  padding-bottom: var(--xxlSpacing);
  border-radius: var(--borderRadius);
  max-width: 500px;
  width: 95%;
  transform: translate3d(0, -50px, 0);
  animation-name: sumpthin-detail;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  h3 {
    color: var(--primaryExtraLight);
    font-weight: bold;
    font-size: var(--xl);
    letter-spacing: 0.3rem;
  }
  img {
    margin-top: -75px;
  }
  p {
    margin-top: var(--xxlSpacing);
    line-height: 3rem;
  }
  button {
    margin-top: var(--xxlSpacing);
  }
`;
