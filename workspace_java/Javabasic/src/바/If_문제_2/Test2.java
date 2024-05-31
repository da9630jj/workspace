package 바.If_문제_2;

import java.util.Scanner;

public class Test2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int max; //큰 수를 저장
        int min; //작은 수를 저장

        System.out.print("첫번째 수 : ");
        int fir = sc.nextInt();
        System.out.print("두번째 수 : ");
        int sec = sc.nextInt();
        if (fir>sec){
            max = fir;
            min = sec;
        }
        else {
            max = sec;
            min = fir;
        }
        System.out.println(max + ">" + min);
    }
}
