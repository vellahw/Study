/*
in 키워드
*/

var output = '';
var student = {
    이름: '벨라',
    국어: 92,
    수학: 90,
    영어: 96,
    과학: 96
};

//in 키워드를 별도로 사용해 해당 키가 객체 안에 있는지 확인할 수 있다.
//객체가 이름과 성별에 해당하는 속성을 가지고 있는지 확인함

output += "'이름' in student: " + ('이름' in student) + "\n";
output += "'성별' in student: " + ('성별' in student);

alert(output);