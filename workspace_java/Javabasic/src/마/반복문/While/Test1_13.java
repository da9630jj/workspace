package 마.반복문.While;


//1~100까지의 숫자 중 5의 배수인 수를 모두 출력하고,
//5의 배수인 수의 개수도 출력하되, while문을 사용하여라.
public class Test1_13 {
    public static void main(String[] args) {
        int i = 1, cnt=0;

        while (i<101) {
            if (i%5==0) {
                System.out.print(i + " ");
                cnt++;
            }
            i++;
        }
        System.out.println();
        System.out.println("5의 배수의 개수 = "+cnt);
    }
}
