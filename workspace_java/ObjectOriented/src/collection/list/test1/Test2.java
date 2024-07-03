package collection.list.test1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test2 {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        int total = 0;
        for (int i = 0; i<5; i++){
            list.add(sc.nextInt());
            total+=list.get(i);
        }
        System.out.println(total);
    }
}
