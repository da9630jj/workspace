package 라.조건문.If_문제_2;

import java.util.Scanner;

public class Test3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("첫번째 수 : ");
        int fir = sc.nextInt();
        System.out.print("두번째 수 : ");
        int sec = sc.nextInt();
        System.out.print("세번째 수 : ");
        int thi = sc.nextInt();

        if (fir>sec && fir>thi) {
            if (sec>thi){
                System.out.println(fir +">"+ sec+">"+thi);
            }else {
                System.out.println(fir +">"+ thi+">"+sec);
            }
        } else if (sec>fir && sec>thi) {
            if (fir>thi){
                System.out.println(sec+">"+fir+">"+thi);
            }else {
                System.out.println(sec+">"+thi+">"+fir);
            }
        }else {
            if (fir>sec) {
                System.out.println(thi+">"+fir+">"+sec);
            }else {
                System.out.println(thi+">"+sec+">"+fir);
            }
        }


    }
}
