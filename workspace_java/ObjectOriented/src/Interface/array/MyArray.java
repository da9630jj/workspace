package Interface.array;

public class MyArray implements MyArrayUtil{

    @Override
    public double getTwoArrayAvg(int[] arr1, int[] arr2) {//1,2,3    4,5,6
        int t = 0;
        int t1 =0;
        for (int i=0; i<arr1.length; i++){
            t+=arr1[i];
        }
        for (int i =0; i<arr2.length;i++){
            t1 +=arr2[i];
        }
        double t2 = (double)(t1+t)/(arr1.length+arr2.length);
        return t2;
    }

    @Override
    public boolean isEvenArray(int[] array) {
//        int t = 0;
//        for (int i = 0; i<array.length; i++){
//            t+=array[i];
//        }
//        return t%2==0? true:false;

        for (int e: array){
            if (e%2==1){
                return false;
            }
        }
        return true;
    }
}
