const userData = {};

// ===========================
//  RIDER USER DATA REQUIREMENTS
// ===========================
userData.RIDER = {
  CREATE: (email, user, kdwID, phone, deviceInfo, DateAndTime) => {
    return {
      uid: user.uid,
      kdwID: kdwID,
      userInfo: {
        fullname: email.split("@")[0],
        gender: "Other",
        birthday: "",
        location: {
          currentLocation: {
            fulladdress: "",
            updateAt: "",
          },
          recentLocation: [
            {
              fulladdress: "",
              savedTimeSpan: "",
            },
          ],
        },
        metadata: {
          lastLoginAt: "",
          lastSignInTime: "",
        },
        createdAt: DateAndTime,
        updatedAt: "",
      },
      riderInfo: {
        isKDWAccredited: false,
        isDriverLicense: false,
        DriverLicenseExp: "",
        typeDriverLicense: "",
        transportation: {
          type: "",
          unit: "",
          plateNo: "",
          color: "",
        },
        metadata: {
          lastLoginAt: "",
          lastSignInTime: "",
        },
        createdAt: "",
        updatedAt: "",
      },
      auth: {
        email: email,
        phone: phone,
        isRider: false,
        isEmailVerified: false,
        isPhoneNumVerified: false,
        currentSignInTimeStamp: "",
        currentProvider: "Default",
        isDisabled: false,
        isDeleted: false,
        forbiddenCode: "",
      },
      devices: {
        0: {
          type: deviceInfo.deviceType,
          brand: deviceInfo.deviceBrand,
          browser: deviceInfo.deviceBrowser,
          deviceId: deviceInfo.deviceID,
          isOnline: true,
        },
      },
      activity: {
        isOnline: true,
        isStoreOnline: false,
        isRiderOnline: false,
        isWareHouseOnline: false,
        log: {
          0: {
            author: "Kadiwa Rider App",
            role: "system",
            description: `New Account Created, Welcome ${email}`,
            type: "authentication",
            provider: "Default",
            timeStamp: DateAndTime,
          },
        },
      },
      wallet: {
        kdwPts: 0,
      },
    };
  },
};

userData.devices = (deviceInfo, isOnline) => {
  return {
    type: deviceInfo.deviceType,
    brand: deviceInfo.deviceBrand,
    browser: deviceInfo.deviceBrowser,
    deviceId: deviceInfo.deviceID,
    isOnline: isOnline ? true : false,
  };
};

export default userData;
