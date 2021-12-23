#! ./node_modules/.bin/ts-node

import { argv } from "zx";
import { allSettledFor } from "./tools";

import * as protocol from "./protocol";

async function main() {
  const [uri] = argv._;

  await parallel(uri);
}

export async function parallel(uri: string) {
  await allSettledFor(
    [protocol.http, protocol.cmd].map((proto) => proto?.mount?.(uri))
  );
}

// TODO: parameterize protocols
export async function sequence(uri: string) {
  const response = [];
  for (const route of [protocol.http, protocol.cmd]) {
    try {
      response.push(await route?.mount?.(uri));
    } catch (response) {
      console.log(`Unrouted response:`, response);
    }
  }
}

// let's run this hot tamale 🏎💨…
require.main === module && main();
