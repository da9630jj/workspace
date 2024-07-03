package Static;

public class AccTest {
    public static void main(String[] args) {
        Account a1 = new Account("1111", 10000);
        Account a2 = new Account("1112", 30000);
        Account a3 = new Account("1113", 90000);
        Account a4 = new Account("1114", 50000);
        Account a5 = new Account("1115", 70000);

        System.out.println(a1);
        Account.rate = 10.0;
        System.out.println(a1);

    }
}
