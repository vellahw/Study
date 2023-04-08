<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript">
/*
 * window 객체의 타이머 메서드
 */
 
//경고창 출력하고 3초 후에 자동으로 윈도우 종료
window.onload = function(){
	alert("3초 후 종료됩니다.");
	
	window.setTimeout(function(){
		window.close();
	}, 3000); //3000 ms = 3초
};

//10초 동안 현재 날짜 출력 후 실행 중지
window.onload = function() {
	var intervalID = setInterval(function() {
		document.body.innerHTML += '<p>'+ new Date() +'</p>';
	}, 1000); //1초마다 함수 실행

	//10초 후 함수 실행
	setTimeout(() => {
		clearInterval(intervalID); //타이머 종료
	}, 10000);
}

</script>
</head>
<body>
</body>
</html>