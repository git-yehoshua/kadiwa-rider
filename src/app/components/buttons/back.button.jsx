import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = ({ onBack }) => {
  return (
    <button className="mx-2" onClick={onBack}>
      <IoArrowBackOutline size={25} />
    </button>
  );
};

export default BackButton;
