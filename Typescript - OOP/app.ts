

class Person {
    name: string;
    age: number;
    // Constructor method is a special method that is called when an instance of the class is created, forcing the new instance to have the properties.
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}