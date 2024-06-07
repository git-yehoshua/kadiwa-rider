import EyeToggleButton from "@/app/components/buttons/eye.toggle.button";
import OvalButton from "@/app/components/buttons/oval.button";
import FloatPlaceholderInput from "@/app/components/input/float.placeholder.input";
import { asset } from "@/app/config/asset.config";
import { signInWithEmailAndPasswordFunc } from "@/app/services/firebase/auth.service";
import userService from "@/app/services/firebase/user.service";
import { getnsaveDeviceInfo } from "@/app/services/utils/device.detector";
import { saveDataToLocal } from "@/app/services/utils/localstorage.service";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
const deviceInfo = getnsaveDeviceInfo();

const Signin = ({ hideLogin }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLazyLoading, setShowLazyLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Add this state
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const deviceId = deviceInfo.deviceID;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetails = await userService.RIDER.getall();
        setUserData(userDetails);
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserAndVerifyDevice = async () => {
      try {
        const users = await userService.RIDER.getall();
        console.log(users);

        console.log(deviceId);
        const matchedUser = await userService.isThis.deviceOnline(
          deviceId,
          users
        );
        console.log(matchedUser);
        if (matchedUser) {
          setIsSuccess(true);
          setShowModal(true);
          setShowLazyLoading(true);
          setTimeout(function () {
            hideLogin();
            saveDataToLocal("uid", matchedUser);
            navigate("/main/home");
          }, 3000);
          return;
        }
      } catch (error) {
        console.error(
          "Error fetching user details or verifying device: ",
          error
        );
      }
    };

    fetchUserAndVerifyDevice();
  }, [deviceInfo.deviceID]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const isPhoneNumberValid = phone.length === 11;
    const isPasswordValid = password.length >= 8;

    if (isPhoneNumberValid && isPasswordValid) {
      try {
        // Sign in with Firebase
        const getemail = userService.function.getEmailByPhone(phone, userData);
        const user = await signInWithEmailAndPasswordFunc(getemail, password);

        // Set login success state and show modal
        setIsSuccess(true);
        setShowModal(true);
        const updateDeviceStatus = await userService.RIDER.device.updateStatus(
          user.uid,
          deviceId,
          true
        );
        console.log(updateDeviceStatus);

        setTimeout(() => {
          // setShowLazyLoading(true);
          setTimeout(function () {
            hideLogin();
            saveDataToLocal("uid", user.uid);
            navigate("/main/home");
          }, 3000);
        }, 900);
      } catch (error) {
        setIsSuccess(false);
        setIsDanger(true);
        console.error("Sign-in error:", error);
      }
    } else {
      setIsDanger(true);
    }
  };

  const handleTestLogin = () => {
    navigate("/main/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center sm:w-[80%] lg:w-1/3  md:w-1/2">
        <span className="relative flex flex-col items-center justify-start h-full">
          <div className="relative rounded-full z-40">
            <img src={asset.logo.path} alt="App Logo" className=" h-44 p-5" />
          </div>
          <p
            tabIndex={0}
            className="focus:outline-none text-lg font-semibold leading-6 text-green-800"
          >
            Login to your account
          </p>
        </span>
        <form
          action=""
          className="flex flex-col w-full gap-2 py-3 sm:px-4 md:px-8"
        >
          <FloatPlaceholderInput
            type="text"
            id="emailPhone"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="flex w-full">
            <FloatPlaceholderInput
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
            />

            <EyeToggleButton
              onClick={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
            />
          </div>

          <OvalButton text={"Login"} onClick={handleTestLogin} />
        </form>
        <div className="flex w-full items-center justify-center my-4">
          <hr className="w-full bg-gray-400" />
          <p className="font-medium text-sm leading-4 px-2.5 text-gray-400">
            OR
          </p>
          <hr className="w-full bg-gray-400  " />
        </div>
        <div className="bg-white rounded w-full p-4 px-10 ">
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
          >
            <FcGoogle size={20} />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
        </div>
        <p
          tabIndex={0}
          className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
        >
          Dont have account?
          <Link
            to={"/register"}
            className="mx-1 hover:text-green-500 focus:text-green-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
