package 아.메서드.Test1;

public class Test16_19 {
    public static void main(String[] args) {
        test16(5);
        System.out.println();
        test17(4,9);
        System.out.println();
        test18(5,20);
        System.out.println();
        test19("java", 5);
    }

    public static void test16(int a){
        for (int i = 0; i < a+1; i++){
            System.out.print(i + " ");
        }
    }
    public static void test17(int c, int d){
        if (c>d){
            for (int i = d; i<c; i++){
                System.out.print(i +" ");
            }
        }
        else {
            for (int i = c; i<d; i++) {
                System.out.print(i + " ");
            }
        }
    }
    public static void test18(int g, int h){
        if (g>h){
            for (int i = h+1; i<g; i++){
                if (i%5==0){
                    System.out.print(i+" ");
                }
            }
        }
        else {
            for (int i = g+1; i<h; i++){
                if (i%5==0){
                    System.out.print(i + " ");
                }
            }
        }
    }
    public static void test19(String a, int b){
        for (int i = 0; i < b; i++){
            System.out.print(a);
        }
    }
}
