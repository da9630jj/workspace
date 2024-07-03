package collection.list.test3;

import java.util.ArrayList;
import java.util.List;

public class SchoolTest {
    public static void main(String[] args) {
        //자바반에 소속될 학생 3명 생성
        Student s1 = new Student("ParkJava", 10, 50);
        Student s2 = new Student("LeeJava", 10, 40);
        Student s3 = new Student("KimJava", 10, 80);
        //자바반에 저장할 학생 list
        List<Student> stuList1 = new ArrayList<>();
        stuList1.add(s1);
        stuList1.add(s2);
        stuList1.add(s3);
        //자바반
        StudyClass javaClass = new StudyClass("JavaClass","instructor_Java",stuList1);

        //캐드반에 저장될 학생 3명 생성
        Student s4 = new Student("KimCad", 15, 70);
        Student s5 = new Student("LeeCad", 15, 60);
        Student s6 = new Student("ParkCad", 15, 90);
        //캐드반 학생들이 저장될 list생성 및 해당 list에 캐드반 학생 저장
        List<Student> stuList2 = new ArrayList<>();
        stuList2.add(s4);
        stuList2.add(s5);
        stuList2.add(s6);
        //캐드반 객체 생성+캐드반에 위에서 만든 캐드반 학생 목록 저장
        StudyClass cadClass = new StudyClass("CadClass","instructor_Cad",stuList2);

        //html반에 저장될 학생 3명 생성
        List<Student> stuList3 = new ArrayList<>();
        Student s7 = new Student("HwangHtml", 18, 90);
        Student s8 = new Student("JOHtml", 18, 80);
        Student s9 = new Student("JungHtml", 18, 100);
        //html반 학생들이 저장될 list생성 및 해당 list에 캐드반 학생 저장
        stuList3 = new ArrayList<>();
        stuList3.add(s7);
        stuList3.add(s8);
        stuList3.add(s9);
        //html반 객체 생성+캐드반에 위에서 만든 html반 학생 목록 저장
        StudyClass htmlClass = new StudyClass("HtmlClass","instructor_Html",stuList3);

        //교실을 여러개 저장할 수 있는 list생성
        List<StudyClass> classList = new ArrayList<>();
        classList.add(javaClass);
        classList.add(cadClass);
        classList.add(htmlClass);

        School school = new School(classList);
        //학교 안의 모든 학생의 정보 출력
        for (int i = 0; i<school.getClassList().size(); i++){
            for (int j = 0; j<school.getClassList().get(i).getStuList().size(); j++){

            }
        }
        school.getClassList();

    }
}
