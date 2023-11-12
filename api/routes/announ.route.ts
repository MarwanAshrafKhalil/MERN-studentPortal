import express from "express";
import {
  announCreate,
  announDelete,
  announGet,
  announUpdate,
  announGetAll,
  test,
} from "../controllers/Announcement.controller.ts";

const router = express.Router();

router.get("/", test);
router.post("/get", announGet);
router.post("/getall", announGetAll);
router.post("/create", announCreate);
router.post("/update", announUpdate);
router.post("/delete", announDelete);

export default router;
