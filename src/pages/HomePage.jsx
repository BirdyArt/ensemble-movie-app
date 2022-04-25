import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
      <div className="container text-center mx-auto py-6 w-11/12">
        <h1 className="text-5xl font-semibold text-white">
          The Open Movie Database Search App
        </h1>
        <hr className="my-5 mx-28 border-yellow	border-2 rounded-full" />
        <h3 className="text-2xl mb-8 text-white">
          Find your favorite movie and see poster, title and release year!
        </h3>
        <button
          onClick={() => navigate("/search")}
          className="rounded-full shadow-xl text-xl hover:bg-gray-100/50 font-semibold bg-white py-3 px-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"
        >
          Search
        </button>
      </div>
  );
};

export default HomePage;