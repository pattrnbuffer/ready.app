// type Reverse<Tuple> = Tuple extends [infer Head, ...infer Rest] ? [...Reverse<Rest>, Head] : [];
// type Assign<Tuple> = Tuple extends [infer Head, ...infer Rest] ? Head & Assign<Rest> : never;
// type Defaults<Tuple> = Tuple extends [infer Head, ...infer Rest] ? Defaults<Rest> & Head : never;

type Merge<A, B> = {
  [K in keyof A]: K extends keyof B ? B[K] : A[K];
} & B;

type Assign<Tuple> = Tuple extends [infer A, ...infer Rest]
  ? Merge<Merge<A, Assign<Rest>>, {}>
  : {};
type Defaults<Tuple> = Tuple extends [infer A, ...infer Rest]
  ? Merge<Merge<Defaults<Rest>, A>, {}>
  : {};

// type AssignExample = Assign<[{ a: 1 }, { a: 2; b: 2 }, { a: 3; b: 3; c: 3 }]>;
// type DefaukltsExample = Defaults<[{ a: 1 }, { a: 2; b: 2 }, { a: 3; b: 3; c: 3 }]>;

const assign = <A, B, C, D, T extends object>(a: A, b?: B, c?: C, d?: D, ...sources: T[]) => {
  return Object.assign({}, a, b, c, d, ...sources) as Assign<[A, B, C, D, ...typeof sources]>;
};

const defaults = <A, B, C, D, T extends object>(a: A, b?: B, c?: C, d?: D, ...sources: T[]) => {
  return Object.assign({}, ...sources.reverse(), d, b, c, a) as Defaults<
    [A, B, C, D, ...typeof sources]
  >;
};

const keys = <T>(source: T) => Object.keys(source) as (keyof T)[];
const values = <T>(source: T) => Object.values(source) as T[keyof T][];
// const unzip = <T extends object>(source: T) => [];

const filter = <R extends T, T extends object>(
  source: T,
  cond?: (value: T[keyof T], key: keyof T) => boolean,
): R => {
  const keys = obj.keys(source);
  const result: { [key in keyof T]?: T[keyof T] } = {};

  for (const kk of keys) {
    const vv = source[kk];
    if (cond?.(vv, kk) ?? Boolean(vv)) result[kk] = vv;
  }

  return result as R;
};

export const obj = {
  assign,
  defaults,
  filter,
  keys,
  values,
};
