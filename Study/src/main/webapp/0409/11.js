/*
프로토타입2
*/

//부모
function Vella() {
    name = 'vella',
    nationality = 'Korea'
};

//유전자 추가
Vella.prototype.gender = '여성';

//자식
var person = new Vella();

//출력
console.log(person.gender);

var array = new Array(330, 3, 33);
console.log('sort: ' + array.sort());
console.log('length: ' + array.length);