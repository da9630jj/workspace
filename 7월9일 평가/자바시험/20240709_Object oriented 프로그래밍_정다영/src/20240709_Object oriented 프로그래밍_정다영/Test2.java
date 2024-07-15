package test;

public class Test2 {
    public static void main(String[] args) {
        int[] num = new int[6];
        for (int i = 0; i<num.length; i++){
            int ranNum = (int) (Math.random()*45)+1;
            num[i] = ranNum;
            System.out.print(num[i]+", ");
        }
    }
}
