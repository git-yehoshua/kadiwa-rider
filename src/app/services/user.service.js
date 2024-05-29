import connect from "../../config/connection/firebase.connect.database";

const { database, ref, set, get, update, remove } = connect.firebase;

const userService = {};

// Utility function to handle errors and return results
const handleError = (error) => {
  console.error(error);
  return error;
};

// User Service Methods
userService.user = {
  getAll: async () => {
    const usersRef = ref(database, "user/");
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
      return handleError("Error fetching all users: ", error);
    }
  },

  get: async (userId) => {
    const detailsRef = ref(database, `user/${userId}/`);
    try {
      const snapshot = await get(detailsRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      return handleError("Error fetching user details: ", error);
    }
  },

  create: async (userId, detailsData) => {
    const detailsRef = ref(database, `user/${userId}/`);
    try {
      await set(detailsRef, detailsData);
      return true;
    } catch (error) {
      return handleError("Error creating user details: ", error);
    }
  },

  update: async (userId, detailsData) => {
    const detailsRef = ref(database, `user/${userId}`);
    try {
      await update(detailsRef, detailsData);
      return true;
    } catch (error) {
      return handleError("Error updating user details: ", error);
    }
  },

  remove: async (userId) => {
    const detailsRef = ref(database, `user/${userId}`);
    try {
      await remove(detailsRef);
      return true;
    } catch (error) {
      return handleError("Error deleting user details: ", error);
    }
  },

  userInfo: {
    get: async (userId) => {
      const detailsRef = ref(database, `user/${userId}/userInfo`);
      try {
        const snapshot = await get(detailsRef);
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      } catch (error) {
        return handleError("Error fetching user info: ", error);
      }
    },

    create: async (userId, detailsData) => {
      const detailsRef = ref(database, `user/${userId}/userInfo`);
      try {
        await set(detailsRef, detailsData);
        return true;
      } catch (error) {
        return handleError("Error creating user info: ", error);
      }
    },

    update: async (userId, detailsData) => {
      const detailsRef = ref(database, `user/${userId}/userInfo`);
      try {
        await update(detailsRef, detailsData);
        return true;
      } catch (error) {
        return handleError("Error updating user info: ", error);
      }
    },
  },

  device: {
    app: {
      create: async (userId, detailsData) => {
        const detailsRef = ref(database, `user/${userId}/devices/app`);
        try {
          await set(detailsRef, detailsData);
          return true;
        } catch (error) {
          return handleError("Error creating device details: ", error);
        }
      },

      updateStatus: async (userId, deviceId, isOnline) => {
        const userDevicesRef = ref(database, `user/${userId}/devices/app`);
        try {
          const snapshot = await get(userDevicesRef);
          if (snapshot.exists()) {
            const updates = {};
            snapshot.forEach((childSnapshot) => {
              if (childSnapshot.val().deviceId === deviceId) {
                updates[`${childSnapshot.key}/isOnline`] = isOnline;
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
          return handleError("Error updating device status: ", error);
        }
      },
    },
  },

  wallet: {
    update: async (userId, detailsData) => {
      const detailsRef = ref(database, `user/${userId}/wallet`);
      try {
        await update(detailsRef, detailsData);
        return true;
      } catch (error) {
        return handleError("Error updating wallet details: ", error);
      }
    },
  },
};

// Utility Functions
userService.function = {
  getEmailByPhone: (phoneNo, data) => {
    const user = data.find((user) => user.userDetails.contactNo === phoneNo);
    return user ? user.userDetails.email : "Email not found";
  },
};

// Status Check Functions
userService.isThis = {
  deviceOnline: async (deviceId, data) => {
    const matchedUser = data.find((user) =>
      user.userDetails.devices.app.some(
        (device) => device.deviceId === deviceId && device.isOnline
      )
    );
    return matchedUser ? matchedUser.userId : null;
  },
  deviceNew: async (deviceId, data) => {
    const deviceDetected = data.find((user) =>
      user.userDetails.devices.app.some(
        (device) => device.deviceId === deviceId
      )
    );
    return !!deviceDetected;
  },
};

export default userService;
