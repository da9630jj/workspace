package com.green.DataPractice.controller;

import com.green.DataPractice.vo.JoinVO;
import com.green.DataPractice.vo.SurveyVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class JoinController {
    @GetMapping("/join")
    public String join(){
        return "join";
    }
    //커맨드 객체는 model을 사용하지 않아도 자동으로 html로 전달된다.
    //이때 넘어가는 데이터는 클래스명에서 앞글자만 소문자로 바꾼 이름으로 넘어간다.
    @PostMapping("/join_result")
    public String join_result(JoinVO joinVO, Model model){
        System.out.println(joinVO);
        model.addAttribute("joinInfo", joinVO);
        return "join_result";
    }

    @GetMapping("/survey")
    public String survey(){
        return "survey";
    }
    @PostMapping("/surveyResult")
    public String surveyResult(SurveyVO surveyVO, Model model){
        System.out.println(surveyVO);
        return "survey_result";
    }
}
