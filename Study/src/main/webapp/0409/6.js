/*
객체에 속성 추가하기
*/

//빈 객체 선언
var student = {};

//속성 추가하기
student.이름 = '벨라';
student.성별 = '여자';
student.국적 = '한국';
student.블로그 = 'tavi.tistory.com';

//메서드 추가하기
//객체에 있는 속성을 출력하는 메서드
student.toString = function() {
    var output = '';
    for (const key in this) {
        if (key != 'toString') {
            output += key + ': ' + this[key] + '\n';           
        }        
    }
    return output;
}

//속성 제거하기
delete(student.성별);
alert(student);