import request from "supertest";
import { describe, it, expect } from "vitest";
import { createApp } from "../src/app.js";

describe("POST /api/workouts", () => {
  it("400 if title missing", async () => {
    const app = createApp();
    const res = await request(app).post("/api/workouts").send({
      exercises: [{ name: "Bench", sets: [{ weight: 100, reps: 5 }] }],
    });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("ValidationError");
  });

  it("400 if title is whitespace", async () => {
    const app = createApp();
    const res = await request(app).post("/api/workouts").send({
      title: "   ",
      exercises: [{ name: "Bench", sets: [{ weight: 100, reps: 5 }] }],
    });

    expect(res.status).toBe(400);
  });

  it("400 if exercises empty", async () => {
    const app = createApp();
    const res = await request(app).post("/api/workouts").send({
      title: "Workout A",
      exercises: [],
    });

    expect(res.status).toBe(400);
  });

  it("400 if reps is 0", async () => {
    const app = createApp();
    const res = await request(app).post("/api/workouts").send({
      title: "Workout A",
      exercises: [{ name: "Bench", sets: [{ weight: 100, reps: 0 }] }],
    });

    expect(res.status).toBe(400);
  });

  it("201 on valid payload", async () => {
    const app = createApp();
    const res = await request(app).post("/api/workouts").send({
      title: "Workout A",
      exercises: [{ name: "Bench", sets: [{ weight: 100, reps: 5 }] }],
    });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Workout A");
    expect(Array.isArray(res.body.exercises)).toBe(true);
  });
});