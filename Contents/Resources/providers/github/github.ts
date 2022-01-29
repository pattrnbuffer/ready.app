import { Endpoints } from "@octokit/types";

import { $ } from "zx";
import { json, obj } from "../../tools";
import { repositoryFields } from "./repository-fields";

const whichHub = () => $`which hub`;

export const list = obj.defaults();

export const github = {
  async list(user: string) {
    const result =
      await $`gh repo list ${user}  --source --no-archived --limit 100 --json ${repositoryFields}`;

    const data = json.parse<Endpoints["GET /users/{username}/repos"]>(result.stdout) ?? [];

    return data;
  },

  async cloneMany(user: string) {
    const list = await github.list(user);
  },
};

function cache() {}

// `
// CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
// curl "" |
//   grep -e 'git_url*' |
//   cut -d \" -f 4 |
//   xargs -L1 git clone
// `;
