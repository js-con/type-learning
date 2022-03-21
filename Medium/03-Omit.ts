// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'> | MyOmit2<Todo, 'description' | 'title'> | MyOmit3<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

export type MyOmit<T, U> = {
  [key in Exclude<keyof T, U>]: T[key]
}

export type MyOmit2<T, U> = Pick<T, Exclude<keyof T, U>>

//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
export type MyOmit3<T, U> = {
  [key in keyof T as key extends U ? never : key]: T[key]
}

function MyOmit(obj, keys: any[]){
  const result = {}

  keys.forEach(key=>{
    if(!(key in obj)){
      result[key] = obj[key]
    }
  })

  return result 
}