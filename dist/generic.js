"use strict";
const cars = ['sdaas', '32112'];
const cars2 = ['sdaas', '32112'];
const promise = new Promise(resolve => {
    setTimeout(() => resolve('Success'), 1000);
});
promise.then(data => {
    console.log(data.toUpperCase());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Nrect' }, { age: 19 });
console.log(merged.name);
console.log(merged.age);
function withCount(value) {
    return {
        value,
        count: `Length: ${value.length}`
    };
}
console.log(withCount('Nrect'));
console.log(withCount(['1', '2', '3', '4', '5']));
console.log(withCount({ length: 30 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Nrect',
    age: 19
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['Nrect', '123']);
strings.add('nrect_add');
strings.remove('123');
console.log(strings.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3 && year > 2000) {
        car.model = model;
        car.year = year;
    }
    return car;
}
const cars3 = ['car1', 'car2'];
const ford = {
    model: 'Audi',
    year: 2005
};
//# sourceMappingURL=generic.js.map