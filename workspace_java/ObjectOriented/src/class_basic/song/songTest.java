package class_basic.song;

public class songTest {
    public static void main(String[] args) {
        Song s1 = new Song();
        String[] a = {"j", "a", "v"};
        s1.setAll("java", "java", "java", 1990, a);
        s1.printSong();
    }
}
