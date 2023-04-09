/*
생성자 함수
*/

function Student(name, korean, math, english) {
    this.이름 = name;
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;

    //메서드
    this.getSum = function() {
        return this.국어 + this.수학 + this.영어;
    };

    this.getAverage = function() {
        return this.getSum() / 3;
    };

    this.toString = function() {
        return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
    };
}

//Student 객체 생성
var student = new Student('홍길동', 87, 90, 98);

//학생 정보 배열 만들기
var students = [];
students.push(new Student('홍길동', 87, 90, 98));
students.push(new Student('홍길순', 98, 56, 78));

//출력하기
var output = '이름\t총점\t평균\n';
for (const i in students) {
    output += students[i].toString() + '\n';
}

console.log(output);