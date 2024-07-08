import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("첫 번째 정수 입력 :");
        int num1 = scanner.nextInt();
        System.out.print("두 번째 정수 입력 :");
        int num2 = scanner.nextInt();
        System.out.print("세 번째 정수 입력 :");
        int num3 = scanner.nextInt();

        int max =0;
        int mid = 0;
        int min =0;

        if (num1>num2 && num1>num3){
            max = num1;
            if (num2>num3){
                mid=num2;
                min=num3;
            }else {
                mid=num3;
                min=num2;
            }
        } else if (num2>num1 && num2>num3) {
            max=num2;
            if (num1>num3){
                mid = num1;
                min = num3;
            }else {
                mid = num3;
                min = num1;
            }
        }else {
            max = num3;
            if (num1>num2){
                mid = num1;
                min = num2;
            }else {
                mid=num2;
                min=num1;
            }
        }


        System.out.println("입력받은 수를 나열한 값 : "+max+", "+mid+", "+min);

    }
}
