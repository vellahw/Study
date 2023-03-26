package study.march26;

/*
 * 230326
 	DTO와 VO 개념 정리 중 - VO
 *
 */

public class Main {

	public static void main(String[] args) {
		
		Money money1 = new Money(1234, 5678);
		Money money2 = new Money(1234, 5678);
		
		if(money1.equals(money2)) { //equals로 비교
			System.out.println("같음");
		} else {
			System.out.println("다름");
		}
	}
}
	
	class Money { //만원짜리 지폐의 속성
		private int first; //고유번호
		private int second;
		
		public Money(int first, int second) {
			this.first = first;
			this.second = second;
		}

		//equals 오버라이드
		@Override
		public boolean equals(Object obj) {
			
			if(obj == this) {
				return true;
			}
			
			if(obj instanceof Money) {
				Money target = (Money) obj;
				if(this.first == target.first
						&& this.second == target.second) {
					return true;
				}
			}
			return false;
		}
	}