import connect from "@/app/config/firebase.config/firebase.connect";
import control from "@/app/controls/dev.test.switch";

const {
  auth,
  riderdevauth,
  ridertestauth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} = connect.firebase;
const authService = {};
const fb_auth_provider = new FacebookAuthProvider();
const google_auth_provider = new GoogleAuthProvider();

// ===========================
//  RIDER USER SERVICE
// ===========================
authService.RIDER = {
  FacebookAuth: async () => {
    const fbAuth = await signInWithPopup(
      control.DATABASE_CONNECTION.isDev ? riderdevauth : ridertestauth,
      fb_auth_provider
    );
    return fbAuth;
  },
  GoogleAuth: async () => {
    const googleAuth = await signInWithPopup(
      control.DATABASE_CONNECTION.isDev ? riderdevauth : ridertestauth,
      google_auth_provider
    );
    return googleAuth;
  },
  createUserWithEmailAndPasswordFunc: async (email, password) => {
    try {
      const auth = control.DATABASE_CONNECTION.isDev
        ? riderdevauth
        : ridertestauth;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User created successfully
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(auth.currentUser);
      console.log("User created:", user.uid);
      return user;
    } catch (error) {
      // Handle errors
      console.error("Error creating user:", error.message);
      throw error;
    }
  },
  signInWithEmailAndPasswordFunc: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        control.DATABASE_CONNECTION.isDev ? riderdevauth : ridertestauth,
        email,
        password
      );
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user.uid);
      return user;
    } catch (error) {
      // Handle errors
      console.error("Error signing in:", error.message);
      throw error;
    }
  },
  Logout: async () => {
    try {
      await signOut(
        control.DATABASE_CONNECTION.isDev ? riderdevauth : ridertestauth
      );
      console.log("User logged out successfully.");
      // Optionally, you can redirect the user or perform any other action after logout.
    } catch (error) {
      console.error("Error occurred while logging out:", error.message);
      // Handle error
    }
  },
  forgotPassword: async (email) => {
    try {
      await sendPasswordResetEmail(
        control.DATABASE_CONNECTION.isDev ? riderdevauth : ridertestauth,
        email
      );
      console.log("Password reset email sent successfully");
    } catch (error) {
      // Handle errors
      console.error("Error sending password reset email:", error.message);
      throw error;
    }
  },
};

// Functions for the default auth
export async function createUserWithEmailAndPasswordFunc(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User created successfully
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(auth.currentUser);

    console.log("User created:", user.uid);
    return user;
  } catch (error) {
    // Handle errors
    console.error("Error creating user:", error.message);
    throw error;
  }
}

export async function signInWithEmailAndPasswordFunc(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User signed in successfully
    const user = userCredential.user;
    console.log("User signed in:", user.uid);
    return user;
  } catch (error) {
    // Handle errors
    console.error("Error signing in:", error.message);
    throw error;
  }
}

export const Logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
    // Optionally, you can redirect the user or perform any other action after logout.
  } catch (error) {
    console.error("Error occurred while logging out:", error.message);
    // Handle error
  }
};

// Function to handle forgot password
export async function forgotPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
  } catch (error) {
    // Handle errors
    console.error("Error sending password reset email:", error.message);
    throw error;
  }
}

export default authService;
