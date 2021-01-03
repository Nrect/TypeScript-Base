var rect1 = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    },
    color: "#949494"
};
var rect2 = {
    id: '123',
    size: {
        width: 20,
        height: 30
    }
};
rect2["color"] = "#949494";
console.log(rect2["color"]);
rect2.color = "#ff0000";
console.log(rect2.color);
