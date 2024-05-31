package 다.연산자;

//534자루의 연필을 30명의 학생들에게 똑같이 나누어주었을 때
//학생당 몇개씩 가질 수 있고, 최종적으로 몇 개가 남는지 구하는 코드.
//빈 칸에 알맞는 코드를 작성하시오.

public class 초등산수문제 {
    public static void main(String[] args) {
        int pencils = 534;
        int students = 30;

        //학생 한 명당 가지는 연필 수
        int pencilsPerStudent = pencils / students;
        System.out.println(pencilsPerStudent);

        //남는 연필 수
        int pencilsLeft = pencils % students;
        System.out.println(pencilsLeft);
    }
}
