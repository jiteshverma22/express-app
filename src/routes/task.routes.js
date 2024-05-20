import { Router } from "express";
import { listTasks, createTask } from "../controllers/task.controller.js";

const router = Router();

router.route("/").get(listTasks);
router.route("/").post(createTask);

export default router;
