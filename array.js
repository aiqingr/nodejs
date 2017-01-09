var grades = [100, 50, 'yoyo', true];

grades.push('Ni');
grades.unshift('Chen');
//push method, add the item to the end
//unshift method, add the item to the begin

console.log(grades);

var name = ['Tong', 'Yang', 'Tian', 'Qi'];
var names = name.pop();
var namess = name.shift();
//pop method, pull the last item out
//shift method, pull the first item out
console.log(name);
console.log(names);
console.log(namess);
console.log('-----------');

grades.forEach(function (grade) {
  console.log(grade);
});

console.log('---------');
var newGrades = [100, 40, 50, 10];
//totalGrade =0;
var totalGrade = 0;
//forEach -> add grade to totalGrade
newGrades.forEach(function (grade) {
  totalGrade += grade;
  console.log('Current total is ' + totalGrade);
});

var average = totalGrade / newGrades.length;
console.log('Average is ' + average);
//totalGrade / total number of grades
