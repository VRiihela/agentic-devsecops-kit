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

## Quick Start

1. Copy the Kit into Your Project

Copy the required components into your project:
- core/ → docs/agents/core/
- profiles/<your-profile>.md → docs/agents/profile.md
- templates/github/ → .github/   (optional)
- templates/issue_*.md → .github/ISSUE_TEMPLATE/ (optional)

At minimum, you need:
- core/
- One selected profile
- tasks/task-template.md

2. Choose the profile that matches your project:

Choose the profile that matches your project:
- Node/TS Backend
- React Frontend
- Python CLI

The selected profile defines:
- Tooling commands (lint, test, build)
- Dependency audit method
- Security considerations

3. Create a Task

Create a new task using:
- tasks/task-template.md

Fill in:
- Context
- Acceptance Criteria
- Scope
- Risk Assessment
- Selected Profile

4. Run the Agent Workflow

- 00_master → 01_architect → 02_implementer → 03_reviewer → 04_tester → 05_security → 06_release

Each stage:
- Produces structured output
- Verifies Definition of Done
- Applies profile-specific tooling
- Enforces security review before merge

5. (Optional) Enable GitHub Automation

Copy the contents of:
- templates/github/
into your project's:
- .github/

This enables:
- CI pipeline
- CodeQL analysis
- Dependency updates (Dependabot)

## Philosophy

This kit enforces:
- Structured task definition
- Profile-driven tooling
- Security-first development
- Explicit Definition of Done
- Lightweight threat modeling
- Supply-chain awareness

## Minimal setup

If you want the absolute minimum:
1.	Copy core/
2.	Copy one profile
3.	Use task-template.md
4.	Follow the agent stages manually

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

## GitHub Automation

Copy the contents of `templates/github/` into your project's `.github/` directory.

Adjust workflows and ecosystems as needed.