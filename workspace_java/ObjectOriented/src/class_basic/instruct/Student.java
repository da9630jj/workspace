package class_basic.instruct;

public class Student {
    String name;
    int age;
    int score;

    //매개변수로 전달된 문자열로 name 값을 변경
    public void setName (String name1){
        name = name1;
    }

    //나이를 변경하는 메서드
    public void setAge(int age1){
        if (age1<0){
            age1=0;
        }
        else {
            age = age1;
        }
    }

    public void introduce(){
        System.out.println("이름 : "+name);
        System.out.println("나이 : "+age);
        System.out.println("점수 : "+score);
    }
}
