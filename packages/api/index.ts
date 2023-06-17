// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { firebaseApp } from "./firebase.app";

interface UserData {
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
}

export const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const userCollection = collection(firestore, "users");

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    const user: UserData = result.user;
    const userToken = user?.email || "";
    const userName = user?.displayName || "";
    sessionStorage.setItem("userToken", userToken);
    sessionStorage.setItem("userName", userName);
    // Handle successful login
    return result.user;
  } catch (error) {
    // Handle login error
    throw error;
  }
};

export const saveUserData = async (data: UserData) => {
  try {
    const emailQuery = query(
      collection(firestore, "users"),
      where("email", "==", data.email)
    );
    // Execute the query to get the matching documents
    const querySnapshot = await getDocs(emailQuery);
    if (querySnapshot.empty) {
      const docRef = await addDoc(userCollection, data);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export const getUserData = async () => {
  try {
    const email = sessionStorage.getItem("userToken");
    const emailQuery = query(
      collection(firestore, "users"),
      where("email", "==", email)
    );
    // Execute the query to get the matching documents
    const querySnapshot = await getDocs(emailQuery);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};

// Initialize Firebase
