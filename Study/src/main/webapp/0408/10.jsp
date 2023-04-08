<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
window.onload = function () {
	var remove = document.getElementById('remove');
	
	document.body.removeChild(remove);
};
</script>
</head>
<body>
<h1>Hello</h1>
<h1 id="remove">this is</h1>
<h1>vellalog</h1>
</body>
</html>