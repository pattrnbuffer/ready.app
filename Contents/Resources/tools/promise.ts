export const allFor = async <T extends any>(methods: (T extends any ? T | (() => T) : never)[]) =>
  Promise.all(methods.map((fn) => (typeof fn !== "function" ? fn : fn())));

export const allSettledFor = async <T extends any>(
  methods: (T extends any ? T | (() => T) : never)[],
) => Promise.allSettled(methods.map((fn) => (typeof fn !== "function" ? fn : fn())));
