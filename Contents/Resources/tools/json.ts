export type ParseProps<T> = {
  guard?: (value: unknown) => boolean;
  fallback?: T;
};

export const json = {
  parse<T>(text: string, props?: ParseProps<T>) {
    let value: T | undefined;

    try {
      value = JSON.parse(text);
    } catch (e) {}

    return guardFor<T>(value) ? value : props?.fallback;
  },

  stringify: (...args: Parameters<typeof JSON.stringify>) => JSON.stringify(...args),
};

function guardFor<T>(value: unknown, guard?: (value: unknown) => boolean): value is T {
  return value ? guard?.(value) ?? true : false;
}
