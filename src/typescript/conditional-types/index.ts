// value === true ? true : false

// T extends U ? T1 : T2

type Test<T> = T extends string ? true : false

type R = Test<2>

interface User {
  id: string
}

interface Message {
  id: number
}

function getId<T extends {id: any}>(obj: T): T extends {id: string} ? string : number {
  return obj.id
}

const id = getId({} as User)
const id1 = getId({} as Message)

type NotFalsy<T = null> = T extends (null | undefined | 0 | false) ? never : T

let z: NotFalsy<string>

z = "Hello"

z = false


type Filter<T, U> = T extends U ? never : T;

type R1 = Filter<'a' | 'b' | 'c', 'b'>

type R2 = Exclude<'a' | 'b' | 'c', 'c'>

//infer

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R] : never

type R3 = TryInfer<{a: 1, b: 2}>

// 1 | 2
//
function f0(param: number): void {}

type ParamType<T> = T extends (p: infer U) => void ? U : undefined

let v0: ParamType<typeof f0>

function test() {
  return 2
}

type FunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type R4 = FunctionResult<typeof test>

type R5 = ReturnType<typeof test>

type GetStatus<T> = T extends infer R ? R extends {status: any} ? R['status']: null : null

type Status = GetStatus<{status: ['A', 'B']}>
