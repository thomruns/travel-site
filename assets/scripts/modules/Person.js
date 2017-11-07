function Person(name, color) {
    this.name = name;
    this.color = color;
    this.greet = function() {
        console.log("Hello! My name is " + name + " and my favorite color is " + color + ".");
    }
}

module.exports = Person;