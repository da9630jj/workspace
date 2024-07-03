package 마.반복문.While;

//1~10까지의 합
public class Test1_9 {
    public static void main(String[] args) {
        int i = 1, sum = 0;
        while (i < 11) {
            sum=sum+i; //sum += i;
            i++;
        }
        System.out.println(sum);
    }
}
