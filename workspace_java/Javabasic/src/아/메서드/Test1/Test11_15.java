package 아.메서드.Test1;

import java.util.Scanner;

public class Test11_15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        test11(1);

        System.out.print("이름 입력 : ");
        String name = sc.next();
        System.out.print("나이 입력 : ");
        int ag = sc.nextInt();
        System.out.print("주소 입력 : ");
        String add = sc.next();
        test12(name, ag, add);

        System.out.print("정수 입력 : ");
        int x = sc.nextInt();
        System.out.print("정수 입력 : ");
        int y = sc.nextInt();
        test13(x,y);

        test14(5);

        test15(4,5);

    }
    public static void test11(int a){
        System.out.println(a);
    }
    public static void test12(String b, int c, String d){
        System.out.println("이름 : "+b);
        System.out.println("나이 : "+c);
        System.out.println("주소 : "+d);

    }
    public static void test13(int e, int f){
        System.out.println("두 수의 합 = "+(e+f));
    }
    public static void test14(int g){
        //삼항연산자
        //int a = 10 > 5 ? 1 : 2;
        //?전의 내용이 참이면 :앞, 거짓이면 :뒤
        System.out.println(g % 2 ==0? "짝수" : "홀수");

//        if (g%2==0){
//            System.out.println("짝수입니다.");
//        }else {
//            System.out.println("홀수입니다.");
//        }

    }
    public static void test15(int h, int i){
        if (h%2==0 && i%2==0){
            System.out.println("두 수는 짝수입니다.");
        }
        else if (h%2==0 && i%2!=0 || h%2!=0 && i %2==0){
        System.out.println("한 수만 짝수입니다.");
        }
        else {
            System.out.println("두 수는 홀수입니다.");
        }
    }
}
