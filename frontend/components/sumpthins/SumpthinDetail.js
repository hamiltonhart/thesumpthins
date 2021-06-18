import SanityBlockContent from "@sanity/block-content-to-react";
import { ModalContainer } from "../styles/Containers";
import { PrimaryButtonNoBG } from "../styles/Buttons";
import {
  SumpthinImageStyle,
  SumpthinName,
  SumpthinDetailStyle,
} from "./styles";

export const SumpthinDetail = ({
  detailRef,
  detailContainerRef,
  name,
  story,
  imgUrl,
}) => {
  const handleClick = () => {
    detailRef.current.classList.remove("show-modal");
  };

  return (
    <SumpthinDetailStyle ref={detailContainerRef}>
      <SumpthinImageStyle src={imgUrl} />
      <SumpthinName>{name}</SumpthinName>
      <SanityBlockContent blocks={story} className="block-content" />
      <PrimaryButtonNoBG color="var(--primaryLight)" onClick={handleClick}>
        Close
      </PrimaryButtonNoBG>
    </SumpthinDetailStyle>
  );
};
