//Implement Python liked any function in the type system.
//A type takes the Array and returns true if any element of the Array is true.
//If the Array is empty, return false.

//example:
type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.

type Sample3 = AnyOf2<[1, "", false, [], {}]>// expected to be true.
type Sample4 = AnyOf2<[0, "", false, [], {}]> // expected to be false.

type Falsy = 0 | "" | null | undefined | [] | Record<any, never> | false

export type AnyOf<T extends unknown[]> = T extends [infer A, ...infer Rest]
  ? A extends Falsy
    ? AnyOf<Rest>
    : true
  : false

export type AnyOf2<T extends unknown[]> = T[number] extends Falsy ? false : true
