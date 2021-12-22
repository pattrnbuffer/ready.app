#! ./node_modules/.bin/ts-node

import { $ } from "zx";
import { allSettledFor } from "../tools";

import * as cmds from "./cmd";

type SessionProps = {
  open: {
    chrome: string[];
  };
};

export const binding = {
  session: {
    start(session?: SessionProps) {
      return allSettledFor([session?.open?.chrome?.map((url) => cmds.open.chrome(url))]);
    },
    async finish(session?: SessionProps) {
      // quit apps
      // const pkills = Object.keys(open).map((app) => $`pkill -o -x ${app}`);
      // quit vscode repos
      // TODO: how to selectively close vscode projects via cli
      // terminate processes
      // TODO: use pkill and pattern match
      // TODO: find identifier for processes, or make one
      // … … …
      // … end docker instances
      // … TODO: how to gracefully quit dock?
      // return await Promise.allSettled(pkills);
    },
  },
};
