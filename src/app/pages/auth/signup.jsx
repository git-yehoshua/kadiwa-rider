import React, { useState } from "react";
import { asset } from "@/app/config/asset.config";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import OvalButton from "@/app/components/buttons/oval.button";
import FloatPlaceholderInput from "@/app/components/input/float.placeholder.input";
import { generateKDWID } from "@/app/services/utils/id.generator";
import userData from "@/app/services/utils/user.utils";
import userService from "@/app/services/firebase/user.service";
import { getnsaveDeviceInfo } from "@/app/services/utils/device.detector";
import authService, {
  createUserWithEmailAndPasswordFunc,
} from "@/app/services/firebase/auth.service";
import { getCurrentTimestamp } from "@/app/services/utils/get.current.time";
import { saveDataToLocal } from "@/app/services/utils/localstorage.service";

const Signup = ({ autoLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const deviceInfo = getnsaveDeviceInfo();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleGoogleSignUp = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const user = await authService.RIDER.GoogleAuth();
      console.log("Google user signed in:", user.uid);
      setSuccess("Google sign-in successful!");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const user = await authService.RIDER.createUserWithEmailAndPasswordFunc(
        email,
        password
      );
      const DateAndTime = getCurrentTimestamp();
      const kdwID = generateKDWID();
      const getuserData = userData.RIDER.CREATE(
        email,
        user,
        kdwID,
        phone,
        deviceInfo,
        DateAndTime
      );
      console.log(getuserData);
      const result = await userService.RIDER.create(user.uid, getuserData);
      console.log(result ? true : "error");
      setTimeout(() => {
        // setShowLazyLoading(true);
        setTimeout(function () {
          saveDataToLocal("uid", user.uid);
          autoLogin();
          navigate("/home");
        }, 3000);
      }, 900);
    } catch (error) {
      console.log("Error result:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center sm:w-[80%] lg:w-1/3 md:w-1/2">
        <span className="relative flex flex-col items-center justify-start h-full">
          <div className="relative rounded-full z-40">
            <img src={asset.logo.path} alt="App Logo" className="h-44 p-5" />
          </div>
          <p
            tabIndex={0}
            className="focus:outline-none text-lg font-semibold leading-6 text-green-800"
          >
            Sign up for an account
          </p>
        </span>
        <form
          onSubmit={handleSubmit}
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
          <FloatPlaceholderInput
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FloatPlaceholderInput
              type="password"
              id="password"
              placeholder="Set your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <FloatPlaceholderInput
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          {/* <div className="flex items-center mt-4 mb-4">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="terms"
              className="text-gray-500 dark:text-gray-300 ms-2 text-sm"
            >
              I accept the{" "}
              <Link
                className="font-medium text-blue-600 hover:underline
                dark:text-blue-500"
                to={"/hehehe"}
              >
                Terms and Conditions
              </Link>
            </label>
          </div> */}
          <div className="pt-2">
            <OvalButton
              text={"Sign Up"}
              title="Sign Up"
              type="submit"
              loading={loading}
            />
          </div>
        </form>

        <div className="bg-white rounded w-full p-4 px-10 justify-center">
          <button
            aria-label="Continue with Google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center justify-center w-full"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle size={20} />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 p-4">
        <p className="focus:outline-none text-sm font-medium leading-none text-gray-500">
          Already have an account?
        </p>
        <Link
          to="/"
          className="mx-1 hover:text-green-500 focus:text-green-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
