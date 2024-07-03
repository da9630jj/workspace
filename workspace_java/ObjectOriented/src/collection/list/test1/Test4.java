package collection.list.test1;

import java.util.ArrayList;
import java.util.List;

public class Test4 {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        int t = 0;
        for (int i = 0; i < 11; i++){
            int r = (int) (Math.random()*100)+1;
            list.add(r);
            if (r%2==0){
                t++;
                System.out.print(list.get(i)+", ");
            }
        }
        System.out.println(t);

    }
}
