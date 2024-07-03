package collection.list.test1;

import java.util.ArrayList;
import java.util.List;

public class Test9_StudentTest {
    public static void main(String[] args) {
        Test9_Student s1 = new Test9_Student("Java", 80, 80);
        Test9_Student s2 = new Test9_Student("Python", 50, 80);
        Test9_Student s3 = new Test9_Student("Java", 10, 60);
        List<Test9_Student> list = new ArrayList<>();
        list.add(s1);
        list.add(s2);
        list.add(s3);
        for (int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }
        System.out.println();

        for (int i = 0; i<list.size(); i++){
            if (list.get(i).totalScore()>=150){
                System.out.println("총점이 150점 이상인 학생의 정보 : "+list.get(i));
            }
        }
        System.out.println();

        int average = 0;
        for (int i = 0; i<list.size(); i++){
            average=list.get(i).totalScore()/2;
            System.out.println(i+1+"번째 학생 평균 점수 : "+average+" ");
        }
        System.out.println();

        int max = 0;
        for (int i =0; i<list.size(); i++){
            if (max<list.get(i).totalScore()){
                max=list.get(i).totalScore();
                if (max==list.get(i).totalScore()){
                    System.out.println("총점이 1등인 학생의 정보 : " +list.get(i));
                }
            }
        }
    }
}
