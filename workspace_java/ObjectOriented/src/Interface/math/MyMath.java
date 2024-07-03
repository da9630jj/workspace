package Interface.math;

public class MyMath implements MathUtil{

    @Override
    public int getMin(int a, int b) {
        return a<b ? a:b;
    }

    @Override
    public double getCircleArea(int radius) {
        return radius<0? 0:radius*2* Math.PI;
//        if (radius>0){
//            return radius*2* Math.PI;
//        }
//        else {
//            return 0;
//        }
    }

    @Override
    public int getMultiple(int num1, int n) {
        int e = 1;
        for (int i = 0; i <n; i ++){
            e*=num1;
        }
        return e;
    }
}
