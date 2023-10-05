/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, description, price, images } = product;
  return (
    <div className="w-60 h-96 shadow-2xl cursor-pointer transition-all hover:hover:scale-110 duration-1000 rounded-lg overflow-hidden py-2">
      <img
        src={images[0].image}
        alt="styles"
        className="w-full h-3/4 object-cover"
      />
      <div className="w-full px-2 grid gap-y-2">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-lg font-bold">$ {price}</p>
        </div>
        <button className="w-full rounded-lg border border-black hover:bg-black hover:text-white text-lg font-semibold m-auto transition-all duration-1000">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
