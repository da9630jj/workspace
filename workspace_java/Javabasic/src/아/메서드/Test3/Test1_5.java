package 아.메서드.Test3;

public class Test1_5 {
    public static void main(String[] args) {
        test2(3);

        test3(5);

        test4(6);

        System.out.println(test4_1());

        int[] a = {1,3,5};
        arr_5(a);
    }
    public static void test2(int a){
        for (int i = 1; i<10; i++){
            System.out.println(a+" * "+i+" = "+a*i);
        }
    }

    private static void test3(int a){
        for (int i = 1; i*a<101; i++){
            if ((a*i)%a==0){
                System.out.println(a*i);
            }
        }
    }
    private static int test4_1(){
        return  (int) (Math.random() *10 +1);
    }

    private static boolean test4(int a){
        return a % 2 == 0;
    }


    public static void arr_5(int[] arr){
        for (int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }
}
