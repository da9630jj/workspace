package class_basic.defaultConstructor.cal;

import java.util.Scanner;

public class calTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫 번째 수 : ");
        int a = sc.nextInt();
        System.out.print("두 번째 수 : ");
        int b = sc.nextInt();
        System.out.print("연산자 : ");
        String oper = sc.next();

        switch (oper){
            case "+":
                Add add = new Add();
                add.setValue(a,b);
                add.calculate();
                System.out.println(a+" + "+b+" = "+ add.calculate());
                break;
            case "-":
                Sub sub = new Sub();
                sub.setValue(a,b);
                sub.calculate();
                System.out.println(a+" - "+b+" = "+ sub.calculate());
                break;
            case "*":
                Mul mul = new Mul();
                mul.setValue(a,b);
                mul.calculate();
                System.out.println(a+" * "+b+" = "+ mul.calculate());
                break;
            case "/":
                Div div = new Div();
                div.setValue(a,b);
                div.calculate();
                System.out.println(a+" / "+b+" = "+ div.calculate());
                break;
            default:
                System.out.println("연산자를 잘못 입력하였습니다.");
        }

    }
}
