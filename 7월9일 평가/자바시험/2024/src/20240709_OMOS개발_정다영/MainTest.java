package test;

public class MainTest {
    public static void main(String[] args) {
        Bank bank = new Bank();
        System.out.println(bank.clientInfo(1,"이순신"));
        System.out.println(bank.exceedBal(20000));
    }
}
