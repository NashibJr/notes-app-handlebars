import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, resp, next) => resp.render("home"));
app.get("/newnote", (req, resp, next) => resp.render("newnote"));
app.get("/mynotes", (req, resp, next) => resp.render("mynotes"));

app.listen(4000, () => console.log("connected to port 4000"));
