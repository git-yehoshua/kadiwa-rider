import { dummyProfile } from "@/app/config/user.config";
import React from "react";
import StarRating from "./star.rating";

const ProfilePicture = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <button id="avatarButton" type="button">
          <img
            src={dummyProfile.avatarSrc}
            alt="User dropdown"
            className="rounded-full min-w-[55px] min-h-[55px] border-gray-300 border-[3px] hover:border-blue-200 transition-all ease-in-out duration-150 active:border-blue-300"
          />
        </button>
        <StarRating />
      </div>
    </div>
  );
};

export default ProfilePicture;
