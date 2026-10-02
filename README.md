<p align="center"><img src="./assets/showcase.svg" width="100%" alt="Automotive CRM engineering showcase"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=000"/>
  <img src="https://img.shields.io/badge/SQLite-WAL-003B57?style=flat-square&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

# Automotive CRM

Engineering work in a real operational automotive CRM ecosystem spanning **staff web, public API, Telegram bots, four Mini Apps and scheduled publishing**.

The business/product is not presented as mine; the system engineering shown here is the part I worked on.

> **One business state. Many channels.** If web, API, bot and Mini App touch the same operational state, the rule belongs on the server once.

## What the system covers

- vehicle inventory, pricing, status and media;
- clients and lead history;
- sales, commissions, checklists and documents;
- a read-only public catalogue API that excludes private commercial data;
- Telegram catalogue/calculator/notification flows;
- Mini Apps for calculator, catalogue, dealer and transit use cases;
- transit/channel publishing and scheduled operational jobs;
- JWT auth in httpOnly cookies, role checks, validation, rate limits and security headers;
- Docker Compose deployment with shared persistence, health checks and backup/restore procedures.

## Core state flow

**available → in_progress → sold → restored**

The same state is consumed by the staff CRM, public catalogue, bots and Mini Apps instead of being reimplemented independently per interface.

## Inspect

- [Architecture](docs/ARCHITECTURE.md)
- [Operational boundaries](docs/OPERATIONS.md)
- [Sanitised API route](examples/vehicle-api.js)

<details>
<summary><b>Public / private boundary</b></summary>

No customer data, credentials, production hosts, private pricing rules or proprietary dealership procedures are published here.

</details>