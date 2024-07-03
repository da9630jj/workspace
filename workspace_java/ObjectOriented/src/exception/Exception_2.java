package exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception_2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("first : ");
            int a = sc.nextInt();
            System.out.print("second : ");
            int b = sc.nextInt();
            System.out.println(a/b);
        }catch (ArithmeticException e){
            System.out.println("error");
        }catch (InputMismatchException ex){
            System.out.println("input mismatch");
        }
        System.out.println("program is finished");
    }
}
