package collection.list.test1;

import javax.lang.model.element.Name;
import java.util.ArrayList;
import java.util.List;

public class Test5_8_MemberTest {
    public static void main(String[] args) {
        Test5_8_Member m1 = new Test5_8_Member("java1234", "java5678", "Java",10);
        Test5_8_Member m2 = new Test5_8_Member("python1234", "python5678", "Python",20);
        Test5_8_Member m3 = new Test5_8_Member("c++1234", "c++5678", "c++",30);
        List<Test5_8_Member> list1 = new ArrayList<>();
        list1.add(m1);
        list1.add(m2);
        list1.add(m3);
        for (int i = 0; i < 3; i++){
            System.out.println(list1.get(i));
        }

        System.out.println();

        int ageTotal = 0;
        for (int i =0; i<list1.size(); i++){
            ageTotal+=list1.get(i).age;
        }
        System.out.println(ageTotal);

        System.out.println();

        for (int i = 0; i<list1.size(); i++){
            if (list1.get(i).name.equals("Java")){
                list1.remove(i);
            }
        }
        for (int i = 0; i < list1.size(); i++){
            System.out.println(list1.get(i));
        }

    }

}
