package 아.메서드.Test2;

import java.util.Scanner;

public class Test1_5 {
    public static void main(String[] args) {
        System.out.println(m1(10,20));

        Scanner sc = new Scanner(System.in);
        System.out.println(m2(sc.nextInt(), sc.nextInt()));

        System.out.println(m3(2,3));

        System.out.println(m4("안녕","하세요"));

        System.out.println(m5(80));
    }
    public static int m1(int a, int b){
        return a+b;
    }
    public static int m2(int a, int b){
        return a*b;
    }
    public static int m3(int a, int b){
        return a>b ? a:b;
//        if (a>b){
//            return a;
//        }
//        else {
//            return b;
//        }
    }
    public static String m4 (String a, String b){
        return a+b;
    }
    public static String m5(int a){
        if (a>=90){
            return "A";
        } else if (a>=70) {
            return "B";
        }
        else {
            return "C";
        }
    }
}
