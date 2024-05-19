import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR: ", error);
      throw error;
    });

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is listening at ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONDODB connection failed: ", error);
  });
