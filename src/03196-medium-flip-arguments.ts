import type { Equal, Expect } from '../utils'

type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest extends unknown[]] ? [... Reverse<Rest>, First] : [];
type FlipArguments<T extends (...args: any) => unknown> = T extends (...args: infer Args extends unknown[]) => infer RT ? 
  (...args: Reverse<Args>) => RT : never;

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]
