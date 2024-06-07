import connect from "../../config/firebase.config/firebase.connect";
import control from "../../controls/dev.test.switch";

const { riderdevdatabase, ridertestdatabase, ref, set, get, update, remove } =
  connect.firebase;
const userService = {};

// ===========================
//  RIDER USER SERVICE
// ===========================

userService.RIDER = {
  getall: async () => {
    const usersRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      "user/"
    );

    try {
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const users = [];
        snapshot.forEach((childSnapshot) => {
          const userId = childSnapshot.key;
          const userDetails = childSnapshot.val();
          users.push({ userId, userDetails });
        });
        return users;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching all users: ", error);
      return error;
    }
  },

  get: async (userId) => {
    const detailsRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `user/${userId}/`
    );
    try {
      const snapshot = await get(detailsRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching user details: ", error);
      return error;
    }
  },

  create: async (userId, detailsData) => {
    const detailsRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `user/${userId}/`
    );

    try {
      await set(detailsRef, detailsData);
      return true;
    } catch (error) {
      console.error("Error creating user details: ", error);
      return error;
    }
  },

  update: async (userId, detailsData) => {
    const detailsRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `user/${userId}`
    );

    try {
      await update(detailsRef, detailsData);
      return true;
    } catch (error) {
      console.error("Error updating user details: ", error);
      return error;
    }
  },

  remove: async (userId) => {
    const detailsRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `user/${userId}/details`
    );
    try {
      await remove(detailsRef);
      return true;
    } catch (error) {
      console.error("Error deleting user details: ", error);
      return error;
    }
  },

  //USER INFO
  userInfo: {
    get: async (userId) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/userInfo`
      );

      try {
        const snapshot = await get(detailsRef);
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching user details: ", error);
        return error;
      }
    },

    create: async (userId, detailsData) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/userInfo`
      );

      try {
        await set(detailsRef, detailsData);
        return true;
      } catch (error) {
        console.error("Error creating user details: ", error);
        return error;
      }
    },

    update: async (userId, detailsData) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/userInfo`
      );

      try {
        await update(detailsRef, detailsData);
        return true;
      } catch (error) {
        console.error("Error updating user details: ", error);
        return error;
      }
    },
  },

  //USER INFO
  riderInfo: {
    get: async (userId) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/riderInfo`
      );

      try {
        const snapshot = await get(detailsRef);
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching user details: ", error);
        return error;
      }
    },

    create: async (userId, detailsData) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/riderInfo`
      );

      try {
        await set(detailsRef, detailsData);
        return true;
      } catch (error) {
        console.error("Error creating user details: ", error);
        return error;
      }
    },

    update: async (userId, detailsData) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/riderInfo`
      );

      try {
        await update(detailsRef, detailsData);
        return true;
      } catch (error) {
        console.error("Error updating user details: ", error);
        return error;
      }
    },
  },
  //USER DEVICES
  device: {
    create: async (userId, detailsData) => {
      const detailsRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/devices/`
      );

      try {
        await set(detailsRef, detailsData);
        return true;
      } catch (error) {
        console.error("Error creating user details: ", error);
        return error;
      }
    },

    updateStatus: async (userId, deviceId, isOnline) => {
      const userDevicesRef = ref(
        control.DATABASE_CONNECTION.isDev
          ? riderdevdatabase
          : ridertestdatabase,
        `user/${userId}/devices/`
      );

      try {
        const snapshot = await get(userDevicesRef);
        if (snapshot.exists()) {
          const updates = {};
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().deviceId === deviceId) {
              updates[`${childSnapshot.key}/isOnline`] = isOnline
                ? true
                : false;
            }
          });
          if (Object.keys(updates).length > 0) {
            await update(userDevicesRef, updates);
            return true;
          } else {
            console.error("Device not found");
            return false;
          }
        } else {
          console.error("User devices not found");
          return false;
        }
      } catch (error) {
        console.error("Error updating device status: ", error);
        return error;
      }
    },
  },
};

userService.function = {
  getEmailByPhone: (phoneNo, data) => {
    const user = data.find((user) => user.userDetails.auth.phone === phoneNo);
    return user ? user.userDetails.auth.email : "Email not found";
  },

  getAllStoreOnly: (isDisabled, data) => {
    const stores = data
      .filter((user) => user.userDetails.activity.isDisabled === isDisabled)
      .map((user) => user.userDetails);
    return stores.length > 0 ? stores : null;
  },
};

userService.isThis = {
  deviceOnline: async (deviceId, data) => {
    const matchedUser = data.find((user) =>
      user.userDetails.devices.some(
        (device) => device.deviceId === deviceId && device.isOnline
      )
    );
    return matchedUser ? matchedUser.userId : null;
  },
  deviceNew: async (deviceId, data) => {
    const devideDetect = data.find((user) =>
      user.userDetails.devices.some((device) => device.deviceId === deviceId)
    );
    return devideDetect ? true : false;
  },
};

export default userService;
