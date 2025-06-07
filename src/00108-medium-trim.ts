import type { Equal, Expect } from '../utils'

type TrimLeft<T extends string> = T extends `${' '|'\n'|'\t'}${infer R}` ? TrimLeft<R> : T
type TrimRight<T extends string> = T extends `${infer R}${' '|'\n'|'\t'}` ? TrimRight<R> : T

type Trim<T extends string> = TrimLeft<TrimRight<T>>

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
