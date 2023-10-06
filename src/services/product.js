import axios from "axios";

export const patchProduct = async (product) => {
  product.in_cart = true;
  await axios.put(
    `http://127.0.0.1:8000/store/products/${product.id}/`,
    product
  );
};
