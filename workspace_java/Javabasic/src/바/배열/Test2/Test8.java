package 바.배열.Test2;

import java.util.Arrays;

public class Test8 {
    public static void main(String[] args) {
        int[] arr = new int[6];
        for (int i = 0; i < arr.length; i++){
            arr[i] = (int)(Math.random() *45 +1);
//            System.out.print(arr[i] + " ");
        }
        System.out.println(Arrays.toString(arr));


    }
}
