import { useRef } from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { SumpthinContainer, SumpthinImageStyle, SumpthinName } from "./styles";
import { SumpthinDetail } from "./SumpthinDetail";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const Sumpthin = ({ name, story, picture }) => {
  const detailRef = useRef();
  const detailContainerRef = useRef();

  const handleClick = () => {
    detailRef.current.classList.add("show-modal");
  };

  const imgUrl = urlFor(picture).width(150).height(150).url();

  return (
    <>
      <SumpthinContainer onClick={handleClick}>
        <SumpthinImageStyle src={imgUrl} alt={name} />
        <SumpthinName>{name}</SumpthinName>
      </SumpthinContainer>
      <div className="modal-container" ref={detailRef}>
        <SumpthinDetail
          detailRef={detailRef}
          detailContainerRef={detailContainerRef}
          name={name}
          story={story}
          imgUrl={imgUrl}
        />
      </div>
    </>
  );
};

{
  /* <div key={key}>
  <SumpthinImageStyle
    src={urlFor(props[key].picture).width(150).height(150).url()}
  />
  <h2>{props[key].name}</h2>
  <SanityBlockContent blocks={props[key].story} />
</div>; */
}
