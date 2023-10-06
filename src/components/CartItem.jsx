/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { images, title, price } = item;
  return (
    <div className="flex flex-col p-5 border-b border-b-slate-200">
      <div className="flex justify-between">
        <figure className="w-36 h-40 shadow-md">
          <img
            src={images[0].image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div>
          <p>{title}</p>
          <p>manufacturer: </p>
        </div>
        <div>
          <p className="font-semibold text-lg">$ {price}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-7">
        <div className="flex gap-7 justify-center items-center">
          <FaTrashAlt
            color="darkred"
            size={"25px"}
            className="cursor-pointer shadow-md"
          />
          <p className="font-semibold">REMOVE</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <button className="w-10 h-10 bg-[#FFD978] rounded-md shadow-md text-2xl font-bold">
            +
          </button>
          <span className="font-semibold text-xl">5</span>
          <button className="w-10 h-10 bg-[#FFD978] rounded-md shadow-md text-2xl font-bold">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
