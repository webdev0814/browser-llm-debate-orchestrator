# Agent Briefing: browser-llm-debate-orchestrator

## 1. Repository Overview & Purpose
- **Repository Name**: `browser-llm-debate-orchestrator`
- **Visibility**: `Public`
- **Default Branch**: `main`
- **Last Updated / Pushed**: 2026-09-03
- **Description**: Multi-model debate coordinator with participant selection supporting Gemini, OpenAI, Claude, DeepSeek, and Grok.
- **Context from README**: A structured multi-LLM debate orchestrator that drives consumer web chat apps instead of API endpoints. This reference project demonstrates a repeatable decision workflow: generate independent proposals, expose assumptions through critique, require revisions, synthesize the strongest elements, and r...
- **Topics/Tags**: anthropic, gemini-api, llm-debate, openai

---

## 2. Tech Stack & Architecture
- **Primary Language / Ecosystem**: TypeScript, Node.js
- **Key Directories**: `server/`, `web/`
- **Notable Top-Level Files**: `.gitignore`, `LICENSE`, `README.md`, `SECURITY.md`, `package-lock.json`, `package.json`

---

## 3. Setup & Execution Commands
### Environment Setup & Installation
```bash
npm install
```

### Running / Starting
```bash
npm run dev
```

### Testing / Verification
```bash
# Run relevant unit/integration tests (e.g. pytest or npm test)
```

---

## 4. Recent Commit Activity (Where We Left Off)
The most recent commits show the latest development trajectory:
- `[c47c992]` (2026-09-03) Add security reporting and repository hygiene policy
- `[9961370]` (2026-09-03) Frame orchestrator as an AI product reference
- `[2bfd20a]` (2026-05-24) Add Gemini and Grok support scaffolding
- `[ed49fd7]` (2026-05-12) Strip iteration/comparison framing from README
- `[75bd081]` (2026-05-12) Update README + GitHub description for 5-phase flow
- `[29101cc]` (2026-05-12) Export: encode filename into URL path so basename fallback works
- `[340f83c]` (2026-05-12) Export: switch to blob-URL download so .md filename is guaranteed
- `[25db2e5]` (2026-05-12) Fix export content: clean H1, isolate pasted topic body, use Roman phase labels
- `[8984077]` (2026-05-12) Fix export: use <a download> to pin the .md filename
- `[7803f44]` (2026-05-12) Second-pass refactor: types into lib, share refetch UI/logic, restore adapter encapsulation

---

## 5. Current State & Immediate Next Steps
- **Current State**: Project is active under branch `main`.
- **When picking up this repo**:
  1. Inspect the top-level files and recent commits to understand the active feature or bugfix context.
  2. Verify all required credentials and environment variables before running integration scripts.
  3. Ensure all tests and linting pass after making modifications.
  4. Follow the repository conventions and preserve existing architecture patterns.

---

## 6. Agent Working Guidelines & Gotchas
- **Cross-Platform Compatibility**: Code may run across Windows, macOS, or Linux agent environments. Ensure path manipulations use OS-agnostic methods (e.g. `pathlib.Path` or `path.join`).
- **Secret Hygiene**: NEVER commit plain-text API keys, tokens, or credentials into repository files.
- **Git Commit Etiquette**: Use concise, conventional commit messages (e.g., `feat:`, `fix:`, `docs:`, `refactor:`).
- **Tooling Compatibility**: This briefing is kept aligned for Antigravity (`GEMINI.md`), Claude Code / Codex (`CLAUDE.md`), and general autonomous agents (`AGENTS.md`).
