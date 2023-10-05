/* eslint-disable react/prop-types */
const CustomCarouselImage = ({ imgName }) => {
  return (
    <figure className="w-full h-[29rem]">
      <img src={imgName} className="max-w-full max-h-full object-center" />
    </figure>
  );
};

export default CustomCarouselImage;
