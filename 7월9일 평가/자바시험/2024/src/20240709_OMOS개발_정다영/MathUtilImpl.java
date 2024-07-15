package test;

public class MathUtilImpl implements MathUtil{
    @Override
    public boolean isEven(int a, int b, int c) {
        if ((a+b+c)/2!=0&&(a+b+c)%5!=0){
            return false;
        }
        return true;
    }

    @Override
    public int getSumFromOne(int num) {
        int sum=0;
        for (int i = 1; i<=num; i++){
            sum+=i;
        }
        return sum;
    }

    @Override
    public int getArraySum(int[] arraySum) {
        int sum = 0;
        for (int i = 0; i<arraySum.length; i++){
            sum+=arraySum[i];
        }
        return sum;
    }
}
