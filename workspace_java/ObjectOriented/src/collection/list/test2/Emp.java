package collection.list.test2;

public class Emp {
    private  int empNo;
    private String name;
    private String dept;
    private String tel;
    private int pay;

    public Emp(int empNo, String name, String dept, String tel, int pay) {
        this.empNo = empNo;
        this.name = name;
        this.dept = dept;
        this.tel = tel;
        this.pay = pay;
    }

    public int getEmpNo() {
        return empNo;
    }

    //사원의 연락처 마지막 4자리값 리턴 1111-2222
    public String getPw(){
//        String num = "010-1111-2222";
//        num.substring(5); -> 111-2222
//        num.substring(1,4); -> 10-
        return tel.substring(5);
    }

    public String getName() {
        return name;
    }

    public String getDept() {
        return dept;
    }

    public int getPay() {
        return pay;
    }

    public void setPay(int pay) {
        this.pay = pay;
    }

    @Override
    public String toString() {
        return "Emp{" +
                "name='" + name + '\'' +
                ", pay=" + pay +
                '}';
    }
}
