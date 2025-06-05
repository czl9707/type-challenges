import type { Equal, Expect } from '../utils'

type TupleToUnion<T extends unknown[]> = T extends [infer P, ...infer Rest] ? 
  P | TupleToUnion<Rest> : never;

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
