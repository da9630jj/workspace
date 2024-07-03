package class_basic.student;

public class Student {
    String name;
    int age;
    String address;
    String stuNum;
    String number;

    public Student(String name, int age, String address, String stuNum, String number){
        this.name = name;
        this.age = age;
        this.address = address;
        this.stuNum = stuNum;
        this.number = number;
    }

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

    public String getStuNum() {
        return stuNum;
    }

    public void setStuNum(String stuNum) {
        this.stuNum = stuNum;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void printStudent(){
        System.out.println("이름 : "+name);
        System.out.println("나이 : "+age);
        System.out.println("주소 : "+address);
        System.out.println("학번 : "+stuNum);
        System.out.println("연락처 : "+number);
    }
}
