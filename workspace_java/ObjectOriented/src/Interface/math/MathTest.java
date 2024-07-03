package Interface.math;

public class MathTest {
    public static void main(String[] args) {
        MathUtil m = new MyMath();
        System.out.println(m.getMin(3,4));
        System.out.println(m.getCircleArea(3));
        System.out.println(m.getMultiple(2,3));
    }
}
