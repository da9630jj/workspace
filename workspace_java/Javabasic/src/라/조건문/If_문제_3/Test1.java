package 라.조건문.If_문제_3;

import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 1 : ");
        int a = sc.nextInt();
        System.out.print("정수 2 : ");
        int b = sc.nextInt();
        System.out.print("정수 3 : ");
        int c = sc.nextInt();

        if (a+b>c && a+c>b && c+b>a) {
            System.out.print("가능");
        }
        else {
            System.out.print("불가능");
        }

    }
}
