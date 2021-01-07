interface Rect {
    readonly id: string,
    color?: string
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    },
    color: "#949494"
}

const rect2: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 30
    }
}

rect2["color"] = "#949494"
console.log(rect2["color"])
rect2.color = "#ff0000"
console.log(rect2.color)

const rect3 = {} as Rect
const rect4 = <Rect>{}

//Наследование
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '18903124',
    size: {
        width: 50,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//Имплементация
interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//Динамические кючи, если значений очень много
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    height: '2p x',
    width: '5px'
}
