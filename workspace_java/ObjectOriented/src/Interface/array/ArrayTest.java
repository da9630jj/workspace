package Interface.array;

public class ArrayTest {
    public static void main(String[] args) {
        MyArrayUtil a= new MyArray();
        MyArrayUtil b= new MyArray();
        int[] arr1= {1,2,3};
        int[] arr2= {4,5,6};
        System.out.println(a.getTwoArrayAvg(arr1, arr2));

        int[] arr3= {2,4,6};
        System.out.println(b.isEvenArray(arr3));


    }
}
