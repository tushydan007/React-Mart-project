/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { HiPlus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  updateCartItem,
} from "../redux/features/cart/cartSlice";

const CartItem = ({ item }) => {
  const { images, title, price, manufacturer, quantity } = item;

  const dispatch = useDispatch();

  const { idOfCart } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex flex-col p-5 border-b border-b-slate-200">
        <div className="flex justify-between">
          <div className="flex gap-14">
            <figure className="w-36 h-40 shadow-md">
              <img
                src={images[0].image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="">
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-lg font-semibold">
                manufacturer: {manufacturer}
              </p>
            </div>
          </div>
          <p className="font-semibold text-lg">
            Item Total: {price * quantity}
          </p>
          <div className="">
            <p className="font-semibold text-lg">$ {price}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-7">
          <div className="flex gap-7 justify-center items-center">
            <FaTrashAlt
              color="darkred"
              size={"25px"}
              className="cursor-pointer shadow-md"
              onClick={() => {
                dispatch(removeFromCart(item));
              }}
            />
            <p className="font-semibold">REMOVE</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button
              className="w-10 h-10 bg-[#FFD978] rounded-md shadow-md text-2xl font-bold flex items-center justify-center"
              onClick={() => {
                if (quantity === 1) {
                  dispatch(removeFromCart(item));
                } else {
                  dispatch(decreaseCount(item));
                }
              }}
            >
              <AiOutlineMinus />
            </button>
            <span className="font-semibold text-xl">{quantity}</span>
            <button
              className="w-10 h-10 bg-[#FFD978] rounded-md shadow-md text-2xl font-bold flex items-center justify-center"
              onClick={() => dispatch(increaseCount(item))}
            >
              <HiPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
