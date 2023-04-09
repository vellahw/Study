//틀 만들기
function makeStudent(name, korean, math, english) {
    //속성
    var willReturn = {
        이름: name,
        국어: korean,
        수학: math,
        영어: english,
    
        //메서드    
        getSum: function() {
            return this.국어 + this.수학 + this.영어;
        },

        getAverage: function() {
            return (this.국어 + this.수학 + this.영어) / 3;
        },

        toString: function () {
            return this.이름 + '\t'
                 + this.getSum() + '\t' + this.getAverage();
        }
    };
    return willReturn;
}

//학생 정보 배열 생성
var students = [];
students.push(makeStudent('홍길동', 87, 90, 98));
students.push(makeStudent('홍길순', 98, 56, 78));

//출력
var output = '이름\t총점\t평균\n';
for (const i in students){
    output += students[i].toString() + '\n';
}

console.log(output);