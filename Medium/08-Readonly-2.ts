interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

export type MyReadonly2<T, U extends keyof T> = {
  readonly [key in keyof Pick<T, U>]: T[key]
} & {
  [K in Exclude<keyof T, U>]: T[K]
}