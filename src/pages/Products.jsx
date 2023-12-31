import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/products/productSlice";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { generateCartId } from "../redux/features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(generateCartId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 place-items-center px-20 pb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
