# TypeScript Express Demo (Agentic DevSecOps)

This is a minimal Express + TypeScript demo used to showcase:

- Server-side input validation with Zod
- Clean validation error shape
- Tests for failure paths (Vitest + Supertest)
- Dependency considerations (supply chain)


## Security Context

This demo applies lightweight Secure SDLC thinking:

- Integrity: Input validation prevents malformed data from reaching the system.
- Confidentiality: Errors do not expose internal stack traces.
- Availability: Payload size limits reduce DoS surface.
- Supply Chain: Dependencies are audited using `npm audit`.

Security review is part of the workflow, not an afterthought.


## Run

```bash
npm run devlisä