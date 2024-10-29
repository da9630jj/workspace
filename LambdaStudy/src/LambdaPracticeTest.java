import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class LambdaPracticeTest {
    public static void main(String[] args) {
        //람다를 이용해서 LambdaPractice 인터페이스 안의
        //printName 메서드의 기능을 "홍길동입니다"가
        //출력될 수 있도록 구현하고, 호출하여 확인해보세요.
        //매개변수가 없으면 매개변수 자리의 소괄호 생략 불가!
        LambdaPractice p = () -> System.out.println("홍길동입니다.");
        p.printName();

        //매개변수의 자료형은 생략, 매개변수명은 원하는대로!
        //매개변수가 하나라면 매개변수 자료의 소괄호 생략 가능!
        LambdaPractice1 p1 = name -> System.out.println(name);
        p1.printName("홍길동");

        LambdaPractice2 p2 = (a, b) -> {
            System.out.println("이름 = " + a);
            System.out.println("나이 = " + b);
        };
        p2.printMyInfo("홍길동", 20);

        //리턴 타입이 있는 람다식은 {} 생략 불가!
        //중괄호를 생략하려면 'return' 키워드고 같이 생략.
        LambdaPractice3 p3 = () -> 3;
        System.out.println(p3.getData());

        LambdaPractice4 p4 = (num1, num2) -> num1 + num2;
        //p4.getResult(3, 5); // 8


        //더하기;
        LambdaPractice4 result = null;
        result = (a, b) -> a + b;
        int sum = result.getResult(5, 10);

        result = (a, b) -> a * b;
        int multi = result.getResult(5, 10);

        result = (a, b) -> a > b? a-b :b-a;
        int syb = result.getResult(10, 20);

        LambdaPractice5<Integer> p5 = (aaa,bbb) -> aaa+bbb;
        p5.getResult(10,20); //30

        LambdaPractice5<String> p6 = (a,b) -> a+b;
        p6.getResult("aa", "bb"); //aa bb

        LambdaPractice6<String, Integer> p7 = (str1, str2) -> str1.length() + str2.length();





    }
}
