<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>시계 만들기</title>
<script>
window.onload = function() {
	
	var clock = document.getElementById('clock');
	
	function getClock() {
		var now = new Date();
		
		let day = ['일','월', '화', '수', '목', '금', '토'];
		
		let DateFormat = now.getFullYear() + '년 ' + (now.getMonth()+1) + '월 ' + now.getDate() + '일 '
						+ day[now.getDay()] + '요일 '
						+ now.getHours() + '시 ' + now.getMinutes() + '분 ' + now.getSeconds() + '초' ;
		
		clock.innerHTML = DateFormat;	
	}
	
	getClock();
	setInterval(getClock, 1000);
};
</script>
<style type="text/css">
.t {
	background-color: #000;
	color: yellow;
	padding: 5px 5px 5px 5px;
    border-radius: 6px;
    margin-bottom: 0;
    width: 918px;
    letter-spacing: -2px;
}

#clock {
    letter-spacing: -2px;
	font-size: 40pt;
    color: #FF6815;
    font-weight: bold;
    text-shadow: rgb(80, 80, 80) -1px -1px 1px;
    float: left;
}
</style>
</head>
<body>
<h3 class="t">어서 와 . . . 쓸데없지만 아무나 다 알려준다는 표준시간부터 보여줄게 . . .</h3>
<div id='clock'></div>
</body>
</html>