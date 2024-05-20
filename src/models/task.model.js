import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
});

export const Task = mongoose.model("Task", taskSchema);
