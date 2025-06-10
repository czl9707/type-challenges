import type { Equal, Expect } from '../utils'

type BEM<A extends string, B extends string[] = [], C extends string[] = []> 
  = `${A}${B["length"] extends 0 ? "" : `__${B[number]}`}${C["length"] extends 0 ? "" : `--${C[number]}`}`



type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]
