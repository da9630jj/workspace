package object;

import 상속.MobilePhone;

public class TvTest {
    public static void main(String[] args) {
        Tv tv = new Tv();

        //Object 클래슨느 모든 클래스의 부모클래스다.
        //자료형이 다르면 데이터 저장 불가
        //다형성에 의해서 부모클래스로 자식클래스 객체를 저장할 수 있다.
        Object o1 = new Tv();
        Object o2 = new MobilePhone();


    }
}
