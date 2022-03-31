//In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

//example:

type re1 = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
type re2 = Flatten<[]> // []
type re3 = Flatten<[1]> // [1]
type re4 = Flatten<[[1, 2]]> // [1,2]

export type Flatten<T extends unknown[]> = T extends [infer A, ...infer Rest]
  ? A extends unknown[]
    ? [...Flatten<A>, ...Flatten<Rest>]
    : [A, ...Flatten<Rest>]
  : []