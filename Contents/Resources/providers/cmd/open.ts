import { $ } from "zx";

export const open = {
  chrome: (uri: string) => $`open -a "Google Chrome" ${uri} --args --profile-directory="Profile 3"`,
  firefox: (uri: string) => $`open -a "Firefox Developer Edition" ${uri}`,
  safari: (uri: string) => $`open -a "Safari" ${uri}`,
};
