package exception;

import java.util.Scanner;


//예외처리
/*
    예외처리 문법
    try{
        예외가 발생할 수 있는 코드 작성
    }catch(Exception e){
        예외 발생 시 실행 코드
    }finally{ -> 생략가능
        예외가 발생하든, 하지않던 무조건 실행할 코드
    }
*/
public class Exception_1 {
    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            System.out.print("first : ");
            int a = sc.nextInt();
            System.out.print("second : ");
            int b = sc.nextInt();
            System.out.println(a/b);
        }catch (Exception e){ //예외에 대한 정보가 들어있는 클래스
            System.out.println("error");
            System.out.println(e.getMessage()); //예외 발생 이유를 간략히 문자열로 전달
            e.printStackTrace();
        }
//        finally {
//
//        }
        System.out.println("program is finished");




    }
}
