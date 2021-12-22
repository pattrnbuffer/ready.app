import { allFor, allSettledFor } from "./promise";

export const timeoutFor = <T>(duration: number, callback?: () => T) => {
  let id: NodeJS.Timeout;

  const create = () => {
    cancel();
    return new Promise((next) => (id = setTimeout(() => next(callback?.()), duration)));
  };
  const cancel = () => clearTimeout(id);
  const refresh = create;

  return Object.assign(create(), { cancel, refresh });
};

export const timeoutForAll = (duration: number, ...methods: (() => {})[]) => {
  return timeoutFor(duration, () => allFor(methods));
};

export const timeoutForAllSettled = (duration: number, ...methods: (() => {})[]) => {
  return timeoutFor(duration, () => allSettledFor(methods));
};
