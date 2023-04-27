import { Router } from "express";

const movieRoutes: Router = Router();

movieRoutes.post("");
movieRoutes.get("");
movieRoutes.delete("/:id");
movieRoutes.patch("/:id");
export default movieRoutes;
