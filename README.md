<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"/>
</p>

# Automotive CRM

A real operational CRM codebase I worked on and extended across **web UI, API, bots, scheduled jobs and Telegram Mini Apps**.

This is not presented as “my business” or “my commercial product”. The showcase is about the engineering work I did in the codebase.

## <code>01 / what_i_touched</code>

<table>
<tr>
<td width="33%" valign="top">

### Core CRM

Staff-facing workflows, application API, auth, validation and operational data.

</td>
<td width="33%" valign="top">

### External surfaces

Public API, Telegram bots and multiple Mini Apps around the same domain.

</td>
<td width="33%" valign="top">

### Operations

Containerised runtimes, scheduled jobs, logging, uploads and deployment boundaries.

</td>
</tr>
</table>

## <code>02 / topology</code>

~~~mermaid
flowchart TB
  CRM[React CRM]
  MINI[Telegram Mini Apps]
  EXT[External clients]
  TG[Telegram]

  APP[Main Express service]
  PAPI[Public API]
  BOT[Bot service]
  JOBS[Schedulers / posting workers]

  DB[(Operational DB)]
  FILES[(Media / uploads)]

  CRM --> APP
  MINI --> APP
  EXT --> PAPI
  TG --> BOT
  JOBS --> APP

  APP --> DB
  APP --> FILES
  PAPI --> DB
  PAPI --> FILES
  BOT --> DB
~~~

## <code>03 / why_it_is_not_just_crud</code>

| Surface | Engineering concern |
|---|---|
| Staff CRM | consistent business state + auth + validation |
| Public API | stable external contract + rate limits |
| Bots | asynchronous channel behaviour |
| Mini Apps | lightweight user-facing flows |
| Files | uploads, image processing, document exports |
| Scheduled jobs | repeatable operations without manual babysitting |
| Docker | independent service lifecycle with shared persistence |

## <code>04 / practical_stack</code>

- JWT authentication
- Helmet + rate limiting
- Express validation
- SQLite persistence for the current deployment profile
- image/document/spreadsheet processing
- structured logging
- cron-style operational work
- Jest / Supertest server tests
- bot tests
- client tests

## <code>05 / design_rule</code>

> **One domain, many interfaces. Put the rule on the server once.**

When the same vehicle/customer/operation appears in a CRM screen, bot and Mini App, duplicating domain logic in every client is how they drift apart.

## <code>06 / technical_proof</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Operational boundaries](docs/OPERATIONS.md)
- [Sanitised API route](examples/vehicle-api.js)

<details>
<summary><b>Public / private boundary</b></summary>

No production customer data, credentials, domains, deployment hosts or proprietary business procedures are published here.

</details>
