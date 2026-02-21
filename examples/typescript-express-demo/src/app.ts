import express from "express";
import workoutsRouter from "./routes/workouts.routes.js";

export function createApp() {
  const app = express();

  // Optional hardening: payload size limit
  app.use(express.json({ limit: "100kb" }));

  app.get("/health", (_req, res) => res.json({ ok: true }));
  app.use("/api/workouts", workoutsRouter);

  return app;
}