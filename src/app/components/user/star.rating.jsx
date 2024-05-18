import React from "react";
import { TbStarFilled } from "react-icons/tb";
const StarRating = () => {
  return (
    <>
      <div className="flex items-center">
        <TbStarFilled className="text-yellow-400" />
        <p className="ms-1 text-sm font-semibold text-gray-600 dark:text-white">
          4.95
        </p>
      </div>
    </>
  );
};

export default StarRating;
