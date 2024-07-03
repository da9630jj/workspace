package 아.메서드.Test1;

public class Test1_5 {
    public static void main(String[] args) {
        test1();
        test2();
        test3(6);
        test4("문자");
        test5(1,2);
    }
    //1번 메서드
    public static void test1(){
        System.out.println("안녕하세요");
    }
    //2번 메서드
    public static void test2(){
        System.out.print("반갑습니다 ");
        System.out.println("어서오세요");
    }
    //3번 메서드
    public static void test3(int a){
        System.out.println("정수 : " +a);
    }
    //4번 메서드
    public static void test4(String b){
        System.out.println("문자 : "+b);
    }
    //5번 매서드
    public static void test5(int c, int d){
        System.out.println(c+d);
    }

}
