<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

<table>
<tr>
<td width="50%" valign="top">

### What it is

Engineering work across an operational automotive CRM ecosystem.

One backend state is consumed by:

- staff CRM
- public catalogue API
- Telegram bots
- calculator Mini App
- catalogue Mini App
- dealer Mini App
- transit Mini App
- scheduled publishing jobs

</td>
<td width="50%" valign="top">

### Engineering focus

- shared business rules
- explicit vehicle lifecycle
- JWT / role boundaries
- media processing
- document generation
- public/private API separation
- restartable services
- shared persistence

</td>
</tr>
</table>

<img src="./assets/actual-surfaces.svg" width="100%" alt="Automotive CRM surfaces"/>

<br/>

<table>
<tr>
<td width="52%" valign="top">
<img src="./assets/features.svg" width="100%" alt="Engineering surface"/>
</td>
<td width="48%" valign="top">

### One domain, many channels

The same vehicle, client and sale state is reused across several interfaces.

The backend owns validation and state transitions once instead of rebuilding them independently in every UI or bot.

</td>
</tr>
</table>

<img src="./assets/core-model.svg" width="100%" alt="Core model"/>

<br/>

<table>
<tr>
<td width="48%" valign="top">

### Topology

The system combines a staff SPA, Express API, SQLite WAL, public API, Telegram services, Mini Apps, media/document flows and scheduled jobs.

</td>
<td width="52%" valign="top">
<img src="./assets/architecture-visual.svg" width="100%" alt="Topology"/>
</td>
</tr>
</table>

<img src="./assets/overview.svg" width="100%" alt="Shared domain"/>

<br/>

<img src="./assets/flow-visual.svg" width="100%" alt="Operational flow"/>

<br/>

<img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>

<p align="center"><sub>Private source · public engineering showcase</sub></p>