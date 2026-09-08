# Agent Briefing: browser-llm-debate-orchestrator

## 1. Repository Overview & Purpose
- **Repository**: `webdev0814/browser-llm-debate-orchestrator`
- **Visibility**: `Public`
- **Default Branch**: `main`
- **Last Updated / Pushed**: 2026-09-08
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
- `[821b00b]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[42eaae4]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[029bd1e]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[5dd7d0f]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[020aa15]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[257703c]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[e546263]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[f9f69cd]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[d1e5ae6]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol
- `[64b7540]` (2026-09-08) docs: update agent briefing with multi-computer handoff protocol

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
