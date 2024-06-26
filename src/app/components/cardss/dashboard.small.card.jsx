import React from "react";

const SmallCard = ({
  icon,
  title,
  value,
  iconColor,
  titleColor,
  valueColor,
}) => {
  return (
    <div className="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full p-3 dark:bg-navy-700">
          <span
            className={`flex items-center ${
              iconColor ? iconColor : "text-brand-500 dark:text-white"
            }`}
          >
            {icon}
          </span>
        </div>
      </div>
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p
          className={`font-dm text-sm font-medium ${
            titleColor ? titleColor : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {title}
        </p>
        <h4
          className={`text-xl font-semibold ${
            valueColor ? valueColor : "text-gray-700 dark:text-white"
          }`}
        >
          {value}
        </h4>
      </div>
    </div>
  );
};

export default SmallCard;
