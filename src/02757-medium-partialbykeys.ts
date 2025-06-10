import type { Equal, Expect } from '../utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type Flatten<T> = {
  [Key in keyof T]: T[Key]
}

type PartialByKeys<T extends {}, Keys extends keyof T = keyof T> = Flatten<{
  [Key in keyof T as Key extends Keys ? never: Key]: T[Key] 
} & {
  [Key in Keys]?: T[Key]
}>

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]
