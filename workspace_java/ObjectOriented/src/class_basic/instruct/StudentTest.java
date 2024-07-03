package class_basic.instruct;

public class StudentTest {
    public static void main(String[] args) {
        //학생 객체 stu1 생성
        Student stu1 = new Student();

        //stu1 이라는 학생의 이름을 출력
        System.out.println(stu1.name);

        //stu1 학생의 모든 정보 입력
        stu1.introduce();

        stu1.setName("Kim");
        stu1.setAge(30);
        stu1.introduce();
    }
}
