/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryCard = ({ collection }) => {
  return (
    <Link
      to={`/categories/${collection.id}/products`}
      className="w-40 h-43 bg-black rounded p-2 cursor-pointer shadow-md"
    >
      <p className="text-white font-semibold text-lg">{collection.title}</p>
      <figure className="w-full h-full object-cover">
        <img src={collection.image_url} alt="cool" className="w-full h" />
      </figure>
    </Link>
  );
};

export default CategoryCard;
