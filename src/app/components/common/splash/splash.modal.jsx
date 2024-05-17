import React from "react";

function ModalComponent({ children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-full h-full">{children}</div>
    </div>
  );
}

export default ModalComponent;
