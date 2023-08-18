import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Welcome = ({ pageName, location }) => {
  return (
    <div className="flex items-center z-20 h-[60vh] justify-center">
      <div className="w-full md:w-[200px] h-[200px] relative flex flex-col justify-center items-center">
        <div className="mb-5 text-3xl">{pageName}</div>
        <img
          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/breadcrumb-bg.png"
          alt=""
          className="w-full opacity-10 absolute hidden md:block"
        />

        <div className="flex  items-center justify-center gap-5">
          <Link to='/' className="hover:text-yellow-500">Royal</Link> <FaGreaterThan /> <p>{location}</p>
          {/* <h1 className="animate__animated animate__bounce infinite"> hello</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
