# Multi-LLM Debate Orchestrator

A structured multi-LLM debate orchestrator that drives consumer web chat apps instead of API endpoints.

## Product Context

This reference project demonstrates a repeatable decision workflow: generate independent proposals, expose assumptions through critique, require revisions, synthesize the strongest elements, and retain an explicit ratification step. It is useful for AI product teams evaluating orchestration patterns, decision quality, provider diversity, and human-governed automation.

Maintained by [Jason Agentic](https://x.com/Jason_Agentic).

This fork keeps the original five-phase debate format and expands the supported provider pool so each debate can use any 3 of these web models:

- OpenAI via ChatGPT web
- Claude
- DeepSeek
- Gemini
- Grok

## What it does

Making Debate runs a fixed five-phase editorial loop:

1. Initial proposals
2. Anonymous critique and ranking
3. Author revision
4. Final synthesis
5. Ratify or veto

The system opens one browser conversation per selected model, keeps continuity within that thread, stores each phase as markdown, and lets you export the finished debate.

## What this fork changes

- English README
- OpenAI labeled explicitly as OpenAI while still using the ChatGPT web UI
- Added Gemini adapter scaffold
- Added Grok adapter scaffold
- Added participant selection so each debate can choose any 3 supported providers
- Preserved MIT licensing

## Supported providers

- OpenAI
  - Site: chatgpt.com
  - Implementation: existing ChatGPT web adapter
- Claude
  - Site: claude.ai
  - Implementation: existing Claude adapter with model switching
- DeepSeek
  - Site: chat.deepseek.com
  - Implementation: existing DeepSeek adapter with mode toggles
- Gemini
  - Site: gemini.google.com
  - Implementation: new adapter in this fork
- Grok
  - Site: grok.com
  - Implementation: new adapter in this fork

## Important caveat

This project automates live web UIs. That makes it easy to run without API keys, but it also means selectors can break when providers update their sites.

The Gemini and Grok integrations added here are real browser adapters, not placeholder text, but they should still be treated as selector-driven integrations that may need maintenance over time.

## Setup

Requirements:

- Node.js 22.5 or newer
- Chrome, Edge, or Chromium
- Logged-in web accounts for the providers you want to use

Install:

- Clone the repository
- Run npm install
- Run npm run dev

On first launch the app creates its own browser profile, opens browser automation, and expects you to log into the provider sites in that controlled profile.

## Provider instructions

### OpenAI

- Log into ChatGPT in the managed browser profile
- OpenAI support in this project uses the ChatGPT web app

### Claude

- Log into claude.ai
- Optional model selection is supported for Sonnet 4.6 and Opus 4.7

### DeepSeek

- Log into chat.deepseek.com
- Fast and expert mode controls remain available

### Gemini

- Log into gemini.google.com in the managed profile
- If Google changes the editor DOM, refresh selectors in server/src/browser/adapters/gemini.ts

### Grok

- Log into grok.com in the managed profile
- If xAI changes the editor DOM, refresh selectors in server/src/browser/adapters/grok.ts

## Architecture

- web
  - React and Vite frontend
  - phase views
  - websocket updates
- server
  - Express API
  - Playwright CDP attachment
  - debate orchestration
  - SQLite persistence
- browser adapters
  - one adapter per provider
  - each debate still runs exactly 3 selected participants

## Scope

This fork does not turn the product into an arbitrary N-agent council. It keeps the original three-participant structure and makes the participant pool configurable. That is the smallest reliable change that adds Gemini and Grok support without destabilizing the debate logic.

## License

MIT
