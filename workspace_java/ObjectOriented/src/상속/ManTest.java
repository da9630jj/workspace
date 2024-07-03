package 상속;

public class ManTest {
    public static void main(String[] args) {
        BusinessMan bm = new BusinessMan();
        System.out.println(bm.company);
        bm.tellComp();
        System.out.println(bm.name);
        bm.tellName();
    }
}
