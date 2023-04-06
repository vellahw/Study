<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript">
//인코딩할 문자열
var URI = 'https://tavi.tistory.com?test=한글입니다.';

//출력할 문자열 output
var output = '';
output += '★escape()\n';
output += escape(URI) + '\n\n';
output += '★encodeURI()\n';
output += encodeURI(URI) + '\n\n';
output += '★encodeURIComponent()\n';
output += encodeURIComponent(URI) + '\n\n';

alert(output);
</script>
</head>
</html>