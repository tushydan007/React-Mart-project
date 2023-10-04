/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryCard = ({ collection }) => {
  return (
    <Link to={`/categories/${collection.id}/products`}>
      <div className="w-40 h-56 bg-black rounded p-1 cursor-pointer shadow-md">
        <img
          src={collection.image_url}
          alt="cool"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-black font-semibold text-lg">{collection.title}</p>
    </Link>
  );
};

export default CategoryCard;
