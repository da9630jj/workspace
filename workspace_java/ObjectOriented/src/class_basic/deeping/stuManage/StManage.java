package class_basic.deeping.stuManage;

import class_basic.deeping.Stu;

import java.util.Scanner;

//학생관리 클래스는 학생등록, 학생정보변경(연락처), 학생정보출력의 기능이 있다.
public class StManage {
    private Scanner sc; //키보드 입력을 위해 선언
    private St[] sts;//학생 다수를 저장할 배열
    private int idx; //학생 배열의 요소

    //생성자
    public StManage(){
        sc = new Scanner(System.in);
        sts = new St[3];
        idx = 0;
    }

    //학생등록 메소드
    public void regStu(){
        if (idx >=3) {
            System.out.println("더 이상 학생을 추가할 수 없습니다.");
            System.out.println();
        }
        else {
            System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요.");
            System.out.print("이름 : ");
            String name = sc.next();
            System.out.print("나이 : ");
            int age = sc.nextInt();
            System.out.print("연락처 : ");
            String tell = sc.next();
            System.out.print("학점 : ");
            String grade = sc.next();
            System.out.println();

            //입력받은 정보로 학생 객체 생성
            St st = new St(name,age,grade,tell);
            //생성한 학생 객체를 배열에 저장
            sts[idx] = st;
            idx++;
        }
    }
    //학생정보변경(연락처) 메소드
    public void changeInfo(){
        boolean stop = true;
        System.out.println("학생의 연락처를 변경합니다.");
        while (stop){
            System.out.print("변경 학생 : ");
            String name = sc.next();
            for (int i = 0; i<idx; i++){
                if (name.equals(sts[i].getName())){
                    System.out.print("연락처 : ");
                    String tel = sc.next();
                    sts[i].setTel(tel);
                    System.out.println("변경완료되었습니다.");
                    System.out.println();
                    stop = false;
                }
                else {
                    System.out.println("해당하는 학생이 존재하지 않습니다. 다시 입력하세요.");
                }
            }
        }
    }
    //학생정보출력 메소드
    public void print(){
        boolean stop = true;
        while (stop){
            System.out.println();
            System.out.print("정보를 열람할 학생 : ");
            String name = sc.next();
            for (int i = 0; i < idx; i++){
                if (name.equals(sts[i].getName())){
                    System.out.println();
                    System.out.println("요청하신 학생의 정보입니다.");
                    sts[i].oneStu();
                    System.out.println();
                    stop = false;
                }
                else {
                    System.out.println("해당하는 학생이 존재하지 않습니다. 다시 입력하세요.");
                }

            }
        }
    }
    //모든학생정보출력 메소드
    public void printAll(){
        System.out.println();
        System.out.println("모든 학생의 정보입니다. 현재 총 학생 수는 "+idx+"명입니다.");
        System.out.println();
        for (int i = 0; i < idx; i++){
            sts[i].showInfo();
            System.out.println();
        }
    }
}
