package study.march26;

public class SampleService {
	 
    public SampleDTO createUser() {
        
        String name = "벨라";
        String nickname = "vella";
        
        SampleDTO sampleDTO = new SampleDTO();
        
        sampleDTO.setName(name); //데이터 셋팅
        sampleDTO.setNickName(nickname);; //데이터 셋팅
        
        return sampleDTO;
    }
}