package test;

import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("1~999까지의 수 : ");
        int num = sc.nextInt();
        int one = num % 10;
        int tens = (num % 100) / 10;
        int huns = num / 100;
        int cnt = 0;


        if (one==3 || one==6 || one==9){
            cnt++;
        }if (tens==3 || tens==6|| tens==9){
            cnt++;
        }if (huns==3|| huns==6 || huns==9){
            cnt++;
        }


        switch (cnt){
            case 0:
                System.out.println("박수 0번");
                break;
            case 1:
                System.out.println("박수 1번");
                break;
            case 2:
                System.out.println("박수 2번");
                break;
            case 3:
                System.out.println("박수 3번");
        }
    }
}
