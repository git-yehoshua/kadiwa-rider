import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NewJobAccepted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main/transaction");
  };
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center text-white p-4 gap-3 bg-gray-800 bg-opacity-80 transition-opacity duration-300 ease-in-out z-[2000]"
      onClick={handleClick}
    >
      <div className="bg-white rounded-full w-fit mb-4">
        <MdCheckCircle size={100} className="text-green-500" />
      </div>
      <h1 className="text-3xl font-bold">New job accepted</h1>
      <p className="fixed bottom-[10%] text-lg animate-pulse">
        Tap anywhere to continue
      </p>
    </div>
  );
};

export default NewJobAccepted;
