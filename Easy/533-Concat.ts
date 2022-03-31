type Result = Concat<[1], [2]> // expected to be [1, 2]
type Result2 = Concat<[], [2]> // expected to be [2]

export type Concat<A1 extends unknown[], A2 extends unknown[]> = [...A1, ...A2]
