/*
객체의 반복:  for in 반복문 사용
*/

//변수 선언
var vella = {
    name: '벨라',
    gender: 'woman',
    nationality: 'Korea',
    blog: 'https://tavi.tistory.com'
};

//출력
var output = '';
for (const key in vella) {
    output += '-' + key + ': ' + vella[key] + '\n';
}

alert(output);