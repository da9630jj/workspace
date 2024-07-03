package class_basic.man;

import class_basic.car.Phone;

public class ManTest {
    public static void main(String[] args) {
        Man m1 = new Man("홍", 20, "울산");

        m1.setName("kim");
        System.out.println(m1.getName());
        m1.printMan();
    }
}
