import { v4 as uuidv4 } from "uuid";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  browserName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";
import { getDataFromLocal, saveDataToLocal } from "./localstorage.service";

export const getnsaveDeviceInfo = () => {
  // Retrieve device ID from local storage or generate a new one
  let deviceID = getDataFromLocal("deviceID");
  if (!deviceID) {
    deviceID = uuidv4();
    saveDataToLocal("deviceID", deviceID);
  }

  // Log device model and browser name
  // Determine device type, brand, and browser
  const deviceType = isMobile ? "Mobile" : isBrowser ? "Browser" : "Unknown";
  const deviceBrand = mobileVendor ? mobileVendor : "Unknown";
  const deviceBrowser = browserName ? browserName : "Unknown";

  return { deviceID, deviceType, deviceBrand, deviceBrowser };
};
