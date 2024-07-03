package 마.반복문.For;

public class Test1_6 {
    public static void main(String[] args) {
        int sum= 0;
        for (int i=1; i <101; i++){
            if (i%3==0) {
                sum++;
            }
        }
        System.out.print(sum + " ");
    }
}
