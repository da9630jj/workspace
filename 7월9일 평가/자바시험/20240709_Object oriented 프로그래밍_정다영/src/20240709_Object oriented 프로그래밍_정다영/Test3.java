package test;

public class Test3 {
    public static void main(String[] args) {
        int[] num = {5, 11, 20, 40, 30};
        int max=num[0];
        int min=num[0];
        for (int i = 0; i<num.length; i++){
            if (max<num[i]){
                max=num[i];
            } else if (min>num[i]) {
                min=num[i];
            }
        }
        System.out.println("가장 큰 값 : "+max + ", 가장 작은 값 : "+min);
    }
}
