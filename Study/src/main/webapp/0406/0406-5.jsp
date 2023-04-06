<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript">
//함수를 리턴하는 함수
function hi() {
	return function() {
		alert('vellalog!');
	};
}

hi()();

//클로저
function test(name) {
	var output = 'Hello ' + name + '..!';
	return function() {
		alert(output);
	};
}

test('vellalog')();


//클로저2
function test2(name) {
	var output = 'Hello ' + name + '..!';
	return function() {
		return output;
	};
}

var first = test2('JavaScript');
var second = test2('jQuery');

alert(first());
alert(second());

</script>
</head>
</html>