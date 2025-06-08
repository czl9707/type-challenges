import type { Equal, Expect } from '../utils'

type DiffSide<T extends {}, P extends {}> = {
  [Key in keyof T as Key extends keyof P ? never : Key]: T[Key]
}
type Flatten<T extends {}> = {
  [Key in keyof T]: T[Key]
}
type Diff<T extends {}, P extends {}> = Flatten<DiffSide<T, P> & DiffSide<P, T>>


type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
]
