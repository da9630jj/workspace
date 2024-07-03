package class_basic.man;

public class Man {
    private String name;
    private int age;
    private String address;

    public Man(String name, int age, String address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    //setter : 멤버변수 각각의 값을 변경하는 메서드
    //setter 의 이름은 set변수명으로 반드시 지정
    //getter : 멤버변수 각각의 값을 return 받는 메서드
    //getter의 이름은 get변수명으로 반드시 지정

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void printMan(){
        System.out.println("이름 : "+name);
        System.out.println("나이 : "+age);
        System.out.println("주소 : "+address);
    }
}

