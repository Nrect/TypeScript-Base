const isFetching: boolean = false

const num: number = 42
const float: number = 4.2
const num_e: number = 5e10

const message: string = 'Hello'

const numArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['1', '2', '3']

// Tuple
const contact: [string, number] = ['Nrect', 123]

// Any
let variable: any = 42
variable = '123'

// func
function sayName(name: string): void {
    console.log(name)
}

sayName('Nrect')

// Never
function throwMyErr(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
    }
}

// Type
type Login = string
const login: Login = 'Nrect'

type ID = string | number
const id: ID = '123'
const id2: ID = 123

type SomeType = string | undefined | null
