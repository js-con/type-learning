// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

type MyOmit<T, U> = {
  [key in Exclude<keyof T, U>]: T[key]
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