<p align="center"><img src="./assets/hero.svg" width="100%" alt="Automotive CRM"/></p>

<table>
<tr>
<td width="20%" align="center"><b>Staff CRM</b><br/><sub>internal operations</sub></td>
<td width="20%" align="center"><b>Public API</b><br/><sub>catalogue boundary</sub></td>
<td width="20%" align="center"><b>Telegram</b><br/><sub>bots + publishing</sub></td>
<td width="20%" align="center"><b>4 Mini Apps</b><br/><sub>client / partner surfaces</sub></td>
<td width="20%" align="center"><b>One domain</b><br/><sub>shared business rules</sub></td>
</tr>
</table>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Product surfaces"/></p>

<table>
<tr>
<td width="50%" valign="top"><img src="./assets/features.svg" width="100%" alt="Engineering surface"/></td>
<td width="50%" valign="top"><img src="./assets/core-model.svg" width="100%" alt="Core model"/></td>
</tr>
</table>

<table>
<tr>
<td width="48%" valign="top"><img src="./assets/overview.svg" width="100%" alt="Shared domain"/></td>
<td width="52%" valign="top"><img src="./assets/architecture-visual.svg" width="100%" alt="Topology"/></td>
</tr>
</table>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Operational flow"/></p>
<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/></p>

<details>
<summary><b>Engineering notes</b></summary>

- Shared vehicle/client/sale state across web, API, bots and Mini Apps
- Explicit vehicle status transitions
- JWT + role boundaries
- Public/private data split
- Media processing and document generation
- Restartable Docker services with shared persistence

</details>