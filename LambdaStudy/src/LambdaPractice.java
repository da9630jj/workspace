
public interface LambdaPractice {
    void printName();
}

interface LambdaPractice1 {
    void printName(String name);
}

interface LambdaPractice2 {
    void printMyInfo(String name, int age);
}

interface LambdaPractice3 {
    int getData();
}

//계산기
interface LambdaPractice4 {
    int getResult(int a, int b); //더하기

}

// 람다식을 쓰기 위한 인터페이스
// 제네릭 활용
@FunctionalInterface
interface LambdaPractice5<T>{
    T getResult(T a, T b);
}

@FunctionalInterface
interface LambdaPractice6<T, R>{
    R getResult(T a, T b);
}




