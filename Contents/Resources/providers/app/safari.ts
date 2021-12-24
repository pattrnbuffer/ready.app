import { $ } from "zx";

export const safari = {
  open: (uri: string) => $`open -a "Safari" ${uri}`,
};
