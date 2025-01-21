class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying for grade ${this.grade}.`;
    }
}

const person = new Person("John", 30);
console.log(person.describe());

const student = new Student("Jane", 20, "A");
console.log(student.describe());
console.log(student.study());