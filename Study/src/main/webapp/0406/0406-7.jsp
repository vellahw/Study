<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
//eval() 테스트1
var test = '';

test += 'var number = 10;';
test += 'alert(number);';

eval(test);


//eval() 테스트2
var test = '';

test += 'var number = 10;';
test += 'alert(number);';

eval(test);
alert(number);
</script>
</head>
</html>