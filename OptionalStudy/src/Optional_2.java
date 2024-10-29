import java.util.Optional;

public class Optional_2 {
    public static void main(String[] args){
        Optional<String> op = Optional.of("java");

        // ifPresent() 메서드의 매개변수 : Consumer<T>
        // Consumer<T> -> void x(T t)
        op.ifPresent(str -> {});
    }
}
