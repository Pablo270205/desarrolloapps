// src/app.ts
import express from "express";
import documentsRoutes from "./routes/documents.routes.js";

export const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use("/api/documents", documentsRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[Arquitectura Modular] Servidor activo en http://localhost:${PORT}`);
  });
}