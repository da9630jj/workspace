package 바.배열.Test2;

public class Test5 {
    public static void main(String[] args) {
        int[] arr= {5, 4, 3, 2, 1};
        int[] newArr = new int[5];
        for (int i = 0; i<newArr.length; i++){
            newArr[i] =arr[i];
            System.out.println(newArr[i]);
        }
    }
}
