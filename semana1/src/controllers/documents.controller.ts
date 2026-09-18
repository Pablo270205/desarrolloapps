// src/controllers/documents.controller.ts
import { type Request, type Response } from "express";
import { documentsService } from "../services/documents.service.js";

export class DocumentsController {
  getAll = (req: Request, res: Response) => {
    const tag = req.query.tag as string | undefined;
    const data = documentsService.getAllDocuments(tag);
    res.json({ status: "success", count: data.length, data });
  };

  getById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ status: "fail", message: "El ID debe ser un número entero válido" });
    }
    try {
      const doc = documentsService.getDocumentById(id);
      res.json({ status: "success", data: doc });
    } catch (err: any) {
      if (err.message?.startsWith("DOCUMENT_NOT_FOUND")) {
        return res.status(404).json({ status: "fail", message: "Documento no encontrado" });
      }
      res.status(500).json({ status: "error", message: "Error interno del servidor" });
    }
  };

  create = (req: Request, res: Response) => {
    try {
      const created = documentsService.createDocument(req.body);
      res.status(201).json({ status: "success", data: created });
    } catch (err: any) {
      res.status(400).json({ status: "fail", message: err.message });
    }
  };

  update = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ status: "fail", message: "El ID debe ser numérico" });
    }
    try {
      const updated = documentsService.updateDocument(id, req.body);
      res.json({ status: "success", data: updated });
    } catch (err: any) {
      if (err.message?.startsWith("DOCUMENT_NOT_FOUND")) {
        return res.status(404).json({ status: "fail", message: "Documento no encontrado" });
      }
      res.status(400).json({ status: "fail", message: err.message });
    }
  };

  delete = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ status: "fail", message: "El ID debe ser numérico" });
    }
    try {
      documentsService.deleteDocument(id);
      res.status(204).send();
    } catch (err: any) {
      if (err.message?.startsWith("DOCUMENT_NOT_FOUND")) {
        return res.status(404).json({ status: "fail", message: "Documento no encontrado" });
      }
      res.status(500).json({ status: "error", message: "Error interno del servidor" });
    }
  };
}

export const documentsController = new DocumentsController();