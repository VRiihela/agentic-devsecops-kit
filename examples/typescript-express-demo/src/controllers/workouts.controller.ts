import type { Request, Response } from "express";
import type { CreateWorkoutInput } from "../validation/workout.validation.js";

export function createWorkout(req: Request, res: Response) {
  const body = req.body as CreateWorkoutInput;

  // Demo: no DB, just return what would be created
  const created = {
    id: "demo-id",
    title: body.title,
    date: body.date ?? new Date().toISOString(),
    exercises: body.exercises,
  };

  return res.status(201).json(created);
}