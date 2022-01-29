

const protocol = /(hub|github):\/\//;

export const hub = {
  mount(uri: string) {
    // this is not our fight
    if (!protocol.test(uri)) {
      return;
    }

    // otherwise let's just clone some shit
    // ex: hub://clone/updater



  },
};
