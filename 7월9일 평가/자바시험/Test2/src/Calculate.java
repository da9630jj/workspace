public class Calculate {
    private int num1;
    private int num2;

    void setNumber(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    int getSum(){
        return num1+num2;
    }
    int getMax(){
        if (num1>num2){
            return num1;
        } else {
            return num2;
        }
    }
    double getAvg(){
        int avg=0;
        int sum=0;
        if (num1>num2){
            for (int i = num2; i<num1; i++){
                avg+=i;
                sum++;
            }
        }else {
            for (int i = num1; i<num2; i++){
                avg+=i;
                sum++;
            }
        }
        return avg/(double)sum ;
    }
}
