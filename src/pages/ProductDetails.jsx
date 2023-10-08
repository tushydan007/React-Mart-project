import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/features/productDetail/productDetailSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const {
    product: { title, images, reviews, price, description },
    isLoading,
    error,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 pt-10 pb-20 px-10 place-items-center">
        <div className="col-span-1">
          {/* <img
          src={images[0].image}
          alt={title}
          className="w-full h-64 object-cover"
        /> */}
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-xl font-bold">Price: ${price}</h2>
          <h2 className="text-xl font-bold">Description: {description}</h2>
        </div>
      </div>
      <div className="pt-16 pb-10 px-10">
        <h1 className="text-xl font-bold italic mb-5">Reviews</h1>
        {reviews.length === 0 && (
          <p>There are no reviews for this product yet</p>
        )}
        <div className="grid gap-5">
          {reviews.map((review) => (
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
