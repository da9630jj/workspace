package 다.연산자;

public class 연산자_2 {
    public static void main(String[] args) {
        // '!' 부정 연산자 : 참 또는 거짓의 결과를 반대로 만듦
        boolean b1 = true;
        System.out.println(b1); //true
        System.out.println(!b1); //false

        b1 = !b1;
        System.out.println(b1);

        //대입 연산자
        int num = 5;

        //num변수의 값을 1 증가
        num = num + 1;
        num += 1;
        System.out.println(num); //7

        num -= 10; // num = num -10;
        num *= 3; // num = num * 3;
    }
}
