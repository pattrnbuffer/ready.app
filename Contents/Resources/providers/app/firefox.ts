import { $ } from "zx";

export const firefox = {
  open: (uri: string) => $`open -a "Firefox Developer Edition" ${uri}`,
};
