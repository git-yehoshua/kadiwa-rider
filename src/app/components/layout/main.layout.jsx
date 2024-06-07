import React from "react";
import { appColors } from "@/app/config/styles.config/common.styles";
import BackButton from "../buttons/back.button";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "./header.container";

function MainLayout({ children, pageName, onBack }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={`fixed top-0 w-full z-20 ${appColors.primaryColor}`}>
        {/* <div
          className={`flex items-center gap-5 p-1.5 rounded-md  ${appColors.textDark}`}
        >
          <BackButton onBack={() => navigate(-1)} />
          
        </div> */}
        <HeaderContainer>
          <div className="flex w-full text-green-600">
            <BackButton onBack={() => navigate(-1)} />
            <h1 className="items-center justify-center font-semibold">
              {pageName}
            </h1>
          </div>
        </HeaderContainer>
      </div>
      <main
        className={`p-3 md:px-10 2xl:container mx-auto space-y-5 mb-20 mt-16 `}
      >
        {children}
      </main>
      {/* <BottomNav /> */}
    </div>
  );
}

export default MainLayout;
