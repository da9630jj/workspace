package collection.list.test2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
    private List<Emp> empList;
    private Scanner sc;
    public EmpService(){
        sc = new Scanner(System.in);
        empList = new ArrayList<>();
        Emp e1 = new Emp(1001, "Kim", "develop", "1111-1111", 200);
        Emp e2 = new Emp(1002, "Lee", "develop", "1111-1112", 400);
        Emp e3 = new Emp(1003, "Park", "sale", "1111-1113", 220);
        Emp e4 = new Emp(1004, "So", "sale", "1111-1114", 350);
        Emp e5 = new Emp(1005, "Jo", "human_resource", "1111-1115", 300);

        empList.add(e1);
        empList.add(e2);
        empList.add(e3);
        empList.add(e4);
        empList.add(e5);
    }

    //1번 문제
    public void login(){
        boolean isRunning = true; //while문 반복 변수
        boolean isFind = false;
        while (isRunning) {
            System.out.print("사번 : ");
            int empNo = sc.nextInt();
            System.out.print("비밀번호(연락처의 마지막 4자리) : ");
            String pw = sc.next();

            //입력한 사번과 비밀번호 일치 여부 확인
            for (Emp e : empList){
                if (e.getEmpNo()==empNo && e.getPw().equals(pw)) {
                    isRunning= false; //while문 벗어남
                    System.out.println("로그인 하였습니다.");
                    System.out.println(e.getName()+"님 반갑습니다.");
                    isFind=true;
                }
            }
            if (!isFind){ // '!' : 부정연산자
                System.out.println("사번 혹은 비밀번호가 일치하지 않습니다.");
            }
        }
    }

    //2번 문제
    public void printDeptPay(){
        System.out.print("부서명 : ");
        String dept = sc.next();
        int sum = 0;
        int cnt = 0;
        System.out.println("== "+dept+" department 월급 현황 ==");
        for (int i = 0; i<empList.size(); i++){
            if (empList.get(i).getDept().equals(dept)){
                System.out.println(empList.get(i));
                sum+=empList.get(i).getPay();
                cnt++;
            }
        }
        System.out.println(dept+"부서의 월급 총액은 "+sum+"원이며, 평균 급여는 "+(sum /(double)cnt)+"원입니다.");
    }

    //3번 문제
    public void increasePay(){
        System.out.print("부서명 : ");
        String dept = sc.next();
        System.out.print("인상급여 : ");
        int incPay = sc.nextInt();
        System.out.println(dept+" department 각 사원의 급여가 각각 "+incPay+"원씩 인상됩니다.");
        System.out.println("== 월급 인상 후 "+dept+" department 월급 현황 ==");
        for (Emp e : empList){
            if (e.getDept().equals(dept)){
                e.setPay(e.getPay()+incPay);
                System.out.println(e);
            }
        }
    }
}
