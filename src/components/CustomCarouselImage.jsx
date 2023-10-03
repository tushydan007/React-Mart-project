/* eslint-disable react/prop-types */
const CustomCarouselImage = ({ imgName }) => {
  return (
    <figure className="w-full h-[29rem]">
      <img src={imgName} className="w-full h-full" />
    </figure>
  );
};

export default CustomCarouselImage;
