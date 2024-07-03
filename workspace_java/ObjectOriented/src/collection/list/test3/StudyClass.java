package collection.list.test3;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudyClass {
    private List<Student> stuList;
    private String className;
    private String teacher;

    public List<Student> getStuList() {
        return stuList;
    }

    public void setStuList(List<Student> stuList) {
        this.stuList = stuList;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    //1) 해당 반의 모든 학생의 모든 정보를 출력하는 기능
    public void printStuAll(){
        for (Student stu :stuList){
            System.out.println(stu);
        }
    }

    public StudyClass(String className, String teacher, List<Student> stuList) {
        this.stuList = stuList;
        this.className = className;
        this.teacher = teacher;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("class : ");
        String className = sc.next();
    }

}
