import type { Equal, Expect } from '../utils'

type AsCharArray<S extends string> = S extends `${infer Head}${infer Tail}` ? [Head, ...AsCharArray<Tail>] : []
type LengthOfString<S extends string> = (AsCharArray<S>)["length"];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
