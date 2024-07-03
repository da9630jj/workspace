package 아.메서드;

public class 메서드_4 {
    public static void main(String[] args) {
        introduce("java", 30, "울산");

        String a = "홍길동";
        int b = 40;
        String c = "서울";

        introduce(a,b,c);
    }
    //int age = b;
    public static void introduce(String name, int age, String addr){
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("주소 : " + addr);
    }
}
