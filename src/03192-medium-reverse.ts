import type { Equal, Expect } from '../utils'

type Reverse<T extends string[]> = T extends [infer First, ...infer Rest extends string[]] ? [... Reverse<Rest>, First] : [];

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
  // @ts-expect-error
  Reverse<'string'>,
  // @ts-expect-error
  Reverse<{ key: 'value' }>,
]
