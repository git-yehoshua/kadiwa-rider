import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import MainLayout from "@/app/components/layout/main.layout";
import common from "@/app/config/common";
import SquareButton from "@/app/components/buttons/square.button";
import {
  getDataFromLocal,
  removeDataFromLocal,
} from "@/app/services/utils/localstorage.service";
import userService from "@/app/services/firebase/user.service";
import { getnsaveDeviceInfo } from "@/app/services/utils/device.detector";
const deviceInfo = getnsaveDeviceInfo();

function Settings() {
  const [loggedOut, setLoggedOut] = useState(false);
  const handleLogout = async () => {
    try {
      const updateStatus = await userService.RIDER.device.updateStatus(
        getDataFromLocal("uid"),
        deviceInfo.deviceID,
        false
      );
      console.log("success" + updateStatus);
      removeDataFromLocal("isLoggedIn");
      setLoggedOut(true);

      setTimeout(() => {
        //   closeLogoutModal();
        window.location.reload();
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainLayout pageName={"Settings"}>
        {Object.entries(common.settingsConfig).map(
          ([section, options], index) => (
            <section key={index}>
              <h1 className={`font-semibold text-lg mb-2 text-dark`}>
                {section}
              </h1>

              {options.map((option, optionIndex) => (
                <div key={optionIndex} className="px-2 py-4 border-b">
                  <Link
                    to={option.path}
                    className={`flex items-center justify-between text-dark`}
                  >
                    {option.label} <IoIosArrowForward />
                  </Link>
                </div>
              ))}
            </section>
          )
        )}

        <div className="flex items-center justify-center">
          <SquareButton text={"Logout"} onClick={handleLogout} />
        </div>
      </MainLayout>
      {loggedOut && <Navigate to="/" />}
    </>
  );
}

export default Settings;
