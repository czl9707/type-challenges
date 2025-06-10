import type { Equal, Expect } from '../utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type PickByType<T extends {}, P> = {
  [Key in keyof T as T[Key] extends P ? Key : never]: P
};

type a = PickByType<Model, boolean>;

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean, isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]
