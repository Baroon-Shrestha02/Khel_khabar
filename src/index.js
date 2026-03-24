import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import Database from "./config/database.js";

const PORT = process.env.PORT || 3000;

Database()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server listeniing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
