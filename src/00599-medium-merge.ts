import type { Equal, Expect } from '../utils'

type Merge<T extends {}, P extends {}> = {
  [Key in keyof T | keyof P]: Key extends keyof P ? P[Key] : (
    Key extends keyof T ? T[Key] : never
  )
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]
