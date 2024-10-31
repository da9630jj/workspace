package com.green.Await;

import org.springframework.web.bind.annotation.GetMapping;

public class Controller {

    @GetMapping("/test1")
    public String test1(){
        return ("test1");
    }
}
