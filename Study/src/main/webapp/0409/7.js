/*
객체와 배열을 사용한 데이터 관리 예제 
*/

//학생 정보 배열 생성
var students = [];
students.push({ 이름: '홍길동', 국어: 87, 영어: 90, 수학: 98 });
students.push({ 이름: '홍길순', 국어: 98, 영어: 56, 수학: 78 });
students.push({ 이름: '홍길투', 국어: 90, 영어: 100, 수학: 98 });
students.push({ 이름: '홍길삼', 국어: 65, 영어: 98, 수학: 88 });
students.push({ 이름: '홍길사', 국어: 77, 영어: 70, 수학: 98 });
students.push({ 이름: '홍길오', 국어: 90, 영어: 98, 수학: 98 });

//모든 students 배열내의 객체에 메서드를 추가한다.
for (const i in students) {
    //총점 구하는 메서드
    students[i].getSum = function() {
        return this.국어 + this.영어 + this.수학;
    };

    //평균 구하는 메서드
    students[i].getAverage = function() {
        return this.getSum() / 3;
    };
}

//배열 students의 이름, 총점, 평균 출력하기
var output = '이름\t총점\t평균\n';
for (const i in students){
    with(students[i]) {
        output += 이름 + '\t'
               + getSum() + '\t\t'
               + getAverage() + '\n';  
    }
}

console.log(output);