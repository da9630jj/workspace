package basic;

// 좋은 코딩은 컴파일 오류가 많이 나는 코드다.
// 컴파일 오류 : 코드를 실행하기 전에 발생하는 오류, 빨간줄로 표시 됨
// 런타임 오류 : 코드를 실행하면 발생하는 오류, 빨간색 표시x, 찾기 어려움
public class BeforeBoxTest {
    public static void main(String[] args){
        // BeforeBox 객체 생성
        BeforeBox box1 = new BeforeBox();
        box1.setData("apple");

        BeforeBox box2 = new BeforeBox();
        box2.setData(5);

        BeforeBox box3 = new BeforeBox();
        box3.setData(new Apple());


        // box1에 저장된 데이터를 받아오기
        String data1 = (String)box1.getData();
        int data2 = (int)box2.getData();

        Apple data3 = (Apple)box3.getData();

        System.out.println("data 1 = " +data1);
        System.out.println("data 2 = " +data2);
        System.out.println("data 3 = " +data3);

        // MemberVo를 저장할 수 있는 BOX 생성
        Box<MemberVO> box4 = new Box<>();
    }
}
