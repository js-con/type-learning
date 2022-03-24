//Implement a generic First<T> that takes an Array T and returns it's first element's type.

//For example
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type head1 = First<arr1> | First2<arr1> // expected to be 'a'
type head2 = First<arr2> | First2<arr2>// expected to be 3
type head3 = First<arr3> | First2<arr3> // expected to be never

//solution
type First<T extends unknown[]> = T extends [infer A,...infer _] ? A : never

type First2<T extends unknown[]> = T["length"] extends 0 ? never : T[0]
