/*
this 키워드
*/

//객체를 선언
var person = {
    name: '벨라',
    eat: function(food) {
        alert(this.name + '가 ' + food + '을/를 먹습니다.');
    } //함수 자료형은 메서드
};

person.eat('밥'); //메서드 호출