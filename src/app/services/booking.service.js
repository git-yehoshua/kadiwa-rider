import connect from "../firebase.config";
import Booking from "../models/booking.model";
import { ref, set, get, update, remove } from "firebase/database";

const { database } = connect;

const bookingService = {
  getAll: async () => {
    const bookingsRef = ref(database, "booking/");
    try {
      const snapshot = await get(bookingsRef);
      if (snapshot.exists()) {
        const bookings = [];
        snapshot.forEach((childSnapshot) => {
          const bookingId = childSnapshot.key;
          const bookingDetails = childSnapshot.val();
          bookings.push({ bookingId, bookingDetails });
        });
        return bookings;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching all bookings: ", error);
      return error;
    }
  },
  get: async (bookingId) => {
    const detailsRef = ref(database, `booking/${bookingId}/`);
    try {
      const snapshot = await get(detailsRef);
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
  create: async (owner, pickup, dropoff, details, status, rider, price) => {
    const newBooking = new Booking(
      owner,
      pickup,
      dropoff,
      details,
      status,
      rider,
      price
    );
    const bookingId = ref(database, "booking/").push().key;
    const detailsRef = ref(database, `booking/${bookingId}/`);
    try {
      await set(detailsRef, newBooking);
      return { bookingId, newBooking };
    } catch (error) {
      console.error("Error creating booking: ", error);
      return error;
    }
  },
  update: async (bookingId, updateData) => {
    const detailsRef = ref(database, `booking/${bookingId}`);
    updateData.updatedAt = new Date().toISOString();
    try {
      await update(detailsRef, updateData);
      return true;
    } catch (error) {
      console.error("Error updating booking details: ", error);
      return error;
    }
  },
  remove: async (bookingId) => {
    const detailsRef = ref(database, `booking/${bookingId}`);
    try {
      await remove(detailsRef);
      return true;
    } catch (error) {
      console.error("Error deleting booking details: ", error);
      return error;
    }
  },
  getBookingsByUser: async (userId) => {
    const bookingsRef = ref(database, "booking/");
    try {
      const snapshot = await get(bookingsRef);
      if (snapshot.exists()) {
        const userBookings = [];
        snapshot.forEach((childSnapshot) => {
          const bookingDetails = childSnapshot.val();
          if (
            bookingDetails.owner === userId ||
            bookingDetails.rider === userId
          ) {
            userBookings.push({ bookingId: childSnapshot.key, bookingDetails });
          }
        });
        return userBookings;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching bookings by user: ", error);
      return error;
    }
  },
  updateStatus: async (bookingId, status) => {
    const detailsRef = ref(database, `booking/${bookingId}`);
    const updateData = {
      status: status,
      updatedAt: new Date().toISOString(),
    };
    try {
      await update(detailsRef, updateData);
      return true;
    } catch (error) {
      console.error("Error updating booking status: ", error);
      return error;
    }
  },
};

export default bookingService;
