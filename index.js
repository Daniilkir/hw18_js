class Account{

    constructor({login, email}){
        this.login = login
        this.email = email
    }
    getInfo(){
        return `Login:${this.login}, Email:${this.email}`
    }
}

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });
  
console.log(mango.getInfo());
// 2
class User{
    constructor({name, age, followers}){
        this.name = name
        this.age = age
        this.followers = followers
    }
    getinfo(){
        return  `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });

console.log(poly.getinfo())
// 3
class Storage {
    constructor(item) {
        this.item = item
    }

    getItems() {
        return this.item
    }

    addItem(item) {
        return this.item.push(item)
    }

    removeItem(item) {
        return this.item.splice(this.item.indexOf(item), 1)
    } 
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);

const items = storage.getItems();
console.table(items); 

storage.addItem('Дроїд');
console.table(storage.item); 

storage.removeItem('Пролонгер');
console.table(storage.item);
// 3
class StringBuilder {
    constructor(str){
        this._value = str
    }

    get value() {
        return this._value
    }

    append(str) {
        return this._value += str
    }

    prepend(str) {
        return this._value = str + this._value
    }

    pad(str) {
        return this._value = str + this._value + str
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value); 

builder.pad('=');
console.log(builder.value); 
// 5
class Car{
    static getSpecs(car){
        return console.log(car)
    }
    constructor({speed, price, maxSpeed, isOn, distance}){
        this.speed = speed
        this.price = price
        this.maxSpeed = maxSpeed
        this.isOn = isOn
        this.distance = distance
    }
    get price() {
        return this._price
    }

    set price(newPrice) {
        return this._price = newPrice
    }
    turnOn() {
    return this.isOn = true
    }
    turnOff() {
        return this.isOn = false
    }
    accelerate(value) {
    if (value <= this.maxSpeed) {
        this.speed = value
    }
}
    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value
    }
        else {
            this.speed = 0
    }
}
    drive(hours) {
        if (this.isOn = true)
        this.distance = hours*this.speed

        else{
            this.distance = 0
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000