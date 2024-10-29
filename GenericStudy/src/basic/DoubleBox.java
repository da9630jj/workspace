package basic;


// 보편적인 제네릭 타입 선언 시 사용하는 문자
// T - Type
// E - Element
// K - Key
// V - Value
// N - Number
public class DoubleBox<K,V> {
    private K left;
    private V right;

    public void aa(){
        DoubleBox<String, Integer> a = new DoubleBox<>();
    }

}
