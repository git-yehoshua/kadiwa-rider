import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import connect from "../config/firebase.config/firebase.db.connect";

class User {
  constructor(
    type,
    validID,
    contactNo,
    firstName,
    lastName,
    email,
    address = "",
    vehicleInfo = {}
  ) {
    this.type = type; // 'Customer' or 'Rider'
    this.validID = validID;
    this.contactNo = contactNo;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.vehicleInfo = vehicleInfo; // Applicable only for riders
    this.onlineStatus = false; // Applicable only for riders
    this.bookings = [];
  }

  // Method to create a new user
  static async createUser(
    type,
    validID,
    contactNo,
    firstName,
    lastName,
    email,
    password,
    address = "",
    vehicleInfo = {}
  ) {
    const auth = connect.firebase.auth;
    const db = connect.firebase.database;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = new User(
        type,
        validID,
        contactNo,
        firstName,
        lastName,
        email,
        address,
        vehicleInfo
      );
      await set(ref(db, "users/" + userCredential.user.uid), user);
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  // Method to update user information
  static async updateUser(userId, updates) {
    const db = connect.firebase.database;
    try {
      await update(ref(db, "users/" + userId), updates);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  // Method to delete a user
  static async deleteUser(userId) {
    const db = connect.firebase.database;
    try {
      await remove(ref(db, "users/" + userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  // Method to sign in a user
  static async signInUser(email, password) {
    const auth = connect.firebase.auth;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error("Error signing in user:", error);
    }
  }

  // Method to sign out a user
  static async signOutUser() {
    const auth = connect.firebase.auth;
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out user:", error);
    }
  }

  // Method to toggle online status for riders
  static async toggleOnlineStatus(userId, currentStatus) {
    const db = connect.firebase.database;
    try {
      await update(ref(db, "users/" + userId), {
        onlineStatus: !currentStatus,
      });
      console.log("User online status toggled successfully");
    } catch (error) {
      console.error("Error toggling online status:", error);
    }
  }

  // Method to get user information
  static async getUserInfo(userId) {
    const db = connect.firebase.database;
    try {
      const snapshot = await get(ref(db, "users/" + userId));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No user data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      return null;
    }
  }
}

export default User;
