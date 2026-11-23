import { mkdirSync, writeFileSync } from "node:fs";

const text = `That night, the lighthouse
kept its light on the sea —

and the sea sent one back.
One green flash, from empty water.

Mara checked the charts.
No ship. No buoy. No reef.

She logged it:
'Someone out there is signalling.'

Below it, in a hand not her own:
'We see you too.'`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
