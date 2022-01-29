import { $ } from "zx";

export const chrome = {
  open: (uri: string) => $`open -a "Google Chrome" ${uri} --args --profile-directory="Profile 5"`,
};
