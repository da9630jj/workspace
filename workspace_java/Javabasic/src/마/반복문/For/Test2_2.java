package 마.반복문.For;

import java.util.Scanner;

public class Test2_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫번째 정수 입력 : ");
        int num1 = sc.nextInt();
        System.out.print("두번째 정수 입력 : ");
        int num2 = sc.nextInt();

        //큰 수, 작은 수 결정
        int max, min;
        int sum = 0;
        if (num1>num2){
            max = num1;
            min = num2;
            for (int i =min+1; i>min && i<max; i++){
                sum+=i;
            }
            System.out.print(sum);
        }
        else {
            max = num2;
            min = num1;
            for (int i =0; i<max && i>min; i++){
                sum+=i;
            }
            System.out.println(sum);
        }

    }
}
