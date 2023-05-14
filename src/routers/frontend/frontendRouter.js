import { Router } from "express";
import FrontendController from "../../controllers/frontend/frontendController.js";

const frontendRouter = Router();

frontendRouter.get("/", FrontendController.home);
frontendRouter.get("/newnote", FrontendController.newNote);
frontendRouter.get("/mynotes", FrontendController.myNotes);
frontendRouter.get("/singlenotepage/:id", FrontendController.singleNote);
frontendRouter.get("/delete/:id", FrontendController.delete);

export default frontendRouter;
