import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class DefinedFunctionalTest {
    public  static  void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        DefinedFunctional.printEvenOfList(list);
        System.out.println();
    }

    //Predicate<T> -> boolean test(T t) 연습용 메서드
    public static void printOfList(List<Integer> list, Predicate<Integer> p){
        for (int e : list){
            if(p.test(e)){
                System.out.println(e);
            }
        }

        // list 에서 짝수만 삭제
        for(int i =  0; i <list.size(); i++){
            if(list.get(i) % 2 == 0){
                list.remove(i);
                i--;
            }
        }
    }

    // Supplier<T> -> T get() 연습
    Supplier<Integer> s =() ->{
        Random rand = new Random();
        return rand.nextInt(50); // 1~50까지의 수 중 랜덤 수 생성
    };


}
