import React, { useState, useEffect } from "react";

const StopsSegments = ({ transactionData, setActiveIndex, activeIndex }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    if (transactionData) {
      setButtons([
        {
          label: "Pickup",
          username: transactionData.merchant.name,
          color: "text-yellow-500",
          disabled: false,
        },
        {
          label: "Dropoff",
          username: transactionData.customer.name,
          color: "text-green-500",
          disabled: true, // Initially disabled
        },
      ]);
    }
  }, [transactionData]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      // Logic to handle Pickup completion and enable Dropoff
      setButtons((prevButtons) =>
        prevButtons.map((button, i) =>
          i === 1 ? { ...button, disabled: false } : button
        )
      );
    }
  };

  const buttonClasses = (index, disabled) => {
    const baseClasses =
      "group flex flex-col items-start justify-start whitespace-nowrap py-2 align-middle font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed gap-1.5 w-full px-3 w-full";
    const activeClasses = "rounded-md bg-white shadow";
    const inactiveClasses = "rounded-lg bg-transparent text-slate-500";
    const disabledClasses = "disabled:slate-400 disabled:text-slate-400";

    return `${baseClasses} ${
      index === activeIndex ? activeClasses : inactiveClasses
    } ${disabled ? disabledClasses : ""}`;
  };

  return (
    <div className="flex w-full rounded-lg bg-gray-100 p-1">
      {buttons.map((button, index) => (
        <button
          key={index}
          type="button"
          className={[buttonClasses(index, button.disabled), button.color].join(
            " "
          )}
          onClick={() => handleButtonClick(index)}
          disabled={button.disabled}
        >
          <span>{button.label}</span>
          <span className="text-gray-500 text-sm">{button.username}</span>
        </button>
      ))}
    </div>
  );
};

export default StopsSegments;
