import type { Equal, Expect } from '../utils'

type Chunk<RestAtempt extends unknown[], P extends number, Atempt extends unknown[] = []> = 
  Atempt['length'] extends P ? [Atempt, ...Chunk<RestAtempt, P>] :
    RestAtempt extends [infer Head, ...infer Rest] ? Chunk<Rest, P, [...Atempt, Head]> : Atempt extends [] ? [] : [Atempt] ;

type A = Chunk<[1, 2, 3], 2>;

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
