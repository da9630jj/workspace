package test;

import java.util.Scanner;

public class Test5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] num = new int[3];
        for (int i = 0; i<num.length; i++){
            int ranNum= (int)(Math.random()*9)+1;
            num[i]=ranNum;
            if (num[i]==num[i]){
                num[i]=ranNum;
            }
            System.out.print(num[i]);
        }



        int[] setNum = new int[3];

        int cnt = 0;
        boolean correct = true;
        while (true){
            int strike = 0;
            int ball = 0;
            cnt++;
            System.out.print("1~9까지의 정수 입력 : ");
            for (int i = 0; i<setNum.length; i++){
                setNum[i] = sc.nextInt();

            }
            for (int i = 0; i<num.length; i++){
                for (int s = 0; s<setNum.length; s++){
                    if (num[i]==setNum[s]){
                        if (i==s){
                            strike++;
                        }else {
                            ball++;
                        }
                    }
                }
            }

            System.out.println(strike+" 스트라이크 : "+ball+" 볼");

            if (strike!=3){
                correct=false;
            }else {
                System.out.println(cnt+"회만에 정답을 맞췄습니다.");
                break;
            }

        }


    }
}
