import { Link } from "react-router-dom";
import notFound from "../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div className="w-4/5 m-auto bg-white flex justify-center items-center flex-col p-20 pt-30">
      <h1 className="text-5xl mb-10">PAGE NOT FOUND!</h1>
      <h2 className="text-2xl">It Seems you entered a wrong URL</h2>
      <h2 className="text-2xl">We could not find that page</h2>
      <p className="text-2xl">
        Try searching or go to{" "}
        <Link to="/" className="text-blue-600">
          React mart home page
        </Link>
      </p>
      <img src={notFound} alt="" />
      <p className="text-xl p-4">Meet the Dog of React Mart! Its Lovely.</p>
    </div>
  );
};

export default NotFound;
