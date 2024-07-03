package class_basic.instruct;

public class BookTest {
    public static void main(String[] args) {
        Book b1 = new Book("java", "Kim", 1000);
        System.out.println(b1.title);
        Book b2 = new Book("python", "Lee", 2000);
        System.out.println(b2.title);

        Book b3 = b1;
        System.out.println(b1.title);
        System.out.println(b3.title);
        b1.title = "c++";
        System.out.println(b1.title);
        System.out.println(b3.title);


    }
}
