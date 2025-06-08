import type { Equal, Expect } from '../utils'

type KebabCaseBody<S extends string> = S extends `${infer Head}${infer Tail}` ? (
  `${Head extends Lowercase<Head> ? '' : '-'}${Lowercase<Head>}${KebabCaseBody<Tail>}` 
) : S;

type KebabCase<S extends string> = S extends `${infer Head}${infer Tail}` ? (
  `${Lowercase<Head>}${KebabCaseBody<Tail>}` 
) : S;

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
