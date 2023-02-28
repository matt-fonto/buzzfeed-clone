// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, DatabaseReference } from "firebase/database";
import { QuizData } from "./interfaces";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

//initialize express
const app = express();

//When using Firebase SDK, we don't need to use Axios to make HTTP requests. The Firebase SDK provides its own methods for interacting with Firebase

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

//Get a reference to the "content" node in the database
const contentRef = ref(db, "content");
const answersRef = ref(db, "answers");

//Read the data at the specified reference
app.get("/", async (req, res) => {
  try {
    const snapshot = await get(contentRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      res.send(data);
    } else {
      console.log("No data is available");
      res.send("No data is available");
    }
  } catch (error) {
    console.log(error);
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
