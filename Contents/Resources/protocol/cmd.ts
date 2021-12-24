const protocol = /(cmd|command):\/\//;

export const cmd = {
  mount(uri: string) {
    if (protocol.test(uri)) console.warn("command: not implemented");
  },
};
