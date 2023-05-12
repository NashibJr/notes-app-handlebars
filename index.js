import express from "express";
import { engine } from "express-handlebars";
import frontendRouter from "./src/routers/frontend/frontendRouter.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import backendRouter from "./src/routers/backendRouter/backendRouter.js";
import Cors from "cors";

config();

const main = async () => {
  const app = express();
  try {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
      app.engine("handlebars", engine());
      app.set("view engine", "handlebars");

      app.use(express.static("images"));
      app.use(express.static("styles"));
      app.use(
        express.json(),
        express.urlencoded({ extended: false }),
        frontendRouter,
        backendRouter
      );

      console.log("connected to the database");
    });

    app.listen(4000, () => console.log("connected to port 4000"));
  } catch (error) {
    console.log(error);
  }
};

main();
