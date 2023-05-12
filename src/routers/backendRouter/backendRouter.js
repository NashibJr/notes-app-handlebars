import { Router } from "express";
import backendController from "../../controllers/backendContorllers/backendController.js";

const backendRouter = Router();

backendRouter.post("/notes/create", backendController.create);
backendRouter.get("/notes/getnotes", backendController.get);

export default backendRouter;
