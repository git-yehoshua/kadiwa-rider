import React from "react";

const HeaderContainer = ({ children }) => {
  return (
    <div className="fixed top-0">
      <div className="flex items-center justify-center w-screen bottom-0 relative z-auto">
        <div className="w-full bg-green-100 p-4 rounded-b-xl shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
