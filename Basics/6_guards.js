function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
//============
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'res header';
        this.result = 'res message';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'res message';
    }
    return MyError;
}());
function handler(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
}
console.log(setAlertType('success'));
console.log(setAlertType('danger'));
console.log(setAlertType('warning'));
