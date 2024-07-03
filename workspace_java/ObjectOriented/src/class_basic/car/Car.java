package class_basic.car;

public class Car {
    //제조사, 차이름, 차량번호, 가격, 소유주의 속성
    String brand;
    String modelName;
    String carNumber;
    int price;
    String owner;

    //자동차의 속성 하나하나를 각각 변경하는 메서드를 만드세요.
    //제조사 값을 변경하는 메서드
    public void setBrand(String b){
        brand = b;
    }
    //차 이름을 변경하는 메서드
    public void setModelName(String n){
        modelName = n;
    }
    //차량번호를 변경하는 메서드
    public void setCarNumber(String cn){
        carNumber = cn;
    }
    //가격을 변경하는 메서드
    public void setPrice(int p){
        price = p;
    }
    //소유주를 변경하는 메서드
    public void setOwner(String o){
        owner = o;
    }

    //자동차의 속성 출력
    public void printCarInto(){
        System.out.println("브랜드 : "+ brand);
        System.out.println("차량이름 : "+ modelName);
        System.out.println("차량번호 : "+ carNumber);
        System.out.println("가격 : "+ price);
        System.out.println("소유주 : "+ owner);
    }
}
