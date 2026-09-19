<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

# Automotive CRM

Engineering work I did in a real operational CRM codebase spanning **staff web, public API, Telegram bots, Mini Apps and scheduled operations**.

The product/business is not presented as mine; the code and system work shown here is the part I worked on myself.

<p align="center"><img src="./assets/product-mockup.svg" width="100%" alt="Automotive CRM product mockup"/></p>

## <code>01 / surfaces</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Automotive CRM features"/></p>

## <code>02 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Core operational domain"/></p>

## <code>03 / topology</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Automotive CRM architecture"/></p>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Automotive CRM system overview"/></p>

## <code>04 / one_domain_many_channels</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Automotive CRM workflow"/></p>

The rule is simple: **if web, API, bot and Mini App touch the same business state, the rule belongs on the server once.**

## <code>05 / hard_parts</code>

- stable shared state across multiple interfaces;
- auth / validation / rate limits at the right boundaries;
- uploads, image processing and document flows;
- scheduled operational jobs that should not need babysitting;
- independently restartable Docker services with shared persistence;
- server, bot and client test layers.

## <code>06 / engineering_signature</code>

<p align="center">
  <img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>
</p>

## <code>07 / inspect</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Operational boundaries](docs/OPERATIONS.md)
- [Sanitised API route](examples/vehicle-api.js)

<details><summary><b>Public / private boundary</b></summary>

No customer data, credentials, production domains, deployment hosts or proprietary business procedures are published here.

</details>
