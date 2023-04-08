<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
window.onload = function() {
	var img = document.createElement('img');

	//속성 지정
	/* img.src = 'hello.png';
	img.width = 200;
	img.height = 200; */
	
	//속성 지정2 (웹 브라우저가 지원하지 않는 속성일 경우)
	img.setAttribute('src', 'hello.png');
	img.setAttribute('width', 200);
	img.setAttribute('height', 200);
	
	document.body.appendChild(img);
};
</script>
</head>
<body>

</body>
</html>