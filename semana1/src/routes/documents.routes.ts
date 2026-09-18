// src/routes/documents.routes.ts
import { Router } from "express";
import { documentsController } from "../controllers/documents.controller.js";

const router = Router();

router.get("/", documentsController.getAll);
router.get("/:id", documentsController.getById);
router.post("/", documentsController.create);
router.patch("/:id", documentsController.update);
router.delete("/:id", documentsController.delete);

export default router;