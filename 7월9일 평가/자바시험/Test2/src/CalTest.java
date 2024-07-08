public class CalTest {
    public static void main(String[] args) {
        Calculate calculate = new Calculate();
        calculate.setNumber(3,1);
        System.out.println("두 정수의 합 : "+calculate.getSum());
        System.out.println("두 정수 중 큰 수 : "+calculate.getMax());
        System.out.println("두 정수 사이의 정수들의 평균 : "+calculate.getAvg());

    }
}
