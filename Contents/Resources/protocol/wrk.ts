const protocol = /(wrk|workspace):\/\//;

export const workspace = {
  async mount(uri: string) {
    if (protocol.test(uri)) console.warn("workspace: not implemented");
  },
};
