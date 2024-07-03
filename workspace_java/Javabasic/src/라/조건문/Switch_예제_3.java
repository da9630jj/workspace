package 라.조건문;

/*
    점수를 키보드로 입력받음(정수)
    키보드로 입력 받은 점수가
    90 <= x <= 100 'A' 출력
    80 <= x <= 89 'B' 출력
    70 <= x <= 79 'c' 출력
    x < 70 'D' 출력
*/

import java.util.Scanner;

public class Switch_예제_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("점수 : ");
        int num = sc.nextInt();
        int score = num/10;
        switch (score){
            case  9 :
            case 10 :
                System.out.println("A");
                break;
            case 8 :
                System.out.println("B");
                break;
            case 7 :
                System.out.println("C");
                break;
            default:
                System.out.println("D");
        }


    }
}
