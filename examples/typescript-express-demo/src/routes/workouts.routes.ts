import { Router } from "express";
import { validateBody } from "../middlewares/validate.js";
import { createWorkoutSchema } from "../validation/workout.validation.js";
import { createWorkout } from "../controllers/workouts.controller.js";

const router = Router();

router.post("/", validateBody(createWorkoutSchema), createWorkout);

export default router;