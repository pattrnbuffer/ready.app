import { allFor, allSettledFor } from "./promise";

export const intervalFor = <T>(duration: number, callback?: () => T) => {
  let id: NodeJS.Timeout;

  const create = () => {
    cancel();
    return new Promise((next) => (id = setInterval(() => next(callback?.()), duration)));
  };
  const cancel = () => clearInterval(id);
  const refresh = create;

  return Object.assign(create(), { cancel, refresh });
};

export const intervalForAll = (duration: number, ...methods: (() => {})[]) => {
  return intervalFor(duration, () => allFor(methods));
};

export const intervalForAllSettled = (duration: number, ...methods: (() => {})[]) => {
  return intervalFor(duration, () => allSettledFor(methods));
};
