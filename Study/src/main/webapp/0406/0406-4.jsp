<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
/* 함수를 매개변수로 받아 해당 함수 호출하기 */

function callTen(other) {
	for(var i=0; i<5; i++) { //5번 호출
		other();
	}
}

function justFunction() {
	alert("vellalog!");
}

callTen(justFunction);
</script>
</head>
</html>