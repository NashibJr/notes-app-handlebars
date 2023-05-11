import express from "express";
import { engine } from "express-handlebars";
import frontendRouter from "./src/routers/frontend/frontendRouter.js";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.static("images"));

app.use(
  express.json(),
  express.urlencoded({ extended: false }),
  frontendRouter
);

app.listen(4000, () => console.log("connected to port 4000"));
