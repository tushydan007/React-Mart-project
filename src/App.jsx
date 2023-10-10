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
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ConfirmRegistration from "./pages/ConfirmRegistration";
import ConifrmationSuccessful from "./pages/ConifrmationSuccessful";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  }
  console.log(error);
  toast.error("An Unexpected error occured while processing");
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/categories/:id/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/confirm-registration"
            element={<ConfirmRegistration />}
          />
          <Route
            path="/activate/:uid/:token"
            element={<ConifrmationSuccessful />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
