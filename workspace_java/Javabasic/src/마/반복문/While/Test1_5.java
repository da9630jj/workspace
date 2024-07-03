package 마.반복문.While;

public class Test1_5 {
    public static void main(String[] args) {
        //1번 방법
        int i = 2;
        while (i <11) {
            System.out.print(i + " ");
            i = i +2;
        }

        //2번 방법
        int j = 2;
        while (j < 11) {
            //j가 짝수일 때만 출력
            if (j % 2 == 0) {
                System.out.print(j + " ");
            }
            j++;
        }
    }
}
