<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
/*
 * 리턴값 활용
   return 키워드를 사용해 함수를 호출한 곳으로 값을 넘길 수 있다.
   
   -함수가 실행되는 도중 함수를 호출한 곳으로 돌아간다.
   -return 키워드 사용시 값을 지정하지 않아도 함수를 호출한 곳으로 돌아감
 */

function returnTest() {
	alert("문장 A");
	return;
	alert("문장 B");
}

returnTest();
</script>
</head>
<body>

</body>
</html>