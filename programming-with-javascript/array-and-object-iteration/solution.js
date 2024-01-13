// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Create a function called `logDairy`.
// Within it, console log each of the items in the dairy array, using the for...of loop
function logDairy() {
    for (let item of dairy) {
        console.log(item)
    }
}
// After you create this function, call it as `logDairy()`
// to see the output on the console.
logDairy()
// expected output:
// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

// Create a function called `birdCan`, within it,
// loop over the bird object's properties and 
// console log each one, using the for...of loop.
// Remember, you need to console log both the 
// key and the value of each of the bird object's properties.
function birdCan() {
    // iterate over bird object's properties
    // using for...of loop
    // get bird's properties
    let properties = Object.keys(bird)
    for (let property of properties) {
        // console log both the key and the value of each property
        // output sample "property: bird[property]"
        console.log(`${property}: ${bird[property]}`)
    }
}
// Finally call the function as `birdCan()` to see the output on the console.
birdCan()
// expected output:
// canJump: true
// canFly: true


// Task 3
// write animalCan function from birdCan and switch from
// for..of to for..in loop
function animalCan() {
    // iterate over bird object's properties
    // using for...in loop
    // get bird's properties
    for (let property in bird) {
        // console log both the key and the value of each property
        console.log(`${property}: ${bird[property]}`)
    }
}
// Finally call the function as `animalCan()` to see the output on the console.
animalCan()
// expected output:
// canJump: true
// canFly: true
// hasFeathers: true
