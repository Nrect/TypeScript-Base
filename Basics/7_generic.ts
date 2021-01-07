const someArr: Array<number> = [1, 2, 3, 4, 5.53, 6e10]
const someArrStr: Array<string> = ['1', '2', '3', '4', '5']

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}
