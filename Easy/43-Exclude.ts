type T0 = MyExclude<"a" | "b" | "c", "a">;
     
type T1 = MyExclude<"a" | "b" | "c", "a" | "b">;
     
type T2 = MyExclude<string | number | (() => void), Function>;

export type MyExclude<T, U> = T extends U ? never : T