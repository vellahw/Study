<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
window.onload = function () {
	var output = '';
	
	//HTML 태그에 문자열을 직접 입력
	output += '<h1>Hello</h1>';
	output += '<h1>this is</h1>';
	output += '<h1>vellalog</h1>';
	
	//innerHTML 속성에 문자열을 할당
	document.body.innerHTML = output;
};
</script>
</head>
<body>
</body>
</html>