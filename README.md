# Agentic Secure DevSecOps Kit

AI-assisted DevSecOps workflow framework for secure full-stack development.

This repository provides a reusable agent-based development structure that integrates:

- Structured AI coding workflow
- Secure Software Development Lifecycle (SSDLC) principles
- DevSecOps thinking
- Governance and traceability practices

The goal is not to replace developers — but to operationalize secure SDLC through AI-assisted role separation.

---

## Why This Exists

Modern AI tools increase development speed, but often:

- Security is reviewed too late
- Threat modeling is skipped
- Risk documentation is missing
- Governance is disconnected from implementation

This framework embeds security and governance directly into the development workflow through structured agent roles.

---

## Core Concept

Each development task follows a defined pipeline:

1. Architect Agent
2. Implementer Agent
3. Reviewer Agent
4. Tester Agent
5. Security Agent
6. Release Agent

Every task must pass a Definition of Done (DoD) that includes:

- Functional correctness
- Test coverage
- Security validation
- Risk awareness
- Documentation update

---

## What This Is

- A reusable `/agents` structure
- A secure-aware Definition of Done
- Structured AI role prompts
- Governance templates (PR, risk register, threat model)
- CI examples for DevSecOps integration

---

## What This Is NOT

- A coding bot
- A generic prompt collection
- A fully automated system
- A compliance tool

It is a development discipline framework.

---

## How To Use

1. Copy the `/agents` folder into your project
2. Fill `context_template.md` with project-specific details
3. Use `00_master.md` to run tasks through agent roles
4. Enforce `definition_of_done.md`
5. Integrate CI examples if needed

---

## Example Use Case

See `/examples/typescript-express-demo/` for a full secure task run.

---

## Philosophy

AI should not bypass secure SDLC.
AI should operationalize secure SDLC.

## Security Foundation

This framework is inspired by lightweight Secure SDLC principles.

It operationalizes security thinking through:

- CIA triad awareness (Confidentiality, Integrity, Availability)
- OWASP-style reasoning for input validation and exposure risks
- Dependency and supply chain awareness (npm audit, dependency review)
- Explicit Definition of Done security gates

The goal is not heavy compliance —
but continuous security awareness embedded into daily development.