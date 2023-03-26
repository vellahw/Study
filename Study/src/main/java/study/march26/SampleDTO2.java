package study.march26;

/* 
 * 불변성 유지하기 
 * 1. setter 없애기
 * 2. 생성자를 통해 속성값 초기화
 * */
public class SampleDTO2 {
	private final String name;
	private final String nickName;

	// 속성값 초기화
	public SampleDTO2(String name, String nickName) {
		this.name = name;
		this.nickName = nickName;
	}

	public String getName() {
		return name;
	}

	public String getNickName() {
		return nickName;
	}
}
