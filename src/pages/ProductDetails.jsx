import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/features/productDetail/productDetailSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className="flex pt-10 pb-20 px-10 gap-5">
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
      <div className="pt-16 pb-10 px-10">
        <h1 className="text-xl font-bold italic mb-5">Reviews</h1>
        {product?.reviews?.length === 0 && (
          <p>There are no reviews for this product yet</p>
        )}
        <div className="grid gap-5">
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
