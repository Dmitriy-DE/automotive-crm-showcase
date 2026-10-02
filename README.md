<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=000"/>
  <img src="https://img.shields.io/badge/SQLite-WAL-003B57?style=flat-square&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

# Automotive CRM

Engineering work across an operational automotive CRM ecosystem spanning **staff web, public API, Telegram bots, four Mini Apps and scheduled publishing**.

The business itself is not presented as mine; this showcase focuses on the architecture and engineering work around a shared operational domain.

> **One business state. Many channels.** If the same vehicle, client or sale is visible through several interfaces, the rule belongs on the server once.

## <code>01 / actual_surfaces</code>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Automotive CRM product surfaces"/></p>

The staff CRM covers inventory, clients, sales, photos, transit, catalogue, team operations and reports. Public and Telegram-facing surfaces reuse the same server-owned state instead of reimplementing business rules.

## <code>02 / engineering_surface</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Automotive CRM engineering surface"/></p>

## <code>03 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Automotive CRM core model"/></p>

The vehicle lifecycle is explicit: **available → in_progress → sold → restored**. Validation, access control and state transitions stay in shared backend logic.

## <code>04 / one_domain_many_channels</code>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Automotive CRM shared domain"/></p>

One operational source of truth feeds the staff CRM, public catalogue, Telegram bots and the calculator, catalogue, dealer and transit Mini Apps.

## <code>05 / topology</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Automotive CRM topology"/></p>

## <code>06 / operational_flow</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Automotive CRM operational flow"/></p>

## <code>07 / engineering_signature</code>

<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Automotive CRM engineering signature"/></p>

## <code>08 / inspect</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Operational boundaries](docs/OPERATIONS.md)
- [Sanitised API route](examples/vehicle-api.js)

<details>
<summary><b>Public / private boundary</b></summary>

No customer data, credentials, production hosts, private pricing rules or proprietary dealership procedures are published here.

</details>