// для классов
function Log(constructor: Function) {
    console.log(constructor)

}

// для свойств
function Log2(target: any, propName: string | Symbol) {
    console.log(target)
    console.log(propName)

}

// для методов
function Log3(target: any, propName: string | Symbol, description: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(description)

}

@Log
class Component1 {
    @Log2
    name: string

    constructor(name: string) {
        this.name = name
    }

    @Log3
    get componentName() {
        return this.name
    }

    @Log3
    logName(): void {
        console.log(`Log: ${this.name}`)
    }
}


//=======================
interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function <T extends { new(...args: any[]): object }>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)

                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: '#app',
    template: `<div class="card">
                    <div class="content">
                        <span class="card-title">Card component</span>
                    </div>
                </div>`
})
class CardComponent {
    constructor(public name: string) {
        this.name = name
    }

    get componentName() {
        return this.name
    }

    logName(): void {
        console.log(`Log: ${this.name}`)
    }
}

const card = new CardComponent('My Card component')
//============
const btn = document.querySelector('#btn')

