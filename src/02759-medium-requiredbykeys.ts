import type { Equal, Expect } from '../utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type Flatten<T> = {
  [Key in keyof T]: T[Key]
}

type RequiredByKeys<T extends {}, Keys extends keyof T = keyof T> = Flatten<{
  [Key in keyof T as Key extends Keys ? never: Key]: T[Key] 
} & {
  [Key in Keys]-?: T[Key]
}>


type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
]
