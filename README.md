<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=190&color=0:0D1117,50:238636,100:1F6FEB&text=Automotive%20CRM&fontSize=42&fontColor=FFFFFF&fontAlignY=38&desc=Operations%20%E2%80%A2%20API%20%E2%80%A2%20Telegram%20%E2%80%A2%20Mini%20Apps&descSize=16&descAlignY=60" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

# Automotive CRM — public engineering showcase

An operational CRM ecosystem built around the day-to-day workflows of an automotive business.

The original repository is private. This showcase documents the system design and engineering surface without exposing business data, credentials or proprietary implementation.

## More than a CRUD app

The platform combines several runtimes around one operational domain:

```mermaid
flowchart LR
    STAFF[React CRM] --> API[Express application]
    PUBLIC[Public API clients] --> PAPI[Public API service]
    TG[Telegram bots] --> BOT[Bot service]
    MINI[Telegram Mini Apps] --> API
    JOBS[Schedulers / posters] --> API

    API --> DB[(Operational DB)]
    PAPI --> DB
    BOT --> DB
```

## System components

- Main operational CRM web application.
- Public API service.
- Telegram bot services.
- Multiple Telegram Mini Apps.
- Scheduled and event-driven operational jobs.
- Containerised deployment with Docker Compose.
- Shared persistent data and uploaded media.
- Structured logging and production configuration boundaries.

## Engineering surface

| Area | Implementation |
|---|---|
| API | Node.js + Express |
| UI | React |
| Persistence | SQLite in the current deployment profile |
| Auth | JWT-based application auth |
| Protection | Helmet, rate limiting, validation |
| Files | Uploads, image processing, XLSX/DOCX flows |
| Operations | cron jobs, bots, public API, mini-apps |
| Tests | Jest, Supertest and client tests |

## Why it is interesting

The engineering challenge is the **integration of operational channels**, not just individual screens. Staff UI, bots, mini-apps and public APIs all have to agree on the same business state and failure semantics.

## Repository map

- [Architecture](docs/ARCHITECTURE.md)
- [Operational boundaries](docs/OPERATIONS.md)
- [Sanitised API example](examples/vehicle-api.js)

## Source availability

This repository is a public portfolio artefact. The production source remains private.
