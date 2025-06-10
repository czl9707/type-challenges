import type { Equal, Expect, ExpectExtends } from '../utils'

type TupleToNestedObject<T extends string[], P> = T extends [infer First extends string, ...infer Rest extends string[]] ? 
  {[Key in First]: TupleToNestedObject<Rest, P>} : P;

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]
