<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

> **An operational dealership ecosystem, not one CRM screen.**  
> Internal staff, public catalogue users, Telegram users and dealer/transit flows all consume the same backend-owned vehicle/client/sale state.

<table>
<tr>
<td align="center"><b>Node.js 18</b><br/><sub>backend</sub></td>
<td align="center"><b>Express</b><br/><sub>API / business logic</sub></td>
<td align="center"><b>React 18</b><br/><sub>staff CRM</sub></td>
<td align="center"><b>SQLite WAL</b><br/><sub>main operational DB</sub></td>
<td align="center"><b>4 Mini Apps</b><br/><sub>focused Telegram UIs</sub></td>
<td align="center"><b>Docker Compose</b><br/><sub>runtime</sub></td>
</tr>
</table>

## Staff workspace

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Automotive CRM surfaces"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Inventory</b><br/><sub>Vehicles, VIN/specs, pricing, status, location, media and public visibility.</sub></td>
<td width="33%" valign="top"><b>Clients & leads</b><br/><sub>Customer records, buyer/seller roles, notes, history and communication context.</sub></td>
<td width="33%" valign="top"><b>Sales</b><br/><sub>Offers, reservations, contracts, payment state, commission context, delivery and handover.</sub></td>
</tr>
</table>

## How the ecosystem is split

<p align="center"><img src="./assets/readme-channels.svg" width="100%" alt="Automotive CRM channels"/></p>

> The point of the architecture is that **the Staff CRM is not the source of truth by itself**.  
> The backend owns the domain, while the Staff SPA, public API, bots and Mini Apps are different delivery channels.

## Shared vehicle state

<p align="center"><img src="./assets/readme-lifecycle.svg" width="100%" alt="Vehicle lifecycle"/></p>

<table>
<tr>
<td width="50%" valign="top"><b>Why this matters</b><br/><sub>A vehicle becoming sold must mean the same thing in the CRM, public catalogue, dealer view and bot. Shared transitions prevent one interface from publishing stale or contradictory state.</sub></td>
<td width="50%" valign="top"><b>Who can do what</b><br/><sub>JWT, server-side roles, validation and separate public/private API boundaries decide whether a caller may read or mutate a state.</sub></td>
</tr>
</table>

## Media, documents & automation

<table>
<tr>
<td width="33%" valign="top"><b>Photos</b><br/><sub>Multi-image upload and image processing/optimisation for inventory records and public presentation.</sub></td>
<td width="33%" valign="top"><b>Documents</b><br/><sub>Contracts and printable business documents are generated from the same operational data rather than copied by hand.</sub></td>
<td width="33%" valign="top"><b>Scheduled publishing</b><br/><sub>Transit posters and channel posts are produced by background jobs instead of manual duplicate entry.</sub></td>
</tr>
</table>

## Architecture

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Automotive CRM architecture"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Private core</b><br/><sub>Express API + SQLite + role/validation rules serve the operational staff workflow.</sub></td>
<td width="33%" valign="top"><b>Public edge</b><br/><sub>A separate read-only public API exposes catalogue-safe fields without private procurement prices or commissions.</sub></td>
<td width="33%" valign="top"><b>Independent services</b><br/><sub>Bot, transit poster and Mini App builds can be restarted/deployed separately while sharing the same domain state.</sub></td>
</tr>
</table>

## Operational flow

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Automotive CRM flow"/></p>

<details>
<summary><b>Security / operations notes</b></summary>

- JWT is stored in an httpOnly cookie.
- Server-side role checks protect private operations.
- Public API is intentionally read-only and omits private commercial fields.
- Helmet, validation and rate limits are part of the backend boundary.
- Docker Compose runs the app, public API, bots and supporting services; Mini Apps are built and served as static bundles.

</details>