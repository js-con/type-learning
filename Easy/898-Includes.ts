//Implement the JavaScript Array.includes function in the type system.
//A type takes the two arguments. The output should be a boolean true or false.

//For example
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio"> // expected to be `false`
type isPet = Includes<["cat", "dog", "elephant"], "dog"> // expected to be `true`

export type Includes<A extends unknown[], B> = B extends A[number]
  ? true
  : false
