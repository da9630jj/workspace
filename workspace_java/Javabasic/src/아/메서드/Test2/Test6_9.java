package 아.메서드.Test2;

public class Test6_9 {
    public static void main(String[] args) {
        System.out.println(test6(3));

        System.out.println(test7(6));

        System.out.println(test8(3,5,7));

        System.out.println(test9(5));
    }
    public static String test6(int a){
        //정수 -> 문자열
        String bb = String.valueOf(10);
        //문자열 -> 정수
        int aa = Integer.parseInt("10");
        return a+"";
    }

    public static double test7(double a){
        return a*a;
    }
    public static double test8(int a, int b, int c){
        return (a+b+c)/3.0;
    }
    public static int test9(int a){
        int sum = 0;
        for (int b=1; b<a; b++){
            if (b%2!=0){
                sum+=b;
            }
        }
        return sum;
    }
}
