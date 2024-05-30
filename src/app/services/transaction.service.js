import connect from "../config/firebase.config/firebase.connect";
import control from "../controls/dev.test.switch";

const {
  database,
  appdevdatabase,
  apptestdatabase,
  riderdevdatabase,
  ridertestdatabase,
  hubdevdatabase,
  hubtestdatabase,
  posdevdatabase,
  postestdatabase,
  ref,
  set,
  get,
  update,
  remove,
} = connect.firebase;
const transactionService = {};

// ===========================
//  ADD TO CART  SERVICE
// ===========================
transactionService.ADDTOCART = {};

// ===========================
//  CHECKOUT UER SERVICE
// ===========================
transactionService.CHECKOUT = {};

// ===========================
//  BOOKING  SERVICE
// ===========================
transactionService.BOOKING = {
  getall: async () => {
    const boookingRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      "booking/"
    );

    try {
      const snapshot = await get(boookingRef);
      if (snapshot.exists()) {
        const users = [];
        snapshot.forEach((childSnapshot) => {
          const bookingId = childSnapshot.key;
          const bookingDetails = childSnapshot.val();
          users.push({ bookingId, bookingDetails });
        });
        return users;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching all booking: ", error);
      return error;
    }
  },

  get: async (bookingId) => {
    const bookingRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `booking/${bookingId}/`
    );
    try {
      const snapshot = await get(bookingRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching booking details: ", error);
      return error;
    }
  },

  create: async (bookingId, bookingData) => {
    const bookingRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `booking/${bookingId}/`
    );

    try {
      await set(bookingRef, bookingData);
      return true;
    } catch (error) {
      console.error("Error creating booking details: ", error);
      return error;
    }
  },

  update: async (bookingId, bookingData) => {
    const bookingRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `booking/${bookingId}`
    );

    try {
      await update(bookingRef, bookingData);
      return true;
    } catch (error) {
      console.error("Error updating booking details: ", error);
      return error;
    }
  },

  remove: async (bookingId) => {
    const bookingRef = ref(
      control.DATABASE_CONNECTION.isDev ? riderdevdatabase : ridertestdatabase,
      `booking/${bookingId}/`
    );
    try {
      await remove(bookingRef);
      return true;
    } catch (error) {
      console.error("Error deleting booking details: ", error);
      return error;
    }
  },
};

// ===========================
//  BOOKING  SERVICE
// ===========================
transactionService.LOAD = {};

// ===========================
//  AGRILYF  SERVICE
// ===========================
transactionService.AGRILYF = {};

export default transactionService;
