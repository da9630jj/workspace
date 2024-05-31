package 다.연산자;

public class 연산자_3 {
    public static void main(String[] args) {
        //증감연산자
        int a = 5;
        ++a; //a의 값을 1증가
        System.out.println(a); //6
        a++; //a의 값을 1증가
        System.out.println(a); //7
        --a; //a의 값을 1감소
        System.out.println(a); //6
        a--; //a의 값을 1감소
        System.out.println(a); //5

        System.out.println();

        //증감연산자를 단독으로 사용하는지
        //다른 코드와 함께 사용하는지에 따라서 결과 달라짐.
        //다른 코드랑 함께 쓰는 경우
        // ++a : 먼저 1증가 후 다른 코드를 실행
        // a++ : 다른 코드를 전부 다 실행 후 마지막에 1 증가
        int b = 5;
        System.out.println(++b); //6
        int c = 5;
        System.out.println(c++); //5
        System.out.println(c); //6

        int num1 = 10;
        int result = 10 + num1++;
        System.out.println(result); //result = 20
        System.out.println(num1); //num1 = 11
    }
}
