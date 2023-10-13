/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, addToCart } from "../redux/features/cart/cartSlice";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types

  const { title, price, images, in_cart } = product;
  const dispatch = useDispatch();
  const { idOfCart } = useSelector((state) => state.cart);

  const handleAddItemToCart = () => {
    // const originalCartItems = cartItems;
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        inventory: product.inventory,
        collection: product.collection,
        images: product.images,
        reviews: product.reviews,
        in_cart: product.in_cart,
        manufacturer: product.manufacturer,
        quantity: 1,
      })
    );
    dispatch(addItemToCart(idOfCart, product.id));
  };

  return (
    <div className="w-60 h-96 shadow-lg cursor-pointer transition-all hover:scale-110 duration-1000 rounded-lg overflow-hidden py-2">
      <Link to={`/product/${product.id}`}>
        <img
          src={images[0].image}
          alt="styles"
          className="w-full h-3/4 object-cover"
        />
      </Link>
      <div className="w-full px-2 grid gap-y-2">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-lg font-bold">$ {price}</p>
        </div>
        <button
          className="w-full rounded-lg border border-black hover:bg-black hover:text-white text-lg font-semibold m-auto transition-all duration-1000"
          disabled={in_cart ? true : false}
          onClick={handleAddItemToCart}
        >
          {in_cart ? "In Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
