package class_basic.car;

public class CarTest {
    public static void main(String[] args) {
        Car c1 = new Car();

        //c1의 변수를 출력
        System.out.println(c1.brand);
        System.out.println(c1.price);

        //c1 변수의 값 변경
        c1.brand = "Hyundai";
        c1.price = 100;

        System.out.println(c1.brand);
        System.out.println(c1.price);

        System.out.println();

        Car c2 = new Car();
        c2.printCarInto();
        c2.setBrand("KIA");
        c2.setModelName("EV6");
        c2.setCarNumber("1111");
        c2.setPrice(100);
        c2.printCarInto();


    }
}
