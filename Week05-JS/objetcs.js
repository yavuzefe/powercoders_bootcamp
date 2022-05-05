function Person(name, age, married){
    this.name = name;
    this.age = age;
    this.Ismarried = married
    this.hello = () => {
      return `Hello ${name}, ${age} years old ${this.Ismarried}}`;
      }
    }
// Convert this function to the class
// class Person {
//     constructor(name, age, married) {
//         this.name = name;
//         this.age = age;
//         this.Ismarried = married;
//         this.hello = () => {
//             return `Hello ${name}, ${age} years old ${this.Ismarried}}`;
//         };
//     }
// }
    
  let p1 = new Person("John", 38, true);
  let p2 = new Person ("Doe", 45, false);
  console.log(p1.hello());
  console.log(p2.hello());
    