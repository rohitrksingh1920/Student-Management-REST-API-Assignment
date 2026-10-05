import express from "express";

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentControllers.js";

const router = express.Router();

// GET /students
router.get("/", getAllStudents);

// GET /students/:id
router.get("/:id", getStudentById);

// POST /students
router.post("/", createStudent);

// PUT /students/:id
router.put("/:id", updateStudent);

// DELETE /students/:id
router.delete("/:id", deleteStudent);

export default router;
