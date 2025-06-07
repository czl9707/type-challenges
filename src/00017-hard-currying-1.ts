import type { Equal, Expect, ExpectExtends } from '../utils'

type CurryStep<Args extends unknown[], Rt> = Args extends [infer P, ...infer Rest] ? (a: P) => CurryStep<Rest, Rt> : Rt;

declare function Currying<T extends Function>(func: T):  
  T extends (...args: infer Args extends unknown[]) => infer Rt ? 
  (Args["length"] extends 0 ? T :CurryStep<Args, Rt>) :
  never;


const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1,
(a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2,
(a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]
