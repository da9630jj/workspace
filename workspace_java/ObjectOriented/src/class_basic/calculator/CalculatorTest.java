package class_basic.calculator;

import java.util.Scanner;

public class CalculatorTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calculator c1 = new Calculator();
        System.out.print("첫 번째 수 : ");
        int firNum = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int secNum = sc.nextInt();
        System.out.print("연산자 : ");
        String operand = sc.next();

        //c1 객체의 firNum과 secNum을 키보드로 입력받은 값으로 변경
        c1.setNum(firNum,secNum);

        if (operand.equals("+")){
            System.out.println(firNum+" + "+secNum+" = "+c1.getSum());
        } else if (operand.equals("-")) {
            System.out.println(firNum+" - "+secNum+" = "+c1.getSub());
        }else if (operand.equals("/")) {
            System.out.println(firNum+" / "+secNum+" = "+c1.getDiv());
        }else if (operand.equals("*")) {
            System.out.println(firNum+" * "+secNum+" = "+c1.getMulti());
        }else {
            System.out.println("연산자를 잘못입력하셨습니다.");
        }


    }
}
