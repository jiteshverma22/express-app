import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { Task } from "../models/task.model.js";

const listTasks = asyncHandler(async (req, res) => {
  const { limit = 10 } = req.query;
  const tasks = await Task.find().limit(limit);
  res.status(200).send(new ApiResponse(200, tasks, "success"));
});

const createTask = asyncHandler(async (req, res) => {
  const { body } = req;
  const task = new Task(body);
  const response = await task.save();

  res.status(201).send(new ApiResponse(201, response, "success"));
});

export { listTasks, createTask };
