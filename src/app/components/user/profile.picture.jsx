import { dummyProfile } from "@/app/config/user.config";
import React from "react";

const ProfilePicture = () => {
  return (
    <div className="relative">
      <button id="avatarButton" type="button">
        <img
          src={dummyProfile.avatarSrc}
          alt="User dropdown"
          className="rounded-full min-w-[55px] min-h-[55px] border-gray-300 border-[3px] hover:border-blue-200 transition-all ease-in-out duration-150 active:border-blue-300"
        />
      </button>
    </div>
  );
};

export default ProfilePicture;
