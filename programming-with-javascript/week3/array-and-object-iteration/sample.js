const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

function handleClick() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break
        default:
            h1.innerText = arr[0];
            break;
    }
}
