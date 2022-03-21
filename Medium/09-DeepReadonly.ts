type X = {
  x: {
    a: 1
    b: "hi"
  }
  y: "hey"
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: "hi"
  }
  readonly y: "hey"
}

// should be same as `Expected`
type Todo = DeepReadonly<X>
type Todo3 = DeepReadonly2<X>

export type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown>
    ? DeepReadonly<T[key]>
    : T[key]
}

export type DeepReadonly2<T> = T extends Record<string, unknown>
  ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> }
  : T
