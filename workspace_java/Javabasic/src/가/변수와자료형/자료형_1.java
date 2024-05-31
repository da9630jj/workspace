package 가.변수와자료형;
//*** 자료형이 다르면 데이터저장 불가!!!! ***//

//자바는 크게 기본 자료형과 참조자료형으로 데이터의 형태를 구분
//자바에서 기본 자료형은 총 8개.
//참조 자료형은 무한대.

//기본 자료형 (소문자로 시작)
//정수 타입 : byte, short, int, long
//실수 타입 : float, double
//논리 타입 : boolean
//문자 타입 : char

//*************************************
//문자열 타입 :String !!!!! 기본 자료형 아님!!!!!

public class 자료형_1 {
    public static void main(String[] args) {
        byte n1 = 100;
        //byte n2 - 1000; byte 범위 초과로 오류

        int n2 = 100;
        //int n4 = 10.5;

        double n3 = 10.5;

        //주의사항 : 쌍따옴표 없음.
        boolean b1 = true;
        boolean b2 = false;

        //문자열(0개 글자 이상 + 쌍따옴표로 감쌈)
        String s1 = "java";
        String s2 = "false";
        //String s3 = false;
        //String s3 = 'java';

        //문자(한 글자 + 홀따옴표로 감쌈)
        char c1 = 'j';
        System.out.println("c1 = " + c1);
        char c2 = 65;
        System.out.println("c2 = " + c2);

        char c3 = 'A';
        int c4 = c3;
        System.out.println("c3 = " + c3);
        System.out.println("c4 = " + c4);

    }
}
