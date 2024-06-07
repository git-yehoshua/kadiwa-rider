import bookingService from "../firebase/booking.service";

// Create Booking
// Create Booking
export const createBooking = async (formData) => {
  const { owner, pickup, dropoff, details, status, rider, price } = formData;
  try {
    const { bookingId, newBooking } = await bookingService.create(
      owner,
      pickup,
      dropoff,
      details,
      status,
      rider,
      price
    );
    console.log("Booking created successfully with ID:", bookingId);
    console.log("Booking details:", newBooking);
    return { bookingId, newBooking };
  } catch (error) {
    console.error("Error creating booking:", error); // Log the error message
    return null;
  }
};

// Get Booking by ID
export const getBooking = async (bookingId) => {
  try {
    const booking = await bookingService.get(bookingId);
    console.log("Booking details:", booking);
    return booking;
  } catch (error) {
    console.error("Error fetching booking:", error);
    return null;
  }
};

// Update Booking
export const updateBooking = async (bookingId, updateData) => {
  try {
    const updated = await bookingService.update(bookingId, updateData);
    if (updated) {
      console.log("Booking updated successfully");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating booking:", error);
    return false;
  }
};

// Delete Booking
export const deleteBooking = async (bookingId) => {
  try {
    const deleted = await bookingService.remove(bookingId);
    if (deleted) {
      console.log("Booking deleted successfully");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error deleting booking:", error);
    return false;
  }
};

// Get All Bookings
export const getAllBookings = async () => {
  try {
    const bookings = await bookingService.getAll();
    console.log("All bookings:", bookings);
    return bookings;
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    return [];
  }
};

// Get Bookings by User
export const getBookingsByUser = async (userId) => {
  try {
    const userBookings = await bookingService.getBookingsByUser(userId);
    console.log("User bookings:", userBookings);
    return userBookings;
  } catch (error) {
    console.error("Error fetching bookings by user:", error);
    return [];
  }
};
