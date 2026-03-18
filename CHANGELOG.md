# Changelog

## [0.1.0] – 2026-03-18

### Added
- Initial Agentic DevSecOps framework with TypeScript Express demo (`examples/typescript-express-demo/`)
- Six core agent role prompts: `00_master`, `01_architect`, `02_implementer`, `03_reviewer`, `04_tester`, `05_security`, `06_release`
- Three project profiles: `node-ts-backend`, `react-frontend`, `python-cli`
- `definition_of_done.md`, `conventions.md`, `workflow.md`, `context_template.md`
- Task system: `task-template.md` and example task run
- GitHub workflow templates: CI (Node), CodeQL, dependency audit/review, Dependabot
- Governance templates: PR template, bug/feature issue templates, threat model, risk register, security review
- TypeScript orchestrator (`agents/orchestrator/orchestrator.ts`) — drives the 6-stage pipeline via Anthropic SDK; accepts interactive input or a JSON spec file; outputs `run_log.json` and per-run markdown reports
- `CLAUDE.md` — guidance for Claude Code instances working in this repository
- `.gitignore` for macOS, Node, and Python artifacts
