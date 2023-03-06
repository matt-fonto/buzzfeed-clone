import express from "express";
//importing our get data function
import { getContentData } from "./firebaseConfig";

//initialize express
const app = express();

//When using Firebase SDK, we don't need to use Axios to make HTTP requests. The Firebase SDK provides its own methods for interacting with Firebase

//Read the data at the specified reference
app.get("/", async (req, res) => {
  const data = await getContentData();

  if (data) {
    res.send(data);
  } else {
    res.send("No data is available");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
