import React from "react";
import { TbStarFilled } from "react-icons/tb";
const StarRating = () => {
  return (
    <>
      <div className="flex items-center bg-white rounded-full shadow-sm p-1">
        <p className="me-1 text-[12px] font-semibold text-gray-600 dark:text-white">
          4.95
        </p>
        <TbStarFilled className="text-yellow-400" />
      </div>
    </>
  );
};

export default StarRating;
