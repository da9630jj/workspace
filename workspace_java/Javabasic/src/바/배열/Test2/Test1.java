package 바.배열.Test2;

import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int num = sc.nextInt();
        int[] arr = new int[num];
        for (int i = 0; i< arr.length; i++){
            arr[i] +=i+1;
            System.out.println(arr[i]);
        }
    }
}
