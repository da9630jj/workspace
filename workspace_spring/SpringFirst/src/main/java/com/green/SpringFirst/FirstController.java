package com.green.SpringFirst;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FirstController {
    @GetMapping("/a")
    public String goFirst(){
        return "first";
    }
    @GetMapping("/b")
    public String goSecond(){
        return "second";
    }
    @GetMapping("/c")
    public String goThird(){
        return "third";
    }
    @GetMapping("/login")
    public String goLogin(){
        return "login";
    }
    @GetMapping("/loginResult")
    public String loginResult(){
        System.out.println("play the loginResult method");
        return "";
    }
}
