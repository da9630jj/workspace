import java.util.Optional;

public class Optional_1 {
    public static void main(String[] args){
        String str = "java";

        // 객체를 Optional 상자에 넣기
        Optional<String> op1 = Optional.of(str); // null을 허용하지 않을 객체
        Optional<String> op2 = Optional.ofNullable(str); // null을 허용하는 객체

        // isPresent() : 상자에 데이터 존재하는지 확인
        if (op1.isPresent()){
            System.out.println(op1.get()); // get() : 상자의 데이터 읽기
        }
    }
}
