/*
프로토타입
*/
function Student(name, korean, math, english) {
    this.이름 = name;
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
}

Student.prototype.getSum = function() {
    return this.국어 + this.수학 + this.영어; 
};

Student.prototype.getAverage = function() { 
    return this.getSum() / 3 
};

Student.prototype.toString = function() { 
    return this.이름 + '\t' + this.getSum() + '\t\t' + this.getAverage(); 
};

var students = [];
students.push(new Student('홍길동', 87, 90, 98));
students.push(new Student('홍길순', 98, 56, 78));

//출력
var output = '이름\t총점\t평균\n';
for (const i in students) {
    output += students[i].toString() + '\n';
}
console.log(output);