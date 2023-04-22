var password = prompt("사용할 비밀번호를 입력해주세요", "6자리 이상");

if(password.length < 6) {
    alert("6자리 이상의 비밀번호를 입력해주세요.")
} else {
    alert("완료 되었습니다.");
}