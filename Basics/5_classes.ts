class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} | ${this.version}`
    }
}

// readonly можем перезаписать в конструкторе
class Car {
    readonly model: string
    readonly number: string

    constructor(model: string) {
        this.model = model
    }
}

// Идентичная запись
class Car2 {
    readonly number: string

    constructor(readonly model: string) {
    }
}

// Модификаторы
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

// Абстрактные классы
abstract class Component {
    abstract render(): void

    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component is render!')
    }

    info(): string {
        return '';
    }
}
