<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
window.onload = function () {
	var headers = document.getElementsByTagName('h1');
	
	for (var i = 0; i < headers.length; i++) {
		headers[i].innerHTML = '반복문을 사용할 수 있는 배열';		
	}
};
</script>
</head>
<body>
<h1>Hello</h1>
<h1>vellalog</h1>
</body>
</html>