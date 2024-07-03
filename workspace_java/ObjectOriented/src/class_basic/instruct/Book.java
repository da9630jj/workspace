package class_basic.instruct;

public class Book {
    String title;
    String writer;
    int price;

    public Book(){
        this.title = "";
        this.writer = "";
        this.price = 0;
    }

    public Book(String title, String writer, int price) {
        this.title = title;
        this.writer = writer;
        this.price = price;
    }
}
