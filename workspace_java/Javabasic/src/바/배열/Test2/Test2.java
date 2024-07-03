package 바.배열.Test2;

public class Test2 {
    public static void main(String[] args) {
        int[] arr = new int[100];
        for (int i = 0; i < arr.length; i++){
            arr[i] += i+1;

            if (arr[i]%arr[i]==0 && arr[i]%1==arr[i] ){
                System.out.print(arr[i] +" ");
            }
        }
    }
}
