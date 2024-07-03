package 바.배열.Test2;

public class Test11 {
    public static void main(String[] args) {
        int[] arr = new int[6];
        for (int i = 0; i < arr.length; i++){
            int r = (int) (Math.random() *45 + 1);
            arr[i] = r;
            if (arr[i]==arr[i]){
                arr[i] = r;
            }
            System.out.print(arr[i] + " ");
        }
    }
}
