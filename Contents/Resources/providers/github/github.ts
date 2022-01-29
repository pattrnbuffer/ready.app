import { Endpoints } from "@octokit/types";

import { $ } from "zx";
import { json } from "../../tools";
import { repositoryFields } from "./repository-fields";

export const github = {
  async list(user: string) {
    const result =
      await $`gh repo list ${user}  --source --no-archived --limit 100 --json ${repositoryFields}`;

    const data =
      json.parse<Endpoints["GET /users/{username}/repos"]>(result.stdout) ?? [];

    return data;
  },

  async cloneMany(user: string) {
    const list = await github.list(user);
  },
};
