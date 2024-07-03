package class_basic.song;

public class Song {
    String title;
    String artist;
    String album;
    int year;
    String[] composer = new String[3];

    public void printSong(){
        System.out.println("노래제목 : "+title);
        System.out.println("가수 : "+artist);
        System.out.println("앨범 제목 : "+album);
        System.out.println("발표 연도 : "+year);
        System.out.print("작곡가 : ");
        for (int i = 0; i < composer.length; i++){
            System.out.print(composer[i] + ", ");
        }
    }
    public void setAll(String t1, String a1, String al1, int y1, String[] c1){
        title = t1;
        artist = a1;
        album = al1;
        year = y1;
        composer=c1;
    }



}
