package 라.조건문.If_문제_3;

import java.util.Scanner;

public class Test3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("1~99 사이의 정수를 입력하시오>> ");
        int num = sc.nextInt();
        //십의 자리
        int tens = num/ 10;
        //일의 자리
        int one = num % 10;
        //박수의 횟수
        int clapCnt = 0;
        //십의 자리가 3,6,9면 clapCnt를 1 증가
        //일의 자리가 3,6,9면 clapCnt를 1 증가

        if (one==3 || one==6 ||one==9 && tens==3 || tens==6 || tens==9) {
            clapCnt++;
        }
        if (one==3 ||one==6|| one==9 || tens==3||tens==6 && tens==9) {
            clapCnt++;
        }
        //clapCnt의 값에 따라 출력
        switch (clapCnt){
            case 1:
                System.out.println("박수짝");
                break;
            case 2:
                System.out.println("박수짝짝");
        }


    }
}
