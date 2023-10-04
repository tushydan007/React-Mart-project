import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import LoginForm from "./pages/LoginForm";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import RegistrationForm from "./pages/RegistrationForm";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/categories/:id/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
