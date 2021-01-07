function strip(x: number | string) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

//============
class MyResponse {
    header = 'res header'
    result = 'res message'
}

class MyError {
    header = 'error header'
    message = 'res message'
}

function handler(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

//============
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
}

console.log(setAlertType('success'));
console.log(setAlertType('danger'));
console.log(setAlertType('warning'));
