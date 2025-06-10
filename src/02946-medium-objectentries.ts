import type { Equal, Expect } from '../utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type ObjectEntries<T extends object, P extends keyof T = keyof T> = {
  [Key in keyof Required<T>]-? : [Key, Required<T>[Key] extends never ? undefined : Required<T>[Key]]
}[P]


type a = ObjectEntries<{ key?: undefined }>;


type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]
