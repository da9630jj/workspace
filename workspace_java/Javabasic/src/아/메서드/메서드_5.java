package 아.메서드;

public class 메서드_5 {
    public static void main(String[] args) {
        int result = getSum(10,20);
        System.out.println(result);

        System.out.println(getSum(20,40));
    }

    //매개변수로 전달된 두 정수의 합을 리턴
    public static int getSum(int a, int b){
        return a + b;
    }

}
