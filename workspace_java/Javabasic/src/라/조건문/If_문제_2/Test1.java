package 라.조건문.If_문제_2;

import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("국어점수 : ");
        int kor = sc.nextInt();
        System.out.println("영어점수 : ");
        int eng = sc.nextInt();
        System.out.println("수학점수 : ");
        int mat = sc.nextInt();
        int total = kor + eng + mat;

        System.out.println("국어점수 : " +kor);
        System.out.println("영어점수 : " +eng);
        System.out.println("수학점수 : " +mat);
        System.out.println("총점 : " +total);
        System.out.println("평균 : " +total/3.0);

    }
}
