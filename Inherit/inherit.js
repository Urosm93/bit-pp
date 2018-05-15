
// var prog1 = {
//     name: "Milos",
//     surname: "Djoric",
//     sayGoodbye: function(msg, msg1){
//         console.log(this.name +" "+ this.surname +": GOODBYE" + msg +msg1);
//     }
// }

// var prog2 ={
//     name: "Uros",
//     surname: "Miletic"
// }

// prog1.sayGoodbye.call(prog2);
// var program = prog1.sayGoodbye.call(prog2);
// prog1.sayGoodbye.apply(prog2, [" ALI SUTRA", " ill be back"]);


function Person(name,surname){
    this.name = name;
    this.surname = surname;
}

function Employee(name,surname,job,salary){
    Person.call(this, name,surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.getData = function(){
    return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary = function(){
    console.log(this.salary);
}
Employee.prototype.getSalary = function(){
    this.salary = this.salary * 1.1 ;
}

function Developer(name,surname,job,salary,specialization){
    this.specialization = specialization;
    Employee.call(this, name,surname,job,salary);
}
Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function(){
    console.log(this.specialization);
};


function Manager(name,surname,job,salary,department){
    this.department = department;
    Employee.call(this,name,surname,job,salary)
}
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function(){
    console.log(this.department);
}
Manager.prototype.changeDepartment = function(value){
      this.department = value;
}

var miletic = new Developer("uros","miletic","developer",2200,"Doktor Nauka");
var uros = new Manager ("bu","bufu","ufub",12312,"USA");
miletic.getSalary();
miletic.getSpecialization();
console.log(miletic);