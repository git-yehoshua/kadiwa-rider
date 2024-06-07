import SquareButton from "@/app/components/buttons/square.button";
import ProfileCard from "@/app/components/cardss/profile.card";
import MainLayout from "@/app/components/layout/main.layout";
import { HiOutlineLogout } from "react-icons/hi";
import userService from "@/app/services/firebase/user.service";
import { getDataFromLocal } from "@/app/services/utils/localstorage.service";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetails = await userService.RIDER.get(
          getDataFromLocal("uid")
        );
        setUserData(userDetails);
      } catch (error) {
        console.error("Error fetching user details: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <MainLayout pageName={"Account"}>
        <ProfileCard userData={userData} />
        <div className="flex flex-col xl:flex-row gap-5">
          <label htmlFor="label" className="text-gray-500">
            Label
          </label>
        </div>
      </MainLayout>
    </>
  );
};

export default ProfilePage;
