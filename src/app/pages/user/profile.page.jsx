import React, { useEffect, useState } from "react";
import SquareButton from "@/app/components/buttons/square.button";
import ProfileCard from "@/app/components/cardss/profile.card";
import MainLayout from "@/app/components/layout/main.layout";
import { HiOutlineLogout } from "react-icons/hi";
import userService from "@/app/services/firebase/user.service";
import { getDataFromLocal } from "@/app/services/utils/localstorage.service";
import SmallCard from "@/app/components/cardss/dashboard.small.card";
import { BsBagCheck } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import ProfileInfoCard from "@/app/components/cardss/profile.info.card";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null); // changed to null to handle initial state better

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

  if (isLoading) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <MainLayout pageName={"Account"}>
      <ProfileCard userData={userData} />
      <div className="flex flex-col xl:flex-row gap-5">
        <label htmlFor="label" className="text-gray-500">
          Daily Achievements
        </label>
        <div className="flex gap-2">
          <SmallCard
            icon={<LiaCoinsSolid size={35} />}
            title={"Earnings today"}
            value={"₱ 0.00"}
            iconColor={"text-yellow-500"}
          />
          <SmallCard
            icon={<BsBagCheck size={30} />}
            title={"Bookings completed"}
            value={"0"}
            iconColor={"text-green-500"}
          />
        </div>
        <label htmlFor="label" className="text-gray-500">
          Manage profile
        </label>
        <ProfileInfoCard user={userData} />
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
