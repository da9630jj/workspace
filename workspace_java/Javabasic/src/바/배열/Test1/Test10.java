package 바.배열.Test1;

import java.util.Scanner;

public class Test10 {
    public static void main(String[] args) {
        int[] arr1 = new int[5];
        Scanner sc = new Scanner(System.in);
        //배열의 크기만큼 반복해서 입력값을 배열의 각 요소에 저장
        for (int i =0; i< arr1.length; i++){
            System.out.print(i+"번째 요소 입력 : ");
            int num = sc.nextInt();
            arr1[i]=num;
        }
        System.out.println("-배열에 저장된 요소-");
        for (int i =0; i< arr1.length; i++){
            System.out.print(arr1[i]+" ");
        }
        System.out.println();
        for (int e : arr1){
            System.out.print(e + " ");
        }
    }
}
