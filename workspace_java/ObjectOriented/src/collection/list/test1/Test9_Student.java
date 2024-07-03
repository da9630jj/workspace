package collection.list.test1;

public class Test9_Student {
    private String name;
    private int korScore;
    private int engScore;
    private int totalScore;

    public int totalScore(){
        return this.totalScore = korScore+engScore;
    }

    public Test9_Student(String name, int korScore, int engScore ) {
        this.name = name;
        this.korScore = korScore;
        this.engScore = engScore;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKorScore() {
        return korScore;
    }

    public void setKorScore(int korScore) {
        this.korScore = korScore;
    }

    public int getEngScore() {
        return engScore;
    }

    public void setEngScore(int engScore) {
        this.engScore = engScore;
    }


    @Override
    public String toString() {
        return "Test9_Student{" +
                "name='" + name + '\'' +
                ", korScore=" + korScore +
                ", engScore=" + engScore +
                ", totalScore=" + totalScore +
                '}';
    }
}
