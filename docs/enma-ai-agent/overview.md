---
sidebar_position: 1
---

# 🧠 ENMA AI AGENT — Tổng quan

## Giới thiệu

**ENMA AI AGENT** là hệ thống AI Agent đa năng — tự động hóa quy trình nghiệp vụ, phân tích dữ liệu, hỗ trợ ra quyết định thông minh.

## Tính năng chính

- ✅ Tự động hóa quy trình doanh nghiệp
- ✅ Xử lý ngôn ngữ tự nhiên (NLP)
- ✅ Phân tích dữ liệu thời gian thực
- ✅ Tích hợp đa kênh (Telegram, Web, API)
- ✅ Hỗ trợ đa mô hình AI (GPT, Claude, Gemini)

## Kiến trúc

```mermaid
graph LR
    A[Input Channels] --> B[Agent Orchestrator]
    B --> C[LLM Router]
    B --> D[Tool Manager]
    B --> E[Memory Store]
    C --> F[GPT-4o / Claude / Gemini]
    D --> G[APIs / Plugins]
    E --> H[(Vector DB)]
```

## Công nghệ

- **Core:** Python / Hermes Agent
- **LLM:** OpenAI, Anthropic, Google, DeepSeek
- **Memory:** PostgreSQL pgvector / Redis
- **Platform:** Telegram, Web, MCP
