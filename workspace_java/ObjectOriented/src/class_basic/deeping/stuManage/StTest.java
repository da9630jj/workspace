package class_basic.deeping.stuManage;

import java.util.Scanner;

public class StTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StManage stManage = new StManage();
        boolean isRunning = true;
        System.out.println("학생관리 프로그램을 실행합니다.");
        while (isRunning){
            System.out.print("1)학생등록 2)학생정보변경(연락처) 3)학생정보출력 4)모든학생정보출력 5)프로그램 종료 : ");
            int menu = sc.nextInt();
            switch (menu){
                case 1 :
                    stManage.regStu();
                    break;
                case 2 :
                    stManage.changeInfo();
                    break;
                case 3 :
                    stManage.print();
                    break;
                case 4 :
                    stManage.printAll();
                    break;
                case 5 :
                    System.out.println("프로그램을 종료합니다.");
                    isRunning = false;
            }
        }

    }
}
