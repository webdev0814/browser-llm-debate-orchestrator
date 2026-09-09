# Agent Briefing: browser-llm-debate-orchestrator

## 1. Repository Overview & Purpose
- **Repository**: `webdev0814/browser-llm-debate-orchestrator`
- **Visibility**: `Public`
- **Default Branch**: `main`
- **Last Updated / Pushed**: 2026-09-09
- **Description**: Multi-model debate coordinator with participant selection supporting Gemini, OpenAI, Claude, DeepSeek, and Grok.
- **Context from README**: A structured multi-LLM debate orchestrator that drives consumer web chat apps instead of API endpoints. This reference project demonstrates a repeatable decision workflow: generate independent proposals, expose assumptions through critique, require revisions, synthesize the strongest elements, and r...
- **Topics/Tags**: anthropic, gemini-api, llm-debate, openai

---

## 2. Tech Stack & Architecture
- **Primary Language / Ecosystem**: TypeScript, Node.js
- **Key Directories**: `server/`, `web/`
- **Notable Top-Level Files**: `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `LICENSE`, `README.md`, `SECURITY.md`, `package-lock.json`, `package.json`

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
- `[dd8f367]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[9f819db]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[70237aa]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[f70e12d]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[6803e32]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[45c430a]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[1d788e9]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[0b14b37]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[53160d2]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol
- `[3f0c3d3]` (2026-09-09) docs: update agent briefing with multi-computer handoff protocol

---

## 5. Current State & Immediate Next Steps
- **Current State**: Project is active under branch `main`.
- **When picking up this repo**:
  1. Inspect the top-level files and recent commits to understand the active feature or bugfix context.
  2. Verify all required credentials and environment variables before running integration scripts.
  3. Ensure all tests and linting pass after making modifications.
  4. Follow the repository conventions and preserve existing architecture patterns.

---

## 6. Multi-Computer Handoff & Git Sync Protocol
- **On Session Start**: Always run `git pull` when opening this repository on any computer to synchronize the latest changes.
- **On Task Completion**: Before ending any agent session, the agent **MUST**:
  1. Update Section 5 (Current State & Next Steps) in this `AGENTS.md` file.
  2. Stage all modifications (`git add .`).
  3. Commit with a concise conventional message (`git commit -m "feat/fix: ..."`).
  4. Push directly to GitHub (`git push`).
- **Secret Hygiene**: NEVER commit plain-text API keys, tokens, or credentials into repository files.
