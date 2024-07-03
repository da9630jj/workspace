package 라.조건문.If_문제_2;

import java.util.Scanner;

public class Test4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫 번째 수 : ");
        int num1 = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int num2 = sc.nextInt();
        System.out.print("연산자 : ");
        String cal = sc.next();

        if (cal.equals("+")){
            System.out.print(num1+ " + " +num2 +" = " +(num1 + num2));
        }
        else if (cal.equals("-")){
            System.out.print(num1+" - "+num2+" = " +(num1 - num2));
        }else if (cal.equals("*")){
            System.out.print(num1+" * "+num2+" = " +(num1 * num2));
        }else if (cal.equals("/")){
            System.out.print(num1+" / "+num2+" = " +(num1 / (double)num2));
        }
        else {
            System.out.print("연산자를 잘못 입력하였습니다.");
        }


    }
}
