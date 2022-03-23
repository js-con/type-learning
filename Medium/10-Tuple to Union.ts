type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
type Test2 = TupleToUnion2<Arr>

export type TupleToUnion<T extends unknown[]> = T[number] 

export type TupleToUnion2<T> = T extends [... infer A] ? A[number] : never;