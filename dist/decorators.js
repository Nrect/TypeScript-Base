"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log(constructor);
}
function Log2(target, propName) {
    console.log(target);
    console.log(propName);
}
function Log3(target, propName, description) {
    console.log(target);
    console.log(propName);
    console.log(description);
}
let Component1 = class Component1 {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Log: ${this.name}`);
    }
};
__decorate([
    Log2
], Component1.prototype, "name", void 0);
__decorate([
    Log3
], Component1.prototype, "componentName", null);
__decorate([
    Log3
], Component1.prototype, "logName", null);
Component1 = __decorate([
    Log
], Component1);
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Log: ${this.name}`);
    }
};
CardComponent = __decorate([
    Component({
        selector: '#app',
        template: `<div class="card">
                    <div class="content">
                        <span class="card-title">Card component</span>
                    </div>
                </div>`
    })
], CardComponent);
const card = new CardComponent('My Card component');
const btn = document.querySelector('#btn');
//# sourceMappingURL=decorators.js.map