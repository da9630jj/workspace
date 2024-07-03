package class_basic.member;

public class Member {
    String name;
    String id;
    String password;
    int age;

    public void setName(String n){
        name = n;
    }
    public void setId(String i){
        id = i;
    }
    public void setPassword(String p){
        password = p;
    }
    public void setAge(int a){
        if (a<0){
            a = 0;
        }
        else {
            age = a;
        }
    }
    public void printMember(){
        System.out.println("이름 : " + name);
        System.out.println("아이디 : " + id);
        System.out.println("비밀번호 : " + password);
        System.out.println("나이 : " + age);
    }
    public void setAll(String n1, String i2, String p2, int a2){
        name = n1;
        id = i2;
        password = p2;
        age = a2;
    }
}
