package com.green.start;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//이 클래스는 페이지(html) 이동을 담당
//@ : 어노테이션(Annotation)
@Controller //해당 클래스가 관제탑 역할을 하는 Controller 임을 인지시켜줌.
public class TestController {
    //컨트롤러 내의 리턴타입이 문자열(String)인 메소드는
    //실행하면 리턴되는 문자열 이름의 html 파일을 실행
    @GetMapping("/t1")
    public String geTest1(){
        System.out.println("Play the goTest1 method.");
        return "test1";
    }
    @GetMapping("/t2")
    public String getTest2(){
        System.out.println("Play the goTest2 method.");
        return "test2";
    }
    @GetMapping("/t3")
    public String getTest3(){
        System.out.println("Play the goTest3 method.");
        return "test3";
    }

}
