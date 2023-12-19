import { Router } from "express";
import { applicationsRoutes } from "./applicationsRoutes";

const routes = Router();

routes.use("/api/v1/applications", applicationsRoutes);

export { routes };
