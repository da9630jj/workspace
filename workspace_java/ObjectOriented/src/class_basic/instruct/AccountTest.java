package class_basic.instruct;

public class AccountTest {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.printAccount();

        Account acc1 = new Account(10000000);
        acc1.printAccount();
    }
}
