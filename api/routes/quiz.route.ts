import express from "express";
import {
  quizCreate,
  quizDelete,
  quizGet,
  quizUpdate,
  test,
} from "../controllers/Quizzes.controller.ts";

const router = express.Router();

router.get("/", test);
router.post("/get", quizGet);
router.post("/create", quizCreate);
router.post("/update", quizUpdate);
router.post("/delete", quizDelete);

export default router;
