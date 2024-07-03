package 마.반복문.While;

import java.util.Scanner;

//임의의 정수를 입력받아 1부터 입력받은 수까지 중 짝수의 개수를 구하여라.
public class Test1_15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int num =sc.nextInt();
        int i = 1;
        int sum = 0;
        while (i<num+1){
            if (i%2==0) {
                sum++;
            }
            i++;
        }
        System.out.println(sum);

    }
}
