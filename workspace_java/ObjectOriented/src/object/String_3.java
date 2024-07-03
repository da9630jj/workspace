package object;

public class String_3 {
    public static void main(String[] args) {
        //String 객체의 특이점
        //String 객체는 Immutable(값이 변하지 않는) 객체
        String addr1 = "Ulsan";
        String addr2 = addr1;
        addr1 = "Seoul";
        System.out.println(addr1);
        System.out.println(addr2);

        //값이 변하지 않는다?
        String a = "java";
        a="python";
        System.out.println(a);
    }
}
