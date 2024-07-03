package class_basic.calculator;

public class Calculator {
    private int firNum;
    private int secNum;

    //firNum, secNum 값을 변경하는 메서드
    public void setNum(int firNum, int secNum){
        this.firNum= firNum;
        this.secNum= secNum;
    }

    //더한 결과 리턴
    public int getSum(){
        return firNum + secNum;
    }
    //빼기 결과 리턴
    public int getSub(){
       return firNum - secNum;
    }
    //곱한 결과 리턴
    public int getMulti(){
        return firNum*secNum;
    }
    //나눗셈 결과 리턴
    public double getDiv(){
        return (double)firNum/secNum;
    }
}
