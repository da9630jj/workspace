package 마.반복문.While;

import java.util.Scanner;

public class Test8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int i = sc.nextInt();
        int sum = 0;
        while (i>=1){
            if (i%2==0){
                sum=sum+1;
            }
            i--;
        }
        System.out.println(sum);
    }
}
