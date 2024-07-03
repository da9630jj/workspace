package 마.반복문.While;


//1~100까지 숫자 중 3의 배수인 수의 개수를 while문을 사용하여 구하여라.
public class Test1_11 {
    public static void main(String[] args) {
        int i = 1;
        int cnt = 0;

        //1~100까지 차례로 반복해서 해당 숫자가 3의 배수인지 확인한다.
        while (i < 101){
            if (i%3==0) {
                cnt++;
            }
            i++;
        }
        System.out.println(cnt);

    }
}
