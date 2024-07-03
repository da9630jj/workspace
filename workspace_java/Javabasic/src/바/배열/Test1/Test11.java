package 바.배열.Test1;

public class Test11 {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8};
//        int num = 0;
//        for (int i = 0; i < arr.length; i++){
//            if ( arr[i]%2==0) {
//                num+=1;
//            }
//        }
//        System.out.println(num);

        for (int e : arr){
            if (e%2==0){
                System.out.print(e + " ");
            }
        }

    }
}
