import type { Equal, Expect } from '../utils'

type IsNever<T> = [T] extends [never] ? true : false;

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
