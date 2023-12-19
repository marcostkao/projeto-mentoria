import { Router } from "express";
import { ApplicationsController } from "../controllers/ApplicationController";

const applicationsRoutes = Router();

const applicationsController = new ApplicationsController();

applicationsRoutes.post("/", applicationsController.handle);
applicationsRoutes.get("/", applicationsController.list);

export { applicationsRoutes };
