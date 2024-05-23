import { dummyProfile } from "@/app/config/user.config";
import React from "react";
import StarRating from "./star.rating";

const ProfilePicture = ({ onClick }) => {
  return (
    <div className="absolute top-1 right-2 z-[1999]">
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          <button id="avatarButton" type="button" onClick={onClick}>
            <img
              src={dummyProfile.avatarSrc}
              alt="User dropdown"
              className="rounded-full max-w-[55px] max-h-[55px] border-gray-300 border-[3px] hover:border-green-200 transition-all ease-in-out duration-150 active:border-green-300"
            />
          </button>
          {/* <StarRating /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
