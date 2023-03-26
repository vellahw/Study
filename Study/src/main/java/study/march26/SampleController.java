package study.march26;

public class SampleController {
	private SampleService sampleService;
    
    public String createUser() {
        SampleDTO sampleDTO = sampleService.createUser();
        
        String getUserName = sampleDTO.getName(); //데이터 꺼내오기
        String getUserNickname = sampleDTO.getNickName(); //데이터 꺼내오기
        
        return getUserName + getUserNickname;
    }
}
