package class_basic.deeping;

import class_basic.defaultConstructor.cal.Sub;

//배열 + 클래스
public class StuTest {
    public static void main(String[] args) {
        //학생(Stu class) 을 5명 저장할 수 있는 배열 생성
        Stu[] stus = new Stu[5];

        //배열에 저장할 학생 객체 생성
        Stu s1 = new Stu("Kim",20, 80);
        Stu s2 = new Stu("Lee",30, 70);
        Stu s3 = new Stu("Yun",10, 60);
        Stu s4 = new Stu("Jo",30, 90);
        Stu s5 = new Stu("So",50, 40);

        //배열 0번째 요소에 학생 s1 저장
        stus[0] = s1;
        stus[1] = s2;
        stus[2] = s3;
        stus[3] = s4;
        stus[4] = s5;

        //1. 배열에 저장된 모든 학생의 이름, 나이, 점수를 출력
//        for (int i = 0; i<stus.length; i++){
//            stus[i].print();
//            System.out.println();
//        }

        //1번 문제를 for-each문으로 해결
//        for (Stu s : stus){
//            s.print();
//            System.out.println();
//        }

        //2. 배열에 저장된 학생 중 점수가 80점 이상인 학생의 이름, 나이, 점수 출력
//        for (int i = 0; i < stus.length; i++){
//            if (stus[i].getScore()>=80){
//                stus[i].print();
//                System.out.println();
//            }
//        }

        //3. 이름이 'Kim'인 학생을 찾아 해당 학생의 나이를 10으로 변경
        for (int i = 0; i < stus.length; i++){
            if (stus[i].getName().equals("Kim")){
                stus[i].setAge(10);
                stus[i].print();
            }
        }
        for (Stu s : stus){
            if (s.getName().equals("Kim")){
                s.setAge(10);
                s.print();
            }
        }


    }
}
