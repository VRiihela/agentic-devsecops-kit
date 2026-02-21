# Demo Task Run: POST /workouts validation (GymDiary-style)

Task: Add server-side input validation to `POST /api/workouts` and cover failure paths with tests.

Acceptance criteria:
- Reject invalid payloads with 400 and a helpful error shape
- Accept valid payloads and create workout
- Tests cover: missing title, empty exercises, invalid sets, negative reps/weight
- Security review includes dependency and supply chain notes

---

## [ARCHITECT OUTPUT]

### Scope
Add validation for workout creation payload:
- `title: string` (required, trimmed, min length)
- `date: string (ISO)` (optional, default to now)
- `exercises: array` (required, non-empty)
  - `name: string` (required)
  - `sets: array` (required, non-empty)
    - `weight: number` (>= 0)
    - `reps: number` (>= 1)

### Proposed approach
- Use a schema-based validator to keep validation readable and testable.
- Implement request validation middleware for the route.
- Map validation errors into consistent 400 response.

### Files impacted (example)
- `src/routes/workout.routes.ts` (add middleware)
- `src/validation/workout.validation.ts` (new)
- `src/middlewares/validate.ts` (new generic validator middleware)
- `src/controllers/workout.controller.ts` (assume it already creates workout)
- `src/__tests__/workouts.post.test.ts` (new or update)

### New dependencies
- Add `zod` for schema validation.

Justification:
- Minimizes custom validation code (less bug surface)
- Strong typing + predictable error structure
- Widely used, actively maintained

### CIA impact (light)
- Confidentiality: Low (no new secrets, but validation prevents accidental leakage via errors)
- Integrity: Medium (prevents malformed data from polluting DB)
- Availability: Low/Medium (validation reduces crashes; very large payloads still need size limits)

### Test strategy
- Unit test schema (optional) and integration tests for route:
  - 400 on invalid payload variants
  - 201/200 on valid payload
  - Ensure controller not called on invalid input (if mocking)

---

## [IMPLEMENTER OUTPUT]

### 1) Install dependency
`npm i zod`

### 2) Add validation schema

File: `src/validation/workout.validation.ts`

- Define Zod schema for workout create payload
- Export inferred TypeScript type (optional)

### 3) Add generic middleware

File: `src/middlewares/validate.ts`

- `validateBody(schema)` parses `req.body`
- On success: replace `req.body` with parsed value (sanitized)
- On failure: 400 with `{ error: "ValidationError", details: [...] }`

### 4) Apply middleware to route

File: `src/routes/workout.routes.ts`

- `router.post("/", requireAuth, validateBody(createWorkoutSchema), createWorkout)`

### 5) Tests

File: `src/__tests__/workouts.post.test.ts`

- Setup app (supertest)
- Provide auth token (or bypass auth in test app)
- Test invalid payload variants:
  - missing title
  - empty exercises
  - set reps = 0
  - negative weight
- Test valid payload returns success

---

## [REVIEWER OUTPUT]

Code review checklist:
- Validation happens before controller → good
- Error response shape consistent
- Ensure title is trimmed (schema transform) to avoid “   ”
- Ensure `date` default is handled (either schema default or controller)
- Ensure we don’t leak full Zod internals; return safe details
- Ensure route size limits exist (optional: express.json({ limit: "..." }))

Maintainability:
- Keep schemas in `src/validation/`
- Middleware generic and reusable for query/params later

---

## [TESTER OUTPUT]

Test cases (minimum):
1) POST without title → 400
2) POST with title "   " → 400
3) POST with exercises [] → 400
4) POST with sets [] → 400
5) POST with reps 0 → 400
6) POST with weight -1 → 400
7) Valid payload → 201/200

Failure-path verification:
- Ensure error body includes `error: "ValidationError"`
- Ensure `details` includes field paths (no stack traces)

---

## [SECURITY OUTPUT]

### 1) CIA impact
- C: Low
- I: Medium (prevents invalid data insertion)
- A: Low/Medium (reduces runtime errors; add payload size limit if needed)

### 2) OWASP-style checks (light)
- Input validation: ✅ addressed server-side
- Injection: ✅ reduced (structured validation)
- AuthZ: ⚠ ensure userId is enforced server-side, not client-provided
- Error leakage: ✅ return safe validation errors, no stack traces

### 3) Dependency & Supply Chain Review
New dependency: `zod` (Yes)

Why needed:
- Replaces ad-hoc validation logic, reduces mistakes
- Improves readability + consistent error handling

Risk notes:
- Adds transitive dependencies (check via lockfile)
- Mitigation: keep dependency count low; prefer widely used libs

Audit status:
- Run: `npm audit --audit-level=high`
- Requirement: no unresolved HIGH/CRITICAL before merge

Recommendation:
- Accept with changes if audit flags appear; otherwise Accept

### 4) Threat mini-model
Assets:
- Workout data integrity in DB
Entry points:
- POST /api/workouts
Threats:
- Malformed payload causing crashes or data corruption
- Oversized payload → DoS
Mitigations:
- Schema validation
- Consider request size limits, rate limiting on auth routes

### 5) Risk summary
Severity: Low/Medium
Required mitigations:
- Ensure auth middleware enforces identity
- Ensure audit passes
Follow-ups:
- Add payload size limits and rate limiting (optional hardening)

---

## [RELEASE OUTPUT]

Checklist:
- DoD satisfied (tests + audit + security review)
- CI passes
- Documentation: add note about validation error shape (optional)

How to verify:
- `npm test`
- `npm audit --audit-level=high`
- Manual:
  - POST valid workout → success
  - POST invalid workout → 400 with ValidationError

## Dependency Audit Evidence
Command:
npm run audit --audit-level=high 

> typescript-express-demo@0.1.0 audit
> npm audit --audit-level=high

found 0 vulnerabilities

Interpretation:
- No known HIGH/CRITICAL issues in direct or transitive dependencies.
- Zod dependency accepted.
- Supply chain risk considered acceptable at this stage.
