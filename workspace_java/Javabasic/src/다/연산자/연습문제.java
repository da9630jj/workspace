package 다.연산자;

import java.util.Scanner;

/*
    키보드로 이름, 국어점수, 영어점수, 수학점수를 입력받는다.
    단, 점수들은 정수만 입력한다고 가정한다.
    모든 정보를 입력받은 후
    입력받은 이름, 국어점수, 영어점수, 수학점수와 총점 및 평균을 출력.
*/
public class 연습문제 {
    public static void main(String[] args) {
        //변수 선언
        Scanner sc = new Scanner(System.in);
        String name;
        int kor, eng, math;
        int total;
        double avg;

        System.out.println("이름 : ");
        name = sc. next();
        System.out.println("국어점수 : ");
        kor = sc. nextInt();
        System.out.println("영어점수 : ");
        eng = sc. nextInt();
        System.out.println("수학점수 : ");
        math = sc. nextInt();

        //총점 & 평균
        total = kor + eng + math;
        avg = total/ 3.0;

        System.out.println("이름 : " +name);
        System.out.println("국어점수 : " +kor);
        System.out.println("영어점수 : " +eng);
        System.out.println("수학점수 : " +math);
        System.out.println("총점 : " +total);
        System.out.println("평균 : " +avg);
    }
}
