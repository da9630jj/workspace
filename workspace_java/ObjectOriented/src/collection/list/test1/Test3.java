package collection.list.test1;

import java.util.ArrayList;
import java.util.List;

public class Test3 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("홍길동");
        list.add("java");
        list.add("c++");
        list.add("python");
        String result = "해당 이름이 존재합니다.";
        for (int i = 0; i<list.size(); i++){
            if (list.get(i).equals("홍길동")){
                System.out.println(result);
            }
        }

    }
}
