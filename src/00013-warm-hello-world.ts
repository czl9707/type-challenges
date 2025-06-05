import type { Equal, Expect, NotAny } from '../utils'

type HelloWorld = string;

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
