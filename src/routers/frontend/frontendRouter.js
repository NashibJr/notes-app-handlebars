import { Router } from "express";
import FrontendController from "../../controllers/frontend/frontendController.js";

const frontendRouter = Router();

frontendRouter.get("/", FrontendController.home);
frontendRouter.get("/newnote", FrontendController.newNote);
frontendRouter.get("/mynotes", FrontendController.myNotes);

export default frontendRouter;
