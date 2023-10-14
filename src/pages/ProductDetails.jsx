import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProduct,
  postReview,
} from "../redux/features/productDetail/productDetailSlice";
import Loading from "./../components/Loading";

const ProductDetails = () => {
  const [review, setReview] = useState("");

  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className="flex pt-10 pb-20 px-10 gap-1">
        <figure className="flex-1 rounded-md h-96">
          <img
            src={product?.images[0].image}
            alt={product?.title}
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-5">{product?.title}</h1>
          <h2 className="text-xl font-bold">Price: ${product?.price}</h2>
          <h2 className="text-xl font-normal">
            Description: {product?.description}
          </h2>
        </div>
      </div>

      <div className="pt-16 pb-10 px-10 grid-cols-7">
        <div>
          {product?.reviews?.length === 0 && (
            <p className="mb-5 text-xl font-medium">
              There are no reviews for this product yet
            </p>
          )}
          <div>
            <p className="font-semibold text-lg">
              Leave a review for this product
            </p>
            <p className="text-lg">Share your thoughts with other customers</p>

            {error && (
              <div className="text-black bg-red-200 p-2 rounded-md text-base mb-3 font-medium">
                {error}
              </div>
            )}
            <textarea
              name="review"
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              cols="30"
              rows="5"
              style={{ resize: "none" }}
              className="block border border-gray-400 w-3/6 rounded-lg mt-4 p-2 text-base font-medium"
            ></textarea>

            <button
              className="w-56 p-2 mt-2 mb-5 bg-[#FFD814] rounded-md font-semibold text-md cursor-pointer duration-500 transition-all hover:opacity-80"
              onClick={() => {
                dispatch(postReview(productId));
              }}
            >
              LEAVE REVIEW
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <h1 className="text-xl font-bold italic mb-5">Reviews</h1>
          {product?.reviews?.map((review) => (
            <div key={review.id}>
              <h2 className="text-lg font-semibold">{review.customer_name}</h2>
              <p>{review.description}</p>
              <p>{review.date_created}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
