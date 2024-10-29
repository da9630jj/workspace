import java.util.Arrays;

public class Stream_1 {
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};

        // 정수가 저장된 배열에서 짝수의 합을 출력 (기존방식)
        int sum = 0;
        for(int e : arr){
            if(e %2 ==0){
                sum+=e;
            }
        }

        // 정수가 저장된 배열에서 짝수의 합을 출력 (스트림 사용)
        // Predicate<T> -> boolean x(T t)
        // IntPredicate -> boolean x(int t)
        int result = Arrays.stream(arr) // 배열을 스트림화 시킨 것
                            .filter(num -> num % 2 ==0) // 중간 연산
                            .sum(); // 최종 연산
        System.out.println(result);

        // 스트림을 사용하여 아래 주어진 배열에서
        // 짝수이면서 5보다 큰 데이터의 합을 출력
        int[] arr2 = {2,6,10,1,7,3};

        int result2 =Arrays.stream(arr2)
                            .filter(num -> num > 5)
                            .sum();
        System.out.println(result2);


    }
}
