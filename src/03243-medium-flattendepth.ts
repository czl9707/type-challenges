import type { Equal, Expect } from '../utils'

type FlattenDepth<T extends unknown[], Depth extends number = 1, Cur extends unknown[] = []> = 
  Depth extends Cur["length"] 
  ? T 
  : T extends [infer First, ...infer Rest] 
    ? First extends unknown[] ? 
      [...FlattenDepth<First, Depth, [1, ...Cur]>, ...FlattenDepth<Rest, Depth, Cur>] 
      : [First, ...FlattenDepth<Rest, Depth, Cur>]
    : [];

type a = FlattenDepth<[1, [2]]>

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]
