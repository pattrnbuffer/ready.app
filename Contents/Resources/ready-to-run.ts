#! ./node_modules/.bin/ts-node

import { $, argv } from "zx";
import { allSettledFor } from "./tools";

import * as protocol from "./protocol";

async function main() {
  const [uri] = argv._;
  for (const route of [protocol.http, protocol.cmd]) {
    route?.mount?.(uri);
  }
}

// let's run this hot tamale 🏎💨…
require.main === module && main();
