interface Student{

  name:string;
  score:number;

}


function findTopNames(students:Student[]):string[] {
  
  const filtered = students
   .filter(student => student.score >= 9)
   .map(student => student.name);
   return filtered;
   
}

// assign interface/type to the student1 object properly
const students1: Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
