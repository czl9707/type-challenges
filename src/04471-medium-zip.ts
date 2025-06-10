import type { Equal, Expect } from '../utils'

type Zip<A1 extends unknown[], A2 extends unknown[]> = 
  A1 extends [infer Head1, ...infer Rest1] ? 
    A2 extends [infer Head2, ...infer Rest2] ?
      [[Head1, Head2], ...Zip<Rest1, Rest2>] : 
      [] : 
    [];

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]
