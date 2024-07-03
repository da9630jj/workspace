package 상속;

class A{
    private int x;
    private int y;
    public A(){
        x =1;
        y =1;
    }
    public A(int x){
        this.x =x;
        y=1;
    }
    public A(int x, int y){
        this.x=x;
        this.y=y;
    }
    public void disp(){
        System.out.print("x = " + x + ", y = " + y + ", ");
    }
}
class B extends A{
    private int x;
    private int y;
    public B(){
        x = 1;
        y = 1;
    }
    public B(int x){
        super(x);
        this.x = 1;
        y = 1;
    }
    public B(int x, int y){
        super(x,y);
        this.x=1;
        this.y=1;
    }

    public void disp(){
        super.disp();
        System.out.println("x = " + x + ", y = " + y);
    }
}
public class Work {
    public static void main(String[] args) {
        B bp = new B();
        B bp1 = new B(10);
        B bp2 = new B(10,20);
//        B bp3 = new B(10,20,30);
//        B bp4 = new B(10,20,30,40);
        bp.disp();
        bp1.disp();
        bp2.disp();
//        bp3.disp();
//        bp4.disp();
    }
}
