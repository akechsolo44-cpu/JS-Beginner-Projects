function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

Vehicle.prototype.getInfo = function () {
    return this.brand + " was made in " + this.year;
};

function Car(brand, year, doors) {
    Vehicle.call(this, brand, year);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let car1 = new Car("Lambo", 2022, 4);
let car2 = new Car("BMW", 2024, 4);

console.log(car1.getInfo());
console.log("Doors:", car1.doors);

console.log(car2.getInfo());
console.log("Doors:", car2.doors);