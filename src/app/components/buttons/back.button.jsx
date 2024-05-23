import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = ({ onBack }) => {
  return (
    <button className="mx-4" onClick={onBack}>
      <IoArrowBackOutline size={30} />
    </button>
  );
};

export default BackButton;
