import { dummyProfile } from "@/app/config/user.config";
import React from "react";
import { IoCall, IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProfileCard({ userData }) {
  return (
    <>
      <section
        className={`p-5 rounded-2xl bg-gradient-to-bl from-slate-50  to-green-100 space-y-5 text-light shadow-sm`}
      >
        <div className="flex justify-end">
          <Link
            to={"/account/settings"}
            className={`px-3 py-1 rounded-full text-sm bg-secondary text-dark border text-green-800`}
          >
            Settings
          </Link>
        </div>

        <div className="space-y-1">
          {/* <IoPersonCircle fontSize={"70px"} className={`text-light`} /> */}

          <img
            src={dummyProfile.avatarSrc}
            className="rounded-full min-w-[55px] min-h-[55px] border-gray-300 border-[3px] hover:border-green-200 transition-all ease-in-out duration-150 active:border-green-300"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          <h1 className="text-xl font-semibold tracking-wider">
            {userData?.userInfo?.fullname ? userData.userInfo.fullname : "...."}
          </h1>
          <div className="flex items-center gap-5">
            <IoCall fontSize={"20px"} className={`text-light`} />
            <p> {userData?.auth?.phone ? userData.auth.phone : "...."}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileCard;
