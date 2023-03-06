// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, DatabaseReference } from "firebase/database";
import { QuizData } from "./interfaces";
import * as dotenv from "dotenv";

dotenv.config();

// Firebase configs
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "buzzfeed-clone.firebaseapp.com",
  databaseURL: "https://buzzfeed-clone-default-rtdb.firebaseio.com",
  projectId: "buzzfeed-clone",
  storageBucket: "buzzfeed-clone.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(firebaseApp);

//Get a reference to all the database
const contentRef = ref(db);

//Read the data at the specified reference
export const getContentData = async () => {
  try {
    const snapshot = await get(contentRef);

    if (snapshot.exists()) {
      const data: QuizData = snapshot.val();
      return data;
    } else {
      console.log("No data is available");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
