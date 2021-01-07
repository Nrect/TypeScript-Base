const cars: string[] = ['sdaas', '32112']
const cars2: Array<string> = ['sdaas', '32112']

// Если не указать дженерик промису, то data будет unknown
// Чтобы указать, с каким типом данным работает Promise, используем generic
const promise = new Promise<string>(resolve => {
    setTimeout(() => resolve('Success'), 1000)
})
promise.then(data => {
    console.log(data.toUpperCase())
})

// Альтернативная запись
// const promise1: Promise<string> = new Promise(resolve => {
//     console.log('123')
// })

//=================
function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Nrect'}, {age: 19})
console.log(merged.name)
console.log(merged.age)
// ! generic прописывам extends object, чтобы они были типом объект, запрещаем строки
// const merged1 = mergeObjects('dfsdsf', 'fdsw')
// console.log(merged1)

//=================
//Должен быть ключ length. Ожидаем поучить объект с ключом length
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `Length: ${value.length}`
    }
}

console.log(withCount('Nrect'))
console.log(withCount(['1', '2', '3', '4', '5']))
// console.log(withCount(5)
// console.log(withCount({}))
console.log(withCount({length: 30}))

//=================
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Nrect',
    age: 19
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

//=================
// Работа с классами
class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection(['Nrect', '123', {name: 'Nrect'}])
const strings = new Collection<string>(['Nrect', '123'])
strings.add('nrect_add')
strings.remove('123')
console.log(strings.items)

//=================
interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if (model.length > 3 && year > 2000) {
        car.model = model
        car.year = year
    }
    return car as Car
}

//=================
// Утилита, запрещающая изменение
const cars3: Readonly<Array<string>> = ['car1', 'car2']
// cars3.shift()

const ford: Readonly<Car> = {
    model: 'Audi',
    year: 2005
}
// ford.model = 'Nrect'
