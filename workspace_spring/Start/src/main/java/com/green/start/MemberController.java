package com.green.start;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MemberController {
    //1. java에서 html로 데이터를 전달하기 위해서는
    //   실행되는 메소드의 매개변수에 Model 인터페이스 객체를 선언
    //2. 객체명.addAttribute 메소드를 사용하여 데이터를 전달한다.
    @GetMapping("/main")
    public String goMain(Model model){
        model.addAttribute("name", "java");
        model.addAttribute("age", 10);
        return "main";
    }
    @GetMapping("/login")
    public String goLogin(Model model){
        String[] hobbies = {"독서", "운동", "공부"};
        model.addAttribute("abc", hobbies);
        Member m1 = new Member("java", 10, 90);
        model.addAttribute("member", m1);

        return "test_login";
    }
    @GetMapping("/join")
    public String goJoin(Model model){
        List<Member> list = new ArrayList<>();
        Member m2 = new Member("Python", 22, 83);
        Member m3 = new Member("Lee", 42, 96);
        Member m4 = new Member("Kim", 52, 37);
        list.add(m2);
        list.add(m3);
        list.add(m4);
        model.addAttribute("memberList", list);
        return "test_join";
    }
}
