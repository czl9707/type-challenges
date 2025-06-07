import type { Equal, Expect } from '../utils'

type VueObj<D, C, M> = {
    data: (this: void) => D,
    computed: C,
    methods: M,
  } & ThisType<D & M & GetComputed<C>>

type GetComputed<C> = C extends Record<string, (...args: unknown[]) => unknown> 
  ? { [S in keyof C]: ReturnType<C[S]> } 
  : never


declare function SimpleVue<D, C, M>(t: VueObj<D, C, M>): unknown;

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})
