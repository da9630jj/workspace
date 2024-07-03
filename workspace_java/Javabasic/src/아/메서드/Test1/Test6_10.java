package 아.메서드.Test1;

public class Test6_10 {
    public static void main(String[] args) {
        test6(2,3,4);
        test7(7,2);
        test8("두, ", "문자열");
        test9("김형진", 33, "울산");

    }

    public static void test6(int a, int b, int c){
        System.out.println("세 수의 곱 = " +a*b*c);
    }
    public static void test7(int d, int e){
        System.out.print("두 수의 나눗셈 몫 = " +d/e);
        System.out.println(", 두 수의 나눗셈 나머지 = "+d%e);
    }
    public static void test8(String a, String b){
        System.out.println(a+" "+b);
    }
    public static void test9(String name, int age, String addr){
        System.out.println("이름은 "+name+"입니다.");
        System.out.println("나이는 "+age+"살 입니다.");
        System.out.println("주소는 : "+addr+"입니다.");
    }
}
