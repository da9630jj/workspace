package 아.메서드;

public class 메서드_2 {
    public static void main(String[] args) {
        System.out.println("시작");
        tellYourName();
        tellYourAge();
        System.out.println("종료");
    }

    public static void tellYourName(){
        System.out.println("제 이름은 홍길동입니다.");
    }

    public static void tellYourAge(){
        System.out.println("제 나이는 100살입니다.");
        tellYourAddr();
    }

    public static void tellYourAddr(){
        System.out.println("저는 울산에 삽니다.");
    }

}
