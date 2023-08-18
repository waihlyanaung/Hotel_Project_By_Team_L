import { recipes } from "./data";
import Aos from "aos";
import SingleItem from "./SingleItem";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useState } from "react";

const ShopItems = () => {
  Aos.init();
  const [showSort, setShowSort] = useState(true);
  const [sort, setSort] = useState("Default Sorting");
  const sortHandler = (text) => {
    setSort(text);
  };
  // console.log(isOpenDetail);
  const flexItems =
    "flex flex-col md:flex-row items-center justify-between gap-3";
  return (
    <div className={`p-5`}>
      <div className={flexItems}>
        <h2 className=" font-light"> Showing all 8 results</h2>
        <button
          className="px-5 flex relative items-center justify-center gap-3 py-2 font-semibold border-slate-300 border-[1px]  rounded"
          onClick={() => setShowSort(!showSort)}
        >
          <span>{sort}</span>
          {showSort ? <BsArrowUp /> : <BsArrowDown />}
          {showSort && (
            <div className="flex border border-slate-300 top-10 animate__animated animate__fadeInUp right-1 w-[200px] bg-white z-20 p-3 items-center justify-center flex-col absolute">
              <button
                className="py-1"
                onClick={() => sortHandler("Default Sorting")}
              >
                Default Sorting
              </button>
              <button
                className="py-1"
                onClick={() => sortHandler("Sort By Popularity")}
              >
                Sort By Popularity
              </button>
              <button
                className="py-1"
                onClick={() => sortHandler("Sort By Latest")}
              >
                Sort By Latest
              </button>
              <button
                className="py-1"
                onClick={() => sortHandler("Sort By Average Rating")}
              >
                Sort By Average Rating
              </button>
            </div>
          )}
        </button>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap mt-5">
        {/* shop card start */}
        {recipes.map((recipe) => {
          return <SingleItem recipe={recipe} key={recipe.id} />;
        })}

        {/* shop card end  */}
      </div>
    </div>
  );
};

export default ShopItems;
