/*
with 키워드
*/

var student = {
    이름: '벨라',
    국어: 92,
    수학: 90,
    영어: 96,
    과학: 96
};

var output = '';
// output += "이름: " + student.이름 + "\n";
// output += "국어: " + student.국어 + "\n";
// output += "수학: " + student.수학 + "\n";
// output += "영어: " + student.영어 + "\n";
// output += "과학: " + student.과학 + "\n";
// output += "총점: " + (student.국어 + student.수학 + student.영어+ student.과학);

with(student) {
    output += '이름: ' + 이름 + '\n';
    output += '국어: ' + 국어 + '\n';
    output += '수학: ' + 수학 + '\n';
    output += '영어: ' + 영어 + '\n';
    output += '과학: ' + 과학 + '\n';
    output += '총점: ' + (국어+수학+영어+과학);
}

alert(output);