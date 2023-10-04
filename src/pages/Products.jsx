import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/products/productSlice";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
