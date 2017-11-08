class Person {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    
    greet() {
        console.log("Hi there! My name is " + this.name + " and my favorite color is " + this.color + ". I am " + this.age + " years old.");
    }
}

export default Person;

