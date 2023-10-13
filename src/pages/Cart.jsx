/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./../components/CartItem";
import { useEffect } from "react";
import {
  addCartItemsTotal,
  generateCartId,
} from "../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartTotal, itemCount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addCartItemsTotal());
  }, [cartItems]);

  return (
    <>
      <h1 className="text-black font-bold text-lg text-center">
        {cartItems.length === 0 ? "Your Cart is Empty" : "Your Cart Items"}
      </h1>
      <div className="grid grid-cols-12 px-8 py-10 bg-[#e3e6e6]  gap-x-10">
        <div className="col-span-9 bg-white rounded-sm shadow-md flex-1">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} count={itemCount} />
          ))}
        </div>
        <div className="col-span-3 bg-white rounded-md shadow-md h-56">
          <h1 className="border-b border-b-slate-200 text-center p-2 font-semibold">
            CART SUMMARY
          </h1>
          <div className="py-1 px-2 w-full">
            <div className="text-xl font-semibold flex items-center justify-between mt-4 mb-4">
              <p>Cart Total :</p>
              <p>$ {cartTotal}</p>
            </div>
            <p className="py-1">Delivery fees not included yet</p>
            <button
              className="p-2 bg-[#ffd978] w-full mt-10 rounded-md font-semibold"
              onClick={() => navigate("/checkout")}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
