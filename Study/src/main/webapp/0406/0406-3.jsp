<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script>
function returnTest2() {
	alert("문장 A");
	return;
	alert("문장 B");
}

var value = returnTest2();
alert(typeof(value) + ": " + value);
</script>
</head>
<body>

</body>
</html>