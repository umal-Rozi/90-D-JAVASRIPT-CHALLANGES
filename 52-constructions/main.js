
// constructor = a special method of class
// accepts arguments and assigns properties.

class student{
    constructor(name, age, gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;

    }
    study(){
        console.log(`${this.name} is study`);
    }
}

const student1= new student("umal-rozi", 20, 3.9);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();