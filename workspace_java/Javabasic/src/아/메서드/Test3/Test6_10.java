package 아.메서드.Test3;

import java.util.Arrays;

public class Test6_10 {
    public static void main(String[] args) {
        int[] a = {1,6,3};
        System.out.println(test6(a));

        String[] b = {"java", "python"};
        System.out.println(test7(b));

        int[] c = {1,2,3,4,5,6,7,8,9,10};
        int [] result = test9(c);
        System.out.println(Arrays.toString(result));
    }

    public static int test6 (int[] a){
        int max = 0;
        for (int i = 0; i<a.length; i++){
            if (max < a[i]){
                max = a[i];
            }
        }
        return max;
    }
    public static String test7(String[] a){
        String result = "";
        for (int i = 0; i<a.length; i++){
            result += a[i];
        }
        return result;
    }
    public static int[] test9(int[] a){
        //매개변수로 넘어온 배열 요소 중 짝수의 개수
        int cnt = 0;
        for(int e : a){
            if (e %2==0){
                cnt++;
            }
        }
        //짝수만 저장될 배열 생성
        int[] resultarr = new int[cnt];

        int index = 0;
        for (int i = 0; i < a.length; i++){
            if (a[i]%2==0){
                resultarr[index] = a[i];
                index++;
            }
        }
        return resultarr;
    }
}
