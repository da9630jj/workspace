package 상속;

//메소드 오버라이딩(Overriding)
//상속 관계에서 부모 클래스의 메소드를 자식클래스에서 재정의 할 수 있음.
public class Cake {
    public void eat(){
        System.out.println("케익을 먹습니다.");
    }
}
class CheeseCake extends Cake{
    public void eat(){
        super.eat(); //부모 클래스의 eat()메소드 호출
        System.out.println("치즈케익을 먹습니다.");
    }
}
