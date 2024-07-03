package 바.배열.Test1;

public class Test9 {
    public static void main(String[] args) {
        int[] arr1 = {1, 5, 7};
        int sum = 0;
        for (int i = 0 ; i< arr1.length; i++){
            sum += arr1[i];
        }
        System.out.println(sum);
    }
}
