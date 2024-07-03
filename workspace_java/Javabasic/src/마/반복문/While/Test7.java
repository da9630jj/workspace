package 마.반복문.While;

public class Test7 {
    public static void main(String[] args) {
        int i =1, sum=0;
        while (i<=100){
            if (i%5==0){
                System.out.println(i);
                sum=sum+1;
            }
            i++;
        }
        System.out.println(sum);
    }
}
