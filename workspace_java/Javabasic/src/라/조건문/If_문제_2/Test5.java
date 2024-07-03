package 라.조건문.If_문제_2;

import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("첫 번째 수 : ");
        int fir = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int sec = sc.nextInt();
        System.out.print("연산자 : ");
        String cal = sc.next();
            switch (cal){
                case "+":
                    System.out.print(fir+" "+ cal +" "+sec+" = "+ (fir+sec));
                    break;
                case "-":
                      System.out.print(fir+" "+ cal +" "+sec+" = "+ (fir-sec));
                      break;
                case "*":
                     System.out.print(fir+" "+ cal +" "+sec+" = "+ (fir*sec));
                      break;
                case "/":
                    System.out.print(fir+" "+ cal +" "+sec+" = "+ (fir/ (double)sec));
                    break;
                default:
                    System.out.println("연산자를 잘못 입력하였습니다.");
            }
    }
}
