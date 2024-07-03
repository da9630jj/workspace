package com.green.DataPractice.controller;

import com.green.DataPractice.vo.ScoreVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ScoreController {
    @GetMapping("/inputName")
    public String inputName(){
        return "inputName";
    }

    @PostMapping("/inputInfo")
    public String inputInfo(ScoreVO scoreVO){
        System.out.println(scoreVO);
        return "inputInfo";
    }
    @PostMapping("/inputScore")
    public String inputScore(ScoreVO scoreVO){
        System.out.println(scoreVO);
        return "inputScore";
    }
    @PostMapping("/inputTotal")
    public String inputTotal(ScoreVO scoreVO, Model model){
        System.out.println(scoreVO);
        double avg = (scoreVO.getEngScore()+ scoreVO.getMathScore()+ scoreVO.getKorScore())/3.0;
        model.addAttribute("avg",avg);
        return "inputTotal";
    }
}
