import { useEffect } from "react";
import CustomCarousel from "../components/CustomCarousel";
import { getCollections } from "../redux/features/categoryCard/collectionSlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./../components/CategoryCard";
import { Link } from "react-router-dom";
import BackToTop from "./../components/BackToTop";

const Landing = () => {
  const dispatch = useDispatch();
  const { collections, isLoading, error } = useSelector(
    (state) => state.category
  );
  useEffect(() => {
    dispatch(getCollections());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <CustomCarousel />
      <section className="p-10 py-20 bg-[#E3E6E6] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center ">
        {collections.map((collection) => (
          <CategoryCard key={collection.id} collection={collection} />
        ))}
      </section>
      <div className="bg-white w-screen h-40 pt-4 pb-4 px-1">
        <div className="border-gray-400 border-solid w-full h-full border grid place-content-center">
          <p className="font-semibold text-lg">
            See personalized recommendations
          </p>
          <Link
            to={"/login"}
            className="bg-[#FFD978] text-black font-bold px-4 py-1 rounded-md text-center"
          >
            Sign In
          </Link>
          <div className="w-56 m-auto grid place-content-center">
            <p>
              New Customer?{" "}
              <a href="/register" className="text-blue-500">
                Start here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Landing;
