//Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// Example:
type arr1 = ["a", "b", "c", "d"]
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

export type Pop<T extends unknown[]> = T["length"] extends 0 | 1
  ? []
  : T extends [...infer A, infer _]
  ? A
  : never

type Result = Shift<[3, 2, 1]> // [2, 1]

export type Shift<T extends unknown[]> = T["length"] extends 0 | 1
  ? []
  : T extends [infer A, ...infer _]
  ? [..._]
  : never
