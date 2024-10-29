import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

// 정의되어 있는 함수형 인터페이스 연습용 클래스
public class DefinedFunctional {
    // Predicate 미사용 메서드
    // 1. 매개변수로 정수형 리스트가 들어오면 리스트의 요소 중 짝수만 출력
    public static void printEvenOfList(List<Integer> list){
        for (int e : list){
            if (e % 2 == 0){
                System.out.print(e + " ");
            }
        }
    }
    // 2. 매개변수로 정수형 리스트가 들어오면 리스트의 요소 중 홀수만 출력
    // 두번째 매개변수로 전달된 n개의 정수를 갖는 리스트를 생성 및 리턴
    public static List<Integer> makeIntList(Supplier<Integer> s, int n){
        List<Integer> list = new ArrayList<>();

        for(int i =0; i<n; i++){
            list.add(s.get());
        }

        return list;

    }
    // 3. 매개변수로 정수형 리스트가 들어오면 리스트의 요소 중 짝수의 합만 출력
}
