package collection.list.test1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        List<String> list1 = new ArrayList<>();
        list1.add("java");
        list1.add("c++");
        list1.add("python");

        for (int i =0; i<list1.size();i++){
            System.out.println(list1.get(i));
        }

    }
}
