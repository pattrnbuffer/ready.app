import { $ } from "zx";

export const chrome = {
  open: (uri: string, { profile }: { profile?: string } = {}) =>
    $`open -a "Google Chrome" ${uri} --args --profile-directory=${
      profile ?? "default"
    }`,
};
