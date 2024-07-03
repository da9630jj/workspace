package 마.반복문.For;

public class Test1_7 {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i<101; i++){
            if (i%5==0) {
                System.out.print(i+" ");
                sum++;
            }
        }
        System.out.println();
        System.out.print(sum + " ");
    }
}
